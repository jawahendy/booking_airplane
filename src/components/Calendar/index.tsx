'use client';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, PlaneTakeoffIcon, ClockIcon, MapPinIcon} from 'lucide-react';

interface FlightCardProps {
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  duration: string;
  available: boolean;
  onBook: () => void;
}

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  seatClass: string;
  seatNumber: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  flight: FlightCardProps | null;
  selectedDate: Date;
}

// Flight data generation
const airlines = [
  { name: "Garuda Indonesia", code: "GA", priceMultiplier: 1.2 },
  { name: "Lion Air", code: "JT", priceMultiplier: 1.0 },
  { name: "Singapore Airlines", code: "SQ", priceMultiplier: 1.5 },
  { name: "AirAsia", code: "QZ", priceMultiplier: 0.8 },
  { name: "Citilink", code: "QG", priceMultiplier: 0.9 },
  { name: "Batik Air", code: "ID", priceMultiplier: 1.1 },
  { name: "Sriwijaya Air", code: "SJ", priceMultiplier: 0.85 },
  { name: "Nam Air", code: "IN", priceMultiplier: 0.95 }
];

const routes = [
  { departure: "CGK Jakarta", arrival: "DPS Bali", baseDuration: "2h 15m", basePrice: 1200000 },
  { departure: "CGK Jakarta", arrival: "JOG Yogyakarta", baseDuration: "1h 30m", basePrice: 800000 },
  { departure: "CGK Jakarta", arrival: "MLG Malang", baseDuration: "1h 45m", basePrice: 900000 },
  { departure: "CGK Jakarta", arrival: "SBY Surabaya", baseDuration: "1h 25m", basePrice: 750000 },
  { departure: "CGK Jakarta", arrival: "MDN Medan", baseDuration: "2h 30m", basePrice: 1100000 },
  { departure: "CGK Jakarta", arrival: "PLM Palembang", baseDuration: "1h 20m", basePrice: 650000 },
  { departure: "CGK Jakarta", arrival: "BDO Bandung", baseDuration: "45m", basePrice: 500000 },
  { departure: "DPS Bali", arrival: "CGK Jakarta", baseDuration: "2h 15m", basePrice: 1200000 },
  { departure: "DPS Bali", arrival: "SBY Surabaya", baseDuration: "1h 10m", basePrice: 600000 },
  { departure: "SBY Surabaya", arrival: "CGK Jakarta", baseDuration: "1h 25m", basePrice: 750000 }
];

const timeSlots = [
  "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
];

// Generate random flight number
const generateFlightNumber = (airlineCode: string): string => {
  const number = Math.floor(Math.random() * 9000) + 1000;
  return `${airlineCode} ${number}`;
};

// Calculate arrival time based on departure time and duration
const calculateArrivalTime = (departureTime: string, duration: string): string => {
  const [depHour, depMin] = departureTime.split(':').map(Number);
  const durationMatch = duration.match(/(\d+)h\s*(\d+)m/);
  if (!durationMatch) return departureTime;
  
  const durHours = parseInt(durationMatch[1]);
  const durMinutes = parseInt(durationMatch[2]);
  
  const totalMinutes = depHour * 60 + depMin + durHours * 60 + durMinutes;
  const arrHour = Math.floor(totalMinutes / 60) % 24;
  const arrMin = totalMinutes % 60;
  
  return `${arrHour.toString().padStart(2, '0')}:${arrMin.toString().padStart(2, '0')}`;
};

// Format price in Indonesian Rupiah
const formatPrice = (price: number): string => {
  return `Rp ${price.toLocaleString('id-ID')}`;
};

