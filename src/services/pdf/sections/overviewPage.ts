import { PDFGeneratorContext } from '../types';
import { PDF_CONFIG } from '../config';

const geniusTypes = [
  { id: 'harmony', label: 'Harmony', desc: 'Creating emotional balance' },
  { id: 'evaluation', label: 'Evaluation', desc: 'Objective assessment' },
  { id: 'action', label: 'Action', desc: 'Driving positive change' },
  { id: 'reflection', label: 'Reflection', desc: 'Understanding emotions' },
  { id: 'thoughtfulness', label: 'Thoughtfulness', desc: 'Nurturing connections' },
  { id: 'stability', label: 'Stability', desc: 'Building consistency' }
];

export function generateOverviewPage(ctx: PDFGeneratorContext) {
  const { doc } = ctx;
  const { colors, fonts } = PDF_CONFIG;
  const pageWidth = doc.internal.pageSize.width;

  // Title
  doc.setFontSize(fonts.sizes.title);
  doc.setTextColor(...colors.primary);
  doc.text('Overview', 20, 40);

  // Introduction text
  doc.setFontSize(fonts.sizes.body);
  doc.setTextColor(...colors.text);
  const introText = `Based on extensive research in relationship psychology and attachment theory, 
    the Connection Compass Assessment identifies your unique relationship dynamics 
    across six core dimensions. This comprehensive analysis helps you understand 
    your natural strengths and areas for growth in relationships.`;
  doc.text(doc.splitTextToSize(introText, pageWidth - 40), 20, 60);

  // Draw interconnected genius types diagram
  const centerX = pageWidth / 2;
  const centerY = 160;
  const radius = 50;

  // Draw connecting lines
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(0.5);
  geniusTypes.forEach((_, index) => {
    const angle1 = (index * Math.PI * 2) / 6;
    const x1 = centerX + radius * Math.cos(angle1);
    const y1 = centerY + radius * Math.sin(angle1);

    geniusTypes.forEach((_, j) => {
      if (j > index) {
        const angle2 = (j * Math.PI * 2) / 6;
        const x2 = centerX + radius * Math.cos(angle2);
        const y2 = centerY + radius * Math.sin(angle2);
        doc.line(x1, y1, x2, y2);
      }
    });
  });

  // Draw circles with labels
  geniusTypes.forEach((type, index) => {
    const angle = (index * Math.PI * 2) / 6;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    // Circle
    doc.setFillColor(...colors.primary);
    doc.circle(x, y, 15, 'F');

    // Label
    doc.setFontSize(fonts.sizes.small);
    doc.setTextColor(255, 255, 255);
    doc.text(type.label[0], x, y + 2, { align: 'center' });

    // Description
    doc.setFontSize(fonts.sizes.body);
    doc.setTextColor(...colors.text);
    doc.text(type.label, x, y + 25, { align: 'center' });
    doc.setFontSize(fonts.sizes.small);
    doc.text(type.desc, x, y + 35, { align: 'center' });
  });

  // Methodology note
  doc.setFontSize(fonts.sizes.small);
  doc.setTextColor(...colors.textLight);
  const methodologyNote = `Each dimension is carefully measured through validated assessment questions,
    providing insights that can help you build stronger, more fulfilling relationships.`;
  doc.text(doc.splitTextToSize(methodologyNote, pageWidth - 40), 20, 260);
}