import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Sidebar({ isOpen, pages }) {

  const [openMenu, setOpenMenu] = useState(null)

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

        {pages.map((page, index) => {

          // अगर subPages नहीं हैं
          if (!page.subPages || page.subPages.length === 0) {

            return (
              <NavLink
                key={page.pageId}
                to={page.pagePath}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : normalLink}`
                }
              >
                {page.pageDisplayName}
              </NavLink>
            )
          }

          // अगर subPages हैं
          return (

            <div key={page.pageId}>

              <button
                onClick={() =>
                  setOpenMenu(openMenu === index ? null : index)
                }
                className={`${baseLink} w-full justify-between ${normalLink}`}
              >
                <span>{page.pageDisplayName}</span>
                <span className="text-xs">
                  {openMenu === index ? "▲" : "▼"}
                </span>
              </button>

              {openMenu === index && (

                <div className="ml-6 mt-1 space-y-1 border-l pl-4">

                  {page.subPages.map((sub) => (

                    <NavLink
                      key={sub.pageId}
                      to={sub.pagePath}
                      className="block py-2 text-sm text-gray-500 hover:text-blue-700"
                    >
                      {sub.pageDisplayName}
                    </NavLink>

                  ))}

                </div>

              )}

            </div>

          )

        })}

      </div>

    </aside>

  )
}