import React from 'react';
import ProfileList from '../components/ProfileList';
import SearchBar from '../components/SearchBar';
import MapComponent from '../components/MapComponent';
import { useProfiles } from '../context/ProfileContext';
import { Map } from 'lucide-react';

const HomePage: React.FC = () => {
  const { loading, error } = useProfiles();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile Explorer</h1>
        <p className="text-gray-600 max-w-3xl">
          Browse profiles and discover their locations on the interactive map. 
          Click "View on Map" to see where each person is located.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <SearchBar />
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          <ProfileList />
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="bg-blue-600 text-white p-3 flex items-center">
                <Map className="h-5 w-5 mr-2" />
                <h2 className="font-medium">Interactive Map</h2>
              </div>
              <div className="p-3 text-sm text-gray-600">
                <p>Click on a profile card's "View on Map" button to see their location.</p>
              </div>
            </div>
            
            <MapComponent className="h-[500px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;