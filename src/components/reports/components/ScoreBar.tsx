import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles/pdfStyles';
import { CategoryScore } from '../../../types/test';

interface ScoreBarProps {
  category: CategoryScore;
}

export function ScoreBar({ category }: ScoreBarProps) {
  const percentage = Math.round(category.score * 20);

  return (
    <View style={pdfStyles.scoreRow}>
      <Text style={pdfStyles.scoreLabel}>{category.title}</Text>
      <View style={pdfStyles.scoreBarContainer}>
        <View style={[pdfStyles.scoreBar, { width: `${percentage}%` }]} />
      </View>
      <Text style={pdfStyles.scoreValue}>{percentage}%</Text>
    </View>
  );
}