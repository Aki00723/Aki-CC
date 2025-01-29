import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

const experts = [
  {
    name: "Dr. Sarah Chen",
    title: "Relationship Counselor",
    quote: "Understanding yourself is the foundation of every healthy relationship.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Mark Thompson",
    title: "Marriage Coach",
    quote: "Small changes in how we communicate can transform our relationships completely.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Family Therapist",
    quote: "Every relationship challenge is an opportunity for growth and deeper connection.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export function ExpertIntro() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Meet Our Experts</h1>
        <p className="text-xl text-gray-600">
          Connect with experienced professionals who can guide you on your relationship journey
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {experts.map((expert, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <blockquote className="text-gray-600 italic">"{expert.quote}"</blockquote>
              <div>
                <h3 className="font-semibold text-lg">{expert.name}</h3>
                <p className="text-gray-500">{expert.title}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center space-y-6 bg-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold">Ready to Connect with Our Experts?</h2>
        <p className="text-gray-600">
          Take our assessment to get matched with professionals who specialize in your needs
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => navigate('/signin')}>
            Sign In
          </Button>
          <Button onClick={() => navigate('/signup')}>
            Create Account
          </Button>
        </div>
      </section>
    </div>
  );
}