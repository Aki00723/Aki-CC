import React from 'react';
import { RecommendationLayout } from './RecommendationLayout';

export function EmotionalAwareness() {
  return (
    <RecommendationLayout title="Developing Emotional Awareness">
      <div className="prose prose-pink max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Emotional awareness is fundamental to building stronger relationships. Research shows that couples with high emotional intelligence have a 58% higher success rate in resolving conflicts.
        </p>

        <h2>Daily Practices</h2>
        <ul>
          <li>Practice mindful check-ins 3 times daily</li>
          <li>Keep an emotion journal</li>
          <li>Use the "RAIN" technique (Recognize, Allow, Investigate, Nurture)</li>
        </ul>

        <h2>The Japanese Concept of "Kanjō"</h2>
        <p>
          In Japanese culture, "Kanjō" (感情) emphasizes the importance of understanding both your own emotions and those of others. This concept teaches us that emotions are neither good nor bad - they are messengers providing valuable information.
        </p>

        <h2>Scientific Background</h2>
        <p>
          According to research published in the Journal of Consulting and Clinical Psychology (2019), individuals who practice emotional awareness exercises show a 43% improvement in relationship satisfaction within 6 months.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">4-Week Practice Plan</h3>
          <ol className="space-y-4">
            <li>
              <strong>Week 1:</strong> Daily emotion labeling practice
              <p className="text-sm text-gray-600">Identify and name your emotions 3 times each day</p>
            </li>
            <li>
              <strong>Week 2:</strong> Body-emotion connection
              <p className="text-sm text-gray-600">Notice physical sensations associated with emotions</p>
            </li>
            <li>
              <strong>Week 3:</strong> Trigger awareness
              <p className="text-sm text-gray-600">Identify what triggers specific emotional responses</p>
            </li>
            <li>
              <strong>Week 4:</strong> Integration
              <p className="text-sm text-gray-600">Practice communicating emotions effectively</p>
            </li>
          </ol>
        </div>

        <h2>Additional Resources</h2>
        <ul>
          <li>Recommended reading: "Emotional Intelligence 2.0" by Travis Bradberry</li>
          <li>Daily meditation practices focused on emotional awareness</li>
          <li>Weekly emotion tracking templates</li>
        </ul>
      </div>
    </RecommendationLayout>
  );
}