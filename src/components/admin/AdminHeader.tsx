import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, LogOut } from 'lucide-react';
import { Button } from '../Button';
import { useAdminStore } from '../../store/adminStore';

export function AdminHeader() {
  const navigate = useNavigate();
  const { currentAdmin } = useAdminStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="font-semibold text-xl text-pink-600">
            Connection Compass Admin
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">
              {currentAdmin?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/admin/settings')}
            >
              <Settings className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/admin/logout')}
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}