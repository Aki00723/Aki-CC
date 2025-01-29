import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/Button';
import { TestResult } from '../../../types/test';
import { getMatchingExperts } from '../../../utils/insightUtils';

interface RecommendedExpertsProps {
  result: TestResult;
}

export function RecommendedExperts({ result }: RecommendedExpertsProps) {
  const navigate = useNavigate();
  const experts = getMatchingExperts(result);

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Recommended Experts</h3>
      <div className="space-y-4">
        {experts.map((expert, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium">{expert.name}</h4>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1">{expert.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={() => navigate('/dashboard/network')}
        className="w-full flex items-center justify-center gap-2"
      >
        View All Experts
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}