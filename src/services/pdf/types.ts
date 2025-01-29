import { TestResult } from '../../types/test';

export type RGB = [number, number, number];

export interface PDFGeneratorContext {
  doc: jsPDF;
  currentPage: number;
}

export interface PDFSection {
  title: string;
  content: string[];
  description?: string;
}

export interface PDFData {
  userName: string;
  result: TestResult;
  timestamp: string;
}