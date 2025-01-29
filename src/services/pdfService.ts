import { jsPDF } from 'jspdf';
import { TestResult } from '../types/test';
import { format } from 'date-fns';

// Colors in RGB format for jsPDF
const COLORS = {
  primary: [236, 72, 153], // Pink
  text: [31, 41, 55], // Dark gray
  textLight: [107, 114, 128], // Medium gray
  border: [229, 231, 235] // Light gray
};

export async function generatePDF(result: TestResult, userName: string): Promise<Uint8Array> {
  const doc = new jsPDF();
  let currentPage = 1;
  
  // Helper functions
  const addPageNumber = () => {
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.textLight);
    doc.text(`Page ${currentPage}`, 190, 280, { align: 'right' });
  };

  const addFooter = () => {
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.textLight);
    doc.setDrawColor(...COLORS.border);
    doc.line(20, 270, 190, 270);
    doc.text('© Connection Compass - Your Path to Stronger Relationships', 105, 280, { align: 'center' });
  };

  const addNewPage = () => {
    doc.addPage();
    currentPage++;
    addPageNumber();
    addFooter();
  };

  // Cover Page
  doc.setFillColor(253, 242, 248); // Light pink background
  doc.rect(0, 0, 210, 297, 'F');

  // Logo and Title
  doc.setFontSize(24);
  doc.setTextColor(...COLORS.primary);
  doc.text('Your Connection Compass', 105, 100, { align: 'center' });
  doc.text('Relationship Profile', 105, 120, { align: 'center' });

  // User info and date
  doc.setFontSize(16);
  doc.setTextColor(...COLORS.text);
  doc.text(userName, 105, 150, { align: 'center' });
  doc.text(format(new Date(), 'MMMM d, yyyy'), 105, 170, { align: 'center' });

  addPageNumber();
  addFooter();

  // Results pages
  const addSection = (title: string, items: string[], description: string) => {
    addNewPage();
    
    doc.setFontSize(18);
    doc.setTextColor(...COLORS.primary);
    doc.text(title, 20, 40);

    doc.setFontSize(12);
    doc.setTextColor(...COLORS.text);
    doc.text(doc.splitTextToSize(description, 170), 20, 60);

    let yPos = 80;
    items.forEach((item) => {
      doc.circle(25, yPos - 3, 1, 'F');
      doc.text(item, 30, yPos);
      yPos += 15;
    });
  };

  // Add sections
  addSection(
    'Your Relationship Geniuses',
    result.geniuses,
    'These are the areas where you naturally excel in relationships:'
  );

  addSection(
    'Your Core Competencies',
    result.competencies,
    'These skills form a solid foundation for your relationships:'
  );

  addSection(
    'Areas for Growth',
    result.frustrations,
    'These areas present opportunities for developing deeper connections:'
  );

  return doc.output('arraybuffer');
}