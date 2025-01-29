import { create } from 'zustand';
import { questions } from '../data/questions';
import { TestResult, CategoryScore } from '../types/test';
import { saveTestResults, getLatestTestResults } from '../lib/database';
import { useAuthStore } from './authStore';

interface TestStore {
  answers: Record<number, number>;
  result: TestResult | null;
  partnerResult: TestResult | null;
  categoryScores: CategoryScore[];
  error: string | null;
  loading: boolean;
  calculateResults: (answers: Record<number, number>) => Promise<void>;
  loadUserResults: () => Promise<void>;
  setPartnerResult: (result: TestResult) => void;
  clearError: () => void;
  resetTest: () => void;
}

export const useTestStore = create<TestStore>((set, get) => ({
  answers: {},
  result: null,
  partnerResult: null,
  categoryScores: [],
  error: null,
  loading: false,

  calculateResults: async (answers) => {
    try {
      set({ loading: true, error: null });
      console.log('Calculating results...');

      const categoryScores = questions.map(section => {
        const categoryAnswers = section.questions
          .map(q => answers[q.id])
          .filter(score => score !== undefined);
        
        const total = categoryAnswers.reduce((sum, score) => sum + score, 0);
        return {
          category: section.category,
          title: section.title,
          description: section.description,
          score: total / (categoryAnswers.length * 7)
        };
      });

      const sortedCategories = [...categoryScores].sort((a, b) => b.score - a.score);
      const result = {
        geniuses: sortedCategories.slice(0, 2).map(c => c.category),
        competencies: sortedCategories.slice(2, 4).map(c => c.category),
        frustrations: sortedCategories.slice(4).map(c => c.category),
        timestamp: new Date().toISOString()
      };

      const user = useAuthStore.getState().user;
      console.log('Current user:', user?.id);
      
      if (user) {
        console.log('Saving results to database...');
        await saveTestResults(user.id, result, sortedCategories, answers);
        console.log('Results saved successfully');
      } else {
        console.error('No user found when trying to save results');
      }

      set({ 
        categoryScores: sortedCategories, 
        result,
        loading: false 
      });
    } catch (error) {
      console.error('Error calculating results:', error);
      set({ 
        error: error instanceof Error ? error.message : 'Error calculating results',
        loading: false 
      });
    }
  },

  loadUserResults: async () => {
    try {
      set({ loading: true, error: null });
      const user = useAuthStore.getState().user;
      console.log('Loading results for user:', user?.id);
      
      if (!user) {
        console.error('No user found when loading results');
        return;
      }

      const data = await getLatestTestResults(user.id);
      console.log('Loaded test results:', data ? 'Found' : 'Not found');
      
      if (data) {
        set({
          result: data.result,
          categoryScores: data.category_scores,
          answers: data.answers,
          loading: false
        });
      } else {
        set({ loading: false });
      }
    } catch (error) {
      console.error('Error loading test results:', error);
      set({ 
        error: error instanceof Error ? error.message : 'Error loading results',
        loading: false 
      });
    }
  },

  setPartnerResult: (result) => set({ partnerResult: result }),

  clearError: () => set({ error: null }),
  
  resetTest: () => set({ 
    answers: {}, 
    result: null, 
    partnerResult: null,
    categoryScores: [], 
    error: null,
    loading: false 
  })
}));
