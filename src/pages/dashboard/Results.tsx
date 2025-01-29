import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Target, AlertCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { ReportDownloadButton } from '../../components/reports/ReportDownloadButton';
import { ResultsExplanation } from '../../components/test/ResultsExplanation';
import { useTestStore } from '../../store/testStore';

export function Results() {
  const navigate = useNavigate();
  const { result, categoryScores, loadUserResults, loading, error } = useTestStore();

  useEffect(() => {
    loadUserResults();
  }, [loadUserResults]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Error Loading Results</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <Button onClick={() => loadUserResults()}>Try Again</Button>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center py-12">
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

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Your Results Are Ready!</h1>
        <p className="text-xl text-gray-600">
          Discover insights about your unique relationship style
        </p>
        <div className="flex justify-center gap-4">
          <ReportDownloadButton />
          <Button 
            variant="outline" 
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <h2 className="text-xl font-semibold">Your Geniuses</h2>
          </div>
          <ul className="space-y-2">
            {result.geniuses.map((genius, index) => (
              <li key={index} className="text-gray-700 capitalize">{genius}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Your Competencies</h2>
          </div>
          <ul className="space-y-2">
            {result.competencies.map((competency, index) => (
              <li key={index} className="text-gray-700 capitalize">{competency}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <h2 className="text-xl font-semibold">Growth Areas</h2>
          </div>
          <ul className="space-y-2">
            {result.frustrations.map((frustration, index) => (
              <li key={index} className="text-gray-700 capitalize">{frustration}</li>
            ))}
          </ul>
        </div>
      </div>

      <ResultsExplanation result={result} categoryScores={categoryScores} />

      <div className="text-center space-y-4">
        <p className="text-lg text-gray-600">
          Ready to work on your relationships with professional guidance?
        </p>
        <Button size="lg" onClick={() => navigate('/dashboard/network')}>
          Connect with Experts
        </Button>
      </div>
    </div>
  );
}