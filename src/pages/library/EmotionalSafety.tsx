import React from 'react';
import { LibraryLayout } from './LibraryLayout';

export function EmotionalSafety() {
  return (
    <LibraryLayout title="Building Emotional Safety">
      <div className="prose prose-pink max-w-none">
        {/* Introduction */}
        <p className="text-lg text-gray-600 mb-8">
          Emotional safety is the bedrock of strong, enduring relationships. When both partners feel
          secure, understood, and valued, they can communicate openly, explore challenges
          collaboratively, and cultivate deeper intimacy. In this section, discover how to foster and
          maintain an environment where each person’s feelings and needs are genuinely respected.
        </p>

        {/* Why Emotional Safety Matters */}
        <h2 className="mt-8 mb-4 font-bold text-xl text-gray-800">
          Why Emotional Safety Matters
        </h2>
        <p className="mb-4">
          Emotional safety goes beyond just “getting along.” It’s about creating a space where each
          person feels free to express their fears, joys, anxieties, and hopes without fear of
          ridicule or criticism. When people feel safe emotionally, they’re more willing to be
          vulnerable, take ownership of mistakes, and work toward solutions that benefit both
          partners. This openness can significantly reduce conflict escalation and enhance
          long-term satisfaction.
        </p>

        {/* Key Components */}
        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4 text-lg">
            Key Components of Emotional Safety
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Non-Judgmental Listening:</strong> Avoid jumping to conclusions or giving
              unsolicited advice. Focus on understanding rather than reacting.
            </li>
            <li>
              <strong>Validation of Feelings:</strong> Acknowledge your partner’s emotions even if
              you don’t share them. This lets them know their experiences matter.
            </li>
            <li>
              <strong>Consistent Support:</strong> Be there for your partner, especially during
              stressful or vulnerable moments, to reinforce a sense of security.
            </li>
            <li>
              <strong>Respect for Boundaries:</strong> Honor each other’s space, comfort levels, and
              privacy. Healthy boundaries protect both individuality and the relationship.
            </li>
          </ul>
        </div>

        {/* Common Pitfalls */}
        <h2 className="mt-8 mb-4 font-bold text-xl text-gray-800">
          Common Pitfalls and How to Avoid Them
        </h2>
        <p className="mb-4">
          Even well-intentioned partners can unintentionally undermine emotional safety. Sarcasm,
          dismissiveness, or a pattern of breaking small promises might feel minor at first, but
          they can chip away at trust over time. By identifying and addressing these behaviors
          early, you can prevent resentments from taking root.
        </p>
        <p className="mb-4">
          One effective strategy is to set aside time each week to discuss how both of you are
          feeling about your emotional environment. Are there any unresolved tensions? Are you both
          feeling heard? This consistent check-in helps catch issues before they escalate.
        </p>

        {/* Building Emotional Safety */}
        <h2 className="mt-8 mb-4 font-bold text-xl text-gray-800">
          Building Emotional Safety
        </h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            <strong>Practice Active Listening:</strong>
            <br />
            Give your partner your undivided attention—maintain eye contact, ask follow-up
            questions, and reflect back what you heard.
          </li>
          <li>
            <strong>Validate Emotions, Even When You Disagree:</strong>
            <br />
            Let them know you understand how they feel, even if you don’t share that perspective.
            This maintains connection and empathy.
          </li>
          <li>
            <strong>Respond with Empathy:</strong>
            <br />
            Show genuine concern when your partner is upset or worried. Simple phrases like “I’m
            here for you” or “I understand this is tough” can be powerful.
          </li>
          <li>
            <strong>Maintain Consistency in Your Support:</strong>
            <br />
            Keep your word and follow through on promises. Consistent actions build the trust that
            underpins emotional safety.
          </li>
          <li>
            <strong>Respect and Maintain Healthy Boundaries:</strong>
            <br />
            Everyone needs space—emotional, mental, or physical. Understanding and respecting these
            limits fosters mutual respect and safety.
          </li>
        </ol>

        {/* Advanced Techniques */}
        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h3 className="text-pink-800 font-semibold mb-4 text-lg">Advanced Techniques</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Set a “Safe Word” or Phrase:</strong> If conversations get heated, use a
              predefined word or phrase to pause. This helps prevent escalation and reminds both
              partners to approach issues calmly.
            </li>
            <li>
              <strong>Reflective Journaling:</strong> Spend a few minutes each day noting what made
              you feel safe or uneasy. Sharing these insights can illuminate patterns and spark
              constructive dialogue.
            </li>
            <li>
              <strong>Mindful Communication:</strong> Pause before responding to emotionally charged
              statements. Take a deep breath, gather your thoughts, and aim for empathy rather than
              defense.
            </li>
            <li>
              <strong>Scheduled “State of the Union” Talk:</strong> Set aside dedicated time (e.g.,
              weekly or monthly) to discuss overall relationship health. Listen openly, brainstorm
              solutions, and celebrate progress together.
            </li>
          </ul>
        </div>

        {/* Inspiring Quote */}
        <blockquote className="mt-8">
          “The quality of our relationships determines the quality of our lives.”
          <footer className="mt-2">- Esther Perel</footer>
        </blockquote>

        {/* Conclusion */}
        <p className="mt-8">
          Emotional safety doesn’t happen overnight—it’s an ongoing practice of empathy,
          consistency, and genuine respect for one another’s experiences. By actively listening,
          validating each other’s emotions, and respecting personal boundaries, couples create a
          nurturing environment where both partners can grow, heal, and thrive. Whether you’re just
          beginning to build trust or looking to deepen a long-standing bond, remember that every
          act of care and understanding strengthens the safety you share.
        </p>
      </div>
    </LibraryLayout>
  );
}
