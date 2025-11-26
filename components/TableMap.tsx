import React, { useState } from 'react';
import { RAW_TABLES, TABLE_MAP_LAYOUT } from '../constants';
import { TableData } from '../types';
import { X } from 'lucide-react';

const TableMap: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<TableData | null>(null);

  const handleTableClick = (tableNum: string | number) => {
    const tableData = RAW_TABLES.find(t => t.tableNumber.toString() === tableNum.toString());
    if (tableData) {
      setSelectedTable(tableData);
    } else {
        // Fallback for empty tables not in detailed data
        setSelectedTable({
            tableNumber: tableNum,
            category: '未排定/預備',
            guests: []
        });
    }
  };

  const getTableColor = (tableNum: string | number) => {
    // Styling logic based on table number/category inferred
    if (tableNum === '主桌') return 'bg-purple-100 border-purple-300 text-purple-700';
    if (typeof tableNum === 'number') {
        if (tableNum <= 2) return 'bg-blue-100 border-blue-300 text-blue-700'; // Groom Family
        if (tableNum === 3) return 'bg-pink-100 border-pink-300 text-pink-700'; // Bride Relative
        if (tableNum >= 5 && tableNum <= 10) return 'bg-blue-50 border-blue-200 text-blue-600'; // Groom side
        if (tableNum >= 21) return 'bg-green-50 border-green-200 text-green-600'; // Friends
    }
    return 'bg-gray-100 border-gray-300 text-gray-500';
  };

  return (
    <div className="pb-20">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">婚宴座位平面圖</h2>
        <p className="text-sm text-gray-500">點擊桌號查看詳細名單</p>
      </div>

      {/* Grid Layout for Tables */}
      <div className="grid grid-cols-4 gap-4 px-2">
        {TABLE_MAP_LAYOUT.map((tableNum, idx) => (
          <div key={idx} className={`${tableNum === '主桌' ? 'col-span-4 flex justify-center mb-4' : ''}`}>
             <button
              onClick={() => handleTableClick(tableNum)}
              className={`
                ${tableNum === '主桌' ? 'w-32 h-32 rounded-full' : 'w-16 h-16 rounded-full'} 
                flex items-center justify-center border-2 shadow-sm font-bold text-lg
                transition-transform active:scale-95
                ${getTableColor(tableNum)}
              `}
            >
              {tableNum}
            </button>
          </div>
        ))}
      </div>

      {/* Table Detail Modal */}
      {selectedTable && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h3 className="text-2xl font-bold text-wedding-red">第 {selectedTable.tableNumber} 桌</h3>
                <p className="text-sm text-gray-500">{selectedTable.category}</p>
                {selectedTable.notes && <p className="text-xs text-orange-600 mt-1">{selectedTable.notes}</p>}
              </div>
              <button 
                onClick={() => setSelectedTable(null)}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 flex-1">
              {selectedTable.guests.length > 0 ? (
                <ul className="space-y-3">
                  {selectedTable.guests.map((guest, i) => (
                    <li key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-mono">
                          {guest.seatNumber}
                        </span>
                        <span className="font-medium text-gray-800">{guest.name}</span>
                      </div>
                      {guest.note && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          {guest.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  此桌尚無名單資料
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableMap;
