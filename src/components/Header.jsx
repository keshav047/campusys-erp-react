import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header flex justify-between items-center px-4 py-3 shadow-md bg-white">
      
      {/* Logo */}
      <div
        className="logo-container flex items-center cursor-pointer gap-2"
        onClick={() => navigate("/dashboard")}
      >
        <i className="fas fa-graduation-cap text-xl sm:text-2xl text-[var(--primary-blue)]"></i>

        <div className="logo-text leading-tight">
          <div className="font-bold text-sm sm:text-lg text-[var(--primary-blue)]">
            CAMPUSYS ERP
          </div>
          <div className="text-[10px] sm:text-xs opacity-80">
            THE GODANI'S
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="profile-container relative">
        <div
          className="profile-btn flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {/* Hide name on small screen */}
          <div className="profile-avatar w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">
            JS
          </div>

          <div className="profile-name text-sm hidden sm:block">
            John Smith
          </div>
        </div>

        {open && (
          <div className="profile-dropdown absolute right-0 mt-2 w-40 sm:w-48 bg-white shadow-lg rounded-lg overflow-hidden z-20">
            <button className="px-4 py-2 w-full text-left hover:bg-gray-100 text-sm">
              My Profile
            </button>
            <button className="px-4 py-2 w-full text-left hover:bg-gray-100 text-sm">
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 w-full text-left hover:bg-red-50 text-red-600 text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;