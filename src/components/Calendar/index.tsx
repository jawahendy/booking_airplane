'use client';
import React, { useState, useMemo } from 'react';
import { m } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, PlaneTakeoffIcon, MapPinIcon } from 'lucide-react';
import { FlightCardProps } from '../../types/flight';
import { getFlightsByDate } from '../../utils/flightUtils';
import CalendarGrid from './CalendarGrid';
import FlightList from './FlightList';
import BookingModal from './BookingModal';

// Mobile Calendar Component
const MobileCalendar: React.FC<{
  currentMonth: Date;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onMonthNavigate: (direction: 'prev' | 'next') => void;
  hasFlights: (date: Date | null) => boolean;
  flights: FlightCardProps[];
}> = ({ currentMonth, selectedDate, onDateSelect, onMonthNavigate, hasFlights, flights }) => {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
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

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
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
                  onClick={() => onMonthNavigate('prev')}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => onMonthNavigate('next')}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronRightIcon className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Mobile Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {weekDays.map(day => (
                <div key={day} className="p-2 text-center text-xs font-semibold text-gray-500 bg-gray-50 rounded-xl">
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 mb-4">
              {days.map((date, index) => (
                <m.button
                  key={index}
                  onClick={() => date && onDateSelect(date)}
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
                           <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
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
                <p className="text-sm font-medium text-blue-600 mb-1">Flight Date</p>
                <p className="text-base font-bold text-blue-800">
                  {selectedDate.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric' 
                  })}
                </p>
                {flights.length > 0 && (
                  <p className="text-xs text-green-600 mt-1 font-medium">
                    {flights.length} flight{flights.length > 1 ? 's' : ''} available
                  </p>
                )}
              </div>
            </div>
          </div>
        </m.div>

        {/* Mobile Flight Results */}
        {flights.length > 0 ? (
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center">
                <PlaneTakeoffIcon className="w-5 h-5 text-blue-600 mr-2" />
                Available Flights
              </h2>
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-700 font-medium">
                  {flights.length} found
                </span>
              </div>
            </div>
            {flights.map((flight, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-md border transition-all duration-300 p-4 relative overflow-hidden ${
                  flight.available 
                    ? 'border-gray-100 hover:shadow-lg' 
                    : 'border-gray-100 opacity-70'
                }`}
              >
                {/* Status indicator */}
                <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${flight.available ? 'bg-green-400' : 'bg-red-400'}`}></div>
                
                {/* Flight Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                      <PlaneTakeoffIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{flight.airline}</h3>
                      <p className="text-xs text-gray-500 font-medium">{flight.flightNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-blue-600">{flight.price}</p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                </div>

                {/* Flight Route */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center">
                      <MapPinIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{flight.departureTime}</p>
                      <p className="text-xs text-gray-600">{flight.departure}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 mx-3 relative">
                    <div className="border-t border-gray-300 border-dashed relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <PlaneTakeoffIcon className="w-1.5 h-1.5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-1">
                      <p className="text-xs text-gray-500">{flight.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 text-sm">{flight.arrivalTime}</p>
                      <p className="text-xs text-gray-600">{flight.arrival}</p>
                    </div>
                    <div className="w-6 h-6 bg-indigo-50 rounded-full flex items-center justify-center">
                      <MapPinIcon className="w-4 h-4 text-indigo-600" />
                    </div>
                  </div>
                </div>

                {/* Flight Duration and Book Button */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{flight.duration} flight</span>
                  </div>
                  <m.button
                    onClick={flight.onBook}
                    disabled={!flight.available}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      flight.available
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={flight.available ? { scale: 1.02 } : {}}
                    whileTap={flight.available ? { scale: 0.98 } : {}}
                  >
                    {flight.available ? 'Book Now' : 'Sold Out'}
                  </m.button>
                </div>
              </m.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-50 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <PlaneTakeoffIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Flights Available</h3>
                <p className="text-gray-600 text-sm mb-2">
                  No flights are currently available for
                </p>
                <p className="text-gray-900 font-semibold text-base mb-4">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Please select a different date or check back later for updated flight schedules.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className='h-10'></div>
      </div>
    </div>
  );
};

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedFlight, setSelectedFlight] = useState<FlightCardProps | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Memoized flight data
  const currentFlights = useMemo(() => {
    const baseFlights = getFlightsByDate(selectedDate);
    
    return baseFlights.map((flight: FlightCardProps) => ({
      ...flight,
      onBook: () => {
        setSelectedFlight(flight);
        setIsBookingModalOpen(true);
      }
    }));
  }, [selectedDate]);

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

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedFlight(null);
  };

  return (
    <div className="h-screen w-full bg-gray-50 relative overflow-hidden">
      {/* Mobile Layout */}
      <MobileCalendar
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        onMonthNavigate={navigateMonth}
        hasFlights={hasFlights}
        flights={currentFlights}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full ml-16 overflow-hidden">
        {/* Left Side - Calendar */}
        <div className="bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <m.div
            className="h-full relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CalendarGrid
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              onMonthNavigate={navigateMonth}
              hasFlights={hasFlights}
            />
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
            <FlightList flights={currentFlights} selectedDate={selectedDate} />
          </m.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        flight={selectedFlight}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default CalendarPage;
