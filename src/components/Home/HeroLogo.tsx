import React from "react";

interface HeroLogoProps {
  className?: string;
}

const HeroLogo: React.FC<HeroLogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative group">
        {/* Glow effect background */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-sky-400/40 to-cyan-400/30 rounded-3xl blur-xl animate-pulse opacity-70"></div>
        
        {/* Main logo container */}
        <div className="relative bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl group-hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-3">
            {/* Airplane icon */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              {/* Airplane trail effect */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-yellow-400 to-transparent opacity-60 animate-pulse"></div>
            </div>
            
            {/* GO TRAVEL text */}
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent tracking-wider">
                  GO
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent tracking-widest">
                  TRAVEL
                </span>
              </div>
              {/* Tagline */}
              <div className="text-xs text-white/80 font-medium tracking-[0.2em] mt-1">
                YOUR JOURNEY STARTS HERE
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-sky-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-300"></div>
        </div>
        
        {/* Floating elements around logo */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  );
};

export default HeroLogo;
