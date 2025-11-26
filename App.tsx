import React, { useState } from 'react';
import { Search } from 'lucide-react';
import NavBar from './components/NavBar';
import SearchResult from './components/SearchResult';
import TableMap from './components/TableMap';
import { searchGuests } from './services/guestService';
import { Guest } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'search' | 'map'>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Guest[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setResults(searchGuests(query));
  };

  return (
    <div className="min-h-screen bg-wedding-bg font-sans text-gray-900 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">婚宴座位查詢</h1>
            <p className="text-xs text-gray-500">歡迎蒞臨 盧府 & 張府 喜宴</p>
          </div>
          {/* Decorative element */}
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-wedding-red font-serif font-bold border border-red-100">
            囍
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto px-4 py-6">
        
        {currentView === 'search' && (
          <div className="space-y-6 animate-fade-in">
            {/* Search Input Box */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-wedding-gold transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-wedding-gold focus:border-transparent transition-all shadow-sm text-lg"
                placeholder="請輸入您的姓名..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>

            {/* Results Area */}
            <div>
              {searchQuery === '' ? (
                <div className="text-center py-12 opacity-60">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-gray-300 w-10 h-10" />
                  </div>
                  <p className="text-gray-500">輸入姓名以查詢您的座位</p>
                </div>
              ) : results.length > 0 ? (
                <div>
                  <p className="text-sm text-gray-500 mb-3 ml-1">找到 {results.length} 筆結果</p>
                  {results.map(guest => (
                    <SearchResult key={guest.id} guest={guest} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                   <p className="text-gray-800 font-medium">找不到符合 "{searchQuery}" 的結果</p>
                   <p className="text-sm text-gray-500 mt-2">請確認輸入是否正確，或洽詢接待處。</p>
                </div>
              )}
            </div>
          </div>
        )}

        {currentView === 'map' && (
          <div className="animate-fade-in">
             <TableMap />
          </div>
        )}

      </main>

      {/* Navigation */}
      <NavBar currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
