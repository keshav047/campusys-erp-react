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

  // click outside close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="
      h-16
      flex items-center justify-between
      px-6
      text-white
      shadow
      bg-[linear-gradient(135deg,var(--primary-blue),var(--dark-blue))]
    ">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => setSidebar(prev => !prev)}
          className="text-2xl mr-2"
        >
          ☰
        </button>

        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">
          C
        </div>

        <div>
          <div className="font-bold text-lg">CAMPUSYS ERP</div>
          <div className="text-xs opacity-80">THE GODANI'S PRODUCT</div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <input
          placeholder="Search across ERP..."
          className="px-4 py-2 rounded-full bg-white/20 placeholder-white/70 outline-none focus:bg-white/30 w-72"
        />

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full"
          >
            <div className="w-8 h-8 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold">
              JS
            </div>

            <span className="text-sm">John Smith</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-48 bg-white text-gray-700 rounded-xl shadow-lg overflow-hidden">

              {["My Profile", "Change Password", "Talk to Expert"].map(i => (
                <div key={i} className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                  {i}
                </div>
              ))}

              <hr />

              <div
                onClick={handleLogout}
                className="px-4 py-3 hover:bg-red-50 cursor-pointer text-red-600"
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