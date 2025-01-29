import React from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import { FrameworkLayout } from './FrameworkLayout';

export function Evaluation() {
  return (
    <FrameworkLayout 
      title="Evaluation" 
      icon={Scale}
      description="Understanding patterns and making balanced decisions"
    >
      <div className="prose prose-pink max-w-none">
        <h2>The Role of Evaluation in Relationships</h2>
        <p>
          Evaluation represents the capacity to assess situations objectively and make balanced decisions 
          that benefit the relationship. It's about understanding patterns and using that insight for growth.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Core Components</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Pattern recognition in relationship dynamics</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Objective analysis of situations</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Balanced decision-making processes</span>
            </li>
          </ul>
        </div>

        <h3>Impact on Relationship Success</h3>
        <p>
          Studies indicate that couples with strong evaluation skills experience:
        </p>
        <ul>
          <li>Better problem-solving abilities</li>
          <li>More effective conflict resolution</li>
          <li>Improved long-term planning</li>
          <li>Greater relationship stability</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-green-800 font-semibold mb-4">Strong Evaluation Skills</h4>
            <ul className="space-y-2">
              <li>Clear understanding of patterns</li>
              <li>Balanced perspective taking</li>
              <li>Thoughtful decision making</li>
              <li>Strategic problem solving</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-red-800 font-semibold mb-4">Areas for Growth</h4>
            <ul className="space-y-2">
              <li>Reactive decision making</li>
              <li>Difficulty seeing patterns</li>
              <li>Unbalanced problem solving</li>
              <li>Limited perspective taking</li>
            </ul>
          </div>
        </div>

        <h3>Developing Evaluation Skills</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <ol className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">1. Pattern Recognition:</span>
              <span>Keep a relationship journal to track recurring themes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">2. Decision Making:</span>
              <span>Practice using pros and cons lists for important choices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">3. Perspective Taking:</span>
              <span>Regularly consider situations from your partner's viewpoint</span>
            </li>
          </ol>
        </div>
      </div>
    </FrameworkLayout>
  );
}