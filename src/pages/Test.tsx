import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { QuestionCard } from '../components/test/QuestionCard';
import { ProgressBar } from '../components/test/ProgressBar';
import { useTest } from '../hooks/useTest';
import { useTestStore } from '../store/testStore';

export function Test() {
  const navigate = useNavigate();
  const { calculateResults } = useTestStore();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    setAnswer,
    nextQuestion,
    previousQuestion,
    getCurrentAnswer,
    isComplete,
    answers
  } = useTest();

  const handleNext = async () => {
    if (isComplete) {
      try {
        await calculateResults(answers);
        navigate('/results', { replace: true });
      } catch (error) {
        console.error('Error calculating results:', error);
      }
    } else {
      nextQuestion();
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4">
      <ProgressBar 
        current={currentQuestionIndex} 
        total={totalQuestions} 
      />

      <QuestionCard
        questionText={currentQuestion.text}
        currentScore={getCurrentAnswer()}
        onScoreChange={setAnswer}
      />

      <div className="flex justify-center gap-4">
        {currentQuestionIndex > 0 && (
          <Button
            variant="outline"
            onClick={previousQuestion}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
        )}

        <Button
          onClick={handleNext}
          disabled={!getCurrentAnswer()}
          className="flex items-center gap-2"
        >
          {isComplete ? 'See Results' : 'Next'}
          {!isComplete && <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}