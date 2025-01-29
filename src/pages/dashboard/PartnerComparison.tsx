import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/Button';
import { useTestStore } from '../../store/testStore';
import { usePartnerStore } from '../../store/partnerStore';
import { getCompatibilityAnalysis } from '../../utils/compatibilityUtils';
import { PartnerPayment } from '../../components/dashboard/PartnerPayment';
import { PartnerInvite } from '../../components/dashboard/PartnerInvite';

export function PartnerComparison() {
  const navigate = useNavigate();
  const { result, partnerResult } = useTestStore();
  const { invitationSent, partnerEmail } = usePartnerStore();
  const [step, setStep] = useState<'payment' | 'invite' | 'waiting' | 'results'>(
    invitationSent ? 'waiting' : 'payment'
  );

  if (!result) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4">No Test Results Found</h2>
        <p className="text-gray-600 mb-6">
          Take the relationship assessment to see your results.
        </p>
        <Button onClick={() => navigate('/test')}>
          Take the Assessment
        </Button>
      </div>
    );
  }

  if (step === 'payment') {
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-semibold text-gray-900">Partner Comparison</h1>
        <PartnerPayment onComplete={() => setStep('invite')} />
      </div>
    );
  }

  if (step === 'invite') {
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-semibold text-gray-900">Partner Comparison</h1>
        <PartnerInvite onComplete={() => setStep('waiting')} />
      </div>
    );
  }

  if (step === 'waiting' || !partnerResult) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold">Waiting for Partner</h2>
          {partnerEmail && (
            <p className="text-gray-600">
              We've sent an invitation to {partnerEmail}. Once they complete the assessment,
              you'll be able to see your relationship insights here.
            </p>
          )}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">What's Next:</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Your partner will receive an email with instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>They'll create an account and take the assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>You'll get notified when their results are ready</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Show comparison results
  const analysis = getCompatibilityAnalysis(result, partnerResult);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-gray-900">Relationship Dynamics</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-pink-500" />
            <h2 className="text-xl font-semibold">Your Compatibility</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Overall Match</span>
              <span className="text-2xl font-bold text-pink-600">{analysis.matchScore}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${analysis.matchScore}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-pink-500" />
            <h2 className="text-xl font-semibold">Relationship Strengths</h2>
          </div>
          <ul className="space-y-3">
            {analysis.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-pink-500" />
          <h2 className="text-xl font-semibold">Growth Opportunities</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {analysis.challenges.map((challenge, index) => (
            <div key={index} className="bg-pink-50 rounded-lg p-4">
              <h3 className="font-semibold text-pink-800 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-pink-700">Recommended Actions:</h4>
                <ul className="space-y-1">
                  {challenge.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="text-sm text-gray-600">• {action}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Your Combined Dynamics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {analysis.dynamics.map((dynamic, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-pink-700 mb-2">{dynamic.area}</h3>
              <p className="text-gray-600 text-sm">{dynamic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}