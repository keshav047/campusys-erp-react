import React, { useEffect, useState } from "react";
import "./SuperAdminDashboard.css";
import { Link } from "react-router-dom";
import { getUserById } from "./../api/userApi";
import { getGroupById } from "./../api/groupApi";

const SuperAdminDashboard = () => {

  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchModules = async () => {
      try {

        const userId = localStorage.getItem("userId");

        if (!userId) {
          console.log("No userId found in localStorage");
          setLoading(false);
          return;
        }

        // USER API
        const userRes = await getUserById(userId);
        const groupId = userRes?.data?.groupId;

        localStorage.setItem("groupId", groupId); // Store groupId for later use

        console.log("USER ID:", userId);
        console.log("GROUP ID from User API:", groupId);
        
        if (!groupId) {
          console.log("No groupId found");
          setLoading(false);
          return;
        }

        // GROUP API
        const groupRes = await getGroupById(groupId);

        const modulesData = groupRes?.data?.appModules || [];

        setModules(modulesData);

      } catch (error) {
        console.log("API ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();

  }, []);

  return (
    <div className="dashboard-wrapper">

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-text">
          <h1>Welcome back, Admin!</h1>
          <p>Here's what's happening in your ERP today</p>
        </div>
        <div className="school-icon">🏫</div>
      </div>

      <div className="dashboard-grid">

        {/* LEFT PANEL */}
        <div className="left-panel">

          {/* Modules */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>My Assigned Modules</h2>
            </div>

            <div className="modules-grid">

              {loading ? (
                <p>Loading modules...</p>
              ) : modules.length === 0 ? (
                <p>No modules assigned</p>
              ) : (

      modules.map((module, index) => {

  const path =
    module.displayName === "User Management"
      ? "/usermanagementdashboard"
      : "#";

  const card = (
    <div className="module-card">
      <div className="module-icon">📦</div>
      <h3>{module?.displayName}</h3>
      <p>{module?.description}</p>
    </div>
  );

  return path !== "#" ? (
    <Link
      key={index}
      to={path}
      className="module-link"
      onClick={() => {
        localStorage.setItem("activeModuleId", module.id)
      }}
    >
      {card}
    </Link>
  ) : (
    <div key={index}>{card}</div>
  );

})

              )}

            </div>
          </div>

          {/* Latest Communications */}
          <div className="dashboard-card">
            <div className="card-header between">
              <h2>Latest Communications</h2>
              <span className="see-all">See All</span>
            </div>

            <div className="communication-item">
              <div className="icon green">📢</div>
              <div className="comm-content">
                <h4>Annual Sports Day Announcement</h4>
                <p>Annual sports day will be held on 15th November. All students are requested to participate.</p>
                <span className="time">2 hours ago</span>
              </div>
            </div>

            <div className="communication-item">
              <div className="icon orange">👨‍👩‍👧</div>
              <div className="comm-content">
                <h4>Parent-Teacher Meeting</h4>
                <p>Quarterly parent-teacher meeting scheduled for 20th October.</p>
                <span className="time">1 day ago</span>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">

          {/* Calendar */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>School Calendar</h2>
            </div>

            <div className="calendar-event">
              <span className="date">20 OCT</span>
              <p>Parent-Teacher Meeting</p>
            </div>

            <div className="calendar-event">
              <span className="date">25 OCT</span>
              <p>Science Fair</p>
            </div>

            <div className="calendar-event">
              <span className="date">12 NOV</span>
              <p>Mid-term Exams Begin</p>
            </div>

          </div>

          {/* Quick Stats */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Quick Stats</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <h3>142</h3>
                <p>Total Students</p>
              </div>

              <div className="stat-box">
                <h3>24</h3>
                <p>Teaching Staff</p>
              </div>

              <div className="stat-box">
                <h3>92%</h3>
                <p>Attendance Today</p>
              </div>

              <div className="stat-box">
                <h3>5</h3>
                <p>Pending Tasks</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SuperAdminDashboard;