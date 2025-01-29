import React from 'react';
import { useAdminStore } from '../../store/adminStore';
import { StatsCard } from '../../components/admin/dashboard/StatsCard';
import { ActivityFeed } from '../../components/admin/dashboard/ActivityFeed';
import { RevenueChart } from '../../components/admin/dashboard/RevenueChart';
import { Users, ClipboardCheck, Link, DollarSign } from 'lucide-react';

export function Dashboard() {
  const { stats, loading } = useAdminStore();

  if (loading || !stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          trend={+12}
        />
        <StatsCard
          title="Completed Tests"
          value={stats.completedTests}
          icon={ClipboardCheck}
          trend={+8}
        />
        <StatsCard
          title="Professional Connections"
          value={stats.professionalConnections}
          icon={Link}
          trend={+15}
        />
        <StatsCard
          title="Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          icon={DollarSign}
          trend={+23}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <ActivityFeed />
      </div>
    </div>
  );
}