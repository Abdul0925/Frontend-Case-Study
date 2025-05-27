export interface Profile {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
  address: Address;
  contactInfo?: ContactInfo;
  interests?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  website?: string;
}

export interface ProfileFormData {
  name: string;
  description: string;
  photoUrl: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  lat: number;
  lng: number;
  email?: string;
  phone?: string;
  website?: string;
  interests?: string;
}

export interface MapMarker {
  id: string;
  coordinates: [number, number];
  profileId: string;
}