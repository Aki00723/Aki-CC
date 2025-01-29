import { TestResult } from '../types/test';

export function getInsightDescription(category: string): string {
  const descriptions = {
    harmony: "You excel at creating emotional safety and maintaining balanced connections.",
    evaluation: "Your strength lies in understanding relationship dynamics and patterns.",
    action: "You show initiative in fostering positive change and growth.",
    reflection: "You demonstrate deep emotional awareness and understanding.",
    thoughtfulness: "You excel at creating meaningful and lasting connections.",
    stability: "You build strong foundations through consistency and reliability."
  };
  
  return descriptions[category.toLowerCase()] || '';
}

export function getRecommendations(result: TestResult): string[] {
  const baseRecommendations = [
    "Practice active listening and emotional presence daily",
    "Develop deeper emotional awareness through mindful reflection",
    "Build trust through consistent, small positive interactions"
  ];

  const categoryRecommendations = {
    harmony: "Focus on maintaining emotional balance in challenging situations",
    evaluation: "Take time to understand patterns before responding",
    action: "Balance taking initiative with patience and timing",
    reflection: "Set aside regular time for emotional processing",
    thoughtfulness: "Continue nurturing connections through meaningful gestures",
    stability: "Build on your foundation of consistency and reliability"
  };

  return [
    ...baseRecommendations,
    ...result.geniuses.map(genius => categoryRecommendations[genius.toLowerCase()])
  ];
}

export function getMatchingExperts(result: TestResult) {
  return [
    {
      name: "Dr. Sarah Chen",
      specialties: ["harmony", "reflection"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Mark Thompson",
      specialties: ["action", "evaluation"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ].filter(expert => 
    expert.specialties.some(specialty => 
      result.geniuses.includes(specialty) || result.frustrations.includes(specialty)
    )
  ).slice(0, 2);
}