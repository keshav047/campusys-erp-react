import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

import UserManagementDashboard from "../pages/UserManagementDashboard"
import UserRole from "../pages/UserRole"
import User from "../pages/User"
import MenuRights from "../pages/MenuRights"
import CreatingNewRole from "../pages/CreatingNewRole"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<UserManagementDashboard />} />
        <Route path="/user-role" element={<UserRole />} />
        <Route path="/user" element={<User />} />
        <Route path="/menu-rights" element={<MenuRights />} />
        <Route path="/create-role" element={<CreatingNewRole />} />
      </Route>
    </Routes>
  )
}
