import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FrameworkLayout } from './FrameworkLayout';

export function Thoughtfulness() {
  return (
    <FrameworkLayout 
      title="Thoughtfulness" 
      icon={Sparkles}
      description="Creating meaningful connections through considerate actions"
    >
      <div className="prose prose-pink max-w-none">
        <h2>The Art of Thoughtfulness in Relationships</h2>
        <p>
          Thoughtfulness represents the ability to create meaningful connections through considerate 
          actions and attention to detail. It's about showing care in ways that matter.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Key Aspects of Thoughtfulness</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Anticipating partner's needs</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Creating meaningful moments</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Showing care through actions</span>
            </li>
          </ul>
        </div>

        <h3>Impact on Relationship Quality</h3>
        <p>
          Studies show that thoughtful partners experience:
        </p>
        <ul>
          <li>Stronger emotional bonds</li>
          <li>Higher relationship satisfaction</li>
          <li>Better conflict prevention</li>
          <li>Increased appreciation</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-green-800 font-semibold mb-4">High Thoughtfulness Indicators</h4>
            <ul className="space-y-2">
              <li>Proactive consideration</li>
              <li>Meaningful gestures</li>
              <li>Attention to detail</li>
              <li>Consistent care</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-red-800 font-semibold mb-4">Areas for Growth</h4>
            <ul className="space-y-2">
              <li>Overlooking partner's needs</li>
              <li>Inconsistent attention</li>
              <li>Missing opportunities for care</li>
              <li>Reactive rather than proactive</li>
            </ul>
          </div>
        </div>

        <h3>Cultivating Thoughtfulness</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <ol className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">1. Daily Practice:</span>
              <span>Look for small ways to show care each day</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">2. Active Observation:</span>
              <span>Notice and remember partner's preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">3. Meaningful Gestures:</span>
              <span>Plan and execute thoughtful actions regularly</span>
            </li>
          </ol>
        </div>
      </div>
    </FrameworkLayout>
  );
}