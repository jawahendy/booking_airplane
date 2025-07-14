import React from 'react';
import { m } from 'framer-motion';
import { PlaneTakeoffIcon } from 'lucide-react';
import BookingCard from './BookingCard';
import { BookingCardProps } from '../../types/profile';

interface BookingsTabProps {
  bookings: BookingCardProps[];
}

const BookingsTab: React.FC<BookingsTabProps> = ({ bookings }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Bookings Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
          <PlaneTakeoffIcon className="w-6 h-6 mr-3 text-blue-600" />
          Your Flight Bookings
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>{bookings.length} bookings found</span>
        </div>
      </div>

      {/* Booking Cards Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {bookings.map((booking, index) => (
          <m.div
            key={booking.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <BookingCard {...booking} />
          </m.div>
        ))}
      </div>
    </m.div>
  );
};

export default BookingsTab;
