import { jsPDF } from 'jspdf';
import { TestResult } from '../../types/test';
import { PDFGeneratorContext, PDFData } from './types';
import { generateCoverPage } from './sections/coverPage';
import { generateResultsSection } from './sections/resultsSection';
import { addPageNumber, addFooter, addNewPage } from './utils/pageUtils';

export async function generatePDF(result: TestResult, userName: string): Promise<Uint8Array> {
  const doc = new jsPDF();
  const ctx: PDFGeneratorContext = { doc, currentPage: 1 };
  
  const data: PDFData = {
    userName,
    result,
    timestamp: result.timestamp
  };

  // Generate cover page
  generateCoverPage(ctx, data);
  addPageNumber(ctx);
  addFooter(ctx);

  // Generate results sections
  const sections = [
    {
      title: 'Your Relationship Geniuses',
      content: result.geniuses,
      description: 'These are the areas where you naturally excel in relationships:'
    },
    {
      title: 'Your Core Competencies',
      content: result.competencies,
      description: 'These skills form a solid foundation for your relationships:'
    },
    {
      title: 'Areas for Growth',
      content: result.frustrations,
      description: 'These areas present opportunities for developing deeper connections:'
    }
  ];

  sections.forEach((section) => {
    addNewPage(ctx);
    generateResultsSection(ctx, section);
  });

  return doc.output('arraybuffer');
}