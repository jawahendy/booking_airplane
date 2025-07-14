'use client';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import { TabType } from '../../types/profile';
import { sampleUserData, sampleBookingsData } from '../../constants/profileData';
import ProfileHeader from './ProfileHeader';
import NavigationTabs from './NavigationTabs';
import BookingsTab from './BookingsTab';
import SettingsTab from './SettingsTab';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('bookings');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

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
          
          <ProfileHeader userData={sampleUserData} />
        </m.div>

        {/* Navigation Tabs */}
        <m.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <NavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </m.div>

        {/* Content based on active tab */}
        {activeTab === 'bookings' && (
          <BookingsTab bookings={sampleBookingsData} />
        )}

        {activeTab === 'settings' && (
          <SettingsTab userData={sampleUserData} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
