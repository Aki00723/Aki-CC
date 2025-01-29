import React from 'react';
import { Briefcase, Mail, Bell } from 'lucide-react';
import { Button } from '../components/Button';

export function Careers() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-2xl p-12">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="text-xl opacity-90">
          Help us transform relationships through technology and human connection
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-8">
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-pink-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">No Open Positions</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            While we don't have any open positions at the moment, we're always interested in connecting with talented individuals who are passionate about improving relationships through technology.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-8 h-8 text-pink-500" />
            <h3 className="text-xl font-semibold">Stay Connected</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Sign up for our talent community to receive updates about future opportunities at Connection Compass.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <Button className="w-full">Join Talent Community</Button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <Bell className="w-8 h-8 text-pink-500" />
            <h3 className="text-xl font-semibold">Future Opportunities</h3>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>We anticipate future openings in:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Software Engineering</li>
              <li>Product Design</li>
              <li>Relationship Psychology</li>
              <li>Customer Success</li>
              <li>Content Creation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}