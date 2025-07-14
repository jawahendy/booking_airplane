import React from 'react';
import { m } from 'framer-motion';
import { 
  SettingsIcon,
  EditIcon,
  BellIcon,
  LogOutIcon
} from 'lucide-react';
import { UserData } from '../../types/profile';

interface SettingsTabProps {
  userData: UserData;
}

const SettingsTab: React.FC<SettingsTabProps> = ({ userData }) => {
  return (
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
  );
};

export default SettingsTab;
