'use client';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, PlaneTakeoffIcon, ClockIcon, MapPinIcon } from 'lucide-react';

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
}

const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  flightNumber,
  departure,
  arrival,
  departureTime,
  arrivalTime,
  price,
  duration,
  available
}) => (
  <m.div
    className={`bg-white rounded-xl shadow-md border transition-all duration-300 p-5 relative overflow-hidden hover:shadow-lg ${
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
          whileHover={available ? { scale: 1.02 } : {}}
          whileTap={available ? { scale: 0.98 } : {}}
        >
          {available ? 'Select Flight' : 'Sold Out'}
        </m.button>
      </div>
    </div>
  </m.div>
);

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Enhanced flight data with better details
  const flightData: FlightCardProps[] = [
    {
      airline: "Garuda Indonesia",
      flightNumber: "GA 152",
      departure: "CGK Jakarta",
      arrival: "DPS Bali",
      departureTime: "08:30",
      arrivalTime: "11:45",
      price: "Rp 1,200,000",
      duration: "2h 15m",
      available: true
    },
    {
      airline: "Lion Air",
      flightNumber: "JT 930",
      departure: "CGK Jakarta",
      arrival: "DPS Bali",
      departureTime: "14:20",
      arrivalTime: "17:35",
      price: "Rp 1,500,000",
      duration: "2h 15m",
      available: true
    },
    {
      airline: "Singapore Airlines",
      flightNumber: "SQ 740",
      departure: "CGK Jakarta",
      arrival: "DPS Bali",
      departureTime: "19:45",
      arrivalTime: "23:00",
      price: "Rp 1,800,000",
      duration: "2h 15m",
      available: false
    }
  ];

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

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newMonth;
    });
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen w-full bg-gray-50 relative">
      <div className="max-w-7xl mx-auto p-6 pt-8">
        {/* Calendar Card - Top Section */}
        <m.div
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                {formatMonth(currentMonth)}
              </h2>
              <div className="flex space-x-3">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-3 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-3 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Calendar Grid - Centered */}
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-7 gap-2 mb-6">
                {weekDays.map(day => (
                  <div key={day} className="p-4 text-center text-sm font-semibold text-gray-500 bg-gray-50 rounded-lg">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 mb-8">
                {days.map((date, index) => (
                  <m.button
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    disabled={!date}
                    className={`p-4 text-center rounded-xl transition-all duration-300 font-medium relative ${
                      !date
                        ? 'invisible'
                        : isSelected(date)
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105'
                        : isToday(date)
                        ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-md'
                        : 'hover:bg-gray-100 text-gray-700 hover:shadow-md hover:scale-105'
                    }`}
                    whileHover={date ? { scale: 1.05 } : {}}
                    whileTap={date ? { scale: 0.95 } : {}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.01 }}
                  >
                    {date?.getDate()}
                  </m.button>
                ))}
              </div>
            </div>

            {/* Selected Date Display - Centered */}
            <m.div
              className="max-w-md mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-blue-600 mb-1">Selected Travel Date</p>
                  <p className="text-lg font-bold text-blue-800">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </m.div>

        {/* Available Flights Header */}
        <m.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <PlaneTakeoffIcon className="w-6 h-6 text-white" />
              </div>
              Available Flights
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">3 flights found</span>
            </div>
          </div>
        </m.div>

        {/* Flight Cards - Bottom Grid Layout */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {flightData.map((flight, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <FlightCard {...flight} />
            </m.div>
          ))}
        </div>

        {/* Additional Options */}
        <m.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <PlaneTakeoffIcon className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Looking for more options?</p>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Flights
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default CalendarPage;
