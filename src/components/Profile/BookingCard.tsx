import React from 'react';
import { m } from 'framer-motion';
import { 
  PlaneTakeoffIcon, 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  CreditCardIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon
} from 'lucide-react';
import { BookingCardProps } from '../../types/profile';

const BookingCard: React.FC<BookingCardProps> = ({
  id,
  airline,
  flightNumber,
  departure,
  arrival,
  departureTime,
  arrivalTime,
  date,
  status,
  price,
  duration,
  seat,
  gate
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'completed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'confirmed':
        return <CheckCircleIcon className="w-4 h-4" />;
      case 'cancelled':
        return <XCircleIcon className="w-4 h-4" />;
      case 'completed':
        return <StarIcon className="w-4 h-4" />;
      default:
        return <ClockIcon className="w-4 h-4" />;
    }
  };

  return (
    <m.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02, y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border flex items-center space-x-1 ${getStatusColor()}`}>
        {getStatusIcon()}
        <span className="capitalize">{status}</span>
      </div>

      {/* Booking ID */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 font-medium">Booking ID</p>
        <p className="text-sm font-bold text-gray-900">{id}</p>
      </div>

      {/* Flight Info Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <PlaneTakeoffIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{airline}</h3>
            <p className="text-sm text-gray-500 font-medium">{flightNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-blue-600">{price}</p>
          <p className="text-xs text-gray-500">total paid</p>
        </div>
      </div>

      {/* Flight Route */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
            <MapPinIcon className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="font-bold text-gray-900">{departureTime}</p>
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
            <p className="font-bold text-gray-900">{arrivalTime}</p>
            <p className="text-sm text-gray-600">{arrival}</p>
          </div>
          <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
            <MapPinIcon className="w-4 h-4 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Flight Details */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <CalendarIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
          <p className="text-xs text-gray-500">Date</p>
          <p className="text-sm font-semibold text-gray-900">{date}</p>
        </div>
        <div className="text-center">
          <CreditCardIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
          <p className="text-xs text-gray-500">Seat</p>
          <p className="text-sm font-semibold text-gray-900">{seat}</p>
        </div>
        <div className="text-center">
          <MapPinIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
          <p className="text-xs text-gray-500">Gate</p>
          <p className="text-sm font-semibold text-gray-900">{gate || 'TBA'}</p>
        </div>
      </div>
    </m.div>
  );
};

export default BookingCard;
