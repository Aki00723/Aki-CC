import { TestResult, CategoryScore } from './test';

export interface ReportData {
  result: TestResult;
  categoryScores: CategoryScore[];
  userName: string;
}

export interface CategoryDefinition {
  title: string;
  description: string;
  implications: {
    high: string;
    low: string;
  };
}

export interface PairingAnalysis {
  title: string;
  description: string;
}