import { create } from 'zustand';

interface PaymentState {
  hasPurchased: boolean;
  setHasPurchased: (value: boolean) => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  hasPurchased: false,
  setHasPurchased: (value) => set({ hasPurchased: value }),
}));