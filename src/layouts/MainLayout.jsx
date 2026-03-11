import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar setSidebar={setSidebar} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebar} />

        <main
          className={`flex-1 p-6 bg-slate-50 transition-all duration-300 ${
            sidebar ? "ml-[280px]" : "ml-0"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}