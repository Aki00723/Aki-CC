import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/Button';

interface RecommendationLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function RecommendationLayout({ title, children }: RecommendationLayoutProps) {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        {children}
      </div>
    </div>
  );
}