// Generate flights for a specific date
const generateFlightsForDate = (date: Date): FlightCardProps[] => {
  const flights: FlightCardProps[] = [];
  
  // Use date as seed for consistent random generation
  const seed = date.getTime();
  const random = (index: number) => {
    const x = Math.sin(seed + index) * 10000;
    return x - Math.floor(x);
  };
  
  // 15% chance of no flights available (random days with no flights)
  const hasNoFlights = random(999) < 0.15;
  if (hasNoFlights) {
    return []; // Return empty array for no flights
  }
  
  // Generate 1-6 flights per day randomly (including possibility of just 1 flight)
  const flightCount = Math.floor(random(0) * 6) + 1;
  
  for (let i = 0; i < flightCount; i++) {
    const airline = airlines[Math.floor(random(i * 3) * airlines.length)];
    const route = routes[Math.floor(random(i * 3 + 1) * routes.length)];
    const departureTime = timeSlots[Math.floor(random(i * 3 + 2) * timeSlots.length)];
    const arrivalTime = calculateArrivalTime(departureTime, route.baseDuration);
    
    // Add some price variation
    const priceVariation = 0.8 + (random(i * 4) * 0.4); // 0.8 to 1.2 multiplier
    const finalPrice = Math.round(route.basePrice * airline.priceMultiplier * priceVariation);
    
    // Random availability (85% chance of being available, 15% sold out)
    const available = random(i * 5) > 0.15;
    
    flights.push({
      airline: airline.name,
      flightNumber: generateFlightNumber(airline.code),
      departure: route.departure,
      arrival: route.arrival,
      departureTime,
      arrivalTime,
      price: formatPrice(finalPrice),
      duration: route.baseDuration,
      available,
      onBook: () => {}
    });
  }
  
  // Sort flights by departure time
  flights.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
  
  return flights;
};

// Dynamic flight data cache
const flightDataCache = new Map<string, FlightCardProps[]>();

// Get flights for any date with caching
const getFlightsByDate = (date: Date): FlightCardProps[] => {
  const dateKey = date.toISOString().split('T')[0];
  
  if (!flightDataCache.has(dateKey)) {
    flightDataCache.set(dateKey, generateFlightsForDate(date));
  }
  
  return flightDataCache.get(dateKey) || [];
};

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, flight, selectedDate }) => {
  const initialstate = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    seatClass: 'economy',
    seatNumber: ''
  }
  const [formData, setFormData] = useState<BookingFormData>(initialstate);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
    setFormData(initialstate);
    onClose();
  };

  if (!isOpen || !flight) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <m.div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-base sm:text-xl font-bold text-gray-900">Complete Your Booking</h2>
            <button
              onClick={onClose}
              className="text-black p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Flight Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Flight Summary</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Airline & Flight</p>
                <p className="font-semibold text-gray-900">{flight.airline} {flight.flightNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-semibold text-gray-900">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Route</p>
                <p className="font-semibold text-gray-900">{flight.departure} → {flight.arrival}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="font-semibold text-gray-900">{flight.departureTime} - {flight.arrivalTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-gray-900">{flight.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Price</p>
                <p className="font-bold text-2xl text-blue-600">{flight.price}</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seat Class
                </label>
                <select
                  name="seatClass"
                  value={formData.seatClass}
                  onChange={handleInputChange}
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="economy">Economy Class</option>
                  <option value="premium">Premium Economy</option>
                  <option value="business">Business Class</option>
                  <option value="first">First Class</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Seat
                </label>
                <input
                  type="text"
                  name="seatNumber"
                  value={formData.seatNumber}
                  onChange={handleInputChange}
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g., 12A (optional)"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </m.div>
    </div>
  );
};

