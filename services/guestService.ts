import { ALL_GUESTS, RAW_TABLES } from '../constants';
import { Guest, TableData } from '../types';

export const searchGuests = (query: string): Guest[] => {
  if (!query || query.trim().length === 0) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return ALL_GUESTS.filter(guest => 
    guest.name.toLowerCase().includes(normalizedQuery)
  );
};

export const getTableData = (tableNumber: string | number): TableData | undefined => {
  return RAW_TABLES.find(t => t.tableNumber.toString() === tableNumber.toString());
};
