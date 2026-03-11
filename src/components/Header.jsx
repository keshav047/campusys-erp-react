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
    <header className="header flex justify-between items-center p-4 shadow-md bg-white">
      
      {/* Logo - click kar ke dashboard jaayega */}
      <div
        className="logo-container flex items-center cursor-pointer"
        onClick={() => navigate("/dashboard")} // ye key part hai
      >
        <div className="logo-icon mr-2">
          <i className="fas fa-graduation-cap text-2xl text-[var(--primary-blue)]"></i>
        </div>

        <div className="logo-text">
          <div className="logo-main font-bold text-lg text-[var(--primary-blue)]">
            CAMPUSYS ERP
          </div>
          <div className="logo-tagline text-xs opacity-80">
            THE GODANI'S 
          </div>
        </div>
      </div>

      {/* Profile section */}
      <div className="profile-container relative">
        <div
          className="profile-btn flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="profile-avatar w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">
            JS
          </div>
          <div className="profile-name text-sm">John Smith</div>
        </div>

        {open && (
          <div className="profile-dropdown absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-20">
            <button className="dropdown-item px-4 py-2 w-full text-left hover:bg-gray-100">
              My Profile
            </button>
            <button className="dropdown-item px-4 py-2 w-full text-left hover:bg-gray-100">
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="dropdown-item px-4 py-2 w-full text-left hover:bg-red-50 text-red-600"
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