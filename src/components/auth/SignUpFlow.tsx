import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

const identityOptions = [
  'Straight', 'Gay', 'Lesbian', 'Bi or Pan', 'Prefer not to say',
  'Questioning', 'Queer', 'Asexual', "I don't know", 'Other'
];

const relationshipStatusOptions = [
  'In a relationship', 'Married', 'Separated', 'Divorced',
  'Widowed', 'Single', 'Polyamorous', "It's complicated"
];

const reasonOptions = [
  'Improve our communication',
  'Decide whether we should separate',
  'Resolve conflicts and disagreements',
  'Overcome adultery',
  'Understand myself better',
  'Understand my partner better',
  'Get to a more fair workload',
  'Reduce tension',
  'Prevent separation or divorce',
  'Learn "good" ways to fight',
  'Stop hurting each other',
  "Win back my partner's love",
  'Love my partner again',
  'Discuss issues around raising kids',
  'Improve our sex and intimacy',
  'Divorce or separation mediation',
  'Other'
];

export function SignUpFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    identity: '',
    relationshipStatus: '',
    reasons: [] as string[]
  });

  const handleIdentitySelect = (identity: string) => {
    setFormData(prev => ({ ...prev, identity }));
    setStep(2);
  };

  const handleStatusSelect = (status: string) => {
    setFormData(prev => ({ ...prev, relationshipStatus: status }));
    setStep(3);
  };

  const handleReasonToggle = (reason: string) => {
    setFormData(prev => ({
      ...prev,
      reasons: prev.reasons.includes(reason)
        ? prev.reasons.filter(r => r !== reason)
        : [...prev.reasons, reason]
    }));
  };

  const handleComplete = () => {
    navigate('/signup/create-account', { state: { formData } });
  };

  return (
    <div className="max-w-md mx-auto space-y-8">
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">How do you identify?</h2>
          <div className="space-y-3">
            {identityOptions.map(option => (
              <button
                key={option}
                onClick={() => handleIdentitySelect(option)}
                className="w-full p-3 text-left rounded-lg border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">What is your relationship status?</h2>
          <div className="space-y-3">
            {relationshipStatusOptions.map(option => (
              <button
                key={option}
                onClick={() => handleStatusSelect(option)}
                className="w-full p-3 text-left rounded-lg border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">What led you to consider Connection Compass today?</h2>
          <p className="text-center text-gray-600">Select all that apply</p>
          <div className="space-y-3">
            {reasonOptions.map(option => (
              <label
                key={option}
                className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.reasons.includes(option)}
                  onChange={() => handleReasonToggle(option)}
                  className="mr-3"
                />
                {option}
              </label>
            ))}
          </div>
          <Button
            onClick={handleComplete}
            className="w-full"
            disabled={formData.reasons.length === 0}
          >
            Continue to Account Creation
          </Button>
        </div>
      )}
    </div>
  );
}