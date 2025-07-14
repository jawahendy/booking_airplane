import React from 'react';
import { m } from 'framer-motion';
import { PlaneTakeoffIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { FlightCardProps } from '../../types/flight';

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

export default FlightCard;
