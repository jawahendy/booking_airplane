import React from 'react';
import { PlaneTakeoffIcon, SettingsIcon } from 'lucide-react';
import { TabType } from '../../types/profile';

interface NavigationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-1 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
      <button
        onClick={() => onTabChange('bookings')}
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
        onClick={() => onTabChange('settings')}
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
  );
};

export default NavigationTabs;
