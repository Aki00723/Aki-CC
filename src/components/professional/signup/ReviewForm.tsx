import React from 'react';
import { Check } from 'lucide-react';

interface ReviewFormProps {
  formData: {
    basicInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      location: string;
      specialties: string[];
    };
    qualifications: {
      degree: string;
      licenseNumber: string;
      licenseState: string;
      yearsExperience: string;
      specializations: string[];
    };
    documents: {
      license: File | null;
      insurance: File | null;
      resume: File | null;
    };
  };
}

export function ReviewForm({ formData }: ReviewFormProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold">Review Your Application</h3>

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4">Basic Information</h4>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-500">Name</dt>
              <dd className="text-sm text-gray-900">{formData.basicInfo.firstName} {formData.basicInfo.lastName}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Email</dt>
              <dd className="text-sm text-gray-900">{formData.basicInfo.email}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Phone</dt>
              <dd className="text-sm text-gray-900">{formData.basicInfo.phone}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Location</dt>
              <dd className="text-sm text-gray-900">{formData.basicInfo.location}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4">Qualifications</h4>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-500">Degree</dt>
              <dd className="text-sm text-gray-900">{formData.qualifications.degree}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">License Number</dt>
              <dd className="text-sm text-gray-900">{formData.qualifications.licenseNumber}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">State</dt>
              <dd className="text-sm text-gray-900">{formData.qualifications.licenseState}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Experience</dt>
              <dd className="text-sm text-gray-900">{formData.qualifications.yearsExperience} years</dd>
            </div>
          </dl>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4">Documents</h4>
          <ul className="space-y-2">
            {Object.entries(formData.documents).map(([key, file]) => (
              <li key={key} className="flex items-center text-sm">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span className="capitalize">{key}:</span>
                <span className="ml-2 text-gray-600">{file?.name || 'Not uploaded'}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-700">
            Please review all information carefully before submitting. By submitting this application, you confirm that all provided information is accurate and complete.
          </p>
        </div>
      </div>
    </div>
  );
}