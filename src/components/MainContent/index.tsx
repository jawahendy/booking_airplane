'use client';
import { useAppContext } from '@/contexts/AppContext';
import HomePage from '@/components/Home';
import CalendarPage from '@/components/Calendar';
import ProfilePage from '@/components/Profile';

const MainContent = () => {
  const { activePage } = useAppContext();

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'calendar':
        return <CalendarPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex-1">
      {renderPage()}
    </div>
  );
};

export default MainContent;
