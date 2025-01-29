import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book } from 'lucide-react';
import { Button } from '../../components/Button';

interface LibraryLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LibraryLayout({ title, children }: LibraryLayoutProps) {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-pink-100 rounded-lg">
            <Book className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}