import React from 'react';
import { Button } from '../Button';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="text-center py-12">
      <h2 className="text-xl font-semibold mb-4 text-red-600">Error Loading Results</h2>
      <p className="text-gray-600 mb-6">{message}</p>
      <Button onClick={onRetry}>Try Again</Button>
    </div>
  );
}