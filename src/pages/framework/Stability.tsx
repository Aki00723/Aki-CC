import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { FrameworkLayout } from './FrameworkLayout';

export function Stability() {
  return (
    <FrameworkLayout 
      title="Stability" 
      icon={Shield}
      description="Building strong foundations through consistency and reliability"
    >
      <div className="prose prose-pink max-w-none">
        <h2>The Foundation of Stability in Relationships</h2>
        <p>
          Stability represents the ability to create and maintain a strong foundation through 
          consistency and reliability. It's about building trust and security.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Core Elements of Stability</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Consistent behavior and communication</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Reliable emotional support</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-pink-500 flex-shrink-0 mt-1" />
              <span>Building trust through actions</span>
            </li>
          </ul>
        </div>

        <h3>Benefits of Strong Stability</h3>
        <p>
          Research shows that stable relationships experience:
        </p>
        <ul>
          <li>Higher trust levels</li>
          <li>Better emotional security</li>
          <li>Reduced relationship anxiety</li>
          <li>Stronger commitment</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-green-800 font-semibold mb-4">High Stability Indicators</h4>
            <ul className="space-y-2">
              <li>Consistent behavior</li>
              <li>Reliable communication</li>
              <li>Strong boundaries</li>
              <li>Dependable support</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-red-800 font-semibold mb-4">Areas for Growth</h4>
            <ul className="space-y-2">
              <li>Inconsistent patterns</li>
              <li>Unpredictable responses</li>
              <li>Weak boundaries</li>
              <li>Unreliable support</li>
            </ul>
          </div>
        </div>

        <h3>Building Stability</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <ol className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">1. Consistent Routines:</span>
              <span>Establish regular relationship maintenance practices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">2. Clear Communication:</span>
              <span>Maintain open and predictable communication patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-blue-700">3. Reliable Support:</span>
              <span>Be consistently available for emotional support</span>
            </li>
          </ol>
        </div>
      </div>
    </FrameworkLayout>
  );
}