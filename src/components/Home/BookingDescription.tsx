'use client';
import React from "react";
import { THEME } from "./constants";

interface FeatureItemProps {
    label: string;
    color: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, color }) => (
    <div className="flex items-center space-x-1.5">
        <div className={`w-1.5 h-1.5 ${color} rounded-full`} />
        <span className="text-white/90 text-xs xs:text-sm font-medium">{label}</span>
    </div>
);

const BookingDescription: React.FC = () => {
    const features = [
        { label: "Instant Booking", color: "bg-green-400" },
        { label: "Best Prices", color: "bg-blue-400" },
    ];

    return (
        <div className={`md:hidden w-full ${THEME.spacing.mobile.paddingBottom}`}>
            <div className={`bg-white/15 backdrop-blur-md ${THEME.borderRadius.card} p-4 xs:p-6 border border-white/25 shadow-xl`}>
                <div className="space-y-3 xs:space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
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
                            {features.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    label={feature.label}
                                    color={feature.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDescription;
