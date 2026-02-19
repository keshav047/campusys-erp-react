import { Routes, Route, Navigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

import Login from "../pages/Login"
import UserManagementDashboard from "../pages/UserManagementDashboard"
import UserRole from "../pages/UserRole"
import User from "../pages/User"
import MenuRights from "../pages/MenuRights"
import CreatingNewRole from "../pages/CreatingNewRole"
import ForgotPassword from "../pages/ForgotPassword"

export default function AppRoutes() {
  return (
    <Routes>

      {/* 🔹 Public Pages (Without Layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* 🔹 Pages WITH Sidebar Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route path="user-management" element={<UserManagementDashboard />} />
        <Route path="user-role" element={<UserRole />} />
        <Route path="user" element={<User />} />
        <Route path="menu-rights" element={<MenuRights />} />
        <Route path="create-role" element={<CreatingNewRole />} />
      </Route>

      {/* 🔹 Always Keep This LAST */}
      <Route path="*" element={<Navigate to="/login" />} />

    </Routes>
  )
}
