import React from 'react';
import { Guest } from '../types';
import { User, Armchair } from 'lucide-react';

interface SearchResultProps {
  guest: Guest;
}

const SearchResult: React.FC<SearchResultProps> = ({ guest }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-wedding-gold animate-fade-in mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <User className="text-wedding-gold" size={20} />
            {guest.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{guest.category}</p>
          {guest.note && (
             <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
               {guest.note}
             </span>
          )}
        </div>
        <div className="text-center bg-red-50 p-3 rounded-lg min-w-[80px]">
          <div className="text-xs text-gray-500 uppercase font-semibold">桌號</div>
          <div className="text-3xl font-bold text-wedding-red">{guest.tableNumber}</div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex items-center text-gray-600">
           <Armchair size={16} className="mr-2" />
           <span className="text-sm">座位順序: <span className="font-bold text-gray-900">{guest.seatNumber}</span></span>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
