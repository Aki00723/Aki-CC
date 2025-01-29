import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Settings as SettingsIcon, Globe, Shield, Bell, Database } from 'lucide-react';
import { Button } from '../../components/Button';

export function Settings() {
  const { data: settings, isLoading } = useQuery({
    queryKey: ['admin-settings'],
    queryFn: async () => {
      // In a real app, fetch from Supabase
      return {
        features: {
          enableProfessionalNetwork: true,
          enableTestResults: true,
          enablePayments: true
        },
        system: {
          maintenanceMode: false,
          allowNewRegistrations: true,
          debugMode: false
        },
        security: {
          mfaRequired: true,
          sessionTimeout: 30,
          passwordPolicy: 'strong'
        }
      };
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
        <h1 className="text-2xl font-semibold text-gray-900">Admin Settings</h1>
        <Button className="flex items-center gap-2">
          <SettingsIcon className="w-4 h-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4 mb-6">
            <Globe className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Feature Settings</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Enable Professional Network</span>
              <input
                type="checkbox"
                checked={settings?.features.enableProfessionalNetwork}
                className="rounded text-pink-500 focus:ring-pink-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Enable Test Results</span>
              <input
                type="checkbox"
                checked={settings?.features.enableTestResults}
                className="rounded text-pink-500 focus:ring-pink-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Enable Payments</span>
              <input
                type="checkbox"
                checked={settings?.features.enablePayments}
                className="rounded text-pink-500 focus:ring-pink-500"
              />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4 mb-6">
            <Database className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">System Settings</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Maintenance Mode</span>
              <input
                type="checkbox"
                checked={settings?.system.maintenanceMode}
                className="rounded text-pink-500 focus:ring-pink-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Allow New Registrations</span>
              <input
                type="checkbox"
                checked={settings?.system.allowNewRegistrations}
                className="rounded text-pink-500 focus:ring-pink-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Debug Mode</span>
              <input
                type="checkbox"
                checked={settings?.system.debugMode}
                className="rounded text-pink-500 focus:ring-pink-500"
              />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Require MFA</span>
              <input
                type="checkbox"
                checked={settings?.security.mfaRequired}
                className="rounded text-pink-500 focus:ring-pink-500"
              />
            </label>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Session Timeout (minutes)</span>
              <input
                type="number"
                value={settings?.security.sessionTimeout}
                className="w-24 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Password Policy</span>
              <select
                value={settings?.security.passwordPolicy}
                className="rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              >
                <option value="basic">Basic</option>
                <option value="medium">Medium</option>
                <option value="strong">Strong</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}