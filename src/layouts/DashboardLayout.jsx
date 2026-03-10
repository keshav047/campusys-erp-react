import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 p-6 bg-slate-50">
        <Outlet />
      </main>

    </div>
  )
}