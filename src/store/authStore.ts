import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,
  
  setUser: (user) => set({ user, loading: false }),
  
  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ user: null });
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  initialize: async () => {
    try {
      // Get initial session
      const { data: { session } } = await supabase.auth.getSession();
      set({ user: session?.user ?? null });

      // Listen for auth changes
      supabase.auth.onAuthStateChange((_event, session) => {
        set({ user: session?.user ?? null, loading: false });
      });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  }
}));