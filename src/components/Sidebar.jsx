import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Sidebar({ isOpen }) {
  const [openUsers, setOpenUsers] = useState(true)

  const baseLink =
    "flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-md transition-all duration-200"
  const activeLink =
    "bg-blue-50 text-blue-700 border-l-4 border-yellow-400"
  const normalLink =
    "text-gray-600 hover:bg-blue-50 hover:text-blue-700"

  return (
    <aside
      className={`
        fixed top-16 left-0
        w-[260px] h-[calc(100vh-4rem)]
        bg-white border-r shadow-sm z-30
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        overflow-y-auto
      `}
    >
      <div className="py-6">
        {/* Title */}
        <div className="px-6 mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Main Menu
        </div>

        {/* Links */}
        <NavLink to="/user-management" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : normalLink}`
        }>📊 Dashboard</NavLink>

        <NavLink to="/user-role" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : normalLink}`
        }>👤 User Roles</NavLink>

        <NavLink to="/menu-rights" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : normalLink}`
        }>📂 Menu Rights</NavLink>

        <NavLink to="/page-rights" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : normalLink}`
        }>📄 Page Rights</NavLink>

        {/* Users submenu */}
        <button
          onClick={() => setOpenUsers(!openUsers)}
          className={`${baseLink} w-full justify-between ${normalLink}`}
        >
          <span>👥 Users</span>
          <span className="text-xs">{openUsers ? "▲" : "▼"}</span>
        </button>

        {openUsers && (
          <div className="ml-6 mt-1 space-y-1 border-l pl-4">
            <NavLink to="/user" className="block py-2 text-sm text-gray-500 hover:text-blue-700">Student Users</NavLink>
            <NavLink to="/family-users" className="block py-2 text-sm text-gray-500 hover:text-blue-700">Family Users</NavLink>
            <NavLink to="/employee-users" className="block py-2 text-sm text-gray-500 hover:text-blue-700">Employee Users</NavLink>
          </div>
        )}
      </div>
    </aside>
  )
}