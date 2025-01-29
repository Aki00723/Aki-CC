import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

export function AuthCallback() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  useEffect(() => {
    const processAuthCallback = async () => {
      try {
        // Get the URL hash
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        
        if (accessToken) {
          // Exchange the access token for a session
          const { data: { user }, error } = await supabase.auth.getUser(accessToken);
          
          if (error) throw error;
          
          if (user) {
            setUser(user);
            navigate('/dashboard', { replace: true });
            return;
          }
        }

        // Fallback to checking current session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        if (session?.user) {
          setUser(session.user);
          navigate('/dashboard', { replace: true });
        } else {
          navigate('/signin', { replace: true });
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        navigate('/signin', { replace: true });
      }
    };

    processAuthCallback();
  }, [navigate, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500" />
    </div>
  );
}