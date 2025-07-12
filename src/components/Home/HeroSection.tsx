import React from "react";
import HeroLogo from "./HeroLogo";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <>
      {/* Mobile Section (< 768px) - Beautiful Clean Design */}
      <div className={`md:hidden absolute top-1/2 left-0 text-white z-20 w-full px-4 xs:px-6 pt-8 xs:pt-12 ${className}`}>
        <div className="space-y-6 xs:space-y-8 relative">
          {/* Clean floating decorative elements - Responsive positioning */}
          <div className="absolute -top-2 left-2 w-2 xs:w-3 h-2 xs:h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-3 xs:top-4 left-6 xs:left-8 w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-6 xs:top-8 left-8 xs:left-12 w-1 xs:w-1.5 h-1 xs:h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
          
          <div className="relative text-left">
            {/* Clean beautiful mobile title - Responsive wrapping */}
            <div className="relative mb-6 xs:mb-8">
              {/* Main title and secondary title - Responsive layout */}
              <div className="relative">
                {/* For very small screens (< 360px), stack vertically */}
                <div className="flex flex-col xxs:flex-row items-start xxs:items-center space-y-1 xxs:space-y-0 xxs:space-x-2 xs:space-x-3">
                  <h1 className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl font-black leading-tight bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300">
                    Traveler 
                  </h1>
                  <h1 className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl font-black leading-tight bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all duration-300">
                    Trusted
                  </h1>
                </div>
              </div>
              
              {/* Clean tagline - Single line text */}
              <div className="mt-3 xs:mt-4 relative">
                <p className="text-xs xs:text-sm font-medium text-white/90 uppercase tracking-wider leading-none whitespace-nowrap">
                  Your Journey Starts Here
                </p>
                <div className="absolute -bottom-1 left-0 w-12 xs:w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              </div>
            </div>

            {/* Clean mobile logo */}
            <div className="relative">
              <div className="relative inline-block">
                
                {/* Simple sparkles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Section (768px - 1023px) */}
      <div className={`hidden md:block lg:hidden relative ml-8 text-white z-20 w-full max-w-2xl mx-auto px-6 pt-12 ${className}`}>
        <div className="space-y-8 relative text-center">
          <div className="relative">
            {/* Tablet title - Bigger size */}
            <div className="relative mb-6">
              <div className="flex items-center justify-center space-x-4">
                <h1 className="text-6xl md:text-7xl font-black leading-none bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-xl">
                  Traveler
                </h1>
                <h1 className="text-6xl md:text-7xl font-black leading-none bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-xl">
                  Trusted
                </h1>
              </div>
            </div>

            {/* Tablet logo - Larger */}
            <div className="flex justify-self-start">
              <div className="transform scale-90 md:scale-95">
                <HeroLogo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Section (≥ 1024px) */}
      <div className={`hidden lg:block absolute top-20 left-8 text-white z-20 max-w-lg ${className}`}>
        <div className="space-y-6 relative">
          {/* Desktop glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-sky-400/10 to-cyan-400/10 rounded-3xl blur-2xl animate-pulse"></div>
          
          <div className="relative">
            {/* Desktop title */}
            <div className="relative mb-2">
              <div className="flex items-center space-x-4">
                <h1 className="text-7xl font-black leading-none bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Traveler
                </h1>
                <h1 className="text-7xl font-black leading-none bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
                  Trusted
                </h1>
              </div>
            </div>

            {/* Desktop logo - Full size */}
            <HeroLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
