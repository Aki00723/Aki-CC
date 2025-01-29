import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { resetPassword } from '../../lib/auth';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center space-y-4">
        <Mail className="w-12 h-12 text-pink-500 mx-auto" />
        <h2 className="text-2xl font-bold">Check your email</h2>
        <p className="text-gray-600">
          We've sent password reset instructions to {email}
        </p>
        <Link to="/signin" className="text-pink-600 hover:text-pink-700 font-medium">
          Return to sign in
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-center">
        <Logo size="lg" className="justify-center" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Reset your password</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1 relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
            <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Sending instructions...' : 'Send reset instructions'}
        </Button>

        <div className="text-center">
          <Link to="/signin" className="text-sm text-pink-600 hover:text-pink-500">
            Back to sign in
          </Link>
        </div>
      </form>
    </>
  );
}