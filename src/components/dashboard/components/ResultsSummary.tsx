import React from 'react';
import { Trophy, Target, AlertCircle } from 'lucide-react';
import { TestResult } from '../../../types/test';

interface ResultsSummaryProps {
  result: TestResult;
}

export function ResultsSummary({ result }: ResultsSummaryProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-semibold">Your Connections</h2>
        </div>
        <div className="space-y-4">
          {result.geniuses.map((genius, index) => (
            <a 
              key={index}
              href={`/framework/${genius.toLowerCase()}`}
              className="block p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <div className="font-medium text-yellow-800 capitalize">{genius}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Competencies</h2>
        </div>
        <div className="space-y-4">
          {result.competencies.map((competency, index) => (
            <a 
              key={index}
              href={`/framework/${competency.toLowerCase()}`}
              className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="font-medium text-blue-800 capitalize">{competency}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-red-500" />
          <h2 className="text-xl font-semibold">Growth Areas</h2>
        </div>
        <div className="space-y-4">
          {result.frustrations.map((frustration, index) => (
            <a 
              key={index}
              href={`/framework/${frustration.toLowerCase()}`}
              className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <div className="font-medium text-red-800 capitalize">{frustration}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}