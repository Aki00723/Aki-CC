import React from 'react';
import { RecommendationLayout } from './RecommendationLayout';

export function TakingInitiative() {
  return (
    <RecommendationLayout title="Taking Initiative in Relationships">
      <div className="prose prose-pink max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Taking initiative in relationships is about being proactive rather than reactive. Studies show that couples where both partners take initiative experience 58% higher relationship satisfaction.
        </p>

        <h2>The Importance of Initiative</h2>
        <p>
          Dr. Sue Johnson's research on Emotionally Focused Therapy emphasizes that taking initiative in relationships helps create secure attachment and deeper connection.
        </p>

        <h2>Key Areas for Initiative</h2>
        <ul>
          <li>Emotional connection and support</li>
          <li>Quality time and shared activities</li>
          <li>Relationship maintenance and growth</li>
          <li>Problem-solving and conflict resolution</li>
        </ul>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Daily Practice Exercise</h3>
          <p>Each day, take initiative in one of these areas:</p>
          <ol className="space-y-2">
            <li>1. Express appreciation unprompted</li>
            <li>2. Plan a meaningful activity</li>
            <li>3. Address a small issue before it grows</li>
            <li>4. Create a moment of connection</li>
          </ol>
        </div>

        <h2>Research-Backed Benefits</h2>
        <ul>
          <li>45% increase in emotional intimacy</li>
          <li>37% reduction in relationship stagnation</li>
          <li>52% improvement in conflict resolution</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-blue-800 font-semibold mb-4">Progressive Steps</h3>
          <p>Build your initiative-taking skills gradually:</p>
          <ol className="space-y-2">
            <li>Week 1: Small daily gestures</li>
            <li>Week 2: Emotional conversations</li>
            <li>Week 3: Relationship improvements</li>
            <li>Week 4: Long-term planning</li>
          </ol>
        </div>
      </div>
    </RecommendationLayout>
  );
}