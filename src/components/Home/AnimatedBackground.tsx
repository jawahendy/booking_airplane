'use client';
import React from "react";
import { m } from "framer-motion";
import { THEME, BACKGROUND_PATTERN } from "./constants";
import { VARIANTS } from "./animationConfig";

interface CloudElement {
    size: string;
    position: string;
    opacityIndex: number;
    delayIndex: number;
}

interface ParticleElement {
    size: string;
    position: string;
    color: string;
    opacityIndex: number;
    delayIndex: number;
}

const AnimatedBackground: React.FC = () => {
    const clouds: CloudElement[] = [
        { size: "w-16 h-8", position: "top-10 left-10", opacityIndex: 0, delayIndex: 0 },
        { size: "w-20 h-10", position: "top-20 right-20", opacityIndex: 1, delayIndex: 1 },
        { size: "w-12 h-6", position: "top-32 left-1/3", opacityIndex: 2, delayIndex: 2 },
        { size: "w-24 h-12", position: "bottom-32 right-10", opacityIndex: 3, delayIndex: 3 },
    ];

    const particles: ParticleElement[] = [
        { size: "w-2 h-2", position: "top-1/4 left-1/4", color: "bg-yellow-300", opacityIndex: 0, delayIndex: 0 },
        { size: "w-3 h-3", position: "top-1/3 right-1/3", color: "bg-cyan-300", opacityIndex: 1, delayIndex: 4 },
        { size: "w-1.5 h-1.5", position: "bottom-1/4 left-1/2", color: "bg-blue-300", opacityIndex: 2, delayIndex: 5 },
        { size: "w-2.5 h-2.5", position: "top-1/2 right-1/4", color: "bg-white", opacityIndex: 3, delayIndex: 6 },
    ];

    return (
        <>
            <m.div 
                className="absolute inset-0 overflow-hidden"
                variants={VARIANTS.backgroundElements}
                initial="initial"
                animate="animate"
            >
                {/* Floating clouds */}
                {clouds.map((cloud, index) => (
                    <m.div
                        key={`cloud-${index}`}
                        className={`absolute ${cloud.position} ${cloud.size} bg-white/20 rounded-full ${THEME.opacity.clouds[cloud.opacityIndex]}`}
                        initial={{ opacity: 0, scale: 0, x: -100 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            x: 0,
                            y: [-5, 5, -5],
                            transition: {
                                opacity: { duration: 1, delay: index * 0.2 },
                                scale: { duration: 0.8, delay: index * 0.2 },
                                x: { duration: 1, delay: index * 0.2 },
                                y: { 
                                    duration: 4 + index, 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }
                            }
                        }}
                    />
                ))}
                
                {/* Animated particles */}
                {particles.map((particle, index) => (
                    <m.div
                        key={`particle-${index}`}
                        className={`absolute ${particle.position} ${particle.size} ${particle.color} rounded-full ${THEME.opacity.particles[particle.opacityIndex]}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [-3, 3, -3],
                            x: [-2, 2, -2],
                            transition: {
                                opacity: { duration: 0.5, delay: 0.5 + index * 0.1 },
                                scale: { duration: 0.5, delay: 0.5 + index * 0.1 },
                                y: { 
                                    duration: 3 + index * 0.5, 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: index * 0.3
                                },
                                x: { 
                                    duration: 2.5 + index * 0.5, 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }
                            }
                        }}
                    />
                ))}
                
                {/* Gradient overlays for depth */}
                <m.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-600/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                />
                <m.div 
                    className="absolute inset-0 bg-gradient-to-tl from-cyan-400/5 via-transparent to-blue-500/15"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.7 }}
                />
            </m.div>
            
            {/* Animated background pattern */}
            <m.div 
                className="absolute inset-0 opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 3, delay: 1 }}
            >
                <m.div 
                    className="absolute inset-0" 
                    style={BACKGROUND_PATTERN}
                    animate={{
                        backgroundPositionX: ["0%", "100%", "0%"],
                        backgroundPositionY: ["0%", "100%", "0%"],
                        transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }}
                />
            </m.div>
        </>
    );
};

export default AnimatedBackground;
