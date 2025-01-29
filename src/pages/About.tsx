import React from 'react';
import { Heart, Users, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-2xl p-12">
        <h1 className="text-4xl font-bold">About Connection Compass</h1>
        <p className="text-xl opacity-90">
          Guiding you towards stronger, more fulfilling relationships through understanding and expert support.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Heart,
            title: "Our Mission",
            description: "To empower individuals and couples with insights and professional guidance to build healthier relationships.",
            color: "text-pink-500"
          },
          {
            icon: Users,
            title: "Our Vision",
            description: "A world where every relationship has access to the tools and support needed to thrive.",
            color: "text-purple-500"
          },
          {
            icon: Shield,
            title: "Our Values",
            description: "Trust, empathy, and excellence in everything we do to support your relationship journey.",
            color: "text-indigo-500"
          }
        ].map((item, index) => (
          <div key={index} className="text-center space-y-4 bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <item.icon className={`w-12 h-12 ${item.color} mx-auto`} />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="prose prose-pink max-w-none">
            <h2 className="text-2xl font-semibold mb-6 text-purple-800">Our Story</h2>
            <p className="text-gray-700">
              Connection Compass was founded with a simple yet powerful belief: every relationship deserves the opportunity to thrive. We recognized that while relationship challenges are universal, access to quality guidance and support often isn't.
            </p>
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1024&h=576"
              alt="Happy couple holding hands"
              className="rounded-lg shadow-md mt-6 w-full"
            />
            <p className="text-gray-700">
              Our platform bridges this gap by combining innovative relationship assessment tools with access to qualified professionals. We believe that understanding yourself and your relationship patterns is the first step toward positive change.
            </p>
            <p className="text-gray-700">
              Today, we're proud to serve thousands of individuals and couples on their journey to stronger, more fulfilling relationships. Our network of certified professionals provides personalized support, while our assessment tools offer valuable insights into relationship dynamics.
            </p>
          </div>
          <div className="space-y-6 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-purple-800">Why This Is Important To Us</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Personal Experience",
                  text: "Many of us have experienced the transformative power of understanding our relationship patterns"
                },
                {
                  title: "Breaking Barriers",
                  text: "We believe everyone deserves access to professional relationship guidance, regardless of circumstances"
                },
                {
                  title: "Scientific Approach",
                  text: "Our commitment to evidence-based methods ensures real, measurable improvements in relationships"
                },
                {
                  title: "Community Impact",
                  text: "Stronger relationships create stronger communities and a more connected world"
                }
              ].map((point, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-1">{point.title}</h4>
                  <p className="text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="text-center space-y-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
        <h2 className="text-2xl font-semibold">Ready to Start Your Journey?</h2>
        <p className="opacity-90">
          Take the first step toward a stronger relationship with our comprehensive assessment.
        </p>
        <button className="bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Take the Test
        </button>
      </section>
    </div>
  );
}