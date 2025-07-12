'use client';
import React from "react";
import { Card } from "@material-tailwind/react";
import { airlineData, discountData } from "./data";
import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import AirlineSlider from "./AirlineSlider";
import DiscountSlider from "./DiscountSlider";
import { THEME } from "./constants";

const DesktopLayout: React.FC = () => {
    return (
        <div className={`hidden lg:block min-h-screen w-full h-full bg-gray-50 relative overflow-hidden ${THEME.spacing.desktop.padding}`}>
            {/* @ts-expect-error Material Tailwind props */}
            <Card className={`w-full h-full shadow-2xl ${THEME.borderRadius.desktop} relative overflow-hidden`}>
                <div className="relative z-10 h-full flex items-center">
                    <div className={`w-full h-full relative flex items-center justify-center ${THEME.spacing.desktop.padding} overflow-hidden`}>
                        {/* Blue Sky Top Section */}
                        <div 
                            className="absolute top-0 left-0 w-full h-[55%]"
                            style={{
                                background: THEME.gradients.desktopSky,
                                borderBottomRightRadius: '20px'
                            }}
                        />
                        
                        {/* White Bottom Section */}
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white" />
                        
                        {/* Content Layer */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <HeroSection />
                            <HeroImage />
                            <AirlineSlider airlines={airlineData} />
                            <DiscountSlider discounts={discountData} />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DesktopLayout;
