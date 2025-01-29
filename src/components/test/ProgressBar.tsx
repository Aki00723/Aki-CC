import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}