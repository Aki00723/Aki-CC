import React from 'react';
import { LibraryLayout } from './LibraryLayout';

export function MeaningfulGestures() {
  return (
    <LibraryLayout title="The Art of Meaningful Gestures">
      <div className="prose prose-pink max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Learn how small, thoughtful actions can create lasting impact in your relationships.
        </p>

        <h2>The Power of Meaningful Gestures</h2>
        <p>
          Meaningful gestures are intentional actions that communicate care, understanding, and appreciation. They help build and maintain emotional connection.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4">Types of Gestures</h3>
          <ul>
            <li>Acts of service</li>
            <li>Words of affirmation</li>
            <li>Quality time</li>
            <li>Physical touch</li>
            <li>Thoughtful gifts</li>
          </ul>
        </div>

        <h2>Creating Impact</h2>
        <ol>
          <li>Understand your partner's preferences</li>
          <li>Choose meaningful timing</li>
          <li>Be consistent</li>
          <li>Stay authentic</li>
          <li>Focus on quality over quantity</li>
        </ol>

        <blockquote>
          "It's the little things done consistently that make the biggest difference."
          <footer>- Unknown</footer>
        </blockquote>
      </div>
    </LibraryLayout>
  );
}