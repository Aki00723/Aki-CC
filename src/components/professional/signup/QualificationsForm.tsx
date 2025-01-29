import React from 'react';
import { GraduationCap, Award, MapPin, Clock } from 'lucide-react';

interface QualificationsFormProps {
  data: {
    degree: string;
    licenseNumber: string;
    licenseState: string;
    yearsExperience: string;
    specializations: string[];
  };
  onChange: (data: Partial<QualificationsFormProps['data']>) => void;
}

const specializationOptions = [
  'Cognitive Behavioral Therapy',
  'Emotionally Focused Therapy',
  'Gottman Method',
  'Solution-Focused Therapy',
  'Narrative Therapy',
  'Psychodynamic Therapy'
];

export function QualificationsForm({ data, onChange }: QualificationsFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Professional Qualifications</h3>

      <div>
        <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
          Highest Degree Earned
        </label>
        <div className="mt-1 relative">
          <select
            id="degree"
            value={data.degree}
            onChange={(e) => onChange({ degree: e.target.value })}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="">Select degree...</option>
            <option value="PhD">Ph.D. in Psychology</option>
            <option value="PsyD">Psy.D.</option>
            <option value="MA">Master's in Psychology</option>
            <option value="MSW">Master's in Social Work</option>
            <option value="MFT">Master's in Family Therapy</option>
          </select>
          <GraduationCap className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
          Professional License Number
        </label>
        <div className="mt-1 relative">
          <input
            id="licenseNumber"
            type="text"
            value={data.licenseNumber}
            onChange={(e) => onChange({ licenseNumber: e.target.value })}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          <Award className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="licenseState" className="block text-sm font-medium text-gray-700">
          State of Licensure
        </label>
        <div className="mt-1 relative">
          <input
            id="licenseState"
            type="text"
            value={data.licenseState}
            onChange={(e) => onChange({ licenseState: e.target.value })}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          <MapPin className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700">
          Years of Experience
        </label>
        <div className="mt-1 relative">
          <input
            id="yearsExperience"
            type="number"
            min="0"
            value={data.yearsExperience}
            onChange={(e) => onChange({ yearsExperience: e.target.value })}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          <Clock className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Therapeutic Approaches
        </label>
        <div className="mt-2 space-y-2">
          {specializationOptions.map((specialization) => (
            <label key={specialization} className="flex items-center">
              <input
                type="checkbox"
                checked={data.specializations.includes(specialization)}
                onChange={(e) => {
                  const newSpecializations = e.target.checked
                    ? [...data.specializations, specialization]
                    : data.specializations.filter(s => s !== specialization);
                  onChange({ specializations: newSpecializations });
                }}
                className="rounded text-pink-500 focus:ring-pink-500 mr-2"
              />
              {specialization}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}