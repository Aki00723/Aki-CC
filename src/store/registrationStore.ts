import { create } from 'zustand';

interface RegistrationState {
  step: number;
  formData: {
    identity: string;
    relationshipStatus: string;
    reasons: string[];
  };
  setStep: (step: number) => void;
  setIdentity: (identity: string) => void;
  setStatus: (status: string) => void;
  toggleReason: (reason: string) => void;
  reset: () => void;
}

const initialState = {
  step: 1,
  formData: {
    identity: '',
    relationshipStatus: '',
    reasons: [],
  },
};

export const useRegistrationStore = create<RegistrationState>((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  setIdentity: (identity) => set((state) => ({
    formData: { ...state.formData, identity }
  })),
  setStatus: (status) => set((state) => ({
    formData: { ...state.formData, relationshipStatus: status }
  })),
  toggleReason: (reason) => set((state) => ({
    formData: {
      ...state.formData,
      reasons: state.formData.reasons.includes(reason)
        ? state.formData.reasons.filter(r => r !== reason)
        : [...state.formData.reasons, reason]
    }
  })),
  reset: () => set(initialState),
}));