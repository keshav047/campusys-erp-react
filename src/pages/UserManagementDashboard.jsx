export default function UserManagementDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[var(--primary-blue)]">
          User Management Dashboard
        </h1>

        <div className="flex gap-3">
          <button className="bg-[var(--primary-blue)] text-white px-4 py-2 rounded-lg">
            Add New User
          </button>
          <button className="border border-[var(--primary-blue)] text-[var(--primary-blue)] px-4 py-2 rounded-lg">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Users", value: "1,248" },
          { label: "User Roles", value: "8" },
          { label: "Active Users", value: "1,120" },
          { label: "Inactive Users", value: "128" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 text-center"
          >
            <p className="text-2xl font-bold text-[var(--primary-blue)]">
              {item.value}
            </p>
            <p className="text-sm text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-lg text-[var(--primary-blue)]">
            Recent User Activity
          </h2>

          <div className="flex gap-2">
            <button className="border px-3 py-1 rounded">Today</button>
            <button className="border px-3 py-1 rounded">This Week</button>
            <button className="border px-3 py-1 rounded">This Month</button>
          </div>
        </div>

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
            <tr>
              <td className="px-4 py-3">John Smith</td>
              <td className="px-4 py-3">Administrator</td>
              <td className="px-4 py-3">Created new user role</td>
              <td className="px-4 py-3">10:25 AM</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Active
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

