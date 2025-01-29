import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ClipboardList, Users, Settings, Heart, X } from 'lucide-react';

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Test Results', href: '/dashboard/results', icon: ClipboardList },
  { name: 'Professional Network', href: '/dashboard/network', icon: Users },
  { name: 'Partner Comparison', href: '/dashboard/partner-comparison', icon: Heart },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 bottom-0 w-64 bg-white shadow-sm z-30 transform transition-transform duration-300 ease-in-out lg:relative lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center justify-between px-4 lg:hidden">
          <span className="font-semibold text-gray-900">Menu</span>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => onClose()}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-pink-50 text-pink-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}