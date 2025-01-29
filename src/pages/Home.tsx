import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Brain } from 'lucide-react';
import { Button } from '../components/Button';
import { useAuthStore } from '../store/authStore';

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleTestClick = () => {
    if (!user) {
      navigate('/signin');
    } else {
      navigate('/test');
    }
  };

  const features = [
    {
      icon: Brain,
      title: "Understand Yourself",
      description: "Discover your relational strengths and areas for growth through our comprehensive assessment.",
      path: "/methodology"
    },
    {
      icon: Users,
      title: "Connect with Experts",
      description: "Find professionals who specialize in your specific relationship needs and goals.",
      path: "/expert-intro"
    },
    {
      icon: Heart,
      title: "Transform Relationships",
      description: "Build stronger, more fulfilling relationships with personalized insights and professional guidance.",
      path: "/relationship-stats"
    }
  ];

  return (
    <div className="space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Find Your Connection Compass
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Understand your unique relationship style and connect with professionals who can help you thrive in your relationships.
        </p>
        <Button 
          size="lg" 
          onClick={handleTestClick}
          className="bg-pink-600 text-white hover:bg-pink-700 shadow-lg hover:shadow-xl transition-all"
        >
          Take the Test
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => navigate(feature.path)}
            className="text-center space-y-4 p-6 rounded-xl bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <feature.icon className="h-12 w-12 text-pink-500 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}