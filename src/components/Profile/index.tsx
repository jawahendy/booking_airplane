'use client';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import { 
  UserIcon, 
  PlaneTakeoffIcon, 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  CreditCardIcon,
  SettingsIcon,
  BellIcon,
  LogOutIcon,
  EditIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon
} from 'lucide-react';

interface BookingCardProps {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  status: 'confirmed' | 'cancelled' | 'completed';
  price: string;
  duration: string;
  seat: string;
  gate?: string;
}

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

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'settings'>('bookings');

  // Sample user data
  const userData = {
    name: "Hendy Nurfrianto",
    email: "hendyn25@gmail.com",
    phone: "+62 857 1622 1255",
    memberSince: "January 2020",
    totalFlights: 12,
    milesEarned: "25,400",
    membershipLevel: "Gold"
  };

  // Sample booking data
  const bookingsData: BookingCardProps[] = [
    {
      id: "BK001234",
      airline: "Garuda Indonesia",
      flightNumber: "GA 152",
      departure: "CGK Jakarta",
      arrival: "DPS Bali",
      departureTime: "08:30",
      arrivalTime: "11:45",
      date: "Dec 25, 2024",
      status: "confirmed",
      price: "Rp 1,200,000",
      duration: "2h 15m",
      seat: "12A",
      gate: "A5"
    },
    {
      id: "BK001235",
      airline: "Lion Air",
      flightNumber: "JT 930",
      departure: "DPS Bali",
      arrival: "CGK Jakarta",
      departureTime: "14:20",
      arrivalTime: "17:35",
      date: "Dec 30, 2024",
      status: "confirmed",
      price: "Rp 1,500,000",
      duration: "2h 15m",
      seat: "8C",
      gate: "B2"
    },
    {
      id: "BK001236",
      airline: "Singapore Airlines",
      flightNumber: "SQ 740",
      departure: "CGK Jakarta",
      arrival: "SIN Singapore",
      departureTime: "19:45",
      arrivalTime: "23:00",
      date: "Nov 15, 2024",
      status: "completed",
      price: "Rp 3,000,000",
      duration: "2h 15m",
      seat: "4A"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 relative">
      <div className="max-w-7xl mx-auto p-6 pt-8">
        {/* Profile Header */}
        <m.div
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              {/* User Info */}
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <UserIcon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{userData.name}</h1>
                  <p className="text-gray-600 mb-1">{userData.email}</p>
                  <p className="text-sm text-gray-500">Member since {userData.memberSince}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{userData.totalFlights}</p>
                  <p className="text-sm text-gray-500">Total Flights</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">{userData.milesEarned}</p>
                  <p className="text-sm text-gray-500">Miles Earned</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-1">
                    <StarIcon className="w-4 h-4 mr-1" />
                    {userData.membershipLevel}
                  </div>
                  <p className="text-sm text-gray-500">Membership</p>
                </div>
              </div>
            </div>
          </div>
        </m.div>

        {/* Navigation Tabs */}
        <m.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-1 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                activeTab === 'bookings'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <PlaneTakeoffIcon className="w-5 h-5" />
              <span className='text-sm sm:text-base'>My Bookings</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                activeTab === 'settings'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <SettingsIcon className="w-5 h-5" />
              <span className='text-sm sm:text-base'>Settings</span>
            </button>
          </div>
        </m.div>

        {/* Content based on active tab */}
        {activeTab === 'bookings' && (
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
                <span>{bookingsData.length} bookings found</span>
              </div>
            </div>

            {/* Booking Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {bookingsData.map((booking, index) => (
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
        )}

        {activeTab === 'settings' && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SettingsIcon className="w-6 h-6 mr-3 text-blue-600" />
                Account Settings
              </h2>
              
              <div className="space-y-6">
                {/* Profile Settings */}
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <EditIcon className="w-5 h-5 mr-2 text-gray-600" />
                      Profile Information
                    </h3>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium text-gray-900">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-900">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-gray-900">{userData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Membership Level</p>
                      <p className="font-medium text-yellow-600">{userData.membershipLevel}</p>
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BellIcon className="w-5 h-5 mr-2 text-gray-600" />
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Flight updates</span>
                      <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Promotional offers</span>
                      <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email notifications</span>
                      <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Actions */}
                <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
                  <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                    <LogOutIcon className="w-5 h-5 mr-2" />
                    Account Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 text-red-700 hover:bg-red-100 rounded-lg transition-colors">
                      Change Password
                    </button>
                    <button className="w-full text-left p-3 text-red-700 hover:bg-red-100 rounded-lg transition-colors">
                      Delete Account
                    </button>
                    <button className="w-full text-left p-3 text-red-700 hover:bg-red-100 rounded-lg transition-colors">
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
