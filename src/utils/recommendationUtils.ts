import { TestResult } from '../types/test';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  path: string;
}

export function getRecommendations(result: TestResult): Recommendation[] {
  const baseRecommendations: Recommendation[] = [
    {
      id: 'emotional-awareness',
      title: 'Develop Emotional Awareness',
      description: 'Learn to better understand and express your emotions',
      path: '/recommendations/emotional-awareness'
    },
    {
      id: 'active-listening',
      title: 'Practice Active Listening',
      description: 'Master the art of truly hearing and understanding others',
      path: '/recommendations/active-listening'
    }
  ];

  // Add category-specific recommendations based on test results
  const categoryRecommendations = {
    harmony: {
      id: 'conflict-resolution',
      title: 'Master Conflict Resolution',
      description: 'Learn techniques for peaceful conflict resolution',
      path: '/recommendations/conflict-resolution'
    },
    evaluation: {
      id: 'decision-making',
      title: 'Improve Decision Making',
      description: 'Develop better joint decision-making processes',
      path: '/recommendations/decision-making'
    }
    // Add more category-specific recommendations
  };

  // Combine base recommendations with relevant category recommendations
  return [
    ...baseRecommendations,
    ...result.frustrations
      .map(category => categoryRecommendations[category.toLowerCase()])
      .filter(Boolean)
  ];
}