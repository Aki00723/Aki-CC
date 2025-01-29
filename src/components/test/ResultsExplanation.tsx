import React from 'react';
import { Book, Brain, ArrowRight } from 'lucide-react';
import { TestResult, CategoryScore } from '../../types/test';

interface ResultsExplanationProps {
  result: TestResult;
  categoryScores: CategoryScore[];
}

export function ResultsExplanation({ result, categoryScores }: ResultsExplanationProps) {
  // Sort scores by value to determine categories
  const sortedScores = [...categoryScores].sort((a, b) => b.score - a.score);
  
  // Get categories
  const connection = sortedScores.slice(0, 2);
  const competencies = sortedScores.slice(2, 4);
  const growthAreas = sortedScores.slice(4);

  return (
    <div className="space-y-12">
      {/* HEARTS Profile Section */}
      <section className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">HEARTS Profile</h2>
        
        {/* Connection Areas */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-pink-600 mb-4">Connection</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {connection.map((category) => (
              <a 
                key={category.category}
                href={`/framework/${category.category.toLowerCase()}`}
                className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
              >
                <div className="font-medium text-gray-900 capitalize">{category.category}</div>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Competencies */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-blue-600 mb-4">Competencies</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {competencies.map((category) => (
              <a 
                key={category.category}
                href={`/framework/${category.category.toLowerCase()}`}
                className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-medium text-gray-900 capitalize">{category.category}</div>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Growth Areas */}
        <div>
          <h3 className="text-lg font-medium text-purple-600 mb-4">Growth Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {growthAreas.map((category) => (
              <a 
                key={category.category}
                href={`/framework/${category.category.toLowerCase()}`}
                className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <div className="font-medium text-gray-900 capitalize">{category.category}</div>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Resources Section */}
      <section className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-6 h-6 text-pink-500" />
          <h2 className="text-2xl font-semibold">Growth Resources</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {growthAreas.map((area, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium text-lg capitalize">{area.category}</h3>
              <div className="space-y-3">
                {getGrowthResources(area.category).map((resource, i) => (
                  <a
                    key={i}
                    href={resource.path}
                    className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{resource.title}</div>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reading Materials Section */}
      <section className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Book className="w-6 h-6 text-pink-500" />
          <h2 className="text-2xl font-semibold">Reading Materials</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {growthAreas.map((area, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium text-lg capitalize">{area.category}</h3>
              <div className="space-y-3">
                {getReadingMaterials(area.category).map((article, i) => (
                  <a
                    key={i}
                    href={article.path}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Book className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{article.title}</div>
                      <p className="text-sm text-gray-600 mt-1">{article.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function getGrowthResources(area: string) {
  const resources = {
    harmony: [
      {
        title: "Active Listening Practice",
        description: "Master the art of truly hearing and understanding others",
        path: "/recommendations/active-listening"
      },
      {
        title: "Emotional Awareness",
        description: "Develop deeper emotional connection and understanding",
        path: "/recommendations/emotional-awareness"
      }
    ],
    evaluation: [
      {
        title: "Decision Making",
        description: "Learn to make balanced relationship decisions",
        path: "/recommendations/decision-making"
      }
    ],
    action: [
      {
        title: "Taking Initiative",
        description: "Build confidence in relationship growth",
        path: "/recommendations/taking-initiative"
      }
    ],
    reflection: [
      {
        title: "Emotional Awareness",
        description: "Develop deeper emotional connection and understanding",
        path: "/recommendations/emotional-awareness"
      }
    ],
    thoughtfulness: [
      {
        title: "Active Listening Practice",
        description: "Master the art of truly hearing and understanding others",
        path: "/recommendations/active-listening"
      }
    ],
    stability: [
      {
        title: "Decision Making",
        description: "Learn to make balanced relationship decisions",
        path: "/recommendations/decision-making"
      }
    ]
  };
  return resources[area.toLowerCase()] || [];
}

function getReadingMaterials(area: string) {
  const articles = {
    harmony: [
      {
        title: "Building Emotional Safety",
        description: "Learn how to create a secure emotional environment",
        path: "/library/emotional-safety"
      },
      {
        title: "The Power of Validation",
        description: "Understanding the impact of emotional validation",
        path: "/library/validation"
      }
    ],
    evaluation: [
      {
        title: "Understanding Relationship Patterns",
        description: "Identify and work with relationship dynamics",
        path: "/library/relationship-patterns"
      }
    ],
    action: [
      {
        title: "Taking Positive Initiative",
        description: "Learn when and how to initiate change",
        path: "/library/positive-initiative"
      }
    ],
    reflection: [
      {
        title: "Emotional Intelligence in Relationships",
        description: "Developing deeper emotional awareness",
        path: "/library/emotional-intelligence"
      }
    ],
    thoughtfulness: [
      {
        title: "The Art of Meaningful Gestures",
        description: "Creating lasting impact through small actions",
        path: "/library/meaningful-gestures"
      }
    ],
    stability: [
      {
        title: "Building Trust Through Consistency",
        description: "Creating a foundation of reliability",
        path: "/library/building-trust"
      }
    ]
  };
  return articles[area.toLowerCase()] || [];
}