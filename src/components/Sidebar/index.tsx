'use client';
import { 
  Card,
  List,
  ListItem
} from "@material-tailwind/react";
import { 
  HomeIcon,
  CalendarIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import { useAppContext } from '@/contexts/AppContext';

const Sidebar = () => {
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

  return (
    <div className="h-auto w-16 fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      {/* @ts-expect-error Material Tailwind props */}
      <Card className="h-full w-full rounded-2xl shadow-lg border border-gray-200 bg-white">
        {/* Navigation Menu */}
        <div className="p-2 py-4">
          {/* @ts-expect-error Material Tailwind props */}
          <List className="p-0 ">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isSelected = activePage === item.id;
              
              return (
                <div key={item.id} className="mb-4">
                  {/* @ts-expect-error Material Tailwind props */}
                  <ListItem
                    onClick={() => setActivePage(item.id as 'home' | 'calendar' | 'profile')}
                    className={`
                      group w-12 h-12 rounded-xl transition-all duration-200 cursor-pointer p-0 flex justify-center items-center
                      ${isSelected 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/25' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-500 hover:shadow-md'
                      }
                    `}
                  >
                    <IconComponent 
                      className={`h-7 w-7 transition-colors duration-200 ${
                        isSelected 
                          ? 'text-white' 
                          : 'text-gray-600 group-hover:text-blue-500'
                      }`} 
                    />
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
