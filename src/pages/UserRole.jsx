export default function UserRole() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[var(--primary-blue)]">
          User Roles Management
        </h1>

        <button className="bg-[var(--primary-blue)] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[var(--secondary-blue)]">
          Add New Role
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search user roles..."
            className="w-80 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
          />

          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm text-gray-600">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <select className="px-4 py-2 border rounded-lg text-sm text-gray-600">
              <option>Sort by Name</option>
              <option>Sort by Date</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--light-blue)] text-[var(--primary-blue)]">
                <th className="text-left px-4 py-3">Role Name</th>
                <th className="text-left px-4 py-3">Description</th>
                <th className="text-left px-4 py-3">Users</th>
                <th className="text-left px-4 py-3">Permissions</th>
                <th className="text-left px-4 py-3">Created Date</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {/* Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 font-medium">Administrator</td>
                <td className="px-4 py-4 text-gray-600">
                  Full system access and control
                </td>
                <td className="px-4 py-4">5</td>
                <td className="px-4 py-4">All Permissions</td>
                <td className="px-4 py-4">Jan 15, 2023</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                    Active
                  </span>
                </td>
                <td className="px-4 py-4 flex gap-2">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                    ✎
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                    🗑
                  </button>
                </td>
              </tr>

              {/* Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 font-medium">Teacher</td>
                <td className="px-4 py-4 text-gray-600">
                  Access to academic and student management
                </td>
                <td className="px-4 py-4">42</td>
                <td className="px-4 py-4">Limited Permissions</td>
                <td className="px-4 py-4">Feb 10, 2023</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                    Active
                  </span>
                </td>
                <td className="px-4 py-4 flex gap-2">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                    ✎
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                    🗑
                  </button>
                </td>
              </tr>

              {/* Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 font-medium">Student</td>
                <td className="px-4 py-4 text-gray-600">
                  Access to personal academic information
                </td>
                <td className="px-4 py-4">850</td>
                <td className="px-4 py-4">Restricted Permissions</td>
                <td className="px-4 py-4">Jan 20, 2023</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                    Active
                  </span>
                </td>
                <td className="px-4 py-4 flex gap-2">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                    ✎
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                    🗑
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
