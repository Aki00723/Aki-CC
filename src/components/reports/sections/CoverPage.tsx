import React from 'react';
import { Page, Text, View, Svg, Path, Circle } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { reportStyles } from '../styles/reportStyles';

interface CoverPageProps {
  userName: string;
  timestamp: string;
}

export function CoverPage({ userName, timestamp }: CoverPageProps) {
  return (
    <Page size="A4" style={reportStyles.coverPage}>
      <View style={reportStyles.logoContainer}>
        {/* Compass Logo */}
        <Svg viewBox="0 0 40 40" style={reportStyles.logo}>
          <Circle cx="20" cy="20" r="18" stroke="#EC4899" strokeWidth="2" fill="none" />
          <Circle cx="20" cy="20" r="2" fill="#EC4899" />
          <Path d="M20 6L23 20H17L20 6Z" fill="#EC4899" />
          <Path d="M20 34L17 20H23L20 34Z" fill="#EC4899" />
        </Svg>
      </View>

      <Text style={reportStyles.mainTitle}>Assessment Report</Text>
      <Text style={reportStyles.subtitle}>Connection Compass</Text>
      
      <View style={reportStyles.userInfo}>
        <Text style={reportStyles.userName}>{userName}</Text>
        <Text style={reportStyles.date}>
          {format(new Date(timestamp), 'MMMM d, yyyy')}
        </Text>
      </View>

      <View style={reportStyles.decorativeLine} />
      
      <Text style={reportStyles.tagline}>
        Your Path to Stronger Relationships
      </Text>
    </Page>
  );
}