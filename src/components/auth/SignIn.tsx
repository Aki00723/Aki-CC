import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { SocialAuth } from './SocialAuth';
import { useAuthStore } from '../../store/authStore';
import { useTestStore } from '../../store/testStore';
import { useAdminStore } from '../../store/adminStore';
import { supabase } from '../../lib/supabase';

export function SignIn() {
  const { setUser } = useAuthStore();
  const { resetTest } = useTestStore();
  const { setCurrentAdmin } = useAdminStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Demo admin account
      if (email === 'admin@connectioncompass.com' && password === 'admin123') {
        const mockAdmin = {
          id: 'admin-id',
          email: 'admin@connectioncompass.com',
          role: 'admin',
          permissions: ['all'],
          created_at: new Date().toISOString(),
        };
        setCurrentAdmin(mockAdmin);
        window.location.href = '/admin';
        return;
      }

      // Regular demo account
      if (email === 'aki@relx.com' && password === '12345') {
        const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password: '12345' // Use a consistent password for demo
        });

        if (signInError) throw signInError;

        if (user) {
          setUser(user);
          resetTest();
          window.location.href = '/dashboard';
          return;
        }
      }

      setError('Invalid credentials. Please use one of the demo accounts.');
    } catch (err) {
      setError('An error occurred during sign in. Please try again.');
      console.error('Sign in error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center">
        <Logo size="lg" className="justify-center" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <Link to="/signup" className="font-medium text-pink-600 hover:text-pink-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <SocialAuth onError={setError} />

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>

            <div className="text-center space-y-2">
              <div className="text-sm text-gray-500">
                Demo user: aki@relx.com / 12345
              </div>
              <div className="text-sm text-gray-500">
                Demo admin: admin@connectioncompass.com / admin123
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}