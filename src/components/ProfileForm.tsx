import React, { useState, useEffect } from 'react';
import { Profile, ProfileFormData } from '../types';
import { Loader2 } from 'lucide-react';

interface ProfileFormProps {
  initialData?: Profile;
  onSubmit: (formData: ProfileFormData) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

const defaultFormData: ProfileFormData = {
  name: '',
  description: '',
  photoUrl: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  lat: 0,
  lng: 0,
  email: '',
  phone: '',
  website: '',
  interests: ''
};

const ProfileForm: React.FC<ProfileFormProps> = ({ 
  initialData, 
  onSubmit, 
  onCancel,
  isSubmitting
}) => {
  const [formData, setFormData] = useState<ProfileFormData>(defaultFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        description: initialData.description,
        photoUrl: initialData.photoUrl,
        street: initialData.address.street,
        city: initialData.address.city,
        state: initialData.address.state,
        zip: initialData.address.zip,
        country: initialData.address.country,
        lat: initialData.address.coordinates.lat,
        lng: initialData.address.coordinates.lng,
        email: initialData.contactInfo?.email || '',
        phone: initialData.contactInfo?.phone || '',
        website: initialData.contactInfo?.website || '',
        interests: initialData.interests?.join(', ') || ''
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    const requiredFields = ['name', 'description', 'photoUrl', 'street', 'city', 'state', 'country'];
    requiredFields.forEach(field => {
      if (!formData[field as keyof ProfileFormData]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    if (formData.photoUrl && !formData.photoUrl.match(/^https?:\/\/.+\..+/)) {
      newErrors.photoUrl = 'Please enter a valid URL';
    }
    
    if (isNaN(formData.lat) || formData.lat < -90 || formData.lat > 90) {
      newErrors.lat = 'Latitude must be between -90 and 90';
    }
    
    if (isNaN(formData.lng) || formData.lng < -180 || formData.lng > 180) {
      newErrors.lng = 'Longitude must be between -180 and 180';
    }
    
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="label">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`input ${errors.name ? 'border-red-500' : ''} p-4`}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="photoUrl" className="label">Photo URL *</label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              className={`input ${errors.photoUrl ? 'border-red-500' : ''} p-4`}
              placeholder="https://example.com/photo.jpg"
            />
            {errors.photoUrl && <p className="error-text">{errors.photoUrl}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="description" className="label">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className={`input ${errors.description ? 'border-red-500' : ''} p-4`}
            ></textarea>
            {errors.description && <p className="error-text">{errors.description}</p>}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="street" className="label">Street Address *</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className={`input ${errors.street ? 'border-red-500' : ''} p-4`}
            />
            {errors.street && <p className="error-text">{errors.street}</p>}
          </div>
          
          <div>
            <label htmlFor="city" className="label">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`input ${errors.city ? 'border-red-500' : ''} p-4`}
            />
            {errors.city && <p className="error-text">{errors.city}</p>}
          </div>
          
          <div>
            <label htmlFor="state" className="label">State/Province *</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`input ${errors.state ? 'border-red-500' : ''} p-4`}
            />
            {errors.state && <p className="error-text">{errors.state}</p>}
          </div>
          
          <div>
            <label htmlFor="zip" className="label">ZIP/Postal Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="input p-4"
            />
          </div>
          
          <div>
            <label htmlFor="country" className="label">Country *</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`input ${errors.country ? 'border-red-500' : ''} p-4`}
            />
            {errors.country && <p className="error-text">{errors.country}</p>}
          </div>
          
          <div>
            <label htmlFor="lat" className="label">Latitude *</label>
            <input
              type="number"
              id="lat"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              step="any"
              className={`input ${errors.lat ? 'border-red-500' : ''} p-4`}
            />
            {errors.lat && <p className="error-text">{errors.lat}</p>}
          </div>
          
          <div>
            <label htmlFor="lng" className="label">Longitude *</label>
            <input
              type="number"
              id="lng"
              name="lng"
              value={formData.lng}
              onChange={handleChange}
              step="any"
              className={`input ${errors.lng ? 'border-red-500' : ''} p-4`}
            />
            {errors.lng && <p className="error-text">{errors.lng}</p>}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input ${errors.email ? 'border-red-500' : ''} p-4`}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="label">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input p-4"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="website" className="label">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="input p-4"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Interests</h3>
        <div>
          <label htmlFor="interests" className="label">Interests (comma separated)</label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="input p-4"
            placeholder="e.g. Photography, Travel, Cooking"
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-outline"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </span>
          ) : (
            'Save Profile'
          )}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;