'use client';
import React from "react";
import { m } from "framer-motion";
import { Card } from "@material-tailwind/react";
import { airlineData, discountData } from "./data";
import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import AirlineSlider from "./AirlineSlider";
import DiscountSlider from "./DiscountSlider";
import { THEME } from "./constants";
import { ANIMATIONS } from "./animationConfig";

const DesktopLayout: React.FC = () => {
    return (
        <m.div 
            className={`hidden lg:block min-h-screen w-full bg-gray-50 relative overflow-hidden ${THEME.spacing.desktop.padding}`}
            {...ANIMATIONS.container}
        >
            {/* @ts-expect-error Material Tailwind props */}
            <Card className={`w-full h-[calc(100vh-4rem)] shadow-2xl ${THEME.borderRadius.desktop} relative overflow-hidden`}>
                <m.div 
                    className="relative z-10 h-full flex items-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <m.div 
                        className={`w-full h-full relative flex items-center justify-center ${THEME.spacing.desktop.padding} overflow-hidden`}
                        variants={ANIMATIONS.staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {/* Blue Sky Top Section */}
                        <m.div 
                            className="absolute top-0 left-0 w-full h-[55%] overflow-hidden"
                            style={{
                                background: THEME.gradients.desktopSky,
                                borderBottomRightRadius: '20px'
                            }}
                            initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        >
                            {/* Animated Clouds */}
                            <m.div
                                className="absolute top-8 left-[10%] w-20 h-12 bg-white/30 rounded-full"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ 
                                    opacity: [0.3, 0.5, 0.3],
                                    x: [0, 20, 0],
                                    y: [0, -5, 0]
                                }}
                                transition={{ 
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                            <m.div
                                className="absolute top-16 right-[15%] w-16 h-10 bg-white/25 rounded-full"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ 
                                    opacity: [0.25, 0.4, 0.25],
                                    x: [0, -15, 0],
                                    y: [0, 8, 0]
                                }}
                                transition={{ 
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.0
                                }}
                            />
                            <m.div
                                className="absolute top-6 left-[35%] w-14 h-8 bg-white/20 rounded-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: [0.2, 0.35, 0.2],
                                    scale: [0.8, 1.1, 0.8],
                                    x: [0, 10, 0]
                                }}
                                transition={{ 
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }}
                            />
                            <m.div
                                className="absolute top-20 left-[60%] w-18 h-11 bg-white/35 rounded-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ 
                                    opacity: [0.35, 0.5, 0.35],
                                    y: [0, -10, 0],
                                    x: [0, 25, 0]
                                }}
                                transition={{ 
                                    duration: 9,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2.0
                                }}
                            />
                            <m.div
                                className="absolute top-12 right-[35%] w-12 h-7 bg-white/30 rounded-full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ 
                                    opacity: [0.3, 0.45, 0.3],
                                    scale: [0.9, 1.2, 0.9],
                                    y: [0, 6, 0]
                                }}
                                transition={{ 
                                    duration: 11,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2.5
                                }}
                            />
                            <m.div
                                className="absolute top-4 left-[80%] w-10 h-6 bg-white/25 rounded-full"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ 
                                    opacity: [0.25, 0.4, 0.25],
                                    x: [0, -20, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 13,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 3.0
                                }}
                            />
                        </m.div>
                        
                        {/* White Bottom Section */}
                        <m.div 
                            className="absolute bottom-0 left-0 w-full h-[30%] bg-white"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        />
                        
                        {/* Content Layer */}
                        <m.div 
                            className="relative z-10 w-full h-full flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <m.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >
                                <HeroSection />
                            </m.div>
                            
                            <m.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                <HeroImage />
                            </m.div>
                            
                            <m.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                            >
                                <AirlineSlider airlines={airlineData} />
                            </m.div>
                            
                            <m.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.6 }}
                            >
                                <DiscountSlider discounts={discountData} />
                            </m.div>
                        </m.div>
                    </m.div>
                </m.div>
            </Card>
        </m.div>
    );
};

export default DesktopLayout;
