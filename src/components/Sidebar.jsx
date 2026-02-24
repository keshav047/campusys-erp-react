import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Sidebar() {
  const [openUsers, setOpenUsers] = useState(true)

  const baseLink =
    "flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 relative"

  const activeLink =
    "bg-[var(--light-blue)] text-[var(--primary-blue)] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[var(--accent-gold)]"

  const normalLink =
    "text-gray-600 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"

  return (
    <aside className="w-[280px] bg-white border-r min-h-screen shadow-sm">
      {/* Header Section */}
      <div className="px-6 py-5 border-b">
        <h2 className="text-lg font-semibold text-[var(--primary-blue)]">
          User Management
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage users, roles & permissions across the system
        </p>
      </div>

      {/* Menu Section */}
      <div className="py-4">
        <div className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Main Menu
        </div>

        {/* Dashboard */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Dashboard
        </NavLink>

        {/* User Roles */}
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

        {/* Menu Rights */}
        <NavLink
          to="/menu-rights"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Menu Rights
        </NavLink>

        {/* Page Rights */}
        <NavLink
          to="/page-rights"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Page Rights
        </NavLink>

        {/* Users with Submenu */}
        <button
          onClick={() => setOpenUsers(!openUsers)}
          className={`${baseLink} w-full text-left flex justify-between ${normalLink}`}
        >
          <span>Users</span>
          <span className="text-xs">
            {openUsers ? "▲" : "▼"}
          </span>
        </button>

        {openUsers && (
          <div className="mt-1 space-y-1">
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `flex items-center px-10 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--light-blue)] text-[var(--primary-blue)]"
                    : "text-gray-500 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"
                }`
              }
            >
              Student Users
            </NavLink>

            <NavLink
              to="/family-users"
              className={({ isActive }) =>
                `flex items-center px-10 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--light-blue)] text-[var(--primary-blue)]"
                    : "text-gray-500 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"
                }`
              }
            >
              Family Users
            </NavLink>

            <NavLink
              to="/employee-users"
              className={({ isActive }) =>
                `flex items-center px-10 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--light-blue)] text-[var(--primary-blue)]"
                    : "text-gray-500 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"
                }`
              }
            >
              Employee Users
            </NavLink>
          </div>
        )}
      </div>
    </aside>
  )
}