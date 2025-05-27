import React from 'react';
import ProfileCard from './ProfileCard';
import { useProfiles } from '../context/ProfileContext';
import ProfileSkeleton from './ProfileSkeleton';

const ProfileList: React.FC = () => {
  const { filteredProfiles, loading } = useProfiles();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <ProfileSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (filteredProfiles.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-lg">No profiles found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProfiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;