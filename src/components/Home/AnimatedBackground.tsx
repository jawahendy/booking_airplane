'use client';
import React from "react";
import { THEME, BACKGROUND_PATTERN } from "./constants";

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
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating clouds */}
                {clouds.map((cloud, index) => (
                    <div
                        key={`cloud-${index}`}
                        className={`absolute ${cloud.position} ${cloud.size} bg-white/20 rounded-full animate-float ${THEME.opacity.clouds[cloud.opacityIndex]}`}
                        style={{ animationDelay: THEME.animations.delays[cloud.delayIndex] }}
                    />
                ))}
                
                {/* Animated particles */}
                {particles.map((particle, index) => (
                    <div
                        key={`particle-${index}`}
                        className={`absolute ${particle.position} ${particle.size} ${particle.color} rounded-full animate-ping ${THEME.opacity.particles[particle.opacityIndex]}`}
                        style={{ animationDelay: THEME.animations.delays[particle.delayIndex] }}
                    />
                ))}
                
                {/* Gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-600/20" />
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/5 via-transparent to-blue-500/15" />
            </div>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={BACKGROUND_PATTERN} />
            </div>
        </>
    );
};

export default AnimatedBackground;
