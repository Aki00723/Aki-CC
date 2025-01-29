import React from 'react';
import { Bell, Lock, UserCircle, Mail, Globe, Shield } from 'lucide-react';
import { Button } from '../../components/Button';

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="bg-white shadow rounded-lg divide-y">
        {/* Profile Settings */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <UserCircle className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Profile Settings</h2>
          </div>
          <div className="ml-10 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Profile Visibility</p>
                <p className="text-sm text-gray-500">Control who can see your profile</p>
              </div>
              <select className="border rounded-md px-3 py-2">
                <option>Public</option>
                <option>Private</option>
                <option>Connections Only</option>
              </select>
            </div>
            <Button variant="outline" className="ml-0">Update Profile</Button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Notification Settings</h2>
          </div>
          <div className="ml-10 space-y-4">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded text-pink-500" />
              <span>Email notifications for new messages</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded text-pink-500" />
              <span>Professional recommendations</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded text-pink-500" />
              <span>Relationship tips and insights</span>
            </label>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Lock className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Privacy Settings</h2>
          </div>
          <div className="ml-10 space-y-4">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded text-pink-500" />
              <span>Share test results with professionals</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded text-pink-500" />
              <span>Allow profile discovery</span>
            </label>
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Communication Preferences</h2>
          </div>
          <div className="ml-10 space-y-4">
            <select className="w-full border rounded-md px-3 py-2">
              <option>Email and In-App</option>
              <option>Email Only</option>
              <option>In-App Only</option>
            </select>
          </div>
        </div>

        {/* Language and Region */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Globe className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Language and Region</h2>
          </div>
          <div className="ml-10 space-y-4">
            <select className="w-full border rounded-md px-3 py-2">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>

        {/* Data and Security */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Shield className="w-6 h-6 text-pink-500" />
            <h2 className="text-lg font-medium">Data and Security</h2>
          </div>
          <div className="ml-10 space-y-4">
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              Delete Account
            </Button>
            <Button variant="outline">
              Download My Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}