const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  flightNumber,
  departure,
  arrival,
  departureTime,
  arrivalTime,
  price,
  duration,
  available,
  onBook
}) => (
  <m.div
    className={` bg-white rounded-xl shadow-md border transition-all duration-300 p-5 relative overflow-hidden hover:shadow-lg ${
      available 
        ? 'border-gray-100 hover:border-blue-200' 
        : 'border-gray-100 opacity-70'
    }`}
    whileHover={available ? { scale: 1.01, y: -2 } : {}}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {/* Status indicator */}
    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${available ? 'bg-green-400' : 'bg-red-400'}`}></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
            <PlaneTakeoffIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">{airline}</h3>
            <p className="text-sm text-gray-500 font-medium">{flightNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-base font-bold text-blue-600">{price}</p>
          <p className="text-xs text-gray-500 font-medium">per person</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-3">
          <div className="mb-1 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
            <MapPinIcon className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{departureTime}</p>
            <p className="text-sm text-gray-600">{departure}</p>
          </div>
        </div>
        
        <div className="flex-1 mx-4 relative">
          <div className="border-t border-gray-300 border-dashed relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-1">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <PlaneTakeoffIcon className="w-2 h-2 text-white" />
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-gray-500">{duration}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="font-semibold text-gray-900">{arrivalTime}</p>
            <p className="text-sm text-gray-600">{arrival}</p>
          </div>
          <div className="mb-2 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
            <MapPinIcon className="w-4 h-4 text-indigo-600" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <ClockIcon className="w-4 h-4" />
          <span>{duration} flight</span>
        </div>
        <m.button
          className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
            available
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!available}
          onClick={onBook}
          whileHover={available ? { scale: 1.02 } : {}}
          whileTap={available ? { scale: 0.98 } : {}}
        >
          {available ? 'Book Now' : 'Sold Out'}
        </m.button>
      </div>
    </div>
  </m.div>
);

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedFlight, setSelectedFlight] = useState<FlightCardProps | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Enhanced flight data organized by date
  const getFlightsForDate = (date: Date): FlightCardProps[] => {
    const baseFlights = getFlightsByDate(date);
    
    // Add onBook handler to each flight
    return baseFlights.map((flight: FlightCardProps) => ({
      ...flight,
      onBook: () => {
        setSelectedFlight(flight);
        setIsBookingModalOpen(true);
      }
    }));
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date | null) => {
    if (!date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const hasFlights = (date: Date | null) => {
    if (!date) return false;
    const flights = getFlightsByDate(date);
    return flights.length > 0;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newMonth;
    });
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentFlights = getFlightsForDate(selectedDate);

  return (
    <div className="h-screen w-full bg-gray-50 relative overflow-hidden">
      {/* Mobile Layout (md and below) */}
      <div className="block lg:hidden h-full mt-12">
        <div className="h-full p-4 overflow-y-auto">
          {/* Mobile Calendar Card */}
          <m.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-4 relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Mobile Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CalendarIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">{formatMonth(currentMonth)}</h1>
                    <p className="text-sm text-gray-600">Select your travel date</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300"
                  >
                    <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300"
                  >
                    <ChevronRightIcon className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Mobile Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="p-2 text-center text-xs font-semibold text-gray-500 bg-gray-50 rounded-lg">
                    {day.slice(0, 3)}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4">
                {days.map((date, index) => (
                  <m.button
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    disabled={!date}
                    className={`
                      relative p-2 text-center rounded-xl transition-all duration-300 font-medium text-sm min-h-[40px] flex flex-col items-center justify-center
                      ${!date
                        ? 'invisible'
                        : isSelected(date)
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                        : isToday(date)
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : hasFlights(date)
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-white border border-gray-200 text-gray-700'
                    }`}
                    whileHover={date ? { scale: 1.02 } : {}}
                    whileTap={date ? { scale: 0.98 } : {}}
                  >
                    {date && (
                      <>
                        <span className="text-sm font-bold">{date.getDate()}</span>
                        {hasFlights(date) && (
                          <div className="flex space-x-1 mt-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          </div>
                        )}
                      </>
                    )}
                  </m.button>
                ))}
              </div>

              {/* Mobile Selected Date Info */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="text-center">
                  <p className="text-sm font-medium text-blue-600 mb-1">Selected Date</p>
                  <p className="text-base font-bold text-blue-800">
                    {selectedDate.toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </p>
                  {currentFlights.length > 0 && (
                    <p className="text-xs text-green-600 mt-1 font-medium">
                      {currentFlights.length} flight{currentFlights.length > 1 ? 's' : ''} available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </m.div>

          {/* Mobile Flight Results */}
          {currentFlights.length > 0 ? (
            <div className="space-y-3 mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <PlaneTakeoffIcon className="w-5 h-5 text-blue-600 mr-2" />
                  Available Flights
                </h2>
                <div className="text-xs text-green-600 font-medium">
                  {currentFlights.length} found
                </div>
              </div>
              {currentFlights.map((flight, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <FlightCard {...flight} />
                </m.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <PlaneTakeoffIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Flights Available</h3>
                <p className="text-gray-600 text-sm">
                  No flights for {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full ml-16 overflow-hidden">
        {/* Left Side - Calendar */}
        <div className="bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <m.div
            className="h-full relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-20 w-48 h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent rounded-full -translate-y-24 translate-x-24"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              {/* Desktop Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CalendarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{formatMonth(currentMonth)}</h1>
                    <p className="text-sm text-gray-600 mt-1">Select your travel date</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-3 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  </button>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-3 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Desktop Calendar Grid */}
              <div className="flex-1 flex flex-col">
                {/* Week days header */}
                <div className="grid grid-cols-7 gap-3 mb-4">
                  {weekDays.map(day => (
                    <div key={day} className="p-3 text-center text-sm font-bold text-gray-600 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-sm">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-3 flex-1">
                  {days.map((date, index) => (
                    <m.button
                      key={index}
                      onClick={() => date && setSelectedDate(date)}
                      disabled={!date}
                      className={`
                        relative p-4 text-center rounded-xl transition-all duration-300 font-semibold text-base min-h-[60px] flex flex-col items-center justify-center
                        ${!date
                          ? 'invisible'
                          : isSelected(date)
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl scale-105 transform'
                          : isToday(date)
                          ? 'bg-blue-100 text-blue-700 border-2 border-blue-300 shadow-lg'
                          : hasFlights(date)
                          ? 'bg-green-50 text-green-700 border-2 border-green-200 hover:bg-green-100 hover:shadow-lg hover:scale-105'
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-105'
                      }`}
                      whileHover={date ? { scale: 1.05 } : {}}
                      whileTap={date ? { scale: 0.95 } : {}}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.01 }}
                    >
                      {date && (
                        <>
                          <span className="text-xl font-bold">{date.getDate()}</span>
                          {hasFlights(date) && (
                            <div className="flex space-x-1 mt-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            </div>
                          )}
                        </>
                      )}
                    </m.button>
                  ))}
                </div>

                {/* Desktop Selected Date Info */}
                <m.div
                  className="mt-6 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border-2 border-blue-200 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Selected Travel Date</p>
                      <p className="text-lg font-bold text-blue-800">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      {currentFlights.length > 0 && (
                        <p className="text-sm text-green-600 mt-1 font-medium">
                          {currentFlights.length} flight{currentFlights.length > 1 ? 's' : ''} available
                        </p>
                      )}
                    </div>
                  </div>
                </m.div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Right Side - Flight Results */}
        <div className="bg-gray-50 p-6 overflow-y-auto">
          <m.div
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {currentFlights.length > 0 ? (
              <div className="h-full flex flex-col">
                {/* Available Flights Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <PlaneTakeoffIcon className="w-5 h-5 text-white" />
                    </div>
                    Available Flights
                  </h2>
                  <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-xl border border-green-200">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-700 text-sm">
                      {currentFlights.length} flight{currentFlights.length > 1 ? 's' : ''} found
                    </span>
                  </div>
                </div>

                {/* Flight Cards */}
                <div className="flex-1 space-y-4">
                  {currentFlights.map((flight, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FlightCard {...flight} />
                    </m.div>
                  ))}
                </div>
              </div>
            ) : (
              /* No Flights Message */
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <PlaneTakeoffIcon className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">No Flights Available</h3>
                  <p className="text-gray-600 mb-2">
                    No flights are currently available for
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    Please select a different date or check back later for updated flight schedules.
                  </p>
                </div>
              </div>
            )}
          </m.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedFlight(null);
        }}
        flight={selectedFlight}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default CalendarPage;
