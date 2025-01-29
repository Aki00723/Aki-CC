import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { usePaymentStore } from '../store/paymentStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresPurchase?: boolean;
}

export function ProtectedRoute({ children, requiresPurchase = false }: ProtectedRouteProps) {
  const location = useLocation();
  const { user } = useAuthStore();
  const { hasPurchased } = usePaymentStore();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (requiresPurchase && !hasPurchased) {
    return <Navigate to="/purchase" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}