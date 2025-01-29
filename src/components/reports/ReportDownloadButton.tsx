import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '../Button';
import { useTestStore } from '../../store/testStore';
import { useAuthStore } from '../../store/authStore';
import { generatePDF } from '../../services/pdfService';

export function ReportDownloadButton() {
  const { result } = useTestStore();
  const { user } = useAuthStore();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleDownload = async () => {
    if (!result || !user) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const pdfBuffer = await generatePDF(result, user.email || 'User');
      
      // Create a blob from the PDF buffer
      const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = `connection-compass-report-${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('Failed to generate PDF report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="text-red-600 text-sm mb-4">
        {error}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setError(null)}
          className="ml-2"
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={handleDownload}
      disabled={loading}
    >
      <Download className="w-4 h-4" />
      {loading ? 'Generating PDF...' : 'Download PDF Report'}
    </Button>
  );
}