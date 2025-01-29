import { supabase } from './supabase';
import { TestResult, CategoryScore } from '../types/test';

export async function saveTestResults(
  userId: string,
  result: TestResult,
  categoryScores: CategoryScore[],
  answers: Record<number, number>
) {
  const { error } = await supabase
    .from('test_results')
    .insert({
      user_id: userId,
      result,
      category_scores: categoryScores,
      answers,
      created_at: new Date().toISOString()
    });

  if (error) throw error;
}

export async function getLatestTestResults(userId: string) {
  const { data, error } = await supabase
    .from('test_results')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
}