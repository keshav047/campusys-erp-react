import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getGroups, deleteGroup } from "./../api/userApi";

export default function UserRole() {
  const [allRoles, setAllRoles] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ================= FETCH DATA =================
  const fetchRoles = () => {
    getGroups()
      .then((res) => {
        console.log("API DATA 👉", res.data);

        const data =
          res.data?.content ||
          res.data?.data ||
          res.data ||
          [];

        setAllRoles(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.log("API ERROR ❌", err.response || err);
      });
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // reset page on search
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // ================= SEARCH =================
  const filteredRoles = allRoles.filter((role) =>
    role?.displayName?.toLowerCase().includes(search.toLowerCase())
  );

  // ================= PAGINATION =================
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRoles = filteredRoles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // ================= DELETE =================
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      deleteGroup(id)
        .then(() => {
          setAllRoles((prev) => prev.filter((role) => role.id !== id));
        })
        .catch((err) => console.log("Delete Error ❌", err));
    }
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
          className="bg-[var(--primary-blue)] text-white px-5 py-2 rounded-lg text-sm"
        >
          Add New Role
        </Link>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        {/* Search */}
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Search user roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3">Role Name</th>
              <th className="text-left px-4 py-3">Description</th>
              <th className="text-left px-4 py-3">Created Date</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentRoles.length > 0 ? (
              currentRoles.map((role) => (
                <tr key={role.id}>
                  <td className="px-4 py-3">{role.displayName}</td>
                  <td className="px-4 py-3">{role.description}</td>
                  <td className="px-4 py-3">
                    {role.createdAt
                      ? new Date(role.createdAt).toLocaleDateString()
                      : "-"}
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
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  No roles found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </button>

          <span>Page {currentPage}</span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}