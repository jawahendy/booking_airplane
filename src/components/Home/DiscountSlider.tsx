import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { DiscountData } from "./types";

interface DiscountSliderProps {
  discounts: DiscountData[];
  className?: string;
}

const DiscountSlider: React.FC<DiscountSliderProps> = ({ discounts, className = "" }) => {
  return (
    <div className={`absolute bottom-0 right-0 w-[39%] ${className}`}>
      {/* @ts-expect-error Material Tailwind props */}
      <Card className="w-full h-[17rem] shadow-2xl rounded-xl bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden border-2 border-sky-200/60 backdrop-blur-sm relative group">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-white/60 to-blue-100/40"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 60% 40%, rgba(125, 211, 252, 0.2) 0%, transparent 50%)`
        }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-6 right-8 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce delay-500 opacity-60"></div>
        
        {/* @ts-expect-error Material Tailwind props */}
        <CardBody className="p-6 relative z-10">
          {/* Header */}
          <div className="mb-4 relative">
            <div className="flex items-center justify-between">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-cyan-400/20 rounded-lg blur-md animate-pulse"></div>
                <div className="relative">
                  <h3 className="text-xl font-black text-light-blue-400">
                    Special Discounts
                  </h3>
                </div>
              </div>
              
              {/* Discount icon */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-sm animate-pulse"></div>
                <div className="relative w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <span className="text-white text-sm font-black">%</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
            <div className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
          </div>
          
          {/* Discount List Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100/70 via-white/70 to-blue-100/70 p-1.5 shadow-inner backdrop-blur-sm border-2 border-sky-200/60 group-hover:border-sky-300/80 transition-all duration-300">
            {/* Floating sparkle effects */}
            <div className="absolute top-2 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-300 opacity-60"></div>
            <div className="absolute bottom-3 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500 opacity-60"></div>
            <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700 opacity-60"></div>
            
            {/* Main scroll container */}
            <div className="relative bg-gradient-to-br from-white/80 to-sky-50/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/40 h-40 overflow-hidden">
              <div className="flex flex-col animate-infinite-scroll-vertical">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex flex-col space-y-3 flex-shrink-0 py-1">
                    {discounts.map((discount) => (
                      <div 
                        key={`set-${setIndex}-${discount.id}`}
                        className={`relative flex-shrink-0 w-full h-14 bg-gradient-to-br ${discount.bgGradient} rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-500 group/item cursor-pointer border-2 border-white/70 hover:border-sky-300/80 overflow-hidden transform hover:scale-[1.02]`}
                        style={{
                          animationDelay: `${setIndex * 0.1 + discount.id * 0.15}s`
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200px_100%] animate-shimmer opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-xl blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-between h-full">
                          <div className="flex-1">
                            <h4 className="text-sm font-black text-gray-800 leading-tight group-hover/item:text-gray-900 transition-colors duration-300">
                              {discount.title}
                            </h4>
                            <p className="text-xs font-medium text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300">
                              {discount.description}
                            </p>
                          </div>
                          <div className="text-right ml-2">
                            <div className={`text-lg font-black bg-gradient-to-r ${discount.gradient} bg-clip-text text-transparent drop-shadow-sm group-hover/item:scale-110 transition-transform duration-300`}>
                              {discount.discount}
                            </div>
                            <div className="text-xs font-medium text-gray-500 mt-0.5 group-hover/item:text-gray-600 transition-colors duration-300">
                              {discount.valid}
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-70"></div>
                        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-ping delay-300 opacity-70"></div>
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-yellow-400/40 rounded-tr-xl"></div>
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

export default DiscountSlider;
