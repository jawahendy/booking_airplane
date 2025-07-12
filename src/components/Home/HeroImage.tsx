import React from "react";
import Image from "next/image";
import HomebookImg from "../../assets/image/Homebook.png";

interface HeroImageProps {
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ className = "" }) => {
  return (
    <>
      {/* Mobile Section (< 768px) */}
      <div className={`md:hidden absolute inset-0 flex items-center justify-center  -right-[16rem] ${className}`}>
        <div className="relative w-full h-full rotate-12">
          <Image
            src={HomebookImg}
            alt="Homebook"
            className="w-full h-full object-contain opacity-90"
            width={600}
            height={500}
          />
        </div>
      </div>

      {/* Tablet Section (768px - 1023px) */}
      <div className={`hidden md:flex lg:hidden absolute inset-0 items-start justify-end pr-0 pt-4  -right-[20rem] top-[15rem] ${className}`}>
        <div className="relative w-full h-full rotate-12">
          <Image
            src={HomebookImg}
            alt="Homebook"
            className="w-full h-full object-contain opacity-95"
            width={600}
            height={600}
          />
        </div>
      </div>

      {/* Desktop Section (≥ 1024px) */}
      <div className={`hidden lg:block absolute top-0 -right-[26rem] -z-20 w-[100%] h-[73%] overflow-hidden ${className}`}>
        <div className="relative w-full h-full">
          <Image
            src={HomebookImg}
            alt="Homebook"
            className="w-full h-full object-contain"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default HeroImage;
