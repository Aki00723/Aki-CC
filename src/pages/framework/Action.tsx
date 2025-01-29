import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { FrameworkLayout } from './FrameworkLayout';

export function Action() {
  return (
    <FrameworkLayout 
      title="Action" 
      icon={Target}
      description="Taking initiative to foster positive change and growth"
    >
      <div className="prose prose-pink max-w-none">
        <h2>Understanding Action in Relationships</h2>
        <p>
          Action represents the drive to initiate positive changes and take concrete steps toward 
          relationship growth. It's about moving from insight to implementation.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Key Elements of Action</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Initiative in addressing challenges</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Proactive relationship maintenance</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Implementation of growth strategies</span>
            </li>
          </ul>
        </div>

        <h3>Impact on Relationship Growth</h3>
        <p>
          Research shows that couples with strong action orientation experience:
        </p>
        <ul>
          <li>Faster resolution of challenges</li>
          <li>More dynamic relationship growth</li>
          <li>Higher satisfaction levels</li>
          <li>Greater sense of progress</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-green-800 font-semibold mb-4">High Action Indicators</h4>
            <ul className="space-y-2">
              <li>Proactive problem solving</li>
              <li>Regular relationship check-ins</li>
              <li>Implementation of new ideas</li>
              <li>Consistent follow-through</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-red-800 font-semibold mb-4">Low Action Indicators</h4>
            <ul className="space-y-2">
              <li>Passive approach to issues</li>
              <li>Delayed response to challenges</li>
              <li>Resistance to change</li>
              <li>Difficulty implementing solutions</li>
            </ul>
          </div>
        </div>

        <h3>Building Action Skills</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <ol className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">1. Start Small:</span>
              <span>Begin with manageable changes and build momentum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">2. Regular Check-ins:</span>
              <span>Schedule weekly relationship maintenance discussions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">3. Action Plans:</span>
              <span>Create specific, measurable goals for relationship growth</span>
            </li>
          </ol>
        </div>
      </div>
    </FrameworkLayout>
  );
}