import { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaColumns,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function StudentProfiles() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showColumnsModal, setShowColumnsModal] = useState(false);

  const [columnVisibility, setColumnVisibility] = useState({
    student: true,
    class: true,
    father: true,
    mother: true,
    mobile: true,
    email: true,
    status: true,
  });

  const [students] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      admissionNo: "ADM001",
      classSection: "Class 1 - A",
      fatherName: "Rajesh Sharma",
      motherName: "Priya Sharma",
      mobile: "9876543210",
      email: "rahul@mail.com",
      status: "active",
    },
    {
      id: 2,
      name: "Priya Patel",
      admissionNo: "ADM002",
      classSection: "Class 2 - B",
      fatherName: "Amit Patel",
      motherName: "Sunita Patel",
      mobile: "9876543211",
      email: "priya@mail.com",
      status: "inactive",
    },
  ]);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.admissionNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Actions */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">
          Student Profiles
        </h1>

        <div className="flex gap-2">
          <button
            onClick={() => setShowColumnsModal(true)}
            className="flex items-center gap-2 border px-4 py-2 rounded"
          >
            <FaColumns /> Columns
          </button>

          <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded">
            <FaPlus /> Add Student
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded mb-4 shadow">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-blue-900"
        >
          Filters {showFilters ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {showFilters && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <select className="border p-2 rounded">
              <option>All Classes</option>
            </select>
            <select className="border p-2 rounded">
              <option>All Status</option>
            </select>
          </div>
        )}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 p-3 border rounded"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-auto">
        <table className="w-full">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              {columnVisibility.student && <th className="p-3">Student</th>}
              {columnVisibility.class && <th>Class</th>}
              {columnVisibility.father && <th>Father</th>}
              {columnVisibility.mother && <th>Mother</th>}
              {columnVisibility.mobile && <th>Mobile</th>}
              {columnVisibility.email && <th>Email</th>}
              {columnVisibility.status && <th>Status</th>}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id} className="border-t hover:bg-gray-50">
                {columnVisibility.student && (
                  <td className="p-3">
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-gray-500">
                        {s.admissionNo}
                      </div>
                    </div>
                  </td>
                )}

                {columnVisibility.class && <td>{s.classSection}</td>}
                {columnVisibility.father && <td>{s.fatherName}</td>}
                {columnVisibility.mother && <td>{s.motherName}</td>}
                {columnVisibility.mobile && <td>{s.mobile}</td>}
                {columnVisibility.email && <td>{s.email}</td>}
                {columnVisibility.status && (
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        s.status === "active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                )}

                <td>
                  <button className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded">
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showColumnsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="font-bold mb-4">Customize Columns</h2>

            {Object.keys(columnVisibility).map((col) => (
              <div key={col} className="flex gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={columnVisibility[col]}
                  onChange={() =>
                    setColumnVisibility({
                      ...columnVisibility,
                      [col]: !columnVisibility[col],
                    })
                  }
                />
                <label>{col}</label>
              </div>
            ))}

            <button
              onClick={() => setShowColumnsModal(false)}
              className="mt-4 bg-blue-900 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}