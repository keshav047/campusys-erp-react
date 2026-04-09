import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, getGroups } from "../api/userApi";

export default function UserManagementDashboard() {

  const [stats, setStats] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const userRes = await getUsers();
        const groupRes = await getGroups();

        const userList = userRes?.data?.content || [];
        const groupList = groupRes?.data || [];

        // ✅ STATS CALCULATION
        const totalUsers = userList.length;

        const activeUsers = userList.filter(u => u.active !== false).length;
        const inactiveUsers = totalUsers - activeUsers;

        setStats([
          { label: "Total Users", value: totalUsers },
          { label: "User Roles", value: groupList.length },
          { label: "Active Users", value: activeUsers },
          { label: "Inactive Users", value: inactiveUsers },
        ]);

        // ✅ RECENT USERS (table ke liye)
        const formattedUsers = userList.slice(0, 5).map((u) => ({
          name: `${u.firstName} ${u.lastName}`,
          role: u.userType,
          activity: "User logged in", // dummy (API nahi hai)
          time: "Just now",
          status: u.active === false ? "Inactive" : "Active",
        }));

        setUsers(formattedUsers);

      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[var(--primary-blue)]">
          User Management Dashboard
        </h1>

        <div className="flex gap-3">
          <Link
            to="/add-user"
            className="bg-[var(--primary-blue)] text-white px-4 py-2 rounded-lg"
          >
            Add New User
          </Link>

          <button className="border border-[var(--primary-blue)] text-[var(--primary-blue)] px-4 py-2 rounded-lg">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {loading ? (
          <p className="col-span-4 text-center">Loading stats...</p>
        ) : (
          stats.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
              <p className="text-2xl font-bold text-[var(--primary-blue)]">
                {item.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {item.label}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold text-lg text-[var(--primary-blue)] mb-4">
          Recent User Activity
        </h2>

        <table className="w-full text-sm">
          <thead className="bg-[var(--light-blue)] text-[var(--primary-blue)]">
            <tr>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Activity</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading users...
                </td>
              </tr>
            ) : users.length > 0 ? (
              users.map((user, i) => (
                <tr key={i}>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">{user.activity}</td>
                  <td className="px-4 py-3">{user.time}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No user activity found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}