import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import { reportStyles } from '../styles/reportStyles';

export function IntroductionPage() {
  return (
    <Page size="A4" style={reportStyles.page}>
      <View style={reportStyles.section}>
        <Text style={reportStyles.sectionTitle}>Welcome to Your Journey</Text>
        <Text style={reportStyles.paragraph}>
          Thank you for completing the Connection Compass assessment. This report provides valuable insights into your unique relationship dynamics and patterns. Understanding these patterns is the first step toward building stronger, more fulfilling relationships.
        </Text>
      </View>
    </Page>
  );
}