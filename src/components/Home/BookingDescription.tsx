'use client';
import React from "react";
import { m } from "framer-motion";
import { THEME } from "./constants";
import { VARIANTS } from "./animationConfig";

interface FeatureItemProps {
    label: string;
    color: string;
    index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, color, index }) => (
    <m.div 
        className="flex items-center space-x-1.5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
    >
        <m.div 
            className={`w-1.5 h-1.5 ${color} rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
        />
        <span className="text-white/90 text-xs xs:text-sm font-medium">{label}</span>
    </m.div>
);

const BookingDescription: React.FC = () => {
    const features = [
        { label: "Instant Booking", color: "bg-green-400" },
        { label: "Best Prices", color: "bg-blue-400" },
    ];

    return (
        <div className={`md:hidden w-full ${THEME.spacing.mobile.paddingBottom}`}>
            <m.div 
                className={`bg-white/15 backdrop-blur-md ${THEME.borderRadius.card} p-4 xs:p-6 border border-white/25 shadow-xl`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
            >
                <m.div 
                    className="space-y-3 xs:space-y-4"
                    variants={VARIANTS.staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <m.div 
                        className="flex items-center space-x-2"
                        variants={VARIANTS.staggerChild}
                    >
                        <m.div 
                            className="w-2 h-2 bg-yellow-400 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <m.h3 
                            className="text-white font-bold text-base xs:text-lg"
                            variants={VARIANTS.staggerChild}
                        >
                            Easy Online Booking
                        </m.h3>
                    </m.div>
                    
                    <m.p 
                        className="text-white/95 text-sm xs:text-base leading-relaxed font-medium"
                        variants={VARIANTS.staggerChild}
                    >
                        Book your perfect flight in minutes! Compare airlines, choose your seats, 
                        and enjoy exclusive deals. Your journey starts here with our trusted platform.
                    </m.p>
                    
                    <m.div 
                        className="flex items-center justify-between pt-2 xs:pt-3"
                        variants={VARIANTS.staggerChild}
                    >
                        <div className="flex items-center space-x-4 xs:space-x-6">
                            {features.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    label={feature.label}
                                    color={feature.color}
                                    index={index}
                                />
                            ))}
                        </div>
                    </m.div>
                </m.div>
            </m.div>
        </div>
    );
};

export default BookingDescription;
