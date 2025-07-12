import CanaairImg from "../../assets/image/product/CANAAIR.png";
import GarudaImg from "../../assets/image/product/Garuda.png";
import LionImg from "../../assets/image/product/LION.png";
import NwairImg from "../../assets/image/product/NWAIR.png";
import SgairImg from "../../assets/image/product/SGAIR.png";
import { AirlineData, DiscountData } from "./types";

export const airlineData: AirlineData[] = [
  {
    id: 1,
    name: "Garuda Indonesia",
    image: GarudaImg,
    gradient: "from-blue-50 to-sky-50",
    description: "Premium Indonesian Airline"
  },
  {
    id: 2,
    name: "Lion Air",
    image: LionImg,
    gradient: "from-red-50 to-orange-50",
    description: "Affordable Travel Solutions"
  },
  {
    id: 3,
    name: "Cana Air",
    image: CanaairImg,
    gradient: "from-green-50 to-teal-50",
    description: "Eco-Friendly Aviation"
  },
  {
    id: 4,
    name: "NW Air",
    image: NwairImg,
    gradient: "from-purple-50 to-pink-50",
    description: "Northwest Regional Flights"
  },
  {
    id: 5,
    name: "SG Air",
    image: SgairImg,
    gradient: "from-yellow-50 to-orange-50",
    description: "Singapore Premium Service"
  }
];

export const discountData: DiscountData[] = [
  {
    id: 1,
    title: "Flash Sale",
    discount: "50% OFF",
    description: "Weekend Special",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
    valid: "Valid until today"
  },
  {
    id: 2,
    title: "Early Bird",
    discount: "35% OFF",
    description: "Book 30 days ahead",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    valid: "Limited time"
  },
  {
    id: 3,
    title: "Group Booking",
    discount: "40% OFF",
    description: "4+ passengers",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    valid: "Family deals"
  },
  {
    id: 4,
    title: "Student Fare",
    discount: "25% OFF",
    description: "Student ID required",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50",
    valid: "Year-round"
  },
  {
    id: 5,
    title: "Last Minute",
    discount: "60% OFF",
    description: "Depart within 24hrs",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    valid: "Today only"
  },
  {
    id: 6,
    title: "Senior Citizen",
    discount: "30% OFF",
    description: "60+ years",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    valid: "Always available"
  }
];
