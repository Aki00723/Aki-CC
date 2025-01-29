import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../Button';

interface EmailVerificationProps {
  email: string;
  onResendEmail: () => void;
}

export function EmailVerification({ email, onResendEmail }: EmailVerificationProps) {
  return (
    <div className="max-w-md mx-auto text-center space-y-6">
      <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
        <Mail className="w-8 h-8 text-pink-600" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Verify your email</h2>
        <p className="text-gray-600">
          We've sent a verification link to <span className="font-medium">{email}</span>
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700">
        Please check your email and click the verification link to continue.
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">Didn't receive the email?</p>
        <Button variant="outline" onClick={onResendEmail}>
          Resend verification email
        </Button>
      </div>
    </div>
  );
}