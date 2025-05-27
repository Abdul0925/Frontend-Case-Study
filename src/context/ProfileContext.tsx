import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Profile, ProfileFormData } from '../types';
import { mockProfiles } from '../data/mockProfiles';

interface ProfileContextType {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
  selectedProfileId: string | null;
  setSelectedProfileId: (id: string | null) => void;
  getProfileById: (id: string) => Profile | undefined;
  addProfile: (profileData: ProfileFormData) => void;
  updateProfile: (id: string, profileData: ProfileFormData) => void;
  deleteProfile: (id: string) => void;
  searchProfiles: (query: string) => void;
  filteredProfiles: Profile[];
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setProfiles(mockProfiles);
          setFilteredProfiles(mockProfiles);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch profiles');
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const getProfileById = (id: string) => {
    return profiles.find((profile) => profile.id === id);
  };

  const addProfile = (profileData: ProfileFormData) => {
    const newProfile: Profile = {
      id: Date.now().toString(),
      name: profileData.name,
      description: profileData.description,
      photoUrl: profileData.photoUrl,
      address: {
        street: profileData.street,
        city: profileData.city,
        state: profileData.state,
        zip: profileData.zip,
        country: profileData.country,
        coordinates: {
          lat: profileData.lat,
          lng: profileData.lng,
        },
      },
      contactInfo: {
        email: profileData.email,
        phone: profileData.phone,
        website: profileData.website,
      },
      interests: profileData.interests ? profileData.interests.split(',').map(i => i.trim()) : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setProfiles((prevProfiles) => {
      const updatedProfiles = [...prevProfiles, newProfile];
      setFilteredProfiles(updatedProfiles);
      return updatedProfiles;
    });
  };

  const updateProfile = (id: string, profileData: ProfileFormData) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = prevProfiles.map((profile) => {
        if (profile.id === id) {
          return {
            ...profile,
            name: profileData.name,
            description: profileData.description,
            photoUrl: profileData.photoUrl,
            address: {
              street: profileData.street,
              city: profileData.city,
              state: profileData.state,
              zip: profileData.zip,
              country: profileData.country,
              coordinates: {
                lat: profileData.lat,
                lng: profileData.lng,
              },
            },
            contactInfo: {
              email: profileData.email,
              phone: profileData.phone,
              website: profileData.website,
            },
            interests: profileData.interests ? profileData.interests.split(',').map(i => i.trim()) : [],
            updatedAt: new Date().toISOString(),
          };
        }
        return profile;
      });

      setFilteredProfiles(updatedProfiles);
      return updatedProfiles;
    });
  };

  const deleteProfile = (id: string) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = prevProfiles.filter((profile) => profile.id !== id);
      setFilteredProfiles(updatedProfiles);
      return updatedProfiles;
    });

    if (selectedProfileId === id) {
      setSelectedProfileId(null);
    }
  };

  const searchProfiles = (query: string) => {
    if (!query.trim()) {
      setFilteredProfiles(profiles);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filtered = profiles.filter((profile) => {
      return (
        profile.name.toLowerCase().includes(lowerCaseQuery) ||
        profile.description.toLowerCase().includes(lowerCaseQuery) ||
        profile.address.city.toLowerCase().includes(lowerCaseQuery) ||
        profile.address.state.toLowerCase().includes(lowerCaseQuery) ||
        profile.address.country.toLowerCase().includes(lowerCaseQuery) ||
        profile.interests?.some((interest) => 
          interest.toLowerCase().includes(lowerCaseQuery)
        )
      );
    });

    setFilteredProfiles(filtered);
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        loading,
        error,
        selectedProfileId,
        setSelectedProfileId,
        getProfileById,
        addProfile,
        updateProfile,
        deleteProfile,
        searchProfiles,
        filteredProfiles,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfiles must be used within a ProfileProvider');
  }
  return context;
};