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
          <h3 className="font-semibold">Relationship Connections</h3>
        </div>
        <ul className="space-y-2">
          {result.geniuses.map((genius, index) => (
            <li key={index} className="text-gray-600 capitalize">
              {genius}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-blue-500" />
          <h3 className="font-semibold">Core Competencies</h3>
        </div>
        <ul className="space-y-2">
          {result.competencies.map((competency, index) => (
            <li key={index} className="text-gray-600 capitalize">
              {competency}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-red-500" />
          <h3 className="font-semibold">Growth Areas</h3>
        </div>
        <ul className="space-y-2">
          {result.frustrations.map((frustration, index) => (
            <li key={index} className="text-gray-600 capitalize">
              {frustration}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
