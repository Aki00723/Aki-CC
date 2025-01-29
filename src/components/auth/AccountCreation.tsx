import React, { useState } from 'react';
import { Button } from '../Button';
import { AccountForm } from './AccountForm';
import { SocialAuth } from './SocialAuth';
import { signUpWithEmail } from '../../lib/auth';

interface AccountCreationProps {
  onSuccess: (userData: any) => void;
  onEmailVerification: (email: string) => void;
}

export function AccountCreation({ onSuccess, onEmailVerification }: AccountCreationProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { user } = await signUpWithEmail(email, password, {
        first_name: firstName,
        last_name: lastName,
      });

      if (user) {
        const userData = {
          id: user.id,
          email,
          firstName,
          lastName,
        };
        
        onSuccess(userData);
        onEmailVerification(email);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <SocialAuth 
        onError={setError}
        onSuccess={(userData) => {
          onSuccess(userData);
          // For social auth, skip email verification
          window.location.href = '/dashboard';
        }}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={handleEmailSignUp} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <AccountForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    </div>
  );
}