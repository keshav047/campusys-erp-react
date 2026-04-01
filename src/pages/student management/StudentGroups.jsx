import { useState } from "react";
import { FaSearch, FaEdit, FaUserPlus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div style={container}>
      
      {/* Header */}
      <div style={header}>
        <h2 style={title}>Student Groups</h2>

        <div style={searchContainer}>
          
          {/* Search */}
          <div style={searchBox}>
            <span style={searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search groups..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchInput}
            />
          </div>

          {/* Add Button */}
          <Link to="/add-student-group" style={{ textDecoration: "none" }}>
  <button style={btnPrimary}>
    <FaPlus /> Add Group
  </button>
</Link>
        </div>
      </div>

      {/* Table */}
      <div style={card}>
        <table width="100%">
          <thead>
            <tr style={{ background: "#e8f2fc" }}>
              <th style={th}>Group Name</th>
              <th style={th}>Description</th>
              <th style={th}>Members</th>
              <th style={th}>Created Date</th>
              <th style={th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredGroups.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: 20 }}>
                  No Groups Found
                </td>
              </tr>
            ) : (
              filteredGroups.map((group) => (
                <tr key={group.id}>
                  <td style={td}>{group.name}</td>
                  <td style={td}>{group.description}</td>
                  <td style={td}>{group.memberCount}</td>
                  <td style={td}>
                    {new Date(group.createdDate).toLocaleDateString()}
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
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===== SAME STYLES ===== */

const container = {
  padding: "30px",
  background: "#f8fafc",
  minHeight: "100vh",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const title = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#1a4b8c",
};

const searchContainer = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

const searchBox = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "6px",
  padding: "0 8px",
  background: "#fff",
};

const searchIcon = {
  marginRight: "5px",
  color: "#888",
};

const searchInput = {
  border: "none",
  outline: "none",
  padding: "8px",
};

const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 10,
  marginTop: 20,
};

const th = {
  padding: 10,
  textAlign: "left",
};

const td = {
  padding: 10,
  borderBottom: "1px solid #eee",
};

const btnPrimary = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  background: "#1a4b8c",
  color: "#fff",
  padding: "8px 15px",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};

const btnEdit = {
  background: "#f59e0b",
  color: "#fff",
  padding: "6px 10px",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  marginRight: "5px",
};

const btnAdd = {
  background: "#22c55e",
  color: "#fff",
  padding: "6px 10px",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
};