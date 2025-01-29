import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface PartnerState {
  invitationSent: boolean;
  partnerEmail: string | null;
  loading: boolean;
  error: string | null;
  setPartnerEmail: (email: string | null) => void;
  sendInvitation: (email: string) => Promise<void>;
  checkInvitationStatus: (email: string) => Promise<boolean>;
}

export const usePartnerStore = create<PartnerState>((set) => ({
  invitationSent: false,
  partnerEmail: null,
  loading: false,
  error: null,

  setPartnerEmail: (email) => set({ partnerEmail: email }),

  sendInvitation: async (email) => {
    try {
      set({ loading: true, error: null });
      
      // In a real app, this would send an email through your backend
      // For demo, we'll just simulate the invitation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set({ invitationSent: true, partnerEmail: email });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  checkInvitationStatus: async (email) => {
    try {
      set({ loading: true, error: null });
      
      // In a real app, check if partner has completed the test
      // For demo, we'll simulate a check
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return true;
    } catch (error: any) {
      set({ error: error.message });
      return false;
    } finally {
      set({ loading: false });
    }
  }
}));