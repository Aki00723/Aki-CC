import React from 'react';
import { Scale, FileText, Users, Shield } from 'lucide-react';

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-2xl p-12">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-xl opacity-90">
          Understanding our service agreement and your rights
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {[
          {
            icon: Scale,
            title: "Fair Usage",
            description: "Clear guidelines for platform use",
            color: "text-pink-500"
          },
          {
            icon: FileText,
            title: "Transparency",
            description: "Simple, understandable terms",
            color: "text-purple-500"
          },
          {
            icon: Users,
            title: "User Rights",
            description: "Clear user responsibilities",
            color: "text-indigo-500"
          },
          {
            icon: Shield,
            title: "Protection",
            description: "Comprehensive safeguards",
            color: "text-blue-500"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <item.icon className={`w-8 h-8 ${item.color}`} />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Agreement Overview</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">1. Acceptance of Terms</h3>
              <p className="text-gray-700">
                By accessing and using Connection Compass ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">2. Service Description</h3>
              <p className="text-gray-700 mb-4">
                Connection Compass provides relationship assessment tools and professional connections. The Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Relationship assessment tests</li>
                <li>Professional directory listings</li>
                <li>Booking and scheduling tools</li>
                <li>Educational content and resources</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">User Responsibilities</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">3. User Accounts</h3>
              <p className="text-gray-700 mb-4">To access certain features, you must register for an account. You agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide accurate information</li>
                <li>Maintain account security</li>
                <li>Report unauthorized access</li>
                <li>Accept responsibility for account activity</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">4. Professional Services</h3>
              <p className="text-gray-700 mb-4">Connection Compass facilitates professional connections but is not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Quality of professional services</li>
                <li>Scheduling or payment disputes</li>
                <li>Professional credentials verification</li>
                <li>Relationship outcomes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
          <p className="text-gray-700">
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:support@connectioncompass.com" className="text-pink-600 hover:text-pink-700 font-medium">
              support@connectioncompass.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}