import { Routes, Route, Navigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login"
import ForgotPassword from "../pages/ForgotPassword"

import UserManagementDashboard from "../pages/UserManagementDashboard"
import UserRole from "../pages/UserRole"
import User from "../pages/Users/User"
import FamilyUsers from "../pages/Users/FamilyUsers"
import EmployeeUsers from "../pages/Users/EmployeeUsers"
import MenuRights from "../pages/MenuRights"
import CreatingNewRole from "../pages/CreatingNewRole"
import SuperAdminDashboard from "../pages/SuperAdminDashboard"
import AddRole from "../pages/AddRole"

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

 <Route path="/" element={<DashboardLayout />}>
    <Route path="dashboard" element={<SuperAdminDashboard />} />
  </Route>
      <Route path="/" element={<MainLayout />}>
        
        <Route path="user-management" element={<UserManagementDashboard />} />
        <Route path="user-role" element={<UserRole />} />
        <Route path="user" element={<User />} />
        <Route path="family-users" element={<FamilyUsers />} />
        <Route path="employee-users" element={<EmployeeUsers />} />
        <Route path="menu-rights" element={<MenuRights />} />
        <Route path="create-role" element={<CreatingNewRole />} />
        <Route path="add-role" element={<AddRole />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  )
}