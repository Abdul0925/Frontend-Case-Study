import React, { useState } from 'react';
import { useProfiles } from '../context/ProfileContext';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import ProfileForm from '../components/ProfileForm';
import { ProfileFormData } from '../types';

const AdminPage: React.FC = () => {
  const { 
    profiles, 
    loading, 
    error, 
    addProfile, 
    updateProfile, 
    deleteProfile, 
    getProfileById 
  } = useProfiles();
  
  const navigate = useNavigate();
  
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfileId, setCurrentProfileId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleCreate = () => {
    setIsCreating(true);
    setIsEditing(false);
    setCurrentProfileId(null);
  };
  
  const handleEdit = (id: string) => {
    setCurrentProfileId(id);
    setIsEditing(true);
    setIsCreating(false);
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this profile? This action cannot be undone.')) {
      deleteProfile(id);
    }
  };
  
  const handleSubmit = async (formData: ProfileFormData) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (isCreating) {
      addProfile(formData);
    } else if (isEditing && currentProfileId) {
      updateProfile(currentProfileId, formData);
    }
    
    setIsSubmitting(false);
    setIsCreating(false);
    setIsEditing(false);
    setCurrentProfileId(null);
  };
  
  const handleCancel = () => {
    setIsCreating(false);
    setIsEditing(false);
    setCurrentProfileId(null);
  };
  
  const handleView = (id: string) => {
    navigate(`/profile/${id}`);
  };
  
  const filteredProfiles = searchTerm
    ? profiles.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.address.state.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : profiles;
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading profiles...</p>
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
  
  if (isCreating || isEditing) {
    const profile = currentProfileId ? getProfileById(currentProfileId) : undefined;
    
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isCreating ? 'Create New Profile' : 'Edit Profile'}
          </h1>
          <p className="text-gray-600">
            {isCreating 
              ? 'Fill in the details to create a new profile.'
              : 'Update the profile information below.'}
          </p>
        </div>
        
        <ProfileForm 
          initialData={profile}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Management</h1>
          <p className="text-gray-600">Add, edit, or delete profiles from the system.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={handleCreate}
            className="btn btn-primary flex items-center"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Profile
          </button>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search profiles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProfiles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                    {searchTerm 
                      ? 'No profiles found matching your search criteria.'
                      : 'No profiles found. Click "Add Profile" to create one.'}
                  </td>
                </tr>
              ) : (
                filteredProfiles.map((profile) => (
                  <tr key={profile.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img 
                            className="h-10 w-10 rounded-full object-cover" 
                            src={profile.photoUrl} 
                            alt={profile.name} 
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{profile.name}</div>
                          <div className="text-sm text-gray-500 truncate max-w-[200px]">
                            {profile.description.substring(0, 50)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {profile.address.city}, {profile.address.state}
                      </div>
                      <div className="text-sm text-gray-500">{profile.address.country}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {profile.contactInfo?.email && (
                        <div className="text-sm text-gray-900">{profile.contactInfo.email}</div>
                      )}
                      {profile.contactInfo?.phone && (
                        <div className="text-sm text-gray-500">{profile.contactInfo.phone}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(profile.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleView(profile.id)}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Profile"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(profile.id)}
                          className="text-amber-600 hover:text-amber-900"
                          title="Edit Profile"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(profile.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Profile"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;