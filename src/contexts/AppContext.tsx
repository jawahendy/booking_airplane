'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type PageType = 'home' | 'calendar' | 'profile';

interface AppContextType {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activePage, setActivePage] = useState<PageType>('home');

  return (
    <AppContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </AppContext.Provider>
  );
};
