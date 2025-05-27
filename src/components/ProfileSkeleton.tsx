import React from 'react';

const ProfileSkeleton: React.FC = () => {
  return (
    <div className="card h-full flex flex-col animate-pulse">
      <div className="bg-gray-200 w-full h-48"></div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full w-14"></div>
        </div>
        
        <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
          <div className="space-y-1">
            <div className="h-3 bg-gray-200 rounded w-32"></div>
            <div className="h-3 bg-gray-200 rounded w-24"></div>
          </div>
          
          <div className="h-5 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;