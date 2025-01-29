import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500" />
      <p className="text-gray-600">Loading your results...</p>
    </div>
  );
}