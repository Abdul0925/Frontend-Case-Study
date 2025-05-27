import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProfiles } from '../context/ProfileContext';
import { useMap } from '../context/MapContext';
import MapComponent from '../components/MapComponent';
import { MapPin, Mail, Phone, Globe, ChevronLeft, MapIcon } from 'lucide-react';
import { Loader2 } from 'lucide-react';

const ProfileDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProfileById, loading, error, setSelectedProfileId } = useProfiles();
  const { flyToCoordinates } = useMap();
  
  const profile = id ? getProfileById(id) : undefined;
  
  useEffect(() => {
    if (profile) {
      setSelectedProfileId(profile.id);
      
      const timer = setTimeout(() => {
        flyToCoordinates(
          profile.address.coordinates.lat,
          profile.address.coordinates.lng,
          14
        );
      }, 1000);
      
      return () => {
        clearTimeout(timer);
        setSelectedProfileId(null);
      };
    }
  }, [profile, setSelectedProfileId, flyToCoordinates]);
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Profile Not Found</h2>
          <p className="text-gray-600 mb-6">The profile you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn btn-primary">
            Back to Profiles
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Profiles
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h1 className="text-3xl font-bold text-white mb-2">{profile.name}</h1>
                <div className="flex items-center text-white/90">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>
                    {profile.address.city}, {profile.address.state}, {profile.address.country}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="text-gray-700">{profile.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Address</h2>
                <address className="not-italic text-gray-700">
                  {profile.address.street}<br />
                  {profile.address.city}, {profile.address.state} {profile.address.zip}<br />
                  {profile.address.country}
                </address>
              </div>
              
              {profile.interests && profile.interests.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Interests</h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {profile.contactInfo && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                  <ul className="space-y-2">
                    {profile.contactInfo.email && (
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-2" />
                        <a 
                          href={`mailto:${profile.contactInfo.email}`} 
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {profile.contactInfo.email}
                        </a>
                      </li>
                    )}
                    
                    {profile.contactInfo.phone && (
                      <li className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-2" />
                        <a 
                          href={`tel:${profile.contactInfo.phone}`} 
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {profile.contactInfo.phone}
                        </a>
                      </li>
                    )}
                    
                    {profile.contactInfo.website && (
                      <li className="flex items-center">
                        <Globe className="h-5 w-5 text-gray-500 mr-2" />
                        <a 
                          href={`https://${profile.contactInfo.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {profile.contactInfo.website}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="bg-blue-600 text-white p-3 flex items-center">
                <MapIcon className="h-5 w-5 mr-2" />
                <h2 className="font-medium">{profile.name}'s Location</h2>
              </div>
              <div className="p-3 text-sm text-gray-600">
                <p>Showing the exact address location on the map.</p>
              </div>
            </div>
            
            <MapComponent className="h-[400px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailPage;