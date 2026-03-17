import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserRole() {
  const allRoles = Array.from({ length: 2000 }, (_, i) => ({
    id: i + 1,
    name: `Role ${i + 1}`,
    description: "Role description for ERP system",
    date: "Jan 15, 2023",
  }));

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRoles = allRoles.filter((role) =>
    role.name.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 500;
  const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRoles = filteredRoles.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[var(--primary-blue)]">
          User Roles Management
        </h1>

        <Link
          to="/add-role"
          className="bg-[var(--primary-blue)] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[var(--secondary-blue)]"
        >
          Add New Role
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col flex-1">
        {/* Search */}
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search user roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 z-10 bg-[var(--light-blue)] text-[var(--primary-blue)]">
              <tr>
                <th className="text-left px-4 py-3">Role Name</th>
                <th className="text-left px-4 py-3">Description</th>
                <th className="text-left px-4 py-3">Created Date</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {currentRoles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium">{role.name}</td>
                  <td className="px-4 py-4 text-gray-600">{role.description}</td>
                  <td className="px-4 py-4">{role.date}</td>

                  <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm flex-wrap gap-2">
          <p className="text-gray-500">
            Showing {startIndex + 1} to {startIndex + currentRoles.length} of {filteredRoles.length} roles
          </p>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-[var(--primary-blue)] text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}