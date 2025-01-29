export const getCategoryDefinition = (category: string): string => {
  const definitions = {
    harmony: "Harmony reflects your ability to create and maintain emotional balance in relationships, fostering understanding and mutual support.",
    evaluation: "Evaluation shows your capacity to assess situations objectively and make balanced decisions that benefit the relationship.",
    action: "Action demonstrates your drive to initiate positive changes and take concrete steps toward relationship growth.",
    reflection: "Reflection indicates your ability to process emotions and understand the deeper dynamics of your relationships.",
    thoughtfulness: "Thoughtfulness represents your capacity to consider others' needs and feelings, showing care through actions.",
    steadfastness: "Steadfastness shows your commitment to following through on promises and maintaining relationship stability.",
  };
  return definitions[category.toLowerCase()] || "";
};

export const getImplications = (category: string, score: number): string => {
  const highScore = score >= 4;
  const implications = {
    harmony: highScore 
      ? "You excel at creating emotional safety and support in relationships."
      : "Focus on developing more emotional awareness and supportive behaviors.",
    evaluation: highScore
      ? "Your balanced decision-making strengthens relationship stability."
      : "Work on taking time to evaluate situations before reacting.",
    action: highScore
      ? "You naturally drive positive change in relationships."
      : "Practice taking more initiative in relationship growth.",
    reflection: highScore
      ? "Your emotional intelligence helps deepen relationship connections."
      : "Dedicate more time to understanding emotional dynamics.",
    thoughtfulness: highScore
      ? "Your considerate nature enriches relationship experiences."
      : "Look for more opportunities to show care through actions.",
    steadfastness: highScore
      ? "Your reliability builds trust and security in relationships."
      : "Focus on following through on commitments more consistently.",
  };
  return implications[category.toLowerCase()] || "";
};