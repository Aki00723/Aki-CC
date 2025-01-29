import { PDFGeneratorContext, TestResult } from '../types';
import { PDF_CONFIG } from '../config';

export function generatePairingPage(ctx: PDFGeneratorContext, result: TestResult) {
  const { doc } = ctx;
  const { colors, fonts } = PDF_CONFIG;
  const pageWidth = doc.internal.pageSize.width;

  const topTwo = result.geniuses.slice(0, 2);
  const pairingTitle = `${topTwo[0]} | ${topTwo[1]}`;

  // Title with background
  doc.setFillColor(...colors.background);
  doc.rect(0, 20, pageWidth, 60, 'F');
  
  doc.setFontSize(fonts.sizes.title);
  doc.setTextColor(...colors.primary);
  doc.text('Your Unique Pairing', 20, 45);
  
  doc.setFontSize(fonts.sizes.heading);
  doc.text(pairingTitle, 20, 65);

  // Description
  doc.setFontSize(fonts.sizes.body);
  doc.setTextColor(...colors.text);
  const description = `While each relationship genius is valuable on its own, the combination of your 
    top two geniuses creates a unique approach to relationships. Your pairing of 
    ${topTwo[0]} and ${topTwo[1]} suggests:`;
  doc.text(doc.splitTextToSize(description, pageWidth - 40), 20, 90);

  // They Crave section
  let yPos = 130;
  generateSection(ctx, 'THEY CRAVE:', [
    'Understanding and validation of their unique perspective',
    'Space to process and reflect on relationships'
  ], yPos);

  // They Are Challenged By section
  yPos = 200;
  generateSection(ctx, 'THEY ARE CHALLENGED BY:', [
    'Pressure to make quick decisions without reflection',
    'Dismissal of their emotional insights'
  ], yPos);

  // Add decorative elements
  addDecorativeElements(ctx);
}

function generateSection(ctx: PDFGeneratorContext, title: string, items: string[], yPos: number) {
  const { doc } = ctx;
  const { colors, fonts } = PDF_CONFIG;
  const pageWidth = doc.internal.pageSize.width;

  // Section background
  doc.setFillColor(253, 242, 248);
  doc.roundedRect(20, yPos - 10, pageWidth - 40, 60, 5, 5, 'F');

  // Title
  doc.setFontSize(fonts.sizes.heading);
  doc.setTextColor(...colors.primary);
  doc.text(title, 40, yPos + 10);

  // Items
  doc.setFontSize(fonts.sizes.body);
  doc.setTextColor(...colors.text);
  items.forEach((item, index) => {
    doc.circle(50, yPos + 30 + index * 20, 2, 'F');
    doc.text(item, 60, yPos + 30 + index * 20);
  });
}

function addDecorativeElements(ctx: PDFGeneratorContext) {
  const { doc } = ctx;
  const { colors } = PDF_CONFIG;
  const pageWidth = doc.internal.pageSize.width;

  // Add subtle decorative elements
  doc.setGlobalAlpha(0.1);
  doc.setFillColor(...colors.primary);
  
  // Corner circles
  doc.circle(30, 30, 20, 'F');
  doc.circle(pageWidth - 30, 30, 15, 'F');
  doc.circle(30, doc.internal.pageSize.height - 30, 15, 'F');
  doc.circle(pageWidth - 30, doc.internal.pageSize.height - 30, 20, 'F');

  doc.setGlobalAlpha(1);
}