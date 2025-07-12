import React from "react";
import { m } from "framer-motion";
import Image from "next/image";
import HomebookImg from "../../assets/image/Homebook.png";

interface HeroImageProps {
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ className = "" }) => {
  return (
    <>
      {/* Mobile Section (< 768px) */}
      <m.div 
        className={`md:hidden absolute inset-0 flex items-center justify-center -right-[16rem] ${className}`}
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 0.9, scale: 1, rotate: 12 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <m.div 
          className="relative w-full h-full"
          animate={{
            y: [-5, 5, -5],
            rotate: [10, 14, 10],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image
            src={HomebookImg}
            alt="Homebook"
            className="w-full h-full object-contain"
            width={600}
            height={500}
          />
        </m.div>
      </m.div>

      {/* Tablet Section (768px - 1023px) */}
      <m.div 
        className={`hidden md:flex lg:hidden absolute inset-0 items-start justify-end pr-0 pt-4 -right-[20rem] top-[15rem] ${className}`}
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.95, scale: 1, rotate: 7 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <m.div 
          className="relative w-full h-full"
          animate={{
            y: [-8, 8, -8],
            rotate: [10, 14, 10],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image
            src={HomebookImg}
            alt="Homebook"
            className="w-full h-full object-contain"
            width={600}
            height={600}
          />
        </m.div>
      </m.div>

      {/* Desktop Section (≥ 1024px) */}
      <m.div 
        className={`hidden lg:block absolute top-0 -right-[26rem] -z-20 w-[100%] h-[73%] overflow-hidden ${className}`}
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <m.div 
          className="relative w-full h-full"
          animate={{
            y: [-10, 10, -10],
            rotate: [-0.5, 0.5, -0.5],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image
            src={HomebookImg}
            alt="Homebook"
            className="w-full h-full object-contain"
            width={600}
            height={600}
          />
        </m.div>
      </m.div>
    </>
  );
};

export default HeroImage;
