import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { FrameworkLayout } from './FrameworkLayout';

export function Reflection() {
  return (
    <FrameworkLayout 
      title="Reflection" 
      icon={Brain}
      description="Understanding and processing emotional dynamics"
    >
      <div className="prose prose-pink max-w-none">
        <h2>The Power of Reflection in Relationships</h2>
        <p>
          Reflection represents the ability to understand and process emotional dynamics in relationships. 
          It's about developing deep emotional awareness and insight.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Core Aspects of Reflection</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Emotional awareness and understanding</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Processing relationship experiences</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Learning from patterns and interactions</span>
            </li>
          </ul>
        </div>

        <h3>Benefits of Strong Reflection</h3>
        <p>
          Research indicates that reflective partners experience:
        </p>
        <ul>
          <li>Deeper emotional connections</li>
          <li>Better conflict understanding</li>
          <li>More effective communication</li>
          <li>Increased emotional intelligence</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-green-800 font-semibold mb-4">High Reflection Indicators</h4>
            <ul className="space-y-2">
              <li>Deep emotional awareness</li>
              <li>Thoughtful processing of experiences</li>
              <li>Understanding of patterns</li>
              <li>Insightful observations</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-red-800 font-semibold mb-4">Growth Areas</h4>
            <ul className="space-y-2">
              <li>Limited emotional awareness</li>
              <li>Difficulty processing experiences</li>
              <li>Missing relationship patterns</li>
              <li>Surface-level understanding</li>
            </ul>
          </div>
        </div>

        <h3>Developing Reflection Skills</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <ol className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">1. Mindful Moments:</span>
              <span>Set aside time daily for emotional check-ins</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">2. Journaling:</span>
              <span>Keep a relationship journal to track patterns and insights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">3. Deep Discussions:</span>
              <span>Have regular conversations about relationship dynamics</span>
            </li>
          </ol>
        </div>
      </div>
    </FrameworkLayout>
  );
}