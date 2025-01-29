import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { Button } from './Button';
import { useAuthStore } from '../store/authStore';

export function Layout() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            {!user && (
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/signin')}
                >
                  Sign In
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}