import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAdminStore } from '../../store/adminStore';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

export function AdminLayout() {
  const { currentAdmin } = useAdminStore();

  if (!currentAdmin) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}