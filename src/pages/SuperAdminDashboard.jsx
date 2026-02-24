import React from "react";
import "./SuperAdminDashboard.css";

const SuperAdminDashboard = () => {
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
              {[
                { icon: "🎓", title: "Student Portal", desc: "Manage student information" },
                { icon: "📘", title: "Academics", desc: "Curriculum & courses" },
                { icon: "✅", title: "Attendance", desc: "Track student presence" },
                { icon: "📈", title: "Performance", desc: "Grades & analytics" },
                { icon: "📅", title: "Timetable", desc: "Class schedules" },
                { icon: "📢", title: "Announcements", desc: "School notices" },
              ].map((module, index) => (
                <div key={index} className="module-card">
                  <div className="module-icon">{module.icon}</div>
                  <h3>{module.title}</h3>
                  <p>{module.desc}</p>
                </div>
              ))}
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
                <p>
                  Annual sports day will be held on 15th November. All students are requested to participate.
                </p>
                <span className="time">2 hours ago</span>
              </div>
            </div>

            <div className="communication-item">
              <div className="icon orange">👨‍👩‍👧</div>
              <div className="comm-content">
                <h4>Parent-Teacher Meeting</h4>
                <p>
                  Quarterly parent-teacher meeting scheduled for 20th October.
                </p>
                <span className="time">1 day ago</span>
              </div>
            </div>

            <div className="communication-item">
              <div className="icon red">⚠️</div>
              <div className="comm-content">
                <h4>Fee Payment Reminder</h4>
                <p>
                  Last date for fee payment is 30th September. Late fees will be applicable.
                </p>
                <span className="time">2 days ago</span>
              </div>
            </div>

            <div className="communication-item">
              <div className="icon blue">📘</div>
              <div className="comm-content">
                <h4>Library Book Return</h4>
                <p>
                  All library books issued in August must be returned by 10th October.
                </p>
                <span className="time">3 days ago</span>
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