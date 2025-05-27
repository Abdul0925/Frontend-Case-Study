import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Info, Mail, Phone } from 'lucide-react';
import { Profile } from '../types';
import { useProfiles } from '../context/ProfileContext';
import { useMap } from '../context/MapContext';

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { setSelectedProfileId } = useProfiles();
  const { flyToCoordinates } = useMap();

  const handleViewOnMap = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProfileId(profile.id);
    flyToCoordinates(profile.address.coordinates.lat, profile.address.coordinates.lng);
  };

  return (
    <div className="card card-hover h-full flex flex-col">
      <div className="relative w-full h-48">
        <img 
          src={profile.photoUrl} 
          alt={profile.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 m-2">
          <button 
            onClick={handleViewOnMap}
            className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded-md text-sm transition-colors duration-200 shadow-md"
          >
            <MapPin size={16} />
            <span>View on Map</span>
          </button>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{profile.name}</h3>
        
        <p className="text-gray-600 mb-2 text-sm flex items-center">
          <MapPin size={14} className="mr-1 text-gray-400" />
          {profile.address.city}, {profile.address.state}
        </p>
        
        <p className="text-gray-700 text-sm mb-4 flex-grow">
          {profile.description.length > 120 
            ? `${profile.description.substring(0, 120)}...` 
            : profile.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {profile.interests && profile.interests.slice(0, 3).map((interest, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {interest}
            </span>
          ))}
          {profile.interests && profile.interests.length > 3 && (
            <span className="text-xs text-gray-500 flex items-center px-1">
              +{profile.interests.length - 3} more
            </span>
          )}
        </div>
        
        <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
          <div className="space-y-1">
            {profile.contactInfo?.email && (
              <div className="flex items-center text-xs text-gray-600">
                <Mail size={12} className="mr-1" />
                <span className="truncate max-w-[150px]">
                  {profile.contactInfo.email}
                </span>
              </div>
            )}
            {profile.contactInfo?.phone && (
              <div className="flex items-center text-xs text-gray-600">
                <Phone size={12} className="mr-1" />
                <span>{profile.contactInfo.phone}</span>
              </div>
            )}
          </div>
          
          <Link 
            to={`/profile/${profile.id}`} 
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <Info size={16} className="mr-1" />
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;