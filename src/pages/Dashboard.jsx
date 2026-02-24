import React from "react";
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
          {/* Welcome Banner */}
          <div className="welcome-banner">
            <div>
              <h1>Welcome back, John!</h1>
              <p>Here's what's happening at Greenwood High School today</p>
            </div>
            <div className="welcome-icon">🏫</div>
          </div>

          <div className="dashboard-grid">
            {/* Left Section */}
            <div className="modules-section">
              <div className="section-header">
                <h2>My Assigned Modules</h2>
                <span className="view-all">View All</span>
              </div>

              <div className="modules-grid">
                <div className="module-card">
                  <div className="module-icon">🎓</div>
                  <h3>Student Portal</h3>
                  <p>Manage student information</p>
                </div>

                <div className="module-card">
                  <div className="module-icon">📘</div>
                  <h3>Academics</h3>
                  <p>Curriculum & courses</p>
                </div>

                <div className="module-card">
                  <div className="module-icon">✅</div>
                  <h3>Attendance</h3>
                  <p>Track student presence</p>
                </div>

                <div className="module-card">
                  <div className="module-icon">📊</div>
                  <h3>Performance</h3>
                  <p>Grades & analytics</p>
                </div>

                <div className="module-card">
                  <div className="module-icon">📅</div>
                  <h3>Timetable</h3>
                  <p>Class schedules</p>
                </div>

                <div className="module-card">
                  <div className="module-icon">📢</div>
                  <h3>Announcements</h3>
                  <p>School notices</p>
                </div>
              </div>
            </div>

            {/* Right Section - Calendar */}
            <div className="calendar-section">
              <div className="section-header">
                <h2>School Calendar</h2>
                <span className="view-all">Full Calendar</span>
              </div>

              <div className="calendar-box">
                <h3>October 2023</h3>
                <p className="event-date">20 OCT</p>
                <p className="event-title">Parent-Teacher Meeting</p>
                <p className="event-time">10:00 AM - Main Auditorium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;