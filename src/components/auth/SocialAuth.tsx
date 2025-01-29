import React, { useState } from 'react';
import { Chrome } from 'lucide-react';
import { signInWithGoogle } from '../../lib/auth';
import { Button } from '../Button';

interface SocialAuthProps {
  onError: (error: string) => void;
}

export function SocialAuth({ onError }: SocialAuthProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
    } catch (err: any) {
      onError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <Button
        onClick={handleGoogleLogin}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        disabled={loading}
      >
        <Chrome className="w-5 h-5" />
        {loading ? 'Connecting...' : 'Continue with Google'}
      </Button>
    </div>
  );
}