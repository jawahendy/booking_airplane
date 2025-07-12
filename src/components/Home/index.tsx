'use client';
import { 
  Card, 
  CardBody,
} from "@material-tailwind/react";
import Image from "next/image";
import HomebookImg from "../../assets/image/Homebook.png";
import CanaairImg from "../../assets/image/product/CANAAIR.png";
import GarudaImg from "../../assets/image/product/Garuda.png";
import LionImg from "../../assets/image/product/LION.png";
import NwairImg from "../../assets/image/product/NWAIR.png";
import SgairImg from "../../assets/image/product/SGAIR.png";

const HomePage = () => {
    // Sample dummy data for airlines
    const airlineData = [
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

    // Sample dummy data for discounts
    const discountData = [
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

    return (
        <>
            <style jsx>{`
                @keyframes infiniteScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                @keyframes infiniteScrollVertical {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-100%);
                    }
                }
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                @keyframes shimmer {
                    0% {
                        background-position: -200px 0;
                    }
                    100% {
                        background-position: 200px 0;
                    }
                }
                .animate-infinite-scroll {
                    animation: infiniteScroll 25s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
                .animate-infinite-scroll-vertical {
                    animation: infiniteScrollVertical 20s linear infinite;
                }
                .animate-infinite-scroll-vertical:hover {
                    animation-play-state: paused;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .shimmer-effect {
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.4),
                        transparent
                    );
                    background-size: 200px 100%;
                    animation: shimmer 2s infinite;
                }
            `}</style>
            <div className="min-h-screen w-full h-full bg-gray-50 relative overflow-hidden p-8">
            {/* @ts-expect-error Material Tailwind props */}
            <Card 
                className="w-full h-full shadow-2xl rounded-3xl relative overflow-hidden"
            >
                {/* Content Section with Inverted Border Radius */}
                <div className="relative z-10 h-full flex items-center">
                    {/* Main Content Area with Left-side Inverted Radius */}
                    <div 
                        className="w-full h-full relative flex items-center justify-center p-8 overflow-hidden"
                    >
                        {/* Blue Sky Top Section with Rounded Bottom Right */}
                        <div 
                            className="absolute top-0 left-0 w-full h-[55%]"
                            style={{ 
                                background: 'linear-gradient(to bottom, #87CEEB 0%, #4A90E2 50%, #2E86AB 100%)',
                                borderBottomRightRadius: '20px'
                            }}
                        />
                        
                        {/* White Bottom Section */}
                        <div 
                            className="absolute bottom-0 left-0 w-full h-[30%] bg-white"
                        />
                        
                        {/* Content Layer */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            {/* Ultra Beautiful Slogan in Left Blue Sky Section */}
                            <div className="absolute top-20 left-8 text-white z-20 max-w-lg">
                                <div className="space-y-6 relative">
                                    {/* Background glow effect - Blue Sky themed */}
                                    <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-sky-400/10 to-cyan-400/10 rounded-3xl blur-2xl animate-pulse"></div>
                                    
                                    <div className="relative">
                                        {/* Main title with new colors and flex row layout */}
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

                                        {/* Beautiful Custom GO TRAVEL Logo */}
                                        <div className="relative flex items-center">
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
                                        
                                    </div>
                                </div>
                            </div>
                            
                            {/* Ultra Beautiful Homebook Image in Right Section - Contained within Blue Sky */}
                            <div className="absolute top-0 -right-[26rem] -z-20 w-[100%] h-[73%] overflow-hidden">
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
                            
                            {/* Ultra Beautiful Bottom Left Card - Sky-themed Airline Partners */}
                            <div className="absolute bottom-0 left-0 w-[60%]">
                                {/* @ts-expect-error Material Tailwind props */}
                                <Card className="w-full h-[17rem] shadow-2xl rounded-xl bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden border-2 border-sky-200/60 backdrop-blur-sm relative group">
                                    {/* Ultra Beautiful Sky-themed background patterns */}
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
                                        {/* Ultra Beautiful header with sky theme */}
                                        <div className="mb-4 relative">
                                            <div className="flex items-center justify-between">
                                                <div className="relative">
                                                    {/* Glow effect behind header */}
                                                    <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-cyan-400/20 rounded-lg blur-md animate-pulse"></div>
                                                    
                                                    <div className="relative">
                                                        <h3 className="text-xl font-black text-light-blue-400">
                                                            Trusted Airlines
                                                        </h3>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                            {/* Enhanced decorative lines */}
                                            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
                                            <div className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
                                        </div>
                                        
                                        {/* Ultra Beautiful Enhanced Sky-themed Infinite Auto Slider Container */}
                                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100/70 via-white/70 to-blue-100/70 p-1.5 shadow-inner backdrop-blur-sm border-2 border-sky-200/60 group-hover:border-sky-300/80 transition-all duration-300">
                                            {/* Enhanced floating cloud effects */}
                                            <div className="absolute top-2 left-4 w-1 h-1 bg-sky-400 rounded-full animate-ping opacity-60"></div>
                                            <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300 opacity-60"></div>
                                            <div className="absolute bottom-3 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500 opacity-60"></div>
                                            <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-700 opacity-60"></div>
                                            
                                            {/* Main slider container with enhanced sky theme */}
                                            <div className="relative bg-gradient-to-br from-white/80 to-sky-50/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/40 h-40 overflow-hidden">
                                                <div className="flex animate-infinite-scroll">
                                                    {/* Triple the data for smoother infinite scroll */}
                                                    {[...Array(3)].map((_, setIndex) => (
                                                        <div key={setIndex} className="flex space-x-4 flex-shrink-0">
                                                            {airlineData.map((airline) => (
                                                                <div 
                                                                    key={`set-${setIndex}-${airline.id}`}
                                                                    className={`relative flex-shrink-0 w-36 h-32 bg-gradient-to-br ${airline.gradient} rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-500 group/item cursor-pointer mx-2 border-2 border-sky-200/60 hover:border-sky-300/80 animate-float overflow-hidden transform hover:scale-[1.05]`}
                                                                    title={airline.description}
                                                                    style={{
                                                                        animationDelay: `${setIndex * 0.1 + airline.id * 0.2}s`
                                                                    }}
                                                                >
                                                                    {/* Enhanced sky-themed shimmer effect */}
                                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-200/50 to-transparent bg-[length:200px_100%] animate-shimmer opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                                                    
                                                                    {/* Enhanced sky glow effect */}
                                                                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-xl blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                                                    
                                                                    {/* Enhanced image container with sky theme */}
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
                                                                    
                                                                    {/* Enhanced decorative elements */}
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
                            
                            {/* Bottom Right Card - 40% width */}
                            <div className="absolute bottom-0 right-0 w-[39%]">
                                {/* @ts-expect-error Material Tailwind props */}
                                <Card className="w-full h-[17rem] shadow-2xl rounded-xl bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden border-2 border-sky-200/60 backdrop-blur-sm relative group">
                                    {/* Ultra Beautiful Sky-themed background patterns */}
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
                                        {/* Ultra Beautiful header */}
                                        <div className="mb-4 relative">
                                            <div className="flex items-center justify-between">
                                                <div className="relative">
                                                    {/* Glow effect behind header */}
                                                    <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-cyan-400/20 rounded-lg blur-md animate-pulse"></div>
                                                    
                                                    <div className="relative">
                                                        <h3 className="text-xl font-black text-light-blue-400">
                                                            Special Discounts
                                                        </h3>
                                                    </div>
                                                </div>
                                                
                                                {/* Enhanced discount icon */}
                                                <div className="relative">
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-sm animate-pulse"></div>
                                                    <div className="relative w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                                                        <span className="text-white text-sm font-black">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Enhanced decorative line */}
                                            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
                                            <div className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
                                        </div>
                                        
                                        {/* Ultra Beautiful Enhanced Auto-Scroll Discount List */}
                                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100/70 via-white/70 to-blue-100/70 p-1.5 shadow-inner backdrop-blur-sm border-2 border-sky-200/60 group-hover:border-sky-300/80 transition-all duration-300">
                                            {/* Floating sparkle effects */}
                                            <div className="absolute top-2 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                                            <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-300 opacity-60"></div>
                                            <div className="absolute bottom-3 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500 opacity-60"></div>
                                            <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700 opacity-60"></div>
                                            
                                            {/* Main scroll container with enhanced styling */}
                                            <div className="relative bg-gradient-to-br from-white/80 to-sky-50/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/40 h-40 overflow-hidden">
                                                <div className="flex flex-col animate-infinite-scroll-vertical">
                                                    {/* Triple the data for smoother infinite scroll */}
                                                    {[...Array(3)].map((_, setIndex) => (
                                                        <div key={setIndex} className="flex flex-col space-y-3 flex-shrink-0 py-1">
                                                            {discountData.map((discount) => (
                                                                <div 
                                                                    key={`set-${setIndex}-${discount.id}`}
                                                                    className={`relative flex-shrink-0 w-full h-14 bg-gradient-to-br ${discount.bgGradient} rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-500 group/item cursor-pointer border-2 border-white/70 hover:border-sky-300/80 overflow-hidden transform hover:scale-[1.02]`}
                                                                    style={{
                                                                        animationDelay: `${setIndex * 0.1 + discount.id * 0.15}s`
                                                                    }}
                                                                >
                                                                    {/* Enhanced shimmer effect */}
                                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200px_100%] animate-shimmer opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                                                    
                                                                    {/* Glow effect on hover */}
                                                                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-xl blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                                                    
                                                                    {/* Content with enhanced styling */}
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
                                                                    
                                                                    {/* Enhanced decorative elements */}
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
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        </>
    );
};

export default HomePage;