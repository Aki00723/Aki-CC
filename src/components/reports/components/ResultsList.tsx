import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { reportStyles } from '../styles/reportStyles';

interface ResultsListProps {
  items: string[];
}

export function ResultsList({ items }: ResultsListProps) {
  return (
    <View style={reportStyles.list}>
      {items.map((item, index) => (
        <View key={index} style={reportStyles.listItem}>
          <Text style={reportStyles.bullet}>•</Text>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}