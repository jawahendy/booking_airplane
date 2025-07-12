'use client';
import React from "react";
import { m } from "framer-motion";
import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import { THEME } from "./constants";
import AnimatedBackground from "./AnimatedBackground";
import BookingDescription from "./BookingDescription";
import { ANIMATIONS } from "./animationConfig";

const MobileLayout: React.FC = () => {
    return (
        <m.div 
            className="lg:hidden min-h-screen w-full relative overflow-hidden"
            style={{ background: THEME.gradients.sky }}
            {...ANIMATIONS.container}
        >
            <AnimatedBackground />
            
            <m.div 
                className={`relative z-10 w-full min-h-screen flex flex-col justify-between ${THEME.spacing.mobile.padding}`}
                variants={ANIMATIONS.staggerContainer}
                initial="initial"
                animate="animate"
            >
                <m.div 
                    className={`w-full ${THEME.spacing.mobile.paddingTop}`}
                    {...ANIMATIONS.delayedSlideUp(0.2)}
                >
                    <div className="relative">
                        <HeroSection />
                    </div>
                </m.div>
                
                <m.div 
                    className={`flex-1 flex items-center justify-center ${THEME.spacing.mobile.paddingY} ${THEME.spacing.mobile.minHeight}`}
                    {...ANIMATIONS.delayedScaleIn(0.4)}
                >
                    <HeroImage />
                </m.div>
                
                <m.div
                    {...ANIMATIONS.delayedSlideUp(0.6)}
                >
                    <BookingDescription />
                </m.div>
            </m.div>
            
            <m.div 
                className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900/20 to-transparent"
                {...ANIMATIONS.delayedFadeIn(0.8)}
            />
        </m.div>
    );
};

export default MobileLayout;
