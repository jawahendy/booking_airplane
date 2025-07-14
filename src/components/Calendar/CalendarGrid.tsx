import React from 'react';
import { m } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from 'lucide-react';

interface CalendarGridProps {
  currentMonth: Date;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onMonthNavigate: (direction: 'prev' | 'next') => void;
  hasFlights: (date: Date | null) => boolean;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonth,
  selectedDate,
  onDateSelect,
  onMonthNavigate,
  hasFlights
}) => {
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

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="h-full relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-20 w-48 h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent rounded-full -translate-y-24 translate-x-24"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Calendar Header */}
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
              onClick={() => onMonthNavigate('prev')}
              className="p-3 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
            </button>
            <button
              onClick={() => onMonthNavigate('next')}
              className="p-3 rounded-xl bg-gray-100 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
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
                onClick={() => date && onDateSelect(date)}
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

          {/* Selected Date Info */}
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
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;
