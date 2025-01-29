import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Heart, Brain, ArrowRight, 
  Target, Sparkles, Scale, Book,
  Headphones, Users, MessageCircle
} from 'lucide-react';
import { Button } from '../../components/Button';
import { useTestStore } from '../../store/testStore';
import { ResultsSummary } from './components/ResultsSummary';
import { RecommendedExperts } from './components/RecommendedExperts';

export function Overview() {
  const navigate = useNavigate();
  const { result, loadUserResults } = useTestStore();

  useEffect(() => {
    loadUserResults();
  }, [loadUserResults]);

  // Get personalized recommendations based on growth areas
  const getRecommendedSteps = () => {
    if (!result) return [];

    // Map each growth area to specific recommendations
    const recommendations = result.frustrations.flatMap(area => {
      switch (area.toLowerCase()) {
        case 'harmony':
          return [
            {
              title: "Emotional Awareness",
              description: "Develop deeper emotional connection and understanding",
              path: "/recommendations/emotional-awareness",
              icon: Brain
            },
            {
              title: "Active Listening",
              description: "Master the art of truly hearing and understanding others",
              path: "/recommendations/active-listening",
              icon: Headphones
            }
          ];
        case 'evaluation':
          return [
            {
              title: "Decision Making",
              description: "Learn to make balanced relationship decisions",
              path: "/recommendations/decision-making",
              icon: Scale
            }
          ];
        case 'action':
          return [
            {
              title: "Taking Initiative",
              description: "Build confidence in relationship growth",
              path: "/recommendations/taking-initiative",
              icon: Target
            }
          ];
        default:
          return [];
      }
    });

    // Return up to 4 recommendations
    return recommendations.slice(0, 4);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Welcome to Your Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          Track your relationship insights and connect with professionals
        </p>
      </div>

      {result ? (
        <>
          <ResultsSummary result={result} />
          
          {/* Recommended Next Steps Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Recommended Next Steps</h2>
                <p className="text-gray-600 mt-1">
                  Based on your growth areas, here are personalized recommendations
                </p>
              </div>
              <Book className="w-8 h-8 text-pink-500" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {getRecommendedSteps().map((step, index) => (
                <a
                  key={index}
                  href={step.path}
                  className="group bg-gray-50 p-6 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg group-hover:bg-pink-100 transition-colors">
                      <step.icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <blockquote className="text-blue-800 italic">
                "Every relationship challenge is an opportunity for growth and deeper connection."
                <footer className="text-sm text-blue-600 mt-1">- Dr. Sue Johnson</footer>
              </blockquote>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <RecommendedExperts result={result} />
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Start Your Journey</h2>
          <p className="text-gray-600 mb-6">
            Take our comprehensive relationship assessment to get personalized insights
          </p>
          <Button onClick={() => navigate('/test')}>
            Take the Assessment
          </Button>
        </div>
      )}
    </div>
  );
}