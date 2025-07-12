'use client';
import React from "react";
import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";

import { THEME } from "./constants";
import AnimatedBackground from "./AnimatedBackground";
import BookingDescription from "./BookingDescription";

const MobileLayout: React.FC = () => {
    return (
        <div 
            className="lg:hidden min-h-screen w-full relative overflow-hidden"
            style={{ background: THEME.gradients.sky }}
        >
            <AnimatedBackground />
            
            <div className={`relative z-10 w-full min-h-screen flex flex-col justify-between ${THEME.spacing.mobile.padding}`}>
                <div className={`w-full ${THEME.spacing.mobile.paddingTop}`}>
                    <div className="relative">
                        <HeroSection />
                    </div>
                </div>
                
                <div className={`flex-1 flex items-center justify-center ${THEME.spacing.mobile.paddingY} ${THEME.spacing.mobile.minHeight}`}>
                    <HeroImage />
                </div>
                
                <BookingDescription />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>
    );
};

export default MobileLayout;
