import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Shield, Brain, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { usePaymentStore } from '../store/paymentStore';

const stripePromise = loadStripe('your_publishable_key');

export function Purchase() {
  const navigate = useNavigate();
  const { setHasPurchased } = usePaymentStore();

  const handlePurchase = async () => {
    // For demo purposes, we'll simulate a successful payment
    setHasPurchased(true);
    navigate('/test');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Unlock Your Relational Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover your unique relationship style and get personalized insights to improve your relationships
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 bg-primary-100 rounded-full p-3">
                <Brain className="h-6 w-6 text-primary-600" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Comprehensive Relationship Assessment
                </h3>
                <p className="mt-1 text-gray-500">One-time purchase, lifetime access</p>
              </div>
              <div className="flex-1 text-right">
                <p className="text-3xl font-bold text-gray-900">$12</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-600">Secure, encrypted test results</p>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-600">Detailed insights into your relationship style</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-600">Takes only 15-20 minutes to complete</p>
              </div>
            </div>

            <Button
              onClick={handlePurchase}
              className="w-full py-4 text-lg bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all"
            >
              Purchase Now - $12
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Secure payment powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}