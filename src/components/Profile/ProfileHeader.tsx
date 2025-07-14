import React from 'react';
import { UserIcon, StarIcon } from 'lucide-react';
import { UserData } from '../../types/profile';

interface ProfileHeaderProps {
  userData: UserData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userData }) => {
  return (
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
  );
};

export default ProfileHeader;
