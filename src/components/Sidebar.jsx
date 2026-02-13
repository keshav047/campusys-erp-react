import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Sidebar() {
  const [openUsers, setOpenUsers] = useState(true)

  const baseLink =
    "flex items-center px-6 py-3 text-sm font-medium transition relative"

  const activeLink =
    "bg-[var(--light-blue)] text-[var(--primary-blue)] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[var(--accent-gold)]"

  const normalLink = "text-gray-600 hover:bg-[var(--light-blue)]"

  return (
    <aside className="w-[280px] bg-white border-r min-h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="px-6 py-5 border-b">
        <h2 className="text-lg font-semibold text-[var(--primary-blue)]">
          User Management
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage users, roles, and permissions across the system
        </p>
      </div>

      {/* Menu */}
      <div className="py-4">
        <div className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          User Management
        </div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/user-role"
          className={({ isActive }) =>
            `${baseLink} justify-between ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          <span>User Roles</span>
          <span className="ml-2 bg-[var(--accent-gold)] text-[var(--primary-blue)] text-xs font-semibold px-2 py-0.5 rounded-full">
            8
          </span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Menu Rights
        </NavLink>

        <NavLink
          to="/page-rights"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Page Rights
        </NavLink>

        {/* Users with submenu */}
        <button
          onClick={() => setOpenUsers(!openUsers)}
          className={`${baseLink} w-full text-left ${normalLink}`}
        >
          Users
        </button>

        {openUsers && (
          <div className="mt-1">
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `flex items-center px-10 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--light-blue)] text-[var(--primary-blue)]"
                    : "text-gray-500 hover:bg-[var(--light-blue)]"
                }`
              }
            >
              Student Users
            </NavLink>

            <NavLink
              to="/family-users"
              className="flex items-center px-10 py-2 text-sm text-gray-500 hover:bg-[var(--light-blue)]"
            >
              Family Users
            </NavLink>

            <NavLink
              to="/employee-users"
              className="flex items-center px-10 py-2 text-sm text-gray-500 hover:bg-[var(--light-blue)]"
            >
              Employee Users
            </NavLink>
          </div>
        )}
      </div>
    </aside>
  )
}
