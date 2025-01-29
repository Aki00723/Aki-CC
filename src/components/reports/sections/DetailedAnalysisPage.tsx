import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import { pdfStyles } from '../styles/pdfStyles';
import { ReportData } from '../../../types/report';
import { getCategoryDefinition, getImplications } from '../utils/categoryUtils';
import { ScoreBar } from '../components/ScoreBar';

export function DetailedAnalysisPage({ categoryScores }: ReportData) {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <Text style={pdfStyles.sectionTitle}>Detailed Analysis</Text>
      {categoryScores.map((category, index) => (
        <View key={index} style={pdfStyles.categoryAnalysis}>
          <Text style={pdfStyles.subsectionTitle}>{category.title}</Text>
          <Text style={pdfStyles.definitionText}>
            {getCategoryDefinition(category.category)}
          </Text>
          <ScoreBar category={category} />
          <Text style={pdfStyles.implicationText}>
            {getImplications(category.category, category.score)}
          </Text>
        </View>
      ))}
    </Page>
  );
}