import React from 'react';
import { FileText, Upload } from 'lucide-react';

interface DocumentsFormProps {
  data: {
    license: File | null;
    insurance: File | null;
    resume: File | null;
  };
  onChange: (data: Partial<DocumentsFormProps['data']>) => void;
}

export function DocumentsForm({ data, onChange }: DocumentsFormProps) {
  const handleFileChange = (field: keyof DocumentsFormProps['data']) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange({ [field]: file });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Required Documents</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Professional License
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="license" className="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500">
                  <span>Upload license</span>
                  <input
                    id="license"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange('license')}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
              {data.license && (
                <p className="text-sm text-green-600">{data.license.name}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Professional Liability Insurance
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="insurance" className="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500">
                  <span>Upload insurance</span>
                  <input
                    id="insurance"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange('insurance')}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
              {data.insurance && (
                <p className="text-sm text-green-600">{data.insurance.name}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Professional Resume/CV
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="resume" className="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500">
                  <span>Upload resume</span>
                  <input
                    id="resume"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange('resume')}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
              {data.resume && (
                <p className="text-sm text-green-600">{data.resume.name}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}