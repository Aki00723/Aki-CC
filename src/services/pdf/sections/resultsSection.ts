import { PDFGeneratorContext, PDFSection } from '../types';
import { PDF_CONFIG } from '../config';

export function generateResultsSection(ctx: PDFGeneratorContext, section: PDFSection) {
  const { doc } = ctx;
  const { colors, fonts } = PDF_CONFIG;
  const pageWidth = doc.internal.pageSize.width;

  // Section header with decorative background
  doc.setFillColor(...colors.background);
  doc.rect(0, 20, pageWidth, 40, 'F');

  // Title
  doc.setFontSize(fonts.sizes.title);
  doc.setTextColor(...colors.primary);
  doc.text(section.title, 20, 45);

  // Description
  if (section.description) {
    doc.setFontSize(fonts.sizes.body);
    doc.setTextColor(...colors.text);
    doc.text(doc.splitTextToSize(section.description, pageWidth - 40), 20, 70);
  }

  // Content items with visual elements
  let yPos = 100;
  section.content.forEach((item, index) => {
    // Item container
    doc.setFillColor(253, 242, 248);
    doc.roundedRect(20, yPos - 10, pageWidth - 40, 30, 3, 3, 'F');

    // Bullet point
    doc.setFillColor(...colors.primary);
    doc.circle(30, yPos + 5, 2, 'F');

    // Item text
    doc.setFontSize(fonts.sizes.body);
    doc.setTextColor(...colors.text);
    doc.text(item, 40, yPos + 5);

    // Add some visual flair
    doc.setDrawColor(...colors.primary);
    doc.setLineWidth(0.5);
    doc.line(40, yPos + 15, pageWidth - 40, yPos + 15);

    yPos += 40;
  });

  // Add decorative elements
  doc.setGlobalAlpha(0.1);
  doc.setFillColor(...colors.primary);
  doc.circle(pageWidth - 30, 30, 20, 'F');
  doc.circle(40, yPos + 20, 15, 'F');
  doc.setGlobalAlpha(1);
}