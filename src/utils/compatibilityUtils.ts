import { TestResult } from '../types/test';

interface CompatibilityAnalysis {
  matchScore: number;
  strengths: string[];
  challenges: Array<{
    title: string;
    description: string;
    actions: string[];
  }>;
  dynamics: Array<{
    area: string;
    description: string;
  }>;
}

export function getCompatibilityAnalysis(result1: TestResult, result2: TestResult): CompatibilityAnalysis {
  // Calculate match score based on genius compatibility
  const matchScore = calculateMatchScore(result1, result2);
  
  // Identify complementary strengths
  const strengths = getComplementaryStrengths(result1, result2);
  
  // Identify potential challenges and solutions
  const challenges = getChallenges(result1, result2);
  
  // Analyze relationship dynamics
  const dynamics = getRelationshipDynamics(result1, result2);

  return {
    matchScore,
    strengths,
    challenges,
    dynamics
  };
}

function calculateMatchScore(result1: TestResult, result2: TestResult): number {
  // Calculate compatibility score based on genius combinations
  const compatibilityMatrix = {
    harmony: ['reflection', 'thoughtfulness'],
    reflection: ['harmony', 'evaluation'],
    action: ['evaluation', 'stability'],
    evaluation: ['action', 'reflection'],
    thoughtfulness: ['harmony', 'stability'],
    stability: ['action', 'thoughtfulness']
  };

  let score = 70; // Base score
  
  // Adjust score based on complementary geniuses
  result1.geniuses.forEach(genius1 => {
    result2.geniuses.forEach(genius2 => {
      if (compatibilityMatrix[genius1].includes(genius2)) {
        score += 5;
      }
    });
  });

  return Math.min(score, 100);
}

function getComplementaryStrengths(result1: TestResult, result2: TestResult): string[] {
  const strengthDescriptions = {
    'harmony-reflection': 'Deep emotional understanding and support',
    'action-evaluation': 'Balanced decision-making and implementation',
    'thoughtfulness-stability': 'Consistent and meaningful relationship building',
    'harmony-stability': 'Creating lasting emotional security',
    'action-thoughtfulness': 'Mindful and purposeful relationship growth',
    'reflection-evaluation': 'Insightful problem-solving approach'
  };

  const strengths: string[] = [];
  
  result1.geniuses.forEach(genius1 => {
    result2.geniuses.forEach(genius2 => {
      const combination = `${genius1}-${genius2}`;
      const reverseCombination = `${genius2}-${genius1}`;
      
      if (strengthDescriptions[combination]) {
        strengths.push(strengthDescriptions[combination]);
      } else if (strengthDescriptions[reverseCombination]) {
        strengths.push(strengthDescriptions[reverseCombination]);
      }
    });
  });

  return [...new Set(strengths)];
}

function getChallenges(result1: TestResult, result2: TestResult): Array<{
  title: string;
  description: string;
  actions: string[];
}> {
  const challenges = [];

  // Identify potential friction points
  const frictionPoints = {
    'action-reflection': {
      title: 'Pace of Change',
      description: 'Different preferences in how quickly to make decisions or changes',
      actions: [
        'Establish regular check-ins to discuss comfort levels with changes',
        'Create a shared decision-making framework',
        'Practice compromising on timing of actions'
      ]
    },
    'harmony-evaluation': {
      title: 'Emotional vs. Logical Approaches',
      description: 'Balancing emotional needs with analytical problem-solving',
      actions: [
        'Acknowledge both emotional and logical perspectives',
        'Take turns leading different types of discussions',
        'Create space for both reflection and analysis'
      ]
    }
  };

  result1.frustrations.forEach(frustration => {
    result2.geniuses.forEach(genius => {
      const combination = `${frustration}-${genius}`;
      const reverseCombination = `${genius}-${frustration}`;
      
      if (frictionPoints[combination]) {
        challenges.push(frictionPoints[combination]);
      } else if (frictionPoints[reverseCombination]) {
        challenges.push(frictionPoints[reverseCombination]);
      }
    });
  });

  return challenges;
}

function getRelationshipDynamics(result1: TestResult, result2: TestResult): Array<{
  area: string;
  description: string;
}> {
  const dynamics = [
    {
      area: 'Communication Style',
      description: getCommunicationStyle(result1, result2)
    },
    {
      area: 'Decision Making',
      description: getDecisionMakingStyle(result1, result2)
    },
    {
      area: 'Emotional Connection',
      description: getEmotionalConnectionStyle(result1, result2)
    }
  ];

  return dynamics;
}

function getCommunicationStyle(result1: TestResult, result2: TestResult): string {
  const hasHarmony = result1.geniuses.includes('harmony') || result2.geniuses.includes('harmony');
  const hasReflection = result1.geniuses.includes('reflection') || result2.geniuses.includes('reflection');
  
  if (hasHarmony && hasReflection) {
    return 'Deep and emotionally attuned communication with strong listening skills';
  } else if (hasHarmony) {
    return 'Emotionally supportive communication focused on maintaining connection';
  } else if (hasReflection) {
    return 'Thoughtful and introspective communication style';
  }
  
  return 'Practical and direct communication approach';
}

function getDecisionMakingStyle(result1: TestResult, result2: TestResult): string {
  const hasAction = result1.geniuses.includes('action') || result2.geniuses.includes('action');
  const hasEvaluation = result1.geniuses.includes('evaluation') || result2.geniuses.includes('evaluation');
  
  if (hasAction && hasEvaluation) {
    return 'Balanced approach combining careful analysis with decisive action';
  } else if (hasAction) {
    return 'Quick and decisive with a focus on moving forward';
  } else if (hasEvaluation) {
    return 'Thorough analysis before making important decisions';
  }
  
  return 'Collaborative decision-making with shared input';
}

function getEmotionalConnectionStyle(result1: TestResult, result2: TestResult): string {
  const hasThoughtfulness = result1.geniuses.includes('thoughtfulness') || result2.geniuses.includes('thoughtfulness');
  const hasStability = result1.geniuses.includes('stability') || result2.geniuses.includes('stability');
  
  if (hasThoughtfulness && hasStability) {
    return 'Deep, consistent emotional bond with meaningful expressions of care';
  } else if (hasThoughtfulness) {
    return 'Nurturing connection through thoughtful gestures and attention';
  } else if (hasStability) {
    return 'Steady and reliable emotional support system';
  }
  
  return 'Dynamic and evolving emotional connection';
}