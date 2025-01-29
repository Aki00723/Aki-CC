import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Star, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

export function ForProfessionals() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-2xl p-12">
        <h1 className="text-4xl font-bold">Make a Meaningful Impact</h1>
        <p className="text-xl opacity-90">
          Join our community of dedicated professionals helping people build stronger relationships
        </p>
        <Button 
          onClick={() => navigate('/professional/signup')}
          className="bg-white text-purple-700 hover:bg-gray-50"
        >
          Join Our Network
        </Button>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Why Join Connection Compass?</h2>
          <div className="space-y-6">
            {[
              {
                icon: Users,
                title: "Reach More People",
                description: "Connect with clients actively seeking guidance for their relationships."
              },
              {
                icon: Star,
                title: "Focus on What Matters",
                description: "We handle the logistics so you can concentrate on helping people transform their relationships."
              },
              {
                icon: Heart,
                title: "Make Real Change",
                description: "Be part of a movement to create healthier, more fulfilling relationships."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-pink-50 rounded-lg">
                  <item.icon className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">How We Support You</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Smart Matching</h3>
              <p className="text-gray-600">
                Our platform connects you with clients whose needs align with your expertise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Flexible Practice</h3>
              <p className="text-gray-600">
                Set your own schedule, rates, and preferred session formats.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Professional Community</h3>
              <p className="text-gray-600">
                Connect with fellow professionals, share insights, and participate in continuing education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}