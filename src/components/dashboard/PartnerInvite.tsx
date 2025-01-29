import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '../Button';
import { usePartnerStore } from '../../store/partnerStore';

interface PartnerInviteProps {
  onComplete: () => void;
}

export function PartnerInvite({ onComplete }: PartnerInviteProps) {
  const [email, setEmail] = useState('');
  const { sendInvitation, loading, error } = usePartnerStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendInvitation(email);
    onComplete();
  };

  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
        <Mail className="w-8 h-8 text-pink-600" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Invite Your Partner</h2>
        <p className="text-gray-600 mt-2">
          Enter your partner's email to send them an invitation to take the assessment
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="sr-only">Partner's Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your partner's email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Invitation'}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>

      <p className="text-sm text-gray-500">
        Your partner will receive an email with instructions to take the assessment
      </p>
    </div>
  );
}