'use client';
import React from "react";
import { m } from "framer-motion";

const LoadingScreen: React.FC = () => {
    return (
        <m.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="text-center">
                {/* Airplane Loading Animation */}
                <m.div
                    className="relative mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <m.div
                        className="w-20 h-20 mx-auto mb-6 relative"
                        animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, 8, -8, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <svg 
                            width="80" 
                            height="80" 
                            viewBox="0 0 64 64" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white drop-shadow-lg"
                        >
                            <path 
                                d="M32 4L46 16H56L51 26L62 32L51 38L56 48H46L32 60L18 48H8L13 38L2 32L13 26L8 16H18L32 4Z" 
                                fill="currentColor"
                            />
                            <path 
                                d="M32 8L44 20H52L48 28L56 32L48 36L52 44H44L32 56L20 44H12L16 36L8 32L16 28L12 20H20L32 8Z" 
                                fill="url(#gradient)"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#60A5FA" />
                                    <stop offset="100%" stopColor="#06B6D4" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </m.div>
                    
                    {/* Animated Dots */}
                    <div className="flex justify-center space-x-3">
                        {[0, 1, 2].map((i) => (
                            <m.div
                                key={i}
                                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                                animate={{ 
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.4
                                }}
                            />
                        ))}
                    </div>
                </m.div>
                
                {/* Loading Text */}
                <m.div
                    className="text-white text-xl font-light tracking-wide mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Preparing your journey...
                </m.div>
                
                {/* Progress Bar */}
                <m.div
                    className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <m.div
                        className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
                    />
                </m.div>
                
                {/* Subtle Loading Indicator */}
                <m.div
                    className="text-gray-400 text-sm mt-4 tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                    Almost ready...
                </m.div>
            </div>
        </m.div>
    );
};

export default LoadingScreen;
