import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, BookOpen, Users, Target } from 'lucide-react';
import { Button } from '../components/Button';

export function Methodology() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-2xl p-12">
        <h1 className="text-4xl font-bold">Our Approach</h1>
        <p className="text-xl opacity-90">
          A comprehensive methodology built on research and modern practices
        </p>
      </section>

      <section className="grid gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-700">Research Integration</h3>
              <p className="text-gray-600">
                Our methodology integrates decades of psychological research from pioneers in relationship science. We've carefully studied and incorporated insights from attachment theory, differentiation in relationships, and family systems theory.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-700">Evidence-Based Assessment</h3>
              <p className="text-gray-600">
                Each question in our assessment is carefully crafted based on validated research findings. We measure multiple dimensions of relationship dynamics, ensuring a holistic understanding of your relationship style.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-700">Personalized Analysis</h3>
              <p className="text-gray-600">
                Using advanced algorithms, we analyze your responses across multiple dimensions to create a unique profile that helps identify your relationship strengths and areas for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">Experience Our Research-Based Assessment</h2>
        <Button size="lg" onClick={() => navigate('/signin')}>
          Take the Assessment
        </Button>
      </section>
    </div>
  );
}