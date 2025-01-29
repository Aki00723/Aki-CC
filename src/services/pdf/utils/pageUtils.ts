import { PDFGeneratorContext } from '../types';
import { PDF_CONFIG } from '../config';

export function addPageNumber(ctx: PDFGeneratorContext) {
  const { doc, currentPage } = ctx;
  const { colors, fonts } = PDF_CONFIG;

  doc.setFontSize(fonts.sizes.small);
  doc.setTextColor(...colors.textLight);
  doc.text(`Page ${currentPage}`, 190, 280, { align: 'right' });
}

export function addFooter(ctx: PDFGeneratorContext) {
  const { doc } = ctx;
  const { colors, fonts } = PDF_CONFIG;

  doc.setFontSize(fonts.sizes.small);
  doc.setTextColor(...colors.textLight);
  doc.setDrawColor(...colors.border);
  doc.line(20, 270, 190, 270);
  doc.text('© Connection Compass - Your Path to Stronger Relationships', 105, 280, { align: 'center' });
}

export function addNewPage(ctx: PDFGeneratorContext) {
  ctx.doc.addPage();
  ctx.currentPage++;
  addPageNumber(ctx);
  addFooter(ctx);
}