import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ProfessionalSignUpForm } from '../../components/professional/ProfessionalSignUpForm';
import { Logo } from '../../components/Logo';

export function ProfessionalSignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <Logo size="lg" className="justify-center" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Professional Application</h2>
        <p className="mt-2 text-gray-600">
          Join our network of relationship professionals
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <ProfessionalSignUpForm
          step={step}
          onNext={() => setStep(s => s + 1)}
          onBack={() => setStep(s => s - 1)}
          onComplete={() => navigate('/professional/dashboard')}
        />
      </div>
    </div>
  );
}