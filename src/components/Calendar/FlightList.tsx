import React from 'react';
import { m } from 'framer-motion';
import { PlaneTakeoffIcon } from 'lucide-react';
import FlightCard from './FlightCard';
import { FlightCardProps } from '../../types/flight';

interface FlightListProps {
  flights: FlightCardProps[];
  selectedDate: Date;
}

const FlightList: React.FC<FlightListProps> = ({ flights, selectedDate }) => {
  if (flights.length === 0) {
    return (
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
    );
  }

  return (
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
            {flights.length} flight{flights.length > 1 ? 's' : ''} found
          </span>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="flex-1 space-y-4">
        {flights.map((flight, index) => (
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
  );
};

export default FlightList;
