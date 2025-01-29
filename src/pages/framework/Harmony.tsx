import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { FrameworkLayout } from './FrameworkLayout';

export function Harmony() {
  return (
    <FrameworkLayout 
      title="Harmony" 
      icon={Heart}
      description="Creating emotional safety and maintaining balanced connections"
    >
      <div className="prose prose-pink max-w-none">
        <h2>Understanding Harmony in Relationships</h2>
        <p>
          Harmony represents the ability to create and maintain emotional balance in relationships. 
          It's about fostering an environment where both partners feel safe, understood, and valued.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Key Aspects of Harmony</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Emotional attunement and responsiveness</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Creating safe spaces for vulnerability</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Balancing individual needs with relationship needs</span>
            </li>
          </ul>
        </div>

        <h3>Impact on Relationship Dynamics</h3>
        <p>
          Research shows that couples who maintain high levels of harmony experience:
        </p>
        <ul>
          <li>Greater relationship satisfaction</li>
          <li>More effective conflict resolution</li>
          <li>Stronger emotional bonds</li>
          <li>Better stress management as a couple</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-green-800 font-semibold mb-4">High Harmony Indicators</h4>
            <ul className="space-y-2">
              <li>Strong emotional connection</li>
              <li>Effective communication patterns</li>
              <li>Mutual understanding and respect</li>
              <li>Balanced give and take</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-red-800 font-semibold mb-4">Low Harmony Indicators</h4>
            <ul className="space-y-2">
              <li>Emotional distance or disconnection</li>
              <li>Frequent misunderstandings</li>
              <li>Difficulty resolving conflicts</li>
              <li>Imbalanced relationship dynamics</li>
            </ul>
          </div>
        </div>

        <h3>Practical Steps for Building Harmony</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <ol className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">1. Daily Check-ins:</span>
              <span>Set aside time each day for meaningful connection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">2. Active Listening:</span>
              <span>Practice being fully present during conversations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">3. Emotional Awareness:</span>
              <span>Develop understanding of both your own and your partner's emotional needs</span>
            </li>
          </ol>
        </div>
      </div>
    </FrameworkLayout>
  );
}