import { Routes, Route, Navigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

import Login from "../pages/Login"
import ForgotPassword from "../pages/ForgotPassword"

import UserManagementDashboard from "../pages/UserManagementDashboard"
import UserRole from "../pages/UserRole"
import User from "../pages/User"
import MenuRights from "../pages/MenuRights"
import CreatingNewRole from "../pages/CreatingNewRole"
import SuperAdminDashboard from "../pages/SuperAdminDashboard"

export default function AppRoutes() {
  return (
    <Routes>

      {/* Default open login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Layout Pages */}
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="user-management" element={<UserManagementDashboard />} />
        <Route path="user-role" element={<UserRole />} />
        <Route path="user" element={<User />} />
        <Route path="menu-rights" element={<MenuRights />} />
        <Route path="create-role" element={<CreatingNewRole />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  )
}