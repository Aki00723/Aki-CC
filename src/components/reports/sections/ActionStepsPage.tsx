import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import { pdfStyles } from '../styles/pdfStyles';
import { ReportData } from '../../../types/report';
import { getImplications } from '../utils/categoryUtils';

export function ActionStepsPage({ result }: ReportData) {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <Text style={pdfStyles.sectionTitle}>Your Personal Growth Plan</Text>
      
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subsectionTitle}>Leverage Your Strengths</Text>
        {result.geniuses.map((genius, index) => (
          <View key={index} style={pdfStyles.actionItem}>
            <Text style={pdfStyles.bullet}>•</Text>
            <Text style={pdfStyles.actionText}>
              {getImplications(genius, 5)}
            </Text>
          </View>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subsectionTitle}>Areas for Growth</Text>
        {result.frustrations.map((frustration, index) => (
          <View key={index} style={pdfStyles.actionItem}>
            <Text style={pdfStyles.bullet}>•</Text>
            <Text style={pdfStyles.actionText}>
              {getImplications(frustration, 2)}
            </Text>
          </View>
        ))}
      </View>

      <View style={pdfStyles.footer}>
        <Text>
          © {new Date().getFullYear()} Connection Compass - Your Path to Stronger Relationships
        </Text>
      </View>
    </Page>
  );
}