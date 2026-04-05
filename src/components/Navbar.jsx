import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar({ setSidebar }) {

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="
      sticky top-0 z-50
      h-16
      flex items-center justify-between
      px-3 md:px-6
      text-white shadow
      bg-[linear-gradient(135deg,var(--primary-blue),var(--dark-blue))]
    ">

      {/* LEFT */}
      <div className="flex items-center gap-2 md:gap-3">

        <button
          onClick={() => setSidebar(prev => !prev)}
          className="text-xl md:text-2xl"
        >
          ☰
        </button>

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">
            C
          </div>

          {/* Hide text on small screens */}
          <div className="hidden sm:block">
            <div className="font-bold text-sm md:text-lg">CAMPUSYS ERP</div>
            <div className="text-[10px] md:text-xs opacity-80">
              THE GODANI'S PRODUCT
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 md:gap-6">

        {/* Search (hidden on mobile) */}
        <input
          placeholder="Search..."
          className="
            hidden md:block
            px-4 py-2 rounded-full
            bg-white/20 placeholder-white/70
            outline-none focus:bg-white/30
            w-60 lg:w-72
          "
        />

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white/20 px-2 md:px-4 py-2 rounded-full"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold">
              JS
            </div>

            {/* Hide name on small screens */}
            <span className="hidden sm:block text-sm">
              John Smith
            </span>
          </button>

          {open && (
            <div className="
              absolute right-0 mt-3
              w-44 md:w-48
              bg-white text-gray-700
              rounded-xl shadow-lg overflow-hidden
            ">

              {["My Profile", "Change Password", "Talk to Expert"].map(i => (
                <div
                  key={i}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm"
                >
                  {i}
                </div>
              ))}

              <hr />

              <div
                onClick={handleLogout}
                className="px-4 py-3 hover:bg-red-50 cursor-pointer text-red-600 text-sm"
              >
                Logout
              </div>

            </div>
          )}

        </div>
      </div>
    </header>
  )
}