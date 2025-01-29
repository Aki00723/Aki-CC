import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Shield, User, Lock } from 'lucide-react';
import { Button } from '../../components/Button';

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    permissions: ['all']
  },
  {
    id: '2',
    name: 'Manager',
    permissions: ['read:users', 'write:users', 'read:analytics']
  },
  {
    id: '3',
    name: 'Support',
    permissions: ['read:users', 'read:analytics']
  }
];

const availablePermissions = [
  'read:users',
  'write:users',
  'read:analytics',
  'write:analytics',
  'manage:settings',
  'manage:roles'
];

export function AccessControl() {
  const { data: roles, isLoading } = useQuery({
    queryKey: ['roles'],
    queryFn: async () => {
      // In a real app, fetch from Supabase
      return mockRoles;
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Access Control</h1>
        <Button className="flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Add New Role
        </Button>
      </div>

      <div className="grid gap-6">
        {roles?.map((role) => (
          <div key={role.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {role.name === 'Admin' ? (
                  <Shield className="w-8 h-8 text-pink-500" />
                ) : (
                  <User className="w-8 h-8 text-pink-500" />
                )}
                <div>
                  <h3 className="text-lg font-medium">{role.name}</h3>
                  <p className="text-sm text-gray-500">
                    {role.permissions.length} permissions granted
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit Role
              </Button>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Permissions</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {availablePermissions.map((permission) => (
                  <label key={permission} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={role.permissions.includes(permission) || role.permissions.includes('all')}
                      className="rounded text-pink-500 focus:ring-pink-500"
                      disabled={role.name === 'Admin'}
                    />
                    <span className="text-sm text-gray-700">{permission}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}