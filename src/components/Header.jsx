import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="logo-text">
          <div className="logo-main">CAMPUSYS ERP</div>
          <div className="logo-tagline">THE GODANI'S PRODUCT</div>
        </div>
      </div>

      <div className="profile-container">
        <div
          className="profile-btn"
          onClick={() => setOpen(!open)}
        >
          <div className="profile-avatar">JS</div>
          <div className="profile-name">John Smith</div>
        </div>

        {open && (
          <div className="profile-dropdown active">
            <a href="#" className="dropdown-item">My Profile</a>
            <a href="#" className="dropdown-item">Settings</a>
            <a href="#" className="dropdown-item">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
