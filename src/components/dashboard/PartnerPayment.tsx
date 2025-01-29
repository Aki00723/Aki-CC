import React from 'react';
import { Shield, Brain, Clock } from 'lucide-react';
import { Button } from '../Button';

interface PartnerPaymentProps {
  onComplete: () => void;
}

export function PartnerPayment({ onComplete }: PartnerPaymentProps) {
  const handlePurchase = async () => {
    // In a real app, this would integrate with Stripe
    // For demo, we'll simulate a successful payment
    await new Promise(resolve => setTimeout(resolve, 1000));
    onComplete();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-2xl font-semibold">Partner Assessment</h2>
        <p className="text-gray-600">
          Purchase an assessment for your partner to unlock detailed relationship insights
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0 bg-pink-100 rounded-full p-3">
              <Brain className="h-6 w-6 text-pink-600" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Partner Assessment Package</h3>
              <p className="text-gray-500">One-time purchase, includes:</p>
            </div>
            <div className="flex-1 text-right">
              <p className="text-2xl font-bold">$12</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-gray-600">Complete relationship analysis</p>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-gray-600">Personalized insights and recommendations</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-gray-600">Takes only 15-20 minutes to complete</p>
            </div>
          </div>

          <Button
            onClick={handlePurchase}
            className="w-full py-3 text-lg"
          >
            Purchase Now - $12
          </Button>

          <p className="text-sm text-gray-500 text-center">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}