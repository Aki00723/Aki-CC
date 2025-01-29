import React from 'react';
import { Brain } from 'lucide-react';

interface InsightCardProps {
  title: string;
  type: 'connection' | 'competency' | 'growth';
  description: string;
}

export function InsightCard({ title, type, description }: InsightCardProps) {
  const colors = {
    genius: 'bg-yellow-50 text-yellow-700',
    competency: 'bg-blue-50 text-blue-700',
    growth: 'bg-red-50 text-red-700'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${colors[type]}`}>
        <Brain className="w-4 h-4 mr-2" />
        {title}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}