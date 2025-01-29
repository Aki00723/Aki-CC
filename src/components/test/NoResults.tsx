import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import { Button } from '../Button';

export function NoResults() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-6">
        <ClipboardList className="w-16 h-16 text-gray-400" />
      </div>
      <h2 className="text-xl font-semibold mb-4">No Results Found</h2>
      <p className="text-gray-600 mb-6">
        You haven't taken the relationship assessment yet.
      </p>
      <Button onClick={() => navigate('/test')}>
        Take the Assessment
      </Button>
    </div>
  );
}