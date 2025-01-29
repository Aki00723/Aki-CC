import React from 'react';
import { RecommendationLayout } from './RecommendationLayout';

export function DecisionMaking() {
  return (
    <RecommendationLayout title="Making Balanced Relationship Decisions">
      <div className="prose prose-pink max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Making balanced decisions in relationships requires both analytical thinking and emotional intelligence. Research shows that couples who make decisions together have a 42% higher relationship satisfaction rate.
        </p>

        <h2>The Gottman Method Approach</h2>
        <p>
          Dr. John Gottman's research emphasizes the importance of emotional intelligence in decision-making. His studies show that successful couples integrate both logic and emotion when making choices.
        </p>

        <h2>Key Techniques</h2>
        <ul>
          <li>Use the "pause and reflect" method before making decisions</li>
          <li>Consider both emotional and practical implications</li>
          <li>Practice collaborative decision-making</li>
          <li>Balance short-term and long-term impacts</li>
        </ul>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Decision-Making Framework</h3>
          <ol className="space-y-2">
            <li>1. Identify the decision that needs to be made</li>
            <li>2. Gather information from both partners</li>
            <li>3. Consider emotional and practical implications</li>
            <li>4. Evaluate options together</li>
            <li>5. Make a collaborative choice</li>
            <li>6. Review and adjust as needed</li>
          </ol>
        </div>

        <h2>Research-Backed Benefits</h2>
        <ul>
          <li>31% reduction in decision-related conflicts</li>
          <li>47% improvement in mutual understanding</li>
          <li>53% increase in decision satisfaction</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-blue-800 font-semibold mb-4">Weekly Practice</h3>
          <p>Start with small decisions and work your way up:</p>
          <ol className="space-y-2">
            <li>Week 1: Daily choices (meals, activities)</li>
            <li>Week 2: Weekly planning decisions</li>
            <li>Week 3: Monthly commitments</li>
            <li>Week 4: Longer-term planning</li>
          </ol>
        </div>
      </div>
    </RecommendationLayout>
  );
}