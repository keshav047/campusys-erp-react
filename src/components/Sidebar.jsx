import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Sidebar() {
  const [openUsers, setOpenUsers] = useState(true)

  const baseLink =
<<<<<<< HEAD
    "flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 relative"
=======
    "flex items-center px-6 py-3 text-sm font-medium transition relative"
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495

  const activeLink =
    "bg-[var(--light-blue)] text-[var(--primary-blue)] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[var(--accent-gold)]"

<<<<<<< HEAD
  const normalLink =
    "text-gray-600 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"

  return (
    <aside className="w-[280px] bg-white border-r min-h-screen shadow-sm">
      
      {/* Header Section */}
=======
  const normalLink = "text-gray-600 hover:bg-[var(--light-blue)]"

  return (
    <aside className="w-[280px] bg-white border-r min-h-[calc(100vh-64px)]">
      {/* Header */}
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
      <div className="px-6 py-5 border-b">
        <h2 className="text-lg font-semibold text-[var(--primary-blue)]">
          User Management
        </h2>
        <p className="text-sm text-gray-500 mt-1">
<<<<<<< HEAD
          Manage users, roles & permissions
        </p>
      </div>

      {/* Menu Section */}
      <div className="py-4">

        {/* Section Title */}
        <div className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Main Menu
        </div>

        {/* Dashboard */}
        <NavLink
          to="/"
          end
=======
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
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Dashboard
        </NavLink>

<<<<<<< HEAD
        {/* User Roles */}
=======
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
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

<<<<<<< HEAD
        {/* Menu Rights */}
        <NavLink
          to="/menu-rights"
=======
        <NavLink
          to="/"
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Menu Rights
        </NavLink>

<<<<<<< HEAD
        {/* Page Rights */}
=======
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
        <NavLink
          to="/page-rights"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : normalLink}`
          }
        >
          Page Rights
        </NavLink>

<<<<<<< HEAD
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
=======
        {/* Users with submenu */}
        <button
          onClick={() => setOpenUsers(!openUsers)}
          className={`${baseLink} w-full text-left ${normalLink}`}
        >
          Users
        </button>

        {openUsers && (
          <div className="mt-1">
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `flex items-center px-10 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--light-blue)] text-[var(--primary-blue)]"
<<<<<<< HEAD
                    : "text-gray-500 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"
=======
                    : "text-gray-500 hover:bg-[var(--light-blue)]"
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
                }`
              }
            >
              Student Users
            </NavLink>

            <NavLink
              to="/family-users"
<<<<<<< HEAD
              className={({ isActive }) =>
                `flex items-center px-10 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--light-blue)] text-[var(--primary-blue)]"
                    : "text-gray-500 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"
                }`
              }
=======
              className="flex items-center px-10 py-2 text-sm text-gray-500 hover:bg-[var(--light-blue)]"
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
            >
              Family Users
            </NavLink>

            <NavLink
              to="/employee-users"
<<<<<<< HEAD
              className={({ isActive }) =>
                `flex items-center px-10 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--light-blue)] text-[var(--primary-blue)]"
                    : "text-gray-500 hover:bg-[var(--light-blue)] hover:text-[var(--primary-blue)]"
                }`
              }
=======
              className="flex items-center px-10 py-2 text-sm text-gray-500 hover:bg-[var(--light-blue)]"
>>>>>>> 7621d56a2c95b433befd5ec79369d94cb92c1495
            >
              Employee Users
            </NavLink>
          </div>
        )}
      </div>
    </aside>
  )
}
