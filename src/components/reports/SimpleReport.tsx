import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { TestResult, CategoryScore } from '../../types/test';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  category: {
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  score: {
    fontSize: 12,
    color: '#666666',
  },
});

interface SimpleReportProps {
  result: TestResult;
  categoryScores: CategoryScore[];
  userName: string;
}

export function SimpleReport({ result, categoryScores, userName }: SimpleReportProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Connection Compass Report</Text>
          <Text style={styles.subtitle}>{userName}</Text>
          <Text style={styles.subtitle}>
            {format(new Date(result.timestamp), 'MMMM d, yyyy')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Your Relationship Style Analysis:</Text>
          {categoryScores.map((category, index) => (
            <View key={index} style={styles.category}>
              <Text style={styles.categoryTitle}>
                {category.title}
              </Text>
              <Text style={styles.score}>
                Score: {Math.round(category.score * 20)}%
              </Text>
              <Text style={styles.text}>
                {category.description}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Top Strengths: {result.geniuses.join(', ')}
          </Text>
          <Text style={styles.text}>
            Competencies: {result.competencies.join(', ')}
          </Text>
          <Text style={styles.text}>
            Growth Areas: {result.frustrations.join(', ')}
          </Text>
        </View>
      </Page>
    </Document>
  );
}