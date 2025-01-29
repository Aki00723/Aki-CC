import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-2xl p-12">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-xl opacity-90">
          Your privacy is important to us. Learn how we protect and manage your information.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {[
          {
            icon: Shield,
            title: "Data Protection",
            description: "Industry-standard security measures",
            color: "text-pink-500"
          },
          {
            icon: Lock,
            title: "Privacy First",
            description: "Encrypted and secure data handling",
            color: "text-purple-500"
          },
          {
            icon: Eye,
            title: "Transparency",
            description: "Clear data collection practices",
            color: "text-indigo-500"
          },
          {
            icon: UserCheck,
            title: "Your Control",
            description: "Easy access to your information",
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
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Information Collection and Use</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">Information We Collect</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Account information (name, email, password)</li>
                <li>Profile information (relationship status, preferences)</li>
                <li>Assessment responses and results</li>
                <li>Communication preferences and settings</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide and improve our services</li>
                <li>Generate personalized relationship insights</li>
                <li>Facilitate professional connections</li>
                <li>Send important updates and communications</li>
                <li>Maintain platform security and integrity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Data Sharing and Protection</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">Information Sharing</h3>
              <p className="text-gray-700 mb-4">We do not sell your personal information. We share your information only:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>With professionals you choose to connect with</li>
                <li>With service providers who assist our operations</li>
                <li>When required by law</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900">Your Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Control your privacy preferences</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy or our privacy practices, please contact our Privacy Team at{' '}
            <a href="mailto:privacy@connectioncompass.com" className="text-pink-600 hover:text-pink-700 font-medium">
              privacy@connectioncompass.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}