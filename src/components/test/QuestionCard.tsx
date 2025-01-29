import React from 'react';
import clsx from 'clsx';

interface QuestionCardProps {
  questionText: string;
  currentScore: number;
  onScoreChange: (score: number) => void;
}

export function QuestionCard({ questionText, currentScore, onScoreChange }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-8 max-w-2xl mx-auto space-y-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">{questionText}</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm sm:text-base">
          <span className="text-green-600 font-medium">Agree</span>
          <span className="text-purple-600 font-medium">Disagree</span>
        </div>
        
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          {[7, 6, 5, 4, 3, 2, 1].map((score) => {
            const isSelected = currentScore === score;
            const size = score === 4 ? 'w-8 h-8 sm:w-10 sm:h-10' : 
                        (score === 3 || score === 5) ? 'w-9 h-9 sm:w-11 sm:h-11' :
                        (score === 2 || score === 6) ? 'w-10 h-10 sm:w-12 sm:h-12' : 
                        'w-12 h-12 sm:w-14 sm:h-14';
            
            const color = score > 4 ? 'green' : score < 4 ? 'purple' : 'gray';
            
            return (
              <button
                key={score}
                onClick={() => onScoreChange(score)}
                className={clsx(
                  size,
                  'rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation',
                  'border-2 hover:border-4 active:scale-95',
                  {
                    'border-green-600 hover:border-green-500': color === 'green',
                    'border-purple-600 hover:border-purple-500': color === 'purple',
                    'border-gray-300 hover:border-gray-400': color === 'gray',
                    'bg-pink-500 border-pink-500': isSelected,
                    'bg-white': !isSelected,
                  }
                )}
                aria-label={`Rate ${score}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}