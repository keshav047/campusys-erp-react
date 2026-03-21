import { useState } from "react";
import { FaSearch, FaEdit, FaUserPlus, FaPlus } from "react-icons/fa";

export default function StudentGroups() {
  const [search, setSearch] = useState("");

  const [groups] = useState([
    {
      id: 1,
      name: "Science Club",
      description: "For students interested in science experiments",
      memberCount: 24,
      createdDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Math Olympiad Team",
      description: "Selected students for math competitions",
      memberCount: 12,
      createdDate: "2023-02-10",
    },
    {
      id: 3,
      name: "Debate Society",
      description: "Students participating in debates",
      memberCount: 18,
      createdDate: "2023-01-30",
    },
  ]);

  const filteredGroups = groups.filter(
    (g) =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">
          Student Groups
        </h1>

        <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition">
          <FaPlus /> Add Group
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search groups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="text-left p-4">Group Name</th>
              <th className="text-left p-4">Description</th>
              <th className="text-center p-4">Members</th>
              <th className="text-center p-4">Created Date</th>
              <th className="text-center p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredGroups.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-500">
                  No Groups Found
                </td>
              </tr>
            ) : (
              filteredGroups.map((group) => (
                <tr
                  key={group.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-semibold text-blue-900">
                    {group.name}
                  </td>

                  <td className="p-4 text-gray-600">
                    {group.description}
                  </td>

                  <td className="p-4 text-center font-medium">
                    {group.memberCount}
                  </td>

                  <td className="p-4 text-center text-gray-500">
                    {new Date(group.createdDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-yellow-600">
                        <FaEdit /> Edit
                      </button>

                      <button className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-green-600">
                        <FaUserPlus /> Add
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}