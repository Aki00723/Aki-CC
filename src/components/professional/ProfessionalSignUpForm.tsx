import React, { useState } from 'react';
import { Button } from '../Button';
import { BasicInfoForm } from './signup/BasicInfoForm';
import { QualificationsForm } from './signup/QualificationsForm';
import { DocumentsForm } from './signup/DocumentsForm';
import { ReviewForm } from './signup/ReviewForm';

interface ProfessionalSignUpFormProps {
  step: number;
  onNext: () => void;
  onBack: () => void;
  onComplete: () => void;
}

export function ProfessionalSignUpForm({
  step,
  onNext,
  onBack,
  onComplete
}: ProfessionalSignUpFormProps) {
  const [formData, setFormData] = useState({
    basicInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      specialties: []
    },
    qualifications: {
      degree: '',
      licenseNumber: '',
      licenseState: '',
      yearsExperience: '',
      specializations: []
    },
    documents: {
      license: null,
      insurance: null,
      resume: null
    }
  });

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      onNext();
    } else {
      // Submit application
      onComplete();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-8">
        {step === 1 && (
          <BasicInfoForm
            data={formData.basicInfo}
            onChange={(data) => updateFormData('basicInfo', data)}
          />
        )}
        {step === 2 && (
          <QualificationsForm
            data={formData.qualifications}
            onChange={(data) => updateFormData('qualifications', data)}
          />
        )}
        {step === 3 && (
          <DocumentsForm
            data={formData.documents}
            onChange={(data) => updateFormData('documents', data)}
          />
        )}
        {step === 4 && (
          <ReviewForm formData={formData} />
        )}
      </div>

      <div className="flex justify-between pt-6 border-t">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button type="submit" className="ml-auto">
          {step === 4 ? 'Submit Application' : 'Continue'}
        </Button>
      </div>
    </form>
  );
}