import React from 'react';
import { LibraryLayout } from './LibraryLayout';

export function RelationshipPatterns() {
  return (
    <LibraryLayout title="Understanding Relationship Patterns">
      <div className="prose prose-pink max-w-none">
        {/* Introduction */}
        <p className="text-lg text-gray-600 mb-8">
          Recognizing and understanding relationship patterns is key to creating positive change.
          These patterns—often unconscious cycles of interaction—can keep us stuck in the same
          frustrations or conflicts. By bringing them into the light, you can start choosing healthier,
          more fulfilling ways to connect with others.
        </p>

        {/* Common Relationship Patterns */}
        <h2 className="mt-8 mb-4 font-bold text-xl text-gray-800">
          Common Relationship Patterns
        </h2>
        <p className="mb-4">
          Relationship patterns are recurring cycles of interaction that shape our connections.
          Whether it’s always being the one to apologize first or continually avoiding difficult
          conversations, these habitual behaviors can impact how trust, closeness, and mutual
          respect develop in a partnership. Understanding these patterns helps you become more
          intentional about how you relate—and break free from unhelpful cycles.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4 text-lg">Key Patterns to Watch</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Pursue-Withdraw Dynamic:</strong> One partner seeks closeness or resolution,
              while the other pulls away or shuts down, leading to a chase-escape loop.
            </li>
            <li>
              <strong>Criticism-Defensiveness Cycle:</strong> Frequent critiques spark defensive
              reactions, preventing open communication and conflict resolution.
            </li>
            <li>
              <strong>Emotional Flooding:</strong> Overwhelm in high-stress moments can trigger
              outbursts or total shutdown, making productive dialogue nearly impossible.
            </li>
            <li>
              <strong>Stonewalling:</strong> Completely withdrawing from interaction, either
              physically or emotionally, as a way to cope with perceived threats or conflicts.
            </li>
          </ul>
        </div>

        {/* Why Patterns Form */}
        <h2 className="mt-8 mb-4 font-bold text-xl text-gray-800">
          Why Patterns Form
        </h2>
        <p className="mb-4">
          Many of these patterns develop in response to our earliest experiences with caregivers and
          peers. If you learned to avoid conflict in your family of origin, for example, you might
          carry that avoidance into adult relationships. Similarly, someone who was only heard when
          they spoke loudly or forcefully might default to confrontation. Recognizing the roots of
          these patterns can help you cultivate empathy for yourself and your partner, easing the
          transition to new, healthier behaviors.
        </p>

        {/* Transforming Patterns */}
        <h2 className="mt-8 mb-4 font-bold text-xl text-gray-800">
          Transforming Patterns
        </h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            <strong>Identify Recurring Cycles:</strong>
            <br />
            Take note of arguments or emotional reactions that seem to repeat. Journaling or sharing
            observations with a trusted friend can illuminate hidden patterns.
          </li>
          <li>
            <strong>Understand Triggers and Responses:</strong>
            <br />
            Dig deeper into what sparks each cycle. Are you or your partner reacting to fears,
            insecurities, or past hurts? Uncovering these triggers helps break the chain reaction.
          </li>
          <li>
            <strong>Practice New Behaviors:</strong>
            <br />
            Replace old habits with healthier alternatives. For instance, if you normally withdraw,
            try communicating your need for space kindly rather than shutting down.
          </li>
          <li>
            <strong>Maintain Awareness:</strong>
            <br />
            Recognize that falling back into old patterns is common, especially under stress.
            Gently remind yourself and your partner of the new, desired behaviors.
          </li>
          <li>
            <strong>Celebrate Positive Changes:</strong>
            <br />
            Acknowledge even small victories—like calmly resolving a disagreement. Positive
            reinforcement boosts motivation to continue healthy interaction.
          </li>
        </ol>

        {/* Advanced Techniques */}
        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4 text-lg">
            Advanced Techniques to Shift Patterns
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Conflict “Time-Outs”:</strong> If you notice a cycle ramping up, agree to step
              away for a set period. Use this time to calm down and reflect on feelings before
              re-engaging in the discussion.
            </li>
            <li>
              <strong>Role-Reversal Exercises:</strong> Momentarily switch perspectives with your
              partner. Each person states the other’s viewpoint, helping illuminate blind spots and
              reduce defensiveness.
            </li>
            <li>
              <strong>Seek External Feedback:</strong> Sometimes, an outside perspective (from a
              counselor, coach, or close friend) can pinpoint the patterns we’re too close to see.
            </li>
            <li>
              <strong>Scheduled “Pattern Checks”:</strong> Set aside time weekly or monthly to
              evaluate progress. Discuss what’s working, what’s not, and what might be adjusted
              moving forward.
            </li>
          </ul>
        </div>

        {/* Inspiring Quote */}
        <blockquote className="mt-8">
          “The patterns of our lives reveal us. Our habits measure us.”
          <footer className="mt-2">- Mary Oliver</footer>
        </blockquote>

        {/* Conclusion */}
        <p className="mt-8">
          Changing deep-seated relationship patterns can take time and patience, but the rewards
          are well worth the effort. By identifying these recurring cycles, uncovering their
          underlying triggers, and consciously practicing healthier ways of relating, you’ll create
          a more harmonious, supportive dynamic. Remember, every step toward self-awareness and
          intentional behavior paves the way for deeper connection and lasting positive change in
          your relationships.
        </p>
      </div>
    </LibraryLayout>
  );
}
