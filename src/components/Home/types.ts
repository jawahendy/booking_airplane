import { StaticImageData } from "next/image";

export interface AirlineData {
  id: number;
  name: string;
  image: StaticImageData;
  gradient: string;
  description: string;
}

export interface DiscountData {
  id: number;
  title: string;
  discount: string;
  description: string;
  gradient: string;
  bgGradient: string;
  valid: string;
}
