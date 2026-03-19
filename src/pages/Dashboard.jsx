import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const modules = [
    { name: "User Management", icon: "🎓", description: "Manage user accounts", link: "/user-management" },
    { name: "Academi", icon: "📘", description: "Curriculum & courses" },
    { name: "Attendance", icon: "✅", description: "Track student presence" },
    { name: "Performance", icon: "📊", description: "Grades & analytics" },
    { name: "Timetable", icon: "📅", description: "Class schedules" },
    { name: "Announcements", icon: "📢", description: "School notices" },
  ];

  const events = [
    { date: "20 OCT", title: "Parent-Teacher Meeting", time: "10:00 AM - Main Auditorium" },
    { date: "25 OCT", title: "Science Fair", time: "All Day - Gym Hall" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-500 text-white rounded-2xl p-8 flex justify-between items-center mb-8 shadow-lg">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, John!</h1>
          <p className="opacity-90">Here's what's happening at Greenwood High School today</p>
        </div>
        <div className="text-6xl animate-bounce">🏫</div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Modules Section */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-blue-900">My Modules</h2>
            <span className="text-sm text-blue-700 hover:underline cursor-pointer">View All</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod, idx) => (
              mod.link ? (
                <Link key={idx} to={mod.link}>
                  <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition cursor-pointer flex flex-col gap-3">
                    <div className="text-4xl">{mod.icon}</div>
                    <h3 className="font-semibold text-blue-900 text-lg">{mod.name}</h3>
                    <p className="text-gray-500 text-sm">{mod.description}</p>
                  </div>
                </Link>
              ) : (
                <div key={idx} className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition flex flex-col gap-3">
                  <div className="text-4xl">{mod.icon}</div>
                  <h3 className="font-semibold text-blue-900 text-lg">{mod.name}</h3>
                  <p className="text-gray-500 text-sm">{mod.description}</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Upcoming Events / Calendar Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-blue-900">Upcoming Events</h2>
            <span className="text-sm text-blue-700 hover:underline cursor-pointer">Full Calendar</span>
          </div>

          <div className="space-y-4">
            {events.map((ev, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                <p className="text-xs text-gray-400">{ev.date}</p>
                <h3 className="font-semibold text-blue-900 text-lg">{ev.title}</h3>
                <p className="text-gray-500 text-sm">{ev.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;