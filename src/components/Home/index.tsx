'use client';
import React from "react";
import { Card } from "@material-tailwind/react";
import { airlineData, discountData } from "./data";
import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import AirlineSlider from "./AirlineSlider";
import DiscountSlider from "./DiscountSlider";
import animations from "./animations";

const HomePage: React.FC = () => {
    return (
        <>
            <style jsx>{animations}</style>
            
            {/* Mobile & Tablet: Beautiful blue sky background with enhanced design */}
            <div className="lg:hidden min-h-screen w-full relative overflow-hidden" 
                 style={{ 
                     background: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 30%, #2E86AB 70%, #1e3a8a 100%)'
                 }}>
                {/* Animated floating elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating clouds */}
                    <div className="absolute top-10 left-10 w-16 h-8 bg-white/20 rounded-full animate-float opacity-60"></div>
                    <div className="absolute top-20 right-20 w-20 h-10 bg-white/15 rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-32 left-1/3 w-12 h-6 bg-white/25 rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-32 right-10 w-24 h-12 bg-white/10 rounded-full animate-float opacity-30" style={{animationDelay: '3s'}}></div>
                    
                    {/* Animated particles */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-70"></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping opacity-80" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-50" style={{animationDelay: '2.5s'}}></div>
                    
                    {/* Gradient overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-600/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/5 via-transparent to-blue-500/15"></div>
                </div>
                
                {/* Main content with improved mobile layout */}
                <div className="relative z-10 w-full min-h-screen flex flex-col justify-between p-4 xs:p-6 sm:p-8">
                    {/* Hero Section Container - Top section */}
                    <div className="w-full pt-6 xs:pt-8 sm:pt-12">
                        <div className="relative">
                            <HeroSection />
                        </div>
                    </div>
                    
                    {/* Hero Image - Middle section with proper spacing */}
                    <div className="flex-1 flex items-center justify-center py-4 xs:py-6 sm:py-8 min-h-[280px] xs:min-h-[320px] sm:min-h-[400px]">
                        <HeroImage />
                    </div>
                    
                    {/* Mobile Online Booking Description - Bottom section */}
                    <div className="md:hidden w-full pb-6 xs:pb-8 sm:pb-12">
                        <div className="bg-white/15 backdrop-blur-md rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-white/25 shadow-xl">
                            <div className="space-y-3 xs:space-y-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                    <h3 className="text-white font-bold text-base xs:text-lg">
                                        Easy Online Booking
                                    </h3>
                                </div>
                                <p className="text-white/95 text-sm xs:text-base leading-relaxed font-medium">
                                    Book your perfect flight in minutes! Compare airlines, choose your seats, 
                                    and enjoy exclusive deals. Your journey starts here with our trusted platform.
                                </p>
                                <div className="flex items-center justify-between pt-2 xs:pt-3">
                                    <div className="flex items-center space-x-4 xs:space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                            <span className="text-white/90 text-xs xs:text-sm font-medium">Instant Booking</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            <span className="text-white/90 text-xs xs:text-sm font-medium">Best Prices</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                {/* Bottom decorative wave */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                                         radial-gradient(circle at 75% 75%, rgba(135, 206, 235, 0.4) 0%, transparent 50%),
                                         radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.2) 0%, transparent 50%)`,
                        backgroundSize: '100px 100px, 150px 150px, 200px 200px',
                        animation: 'float 20s ease-in-out infinite'
                    }}></div>
                </div>
            </div>

            {/* Desktop: Full card layout with all components */}
            <div className="hidden lg:block min-h-screen w-full h-full bg-gray-50 relative overflow-hidden p-8">
                {/* @ts-expect-error Material Tailwind props */}
                <Card className="w-full h-full shadow-2xl rounded-3xl relative overflow-hidden">
                    {/* Content Section */}
                    <div className="relative z-10 h-full flex items-center">
                        {/* Main Content Area */}
                        <div className="w-full h-full relative flex items-center justify-center p-8 overflow-hidden">
                            {/* Blue Sky Top Section */}
                            <div 
                                className="absolute top-0 left-0 w-full h-[55%]"
                                style={{ 
                                    background: 'linear-gradient(to bottom, #87CEEB 0%, #4A90E2 50%, #2E86AB 100%)',
                                    borderBottomRightRadius: '20px'
                                }}
                            />
                            
                            {/* White Bottom Section */}
                            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white" />
                            
                            {/* Content Layer */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                {/* Hero Section */}
                                <HeroSection />
                                
                                {/* Hero Image */}
                                <HeroImage />
                                
                                {/* Airline Slider */}
                                <AirlineSlider airlines={airlineData} />
                                
                                {/* Discount Slider */}
                                <DiscountSlider discounts={discountData} />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default HomePage;