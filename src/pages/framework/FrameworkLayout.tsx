import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, DivideIcon as LucideIcon } from 'lucide-react';
import { Button } from '../../components/Button';

interface FrameworkLayoutProps {
  title: string;
  icon: LucideIcon;
  description: string;
  children: React.ReactNode;
}

export function FrameworkLayout({ title, icon: Icon, description, children }: FrameworkLayoutProps) {
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
            <Icon className="w-8 h-8 text-pink-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}