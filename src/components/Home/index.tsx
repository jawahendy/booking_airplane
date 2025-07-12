'use client';
import React, { useState, useEffect } from "react";
import { AnimatePresence, m } from "framer-motion";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import LoadingScreen from "./LoadingScreen";
import animations from "./animations";

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasShownLoading = typeof window !== 'undefined' && sessionStorage.getItem('hasShownLoading');
        if (!hasShownLoading) {
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('hasShownLoading', 'true');
            }

            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
            (window as typeof window & { resetLoadingScreen?: () => void }).resetLoadingScreen = () => {
                sessionStorage.removeItem('hasShownLoading');
                window.location.reload();
            };
        }
    }, []);

    return (
        <div className="min-h-screen">
            <style jsx>{animations}</style>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <m.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <MobileLayout />
                        <DesktopLayout />
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HomePage;