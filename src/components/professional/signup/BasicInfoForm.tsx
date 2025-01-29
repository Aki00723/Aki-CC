import React from 'react';
import { User, Mail, Phone, MapPin, Tags } from 'lucide-react';

interface BasicInfoFormProps {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    specialties: string[];
  };
  onChange: (data: Partial<BasicInfoFormProps['data']>) => void;
}

const specialtyOptions = [
  'Marriage Counseling',
  'Couples Therapy',
  'Family Therapy',
  'Relationship Coaching',
  'Premarital Counseling',
  'Divorce Mediation'
];

export function BasicInfoForm({ data, onChange }: BasicInfoFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Basic Information</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <div className="mt-1 relative">
            <input
              id="firstName"
              type="text"
              value={data.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
            <User className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <div className="mt-1 relative">
            <input
              id="lastName"
              type="text"
              value={data.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
            <User className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="mt-1 relative">
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="mt-1 relative">
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          <Phone className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <div className="mt-1 relative">
          <input
            id="location"
            type="text"
            value={data.location}
            onChange={(e) => onChange({ location: e.target.value })}
            required
            placeholder="City, State"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          <MapPin className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Specialties
        </label>
        <div className="mt-2 space-y-2">
          {specialtyOptions.map((specialty) => (
            <label key={specialty} className="flex items-center">
              <input
                type="checkbox"
                checked={data.specialties.includes(specialty)}
                onChange={(e) => {
                  const newSpecialties = e.target.checked
                    ? [...data.specialties, specialty]
                    : data.specialties.filter(s => s !== specialty);
                  onChange({ specialties: newSpecialties });
                }}
                className="rounded text-pink-500 focus:ring-pink-500 mr-2"
              />
              {specialty}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}