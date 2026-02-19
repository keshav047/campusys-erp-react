import React, { useState, useEffect } from "react";
import "../styles/dashboard.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />

        <div className="dashboard-content">
          <div className="welcome-banner">
            <div className="welcome-text">
              <h1>Welcome back, John!</h1>
              <p>Here's what's happening at Greenwood High School today</p>
            </div>
            <div className="welcome-icon">
              <i className="fas fa-school"></i>
            </div>
          </div>

          <h2>Dashboard Loaded Successfully 🚀</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
