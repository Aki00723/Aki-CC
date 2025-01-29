import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  identity?: string;
  relationship_status?: string;
  reasons?: string[];
  created_at: string;
}

interface UserState {
  profiles: UserProfile[];
  loading: boolean;
  error: string | null;
  fetchProfiles: () => Promise<void>;
  addProfile: (profile: UserProfile) => Promise<void>;
  updateProfile: (id: string, updates: Partial<UserProfile>) => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  profiles: [],
  loading: false,
  error: null,

  fetchProfiles: async () => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ profiles: data || [] });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  addProfile: async (profile) => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase
        .from('profiles')
        .insert([profile]);

      if (error) throw error;
      get().fetchProfiles();
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateProfile: async (id, updates) => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      get().fetchProfiles();
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));