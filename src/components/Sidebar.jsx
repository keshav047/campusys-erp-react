import { NavLink } from "react-router-dom";
import { useState } from "react";
import { sidebarData } from "../data/sidebarData";

export default function Sidebar({ isOpen, module }) {
  const [openMenus, setOpenMenus] = useState({});
  const data = sidebarData[module] || [];

  const baseLink =
    "flex items-center gap-3 px-6 py-2 text-sm font-medium transition-all duration-200";
  const activeLink =
    "bg-blue-50 text-blue-700 border-l-4 border-yellow-400";
  const normalLink =
    "text-gray-600 hover:bg-blue-50 hover:text-blue-700";

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // 🔁 Recursive menu (multi-level)
  const renderMenu = (items, parentKey = "") => {
    return items.map((item, index) => {
      const key = parentKey + index;

      if (!item.children) {
        return (
          <NavLink
            key={key}
            to={item.path}
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : normalLink}`
            }
          >
            {item.icon && <span>{item.icon}</span>}
            {item.name}
          </NavLink>
        );
      }

      return (
        <div key={key}>
          <button
            onClick={() => toggleMenu(key)}
            className={`${baseLink} w-full justify-between ${normalLink}`}
          >
            <span className="flex items-center gap-3">
              {item.icon && <span>{item.icon}</span>}
              {item.name}
            </span>
            <span className="text-xs">
              {openMenus[key] ? "▲" : "▼"}
            </span>
          </button>

          {openMenus[key] && (
            <div className="ml-6 border-l pl-3 space-y-1">
              {renderMenu(item.children, key)}
            </div>
          )}
        </div>
      );
    });
  };

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
      <div className="py-4">

        {/* 🔹 STUDENT HEADER */}
        {module === "student" && (
          <div className="px-6 mb-4">
            <h2 className="text-blue-800 font-semibold text-lg">
              Student Information System
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Manage student profiles, academic records, and certificates
            </p>
          </div>
        )}

        {/* 🔹 MENU */}
        {data.length === 0 ? (
          <div className="px-6 text-gray-500 text-sm">
            No menu found
          </div>
        ) : (
          <>
            {/* ✅ USER MODULE (simple array) */}
            {module === "user" &&
              renderMenu(data)}

            {/* ✅ STUDENT MODULE (section-based) */}
            {module === "student" &&
              data.map((section, i) => (
                <div key={i} className="mb-4">
                  <div className="px-6 text-xs font-semibold text-gray-400 uppercase mb-2">
                    {section.section}
                  </div>

                  {renderMenu(section.items)}
                </div>
              ))}
          </>
        )}
      </div>
    </aside>
  );
}