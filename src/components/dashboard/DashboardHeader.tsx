import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { Menu } from 'lucide-react';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { user, signOut } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Logo className="ml-2 lg:ml-0" />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700 hidden sm:block">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}