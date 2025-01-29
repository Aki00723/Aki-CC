import { User } from '@supabase/supabase-js';

export interface AdminUser extends User {
  role: 'admin' | 'super_admin';
  permissions: string[];
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  completedTests: number;
  professionalConnections: number;
  revenue: number;
}

export interface UserActivity {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  details: Record<string, any>;
}

export interface AdminConfig {
  features: {
    enableProfessionalNetwork: boolean;
    enableTestResults: boolean;
    enablePayments: boolean;
  };
  pricing: {
    testPrice: number;
    professionalSessionPrice: number;
  };
  system: {
    maintenanceMode: boolean;
    allowNewRegistrations: boolean;
  };
}