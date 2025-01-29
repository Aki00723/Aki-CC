import React from 'react';
import { Page, Text, View, Svg, Circle, Path } from '@react-pdf/renderer';
import { reportStyles } from '../styles/reportStyles';

export function OverviewPage() {
  const geniusTypes = [
    { id: 'harmony', label: 'Harmony', desc: 'Creating emotional balance' },
    { id: 'evaluation', label: 'Evaluation', desc: 'Objective assessment' },
    { id: 'action', label: 'Action', desc: 'Driving positive change' },
    { id: 'reflection', label: 'Reflection', desc: 'Understanding emotions' },
    { id: 'thoughtfulness', label: 'Thoughtfulness', desc: 'Nurturing connections' },
    { id: 'stability', label: 'Stability', desc: 'Building consistency' }
  ];

  return (
    <Page size="A4" style={reportStyles.page}>
      <Text style={reportStyles.pageTitle}>Overview</Text>
      
      <Text style={reportStyles.introText}>
        Based on extensive research in relationship psychology and attachment theory, 
        the Connection Compass Assessment identifies your unique relationship dynamics 
        across six core dimensions. This comprehensive analysis helps you understand 
        your natural strengths and areas for growth in relationships.
      </Text>

      <View style={reportStyles.geniusTypesContainer}>
        {geniusTypes.map((type, index) => (
          <View key={type.id} style={reportStyles.geniusType}>
            <Text style={reportStyles.geniusLabel}>{type.label}</Text>
            <Text style={reportStyles.geniusDescription}>{type.desc}</Text>
          </View>
        ))}
      </View>

      <Text style={reportStyles.methodologyNote}>
        Each dimension is carefully measured through validated assessment questions,
        providing insights that can help you build stronger, more fulfilling relationships.
      </Text>
    </Page>
  );
}