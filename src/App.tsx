import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { useAuthStore } from './store/authStore';

// Layouts
import { Layout } from './components/Layout';
import { AuthLayout } from './components/auth/AuthLayout';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { AdminLayout } from './components/admin/AdminLayout';

// Auth Pages
import { AuthCallback } from './pages/auth/AuthCallback';
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';
import { ForgotPassword } from './pages/auth/ForgotPassword';

// Public Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Methodology } from './pages/Methodology';
import { ExpertIntro } from './pages/ExpertIntro';
import { ForProfessionals } from './pages/ForProfessionals';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Careers } from './pages/Careers';
import { RelationshipStats } from './pages/RelationshipStats';

// Protected Pages
import { Test } from './pages/Test';
import { Results } from './pages/Results';
import { Overview } from './pages/dashboard/Overview';
import { Results as DashboardResults } from './pages/dashboard/Results';
import { ProfessionalNetwork } from './pages/dashboard/ProfessionalNetwork';
import { PartnerComparison } from './pages/dashboard/PartnerComparison';
import { Settings } from './pages/dashboard/Settings';
import { ProtectedRoute } from './components/ProtectedRoute';

// Admin Pages
import { Dashboard as AdminDashboard } from './pages/admin/Dashboard';
import { Users } from './pages/admin/Users';
import { Analytics } from './pages/admin/Analytics';
import { AccessControl } from './pages/admin/AccessControl';
import { Settings as AdminSettings } from './pages/admin/Settings';

// Framework Pages
import { Harmony } from './pages/framework/Harmony';
import { Evaluation } from './pages/framework/Evaluation';
import { Action } from './pages/framework/Action';
import { Reflection } from './pages/framework/Reflection';
import { Thoughtfulness } from './pages/framework/Thoughtfulness';
import { Stability } from './pages/framework/Stability';

// Recommendation Pages
import { ActiveListening } from './pages/recommendations/ActiveListening';
import { EmotionalAwareness } from './pages/recommendations/EmotionalAwareness';
import { DecisionMaking } from './pages/recommendations/DecisionMaking';
import { TakingInitiative } from './pages/recommendations/TakingInitiative';

// Library Pages
import { EmotionalSafety } from './pages/library/EmotionalSafety';
import { Validation } from './pages/library/Validation';
import { RelationshipPatterns } from './pages/library/RelationshipPatterns';
import { PositiveInitiative } from './pages/library/PositiveInitiative';
import { EmotionalIntelligence } from './pages/library/EmotionalIntelligence';
import { MeaningfulGestures } from './pages/library/MeaningfulGestures';
import { BuildingTrust } from './pages/library/BuildingTrust';

export function App() {
  const { initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/expert-intro" element={<ExpertIntro />} />
            <Route path="/for-professionals" element={<ForProfessionals />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/relationship-stats" element={<RelationshipStats />} />
          </Route>

          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Protected dashboard routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Overview />} />
            <Route path="results" element={<DashboardResults />} />
            <Route path="network" element={<ProfessionalNetwork />} />
            <Route path="partner-comparison" element={<PartnerComparison />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Framework routes */}
          <Route path="/framework">
            <Route path="harmony" element={<Harmony />} />
            <Route path="evaluation" element={<Evaluation />} />
            <Route path="action" element={<Action />} />
            <Route path="reflection" element={<Reflection />} />
            <Route path="thoughtfulness" element={<Thoughtfulness />} />
            <Route path="stability" element={<Stability />} />
          </Route>

          {/* Library routes */}
          <Route path="/library">
            <Route path="emotional-safety" element={<EmotionalSafety />} />
            <Route path="validation" element={<Validation />} />
            <Route path="relationship-patterns" element={<RelationshipPatterns />} />
            <Route path="positive-initiative" element={<PositiveInitiative />} />
            <Route path="emotional-intelligence" element={<EmotionalIntelligence />} />
            <Route path="meaningful-gestures" element={<MeaningfulGestures />} />
            <Route path="building-trust" element={<BuildingTrust />} />
          </Route>

          {/* Recommendation routes */}
          <Route path="/recommendations">
            <Route path="active-listening" element={<ActiveListening />} />
            <Route path="emotional-awareness" element={<EmotionalAwareness />} />
            <Route path="decision-making" element={<DecisionMaking />} />
            <Route path="taking-initiative" element={<TakingInitiative />} />
          </Route>

          {/* Protected standalone routes */}
          <Route path="/test" element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          } />
          <Route path="/results" element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          } />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="access-control" element={<AccessControl />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}