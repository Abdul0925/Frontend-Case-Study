import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useProfiles } from '../context/ProfileContext';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchProfiles } = useProfiles();
  
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchProfiles(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, searchProfiles]);

  const handleClear = () => {
    setSearchTerm('');
    searchProfiles('');
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search by name, location, interests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {searchTerm && (
          <button 
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            onClick={handleClear}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;