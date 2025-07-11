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
import { useState } from "react";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('home');

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: HomeIcon,
    },
    {
      id: 'calendar',
      label: 'Calendar',
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
              const isSelected = selectedItem === item.id;
              
              return (
                <div key={item.id} className="mb-4">
                  {/* @ts-expect-error Material Tailwind props */}
                  <ListItem
                    onClick={() => setSelectedItem(item.id)}
                    className={`
                      w-12 h-12 rounded-xl transition-all duration-200 hover:bg-blue-50 cursor-pointer p-0 flex justify-center items-center
                      ${isSelected ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-700'}
                    `}
                  >
                    <IconComponent 
                      className={`h-7 w-7 ${isSelected ? 'text-white' : 'text-gray-600'}`} 
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
