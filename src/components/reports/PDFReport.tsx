import React from 'react';
import { Document } from '@react-pdf/renderer';
import { TestResult } from '../../types/test';
import { CoverPage } from './sections/CoverPage';
import { OverviewPage } from './sections/OverviewPage';
import { ResultsPage } from './sections/ResultsPage';
import { PairingPage } from './sections/PairingPage';

interface PDFReportProps {
  result: TestResult;
  userName: string;
}

export function PDFReport({ result, userName }: PDFReportProps) {
  return (
    <Document>
      <CoverPage userName={userName} timestamp={result.timestamp} />
      <OverviewPage />
      <ResultsPage result={result} />
      <PairingPage result={result} />
    </Document>
  );
}