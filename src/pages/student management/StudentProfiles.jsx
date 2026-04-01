import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          Student Profiles
        </h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full md:w-auto">

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded"
            />
          </div>

          {/* Filters */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full sm:w-auto flex justify-center items-center gap-2 border px-4 py-2 rounded"
            >
              Filters {showFilters ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {showFilters && (
              <div className="absolute z-10 bg-white shadow rounded p-4 mt-2 w-full sm:w-56">
                <select className="border p-2 rounded w-full mb-2">
                  <option>All Classes</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                </select>
                <select className="border p-2 rounded w-full">
                  <option>All Status</option>
                  <option>active</option>
                  <option>inactive</option>
                </select>
              </div>
            )}
          </div>

          {/* Columns */}
          <button
            onClick={() => setShowColumnsModal(true)}
            className="w-full sm:w-auto flex justify-center items-center gap-2 border px-4 py-2 rounded"
          >
            <FaColumns /> Columns
          </button>

          {/* Add */}
        <Link to="/add-student">
  <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded">
    <FaPlus /> Add Students
  </button>
</Link>

        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-[800px] w-full">
          <thead className="bg-blue-50 text-blue-900 text-sm md:text-base">
            <tr>
              {columnVisibility.student && <th className="p-3">Student</th>}
              {columnVisibility.class && <th className="p-3">Class</th>}
              {columnVisibility.father && <th className="p-3">Father</th>}
              {columnVisibility.mother && <th className="p-3">Mother</th>}
              {columnVisibility.mobile && <th className="p-3">Mobile</th>}
              {columnVisibility.email && <th className="p-3">Email</th>}
              {columnVisibility.status && <th className="p-3">Status</th>}
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm md:text-base">
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

                {columnVisibility.class && <td className="p-3">{s.classSection}</td>}
                {columnVisibility.father && <td className="p-3">{s.fatherName}</td>}
                {columnVisibility.mother && <td className="p-3">{s.motherName}</td>}
                {columnVisibility.mobile && <td className="p-3">{s.mobile}</td>}
                {columnVisibility.email && <td className="p-3">{s.email}</td>}

                {columnVisibility.status && (
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs md:text-sm ${
                        s.status === "active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                )}

                <td className="p-3">
                  <button className="flex items-center gap-1 text-xs md:text-sm bg-yellow-500 text-white px-2 md:px-3 py-1 rounded">
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded w-full max-w-sm">
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
                <label className="capitalize">{col}</label>
              </div>
            ))}

            <button
              onClick={() => setShowColumnsModal(false)}
              className="mt-4 w-full bg-blue-900 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}