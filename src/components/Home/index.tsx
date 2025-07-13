'use client';
import React from "react";
import { AnimatePresence, m } from "framer-motion";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import animations from "./animations";

const HomePage: React.FC = () => {

    return (
        <div className="min-h-screen">
            <style jsx>{animations}</style>
            <AnimatePresence mode="wait">
                <m.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <MobileLayout />
                    <DesktopLayout />
                </m.div>
            </AnimatePresence>
        </div>
    );
};

export default HomePage;