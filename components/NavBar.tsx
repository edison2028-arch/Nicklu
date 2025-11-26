import React from 'react';
import { Search, Map } from 'lucide-react';

interface NavBarProps {
  currentView: 'search' | 'map';
  setView: (view: 'search' | 'map') => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, setView }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        <button
          onClick={() => setView('search')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
            currentView === 'search' ? 'text-wedding-red' : 'text-gray-400'
          }`}
        >
          <Search size={24} />
          <span className="text-xs font-medium">搜尋座位</span>
        </button>
        <button
          onClick={() => setView('map')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
            currentView === 'map' ? 'text-wedding-red' : 'text-gray-400'
          }`}
        >
          <Map size={24} />
          <span className="text-xs font-medium">座位圖</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
