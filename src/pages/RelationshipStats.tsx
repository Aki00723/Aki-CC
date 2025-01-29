import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, AlertTriangle, Heart } from 'lucide-react';
import { Button } from '../components/Button';

export function RelationshipStats() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Understanding Modern Relationships</h1>
        <p className="text-xl text-gray-600">
          Insights into relationship challenges and how we can help
        </p>
      </section>

      <section className="grid gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-pink-500" />
            <h2 className="text-2xl font-semibold">Key Statistics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-pink-600">67%</p>
              <p className="text-gray-600">of couples report communication issues as their primary challenge</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-pink-600">43%</p>
              <p className="text-gray-600">struggle with understanding their partner's emotional needs</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-pink-600">78%</p>
              <p className="text-gray-600">saw improvement after getting professional guidance</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-pink-600">89%</p>
              <p className="text-gray-600">reported better relationship satisfaction after understanding their patterns</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-pink-500" />
            <h2 className="text-2xl font-semibold">Common Challenges</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Poor communication patterns",
              "Misaligned expectations",
              "Unresolved conflicts",
              "Trust issues",
              "Lack of emotional intimacy",
              "Work-life balance struggles"
            ].map((challenge, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <p className="text-gray-600">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="w-8 h-8 text-pink-500" />
            <h2 className="text-2xl font-semibold">How We Help</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Assessment</h3>
              <p className="text-gray-600">
                Our comprehensive assessment helps identify your relationship patterns and areas for growth
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Insights</h3>
              <p className="text-gray-600">
                Get personalized insights based on your unique relationship style
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Expert Guidance</h3>
              <p className="text-gray-600">
                Connect with professionals who specialize in your specific needs
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Ongoing Support</h3>
              <p className="text-gray-600">
                Access resources and guidance to help you maintain healthy relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">Ready to Transform Your Relationships?</h2>
        <Button size="lg" onClick={() => navigate('/signin')}>
          Get Started
        </Button>
      </section>
    </div>
  );
}