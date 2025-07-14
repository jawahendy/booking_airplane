'use client';
import { 
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { 
  HomeIcon,
  CalendarIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { useAppContext } from '@/contexts/AppContext';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activePage, setActivePage } = useAppContext();

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: HomeIcon,
    },
    {
      id: 'calendar',
      label: 'Booking',
      icon: CalendarIcon,
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: UserIcon,
    }
  ];

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        {/* @ts-expect-error Material Tailwind props */}
        <IconButton
          variant="text"
          size="lg"
          onClick={toggleDrawer}
          className="bg-white shadow-lg rounded-full"
        >
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </IconButton>
      </div>

      {/* Mobile Drawer */}
      {/* @ts-expect-error Material Tailwind props */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className="p-4 w-64"
      >
        <div className="flex items-center justify-between mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
          {/* @ts-expect-error Material Tailwind props */}
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={toggleDrawer}
          >
            <XMarkIcon className="h-5 w-5" />
          </IconButton>
        </div>
        
        {/* @ts-expect-error Material Tailwind props */}
        <List>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isSelected = activePage === item.id;
            
            return (
              <div key={item.id} className="mb-3">
                {/* @ts-expect-error Material Tailwind props */}
                <ListItem
                  onClick={() => {
                    setActivePage(item.id as 'home' | 'calendar' | 'profile');
                    toggleDrawer();
                  }}
                  className={`
                    rounded-xl transition-all duration-200 hover:bg-blue-50 cursor-pointer p-3
                    ${isSelected ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:bg-blue-600 shadow-md' : 'text-gray-700'}
                  `}
                >
                  {/* @ts-expect-error Material Tailwind props */}
                  <ListItemPrefix>
                    <IconComponent 
                      className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} 
                    />
                  </ListItemPrefix>
                  {/* @ts-expect-error Material Tailwind props */}
                  <Typography 
                    variant="small" 
                    className={`font-medium ${isSelected ? 'text-white' : 'text-gray-700'}`}
                  >
                    {item.label}
                  </Typography>
                </ListItem>
              </div>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
