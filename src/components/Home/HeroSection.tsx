import React from "react";
import { m } from "framer-motion";
import HeroLogo from "./HeroLogo";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <>
      {/* Mobile Section (< 768px) - Beautiful Clean Design */}
      <m.div 
        className={`md:hidden absolute top-1/2 left-0 text-white z-20 w-full px-4 xs:px-6 pt-8 xs:pt-12 ${className}`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-6 xs:space-y-8 relative">
          {/* Clean floating decorative elements - Responsive positioning */}
          <m.div 
            className="absolute -top-2 left-2 w-2 xs:w-3 h-2 xs:h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <m.div 
            className="absolute top-3 xs:top-4 left-6 xs:left-8 w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <m.div 
            className="absolute top-6 xs:top-8 left-8 xs:left-12 w-1 xs:w-1.5 h-1 xs:h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <m.div 
            className="relative text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Clean beautiful mobile title - Responsive wrapping */}
            <div className="relative mb-6 xs:mb-8">
              {/* Main title and secondary title - Responsive layout */}
              <div className="relative">
                {/* For very small screens (< 360px), stack vertically */}
                <div className="flex flex-col xxs:flex-row items-start xxs:items-center space-y-1 xxs:space-y-0 xxs:space-x-2 xs:space-x-3">
                  <m.h1 
                    className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl font-black leading-tight bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Traveler 
                  </m.h1>
                  <m.h1 
                    className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl font-black leading-tight bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Trusted
                  </m.h1>
                </div>
              </div>
              
              {/* Clean tagline - Single line text */}
              <m.div 
                className="mt-3 xs:mt-4 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className="text-xs xs:text-sm font-medium text-white/90 uppercase tracking-wider leading-none whitespace-nowrap">
                  Your Journey Starts Here
                </p>
                <m.div 
                  className="absolute -bottom-1 left-0 w-12 xs:w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </m.div>
            </div>

            {/* Clean mobile logo */}
            <m.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="relative inline-block">
                {/* Simple sparkles around logo */}
                <m.div 
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-70"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <m.div 
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
              </div>
            </m.div>
          </m.div>
        </div>
      </m.div>

      {/* Tablet Section (768px - 1023px) */}
      <m.div 
        className={`hidden md:block lg:hidden relative ml-8 text-white z-20 w-full max-w-2xl mx-auto px-6 pt-12 ${className}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="space-y-8 relative text-center">
          <div className="relative">
            {/* Tablet title - Bigger size */}
            <m.div 
              className="relative mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <m.h1 
                  className="text-6xl md:text-7xl font-black leading-none bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Traveler
                </m.h1>
                <m.h1 
                  className="text-6xl md:text-7xl font-black leading-none bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Trusted
                </m.h1>
              </div>
            </m.div>

            {/* Tablet logo - Larger */}
            <m.div 
              className="flex justify-self-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="transform scale-90 md:scale-95">
                <HeroLogo />
              </div>
            </m.div>
          </div>
        </div>
      </m.div>

      {/* Desktop Section (≥ 1024px) */}
      <m.div 
        className={`hidden lg:block absolute top-20 left-8 text-white z-20 max-w-lg ${className}`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-6 relative">
          {/* Desktop glow effect */}
          <m.div 
            className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-sky-400/10 to-cyan-400/10 rounded-3xl blur-2xl"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <m.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Desktop title */}
            <m.div 
              className="relative mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <m.h1 
                  className="text-7xl font-black leading-none bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Traveler
                </m.h1>
                <m.h1 
                  className="text-7xl font-black leading-none bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  Trusted
                </m.h1>
              </div>
            </m.div>

            {/* Desktop logo - Full size */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <HeroLogo />
            </m.div>
          </m.div>
        </div>
      </m.div>
    </>
  );
};

export default HeroSection;
