import { PDFGeneratorContext, PDFData } from '../types';
import { PDF_CONFIG } from '../config';
import { format } from 'date-fns';

export function generateCoverPage(ctx: PDFGeneratorContext, data: PDFData) {
  const { doc } = ctx;
  const { colors, fonts } = PDF_CONFIG;
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  // Background gradient
  const gradient = doc.setFillColor(253, 242, 248);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Add decorative circles
  for (let i = 0; i < 8; i++) {
    const x = Math.random() * pageWidth;
    const y = Math.random() * pageHeight;
    const radius = Math.random() * 20 + 10;
    doc.setFillColor(...colors.primary);
    doc.setGlobalAlpha(0.1);
    doc.circle(x, y, radius, 'F');
  }
  doc.setGlobalAlpha(1);

  // Logo
  doc.setFillColor(...colors.primary);
  const logoSize = 40;
  const logoX = (pageWidth - logoSize) / 2;
  
  // Draw compass logo
  doc.circle(logoX + logoSize/2, 80, logoSize/2, 'F');
  doc.setFillColor(255, 255, 255);
  doc.circle(logoX + logoSize/2, 80, logoSize/2 - 2, 'F');
  doc.setFillColor(...colors.primary);
  
  // Compass needle
  doc.triangle(
    logoX + logoSize/2, 60,
    logoX + logoSize/2 - 5, 80,
    logoX + logoSize/2 + 5, 80,
    'F'
  );

  // Title
  doc.setFontSize(fonts.sizes.title);
  doc.setTextColor(...colors.primary);
  doc.setFont('helvetica', 'bold');
  doc.text('Assessment Report', pageWidth/2, 140, { align: 'center' });

  // Subtitle
  doc.setFontSize(fonts.sizes.subheading);
  doc.setTextColor(...colors.text);
  doc.setFont('helvetica', 'normal');
  doc.text('Connection Compass', pageWidth/2, 160, { align: 'center' });

  // User info
  doc.setFontSize(fonts.sizes.heading);
  doc.text('Prepared for:', pageWidth/2, 200, { align: 'center' });
  doc.setFontSize(fonts.sizes.subheading);
  doc.setFont('helvetica', 'bold');
  doc.text(data.userName, pageWidth/2, 220, { align: 'center' });
  
  // Date
  doc.setFontSize(fonts.sizes.body);
  doc.setFont('helvetica', 'normal');
  doc.text(format(new Date(data.timestamp), 'MMMM d, yyyy'), pageWidth/2, 240, { align: 'center' });

  // Decorative line
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(0.5);
  doc.line(pageWidth/4, 260, pageWidth*3/4, 260);

  // Footer text
  doc.setFontSize(fonts.sizes.small);
  doc.setTextColor(...colors.textLight);
  doc.text(
    'Your Path to Stronger Relationships',
    pageWidth/2,
    pageHeight - 40,
    { align: 'center' }
  );
}