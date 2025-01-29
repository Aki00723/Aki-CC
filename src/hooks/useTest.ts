import { useState, useCallback } from 'react';
import { questions } from '../data/questions';
import { shuffle } from '../utils/shuffle';
import { Question } from '../types/test';

export function useTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  // Flatten and shuffle questions on first render
  const [shuffledQuestions] = useState<Question[]>(() => 
    shuffle(questions.flatMap(section => section.questions))
  );

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;

  const setAnswer = useCallback((score: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: score
    }));
  }, [currentQuestion.id]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const previousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const getCurrentAnswer = useCallback(() => {
    return answers[currentQuestion.id] || 0;
  }, [answers, currentQuestion.id]);

  const isComplete = currentQuestionIndex === totalQuestions - 1 && 
    answers[currentQuestion.id] !== undefined;

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    setAnswer,
    nextQuestion,
    previousQuestion,
    getCurrentAnswer,
    isComplete,
    answers
  };
}