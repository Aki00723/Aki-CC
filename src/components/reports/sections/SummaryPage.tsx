import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import { pdfStyles } from '../styles/pdfStyles';
import { ReportData } from '../../../types/report';
import { ScoreBar } from '../components/ScoreBar';

export function SummaryPage({ categoryScores }: ReportData) {
  const topTwo = categoryScores.slice(0, 2);
  const pairingName = `The ${topTwo[0].title} ${topTwo[1].title}`;

  return (
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Your HEARTS Profile Overview</Text>
        <View style={pdfStyles.scoreContainer}>
          {categoryScores.map((category, index) => (
            <ScoreBar key={index} category={category} />
          ))}
        </View>
      </View>

      <View style={pdfStyles.pairingSection}>
        <Text style={pdfStyles.pairingTitle}>{pairingName}</Text>
        <Text style={pdfStyles.definitionText}>
          Your unique combination of {topTwo[0].title} and {topTwo[1].title} makes you especially effective at building and maintaining meaningful relationships. This pairing suggests you excel at both {topTwo[0].description.toLowerCase()} and {topTwo[1].description.toLowerCase()}.
        </Text>
      </View>
    </Page>
  );
}