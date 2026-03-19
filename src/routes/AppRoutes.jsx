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
import PageRights from "../pages/PageRights"
import CreatingNewRole from "../pages/CreatingNewRole"
import SuperAdminDashboard from "../pages/SuperAdminDashboard"
import AddRole from "../pages/AddRole"

// ✅ NEW
import AddClass from "../pages/student management/AddClass"
import AcademicYears from "../pages/student management/AcademicYears";
import AddStudent from "../pages/student management/AddStudent";
import AddStudentGroup from "../pages/student management/AddStudentGroup";
import AddTabsandSubtabs from "../pages/student management/AddTabsandSubtabs";
import ClassesSections from "../pages/student management/ClassesSections";
import ProfilePage from "../pages/student management/ProfilePage";
export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<SuperAdminDashboard />} />
      </Route>

      {/* USER MODULE */}
      <Route path="/" element={<MainLayout module="user" />}>
        <Route path="user-management" element={<UserManagementDashboard />} />
        <Route path="user-role" element={<UserRole />} />
        <Route path="user" element={<User />} />
        <Route path="family-users" element={<FamilyUsers />} />
        <Route path="employee-users" element={<EmployeeUsers />} />
        <Route path="menu-rights" element={<MenuRights />} />
        <Route path="page-rights" element={<PageRights />} />
        <Route path="create-role" element={<CreatingNewRole />} />
        <Route path="add-role" element={<AddRole />} />
      </Route>

      {/* ✅ STUDENT MODULE */}
      <Route path="/" element={<MainLayout module="student" />}>
        <Route path="add-class" element={<AddClass />} />
        <Route path="academic-years" element={<AcademicYears />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="add-student-group" element={<AddStudentGroup />} />
        <Route path="add-Tabsand-Subtabs" element={<AddTabsandSubtabs />} />
        <Route path="classes-sections" element={<ClassesSections/>} />
        <Route path="profile-page" element={<ProfilePage/>} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  )
}