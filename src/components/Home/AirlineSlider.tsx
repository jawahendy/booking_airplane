import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";
import { AirlineData } from "./types";

interface AirlineSliderProps {
  airlines: AirlineData[];
  className?: string;
}

const AirlineSlider: React.FC<AirlineSliderProps> = ({ airlines, className = "" }) => {
  return (
    <div className={`absolute bottom-0 left-0 w-[60%] ${className}`}>
      {/* @ts-expect-error Material Tailwind props */}
      <Card className="w-full h-[17rem] shadow-2xl rounded-xl bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden border-2 border-sky-200/60 backdrop-blur-sm relative group">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-white/60 to-blue-100/40"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(135, 206, 235, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(74, 144, 226, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 60%, rgba(46, 134, 171, 0.2) 0%, transparent 50%)`
        }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-3 left-3 w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-6 left-8 w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-bounce delay-500 opacity-60"></div>
        
        {/* @ts-expect-error Material Tailwind props */}
        <CardBody className="p-6 relative z-10">
          {/* Header */}
          <div className="mb-4 relative">
            <div className="flex items-center justify-between">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-cyan-400/20 rounded-lg blur-md animate-pulse"></div>
                <div className="relative">
                  <h3 className="text-xl font-black text-blue-800">
                    Trusted Airlines
                  </h3>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
            <div className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
          </div>
          
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100/70 via-white/70 to-blue-100/70 p-1.5 shadow-inner backdrop-blur-sm border-2 border-sky-200/60 group-hover:border-sky-300/80 transition-all duration-300">
            {/* Floating cloud effects */}
            <div className="absolute top-2 left-4 w-1 h-1 bg-sky-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300 opacity-60"></div>
            <div className="absolute bottom-3 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500 opacity-60"></div>
            <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-700 opacity-60"></div>
            
            {/* Main slider */}
            <div className="relative bg-gradient-to-br from-white/80 to-sky-50/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/40 h-40 overflow-hidden">
              <div className="flex animate-infinite-scroll">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-4 flex-shrink-0">
                    {airlines.map((airline) => (
                      <div 
                        key={`set-${setIndex}-${airline.id}`}
                        className={`relative flex-shrink-0 w-36 h-32 bg-gradient-to-br ${airline.gradient} rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-500 group/item cursor-pointer mx-2 border-2 border-sky-200/60 hover:border-sky-300/80 animate-float overflow-hidden transform hover:scale-[1.05]`}
                        title={airline.description}
                        style={{
                          animationDelay: `${setIndex * 0.1 + airline.id * 0.2}s`
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-200/50 to-transparent bg-[length:200px_100%] animate-shimmer opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-xl blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Image container */}
                        <div className="relative w-full h-full flex items-center justify-center z-10">
                          <div className="w-full h-full bg-gradient-to-br from-white/50 to-sky-50/50 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                            <Image
                              src={airline.image}
                              alt={airline.name}
                              className="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-500 filter group-hover/item:brightness-110 group-hover/item:contrast-110"
                              width={140}
                              height={120}
                            />
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full animate-ping opacity-70"></div>
                        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-ping delay-300 opacity-70"></div>
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 left-0 w-0 h-0 border-r-[12px] border-r-transparent border-t-[12px] border-t-sky-400/40 rounded-tl-xl"></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AirlineSlider;
