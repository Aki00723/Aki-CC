import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import { reportStyles } from '../styles/reportStyles';
import { TestResult } from '../../../types/test';

interface ResultsPageProps {
  result: TestResult;
}

export function ResultsPage({ result }: ResultsPageProps) {
  return (
    <Page size="A4" style={reportStyles.page}>
      <Text style={reportStyles.pageTitle}>Your Results</Text>

      <View style={reportStyles.resultsSection}>
        <Text style={reportStyles.sectionTitle}>Your Relationship Geniuses</Text>
        <Text style={reportStyles.sectionDescription}>
          These are your natural strengths in relationships:
        </Text>
        {result.geniuses.map((genius, index) => (
          <View key={index} style={reportStyles.resultItem}>
            <Text style={reportStyles.resultLabel}>{genius}</Text>
          </View>
        ))}
      </View>

      <View style={reportStyles.resultsSection}>
        <Text style={reportStyles.sectionTitle}>Core Competencies</Text>
        <Text style={reportStyles.sectionDescription}>
          Areas where you demonstrate solid capabilities:
        </Text>
        {result.competencies.map((comp, index) => (
          <View key={index} style={reportStyles.resultItem}>
            <Text style={reportStyles.resultLabel}>{comp}</Text>
          </View>
        ))}
      </View>

      <View style={reportStyles.resultsSection}>
        <Text style={reportStyles.sectionTitle}>Growth Opportunities</Text>
        <Text style={reportStyles.sectionDescription}>
          Areas that present opportunities for development:
        </Text>
        {result.frustrations.map((frust, index) => (
          <View key={index} style={reportStyles.resultItem}>
            <Text style={reportStyles.resultLabel}>{frust}</Text>
          </View>
        ))}
      </View>
    </Page>
  );
}