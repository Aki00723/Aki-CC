import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import { reportStyles } from '../styles/reportStyles';
import { TestResult } from '../../../types/test';

interface PairingPageProps {
  result: TestResult;
}

export function PairingPage({ result }: PairingPageProps) {
  const topTwo = result.geniuses.slice(0, 2);
  const pairingTitle = `${topTwo[0]} | ${topTwo[1]}`;

  return (
    <Page size="A4" style={reportStyles.page}>
      <Text style={reportStyles.pageTitle}>Your Unique Pairing</Text>
      <Text style={reportStyles.pairingTitle}>{pairingTitle}</Text>

      <Text style={reportStyles.pairingDescription}>
        While each relationship genius is valuable on its own, the combination of your 
        top two geniuses creates a unique approach to relationships. Your pairing of 
        {` ${topTwo[0]} and ${topTwo[1]}`} suggests:
      </Text>

      <View style={reportStyles.pairingDetails}>
        <View style={reportStyles.section}>
          <Text style={reportStyles.sectionTitle}>They Crave:</Text>
          <View style={reportStyles.bulletPoints}>
            <Text style={reportStyles.bulletPoint}>• Understanding and validation of their unique perspective</Text>
            <Text style={reportStyles.bulletPoint}>• Space to process and reflect on relationships</Text>
          </View>
        </View>

        <View style={reportStyles.section}>
          <Text style={reportStyles.sectionTitle}>They Are Challenged By:</Text>
          <View style={reportStyles.bulletPoints}>
            <Text style={reportStyles.bulletPoint}>• Pressure to make quick decisions without reflection</Text>
            <Text style={reportStyles.bulletPoint}>• Dismissal of their emotional insights</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}