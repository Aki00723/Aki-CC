import { create } from 'zustand';
import { AdminStats, AdminConfig, AdminUser } from '../types/admin';
import { supabase } from '../lib/supabase';

interface AdminState {
  currentAdmin: AdminUser | null;
  stats: AdminStats | null;
  config: AdminConfig | null;
  loading: boolean;
  error: string | null;
  setCurrentAdmin: (admin: AdminUser | null) => void;
  setStats: (stats: AdminStats) => void;
  setConfig: (config: AdminConfig) => void;
  updateConfig: (updates: Partial<AdminConfig>) => Promise<void>;
  fetchStats: () => Promise<void>;
}

export const useAdminStore = create<AdminState>((set, get) => ({
  currentAdmin: null,
  stats: null,
  config: null,
  loading: false,
  error: null,

  setCurrentAdmin: (admin) => set({ currentAdmin: admin }),
  
  setStats: (stats) => set({ stats }),
  
  setConfig: (config) => set({ config }),
  
  updateConfig: async (updates) => {
    try {
      set({ loading: true, error: null });
      
      const { data, error } = await supabase
        .from('admin_config')
        .update(updates)
        .eq('id', 1)
        .single();
        
      if (error) throw error;
      
      set({ config: { ...get().config, ...updates } });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  
  fetchStats: async () => {
    try {
      set({ loading: true, error: null });
      
      // Fetch various statistics from Supabase
      const [usersResponse, testsResponse, connectionsResponse] = await Promise.all([
        supabase.from('users').select('count'),
        supabase.from('test_results').select('count'),
        supabase.from('professional_connections').select('count'),
      ]);
      
      if (usersResponse.error) throw usersResponse.error;
      if (testsResponse.error) throw testsResponse.error;
      if (connectionsResponse.error) throw connectionsResponse.error;
      
      const stats: AdminStats = {
        totalUsers: usersResponse.count || 0,
        activeUsers: 0, // Calculate based on recent activity
        completedTests: testsResponse.count || 0,
        professionalConnections: connectionsResponse.count || 0,
        revenue: 0, // Calculate from payments table
      };
      
      set({ stats });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));