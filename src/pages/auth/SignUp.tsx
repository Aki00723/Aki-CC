import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { AccountCreation } from '../../components/auth/AccountCreation';
import { EmailVerification } from '../../components/auth/EmailVerification';
import { RegistrationFlow } from '../../components/auth/RegistrationFlow';

export function SignUp() {
  const [step, setStep] = useState<'account' | 'registration' | 'verification'>('account');
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);
  const [userData, setUserData] = useState(null);

  if (step === 'verification' && verificationEmail) {
    return (
      <EmailVerification 
        email={verificationEmail}
        onResendEmail={() => {
          // Implement resend logic
        }}
      />
    );
  }

  return (
    <>
      <div className="text-center">
        <Logo size="lg" className="justify-center" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-pink-600 hover:text-pink-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8">
        {step === 'account' && (
          <AccountCreation 
            onSuccess={(data) => {
              setUserData(data);
              setStep('registration');
            }}
            onEmailVerification={(email) => {
              setVerificationEmail(email);
              setStep('verification');
            }}
          />
        )}
        {step === 'registration' && userData && (
          <RegistrationFlow 
            onComplete={() => {
              // Navigate to dashboard after completing registration
              window.location.href = '/dashboard';
            }}
          />
        )}
      </div>
    </>
  );
}