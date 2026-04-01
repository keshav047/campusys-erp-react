import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function Promotions() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("list");

  const [promotions, setPromotions] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      admissionNo: "S001",
      fromClass: "9-A",
      toClass: "10-A",
      year: "2024-2025",
      status: "cleared",
    },
    {
      id: 2,
      name: "Ishita Verma",
      admissionNo: "S002",
      fromClass: "8-B",
      toClass: "9-B",
      year: "2024-2025",
      status: "pending",
    },
  ]);

  const filtered = promotions.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.admissionNo.toLowerCase().includes(search.toLowerCase())
  );
  // ✅ CSV Download Function (add above return)
const downloadCSV = () => {
  const headers = [
    "Admission No",
    "Student Name",
    "From Class",
    "To Class",
    "Academic Year"
  ];

  const sampleData = [
    ["S001", "Aarav Sharma", "9-A", "10-A", "2024-2025"],
    ["S002", "Ishita Verma", "8-B", "9-B", "2024-2025"]
  ];

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += headers.join(",") + "\n";

  sampleData.forEach(row => {
    csvContent += row.join(",") + "\n";
  });

  const link = document.createElement("a");
  link.href = encodeURI(csvContent);
  link.download = "promotion_format.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* HEADER */}
      {/* HEADER (ONLY LIST PAGE) */}
{page === "list" && (
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          Student Promotions
        </h1>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">

          {/* SEARCH */}
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

          {/* ADD BUTTON */}
          <button
            onClick={() => setPage("method")}
            className="w-full sm:w-auto flex justify-center items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded"
          >
            <FaPlus /> Add Promotion
          </button>
        </div>
      </div>
      )}

      {/* ================= LIST PAGE ================= */}
      {page === "list" && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-[700px] w-full">
            <thead className="bg-blue-50 text-blue-900 text-sm md:text-base">
              <tr>
                <th className="p-3">Student</th>
                <th className="p-3">From</th>
                <th className="p-3">To</th>
                <th className="p-3">Year</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody className="text-sm md:text-base">
              {filtered.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  
                  <td className="p-3">
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs text-gray-500">
                        {p.admissionNo}
                      </div>
                    </div>
                  </td>

                  <td className="p-3">{p.fromClass}</td>
                  <td className="p-3">{p.toClass}</td>
                  <td className="p-3">{p.year}</td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs md:text-sm ${
                        p.status === "cleared"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {p.status === "cleared"
                        ? "Fee Cleared"
                        : "Fee Pending"}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================= ADD PAGE ================= */}
     {page === "method" && (
  <div className="p-4">

    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-blue-900">
       
      </h1>

      <button
        onClick={() => setPage("list")}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        ← Back to History
      </button>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Manual */}
      <div
        onClick={() => setPage("add")}
        className="bg-white p-6 rounded shadow text-center cursor-pointer hover:shadow-lg"
      >
        <div className="text-4xl mb-3">👤</div>
        <h3 className="font-semibold text-blue-900">
          Promote Students Manually
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Select individual students and assign class
        </p>
      </div>

      {/* Class Wise */}
      {/* Class Wise */}
<div
  onClick={() => setPage("add1")}
  className="bg-white p-6 rounded shadow text-center cursor-pointer hover:shadow-lg"
>
  <div className="text-4xl mb-3">👥</div>
  <h3 className="font-semibold text-blue-900">
    Promote Students Class Wise
  </h3>
  <p className="text-sm text-gray-500 mt-2">
    Select class and promote students
  </p>
</div>

      {/* Excel */}
      <div 
      onClick={() => setPage("add2")}
      className="bg-white p-6 rounded shadow text-center cursor-pointer hover:shadow-lg">
        <div className="text-4xl mb-3">📄</div>
        <h3 className="font-semibold text-blue-900">
          Promote by Importing Excel File
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Bulk upload using CSV/Excel
        </p>
      </div>

    </div>
  </div>
)}
{page === "add" && (
  <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-blue-900">Manual Student Promotion</h1>
      <button
        onClick={() => setPage("method")}
        className="bg-gray-600 hover:bg-gray-700 transition text-white px-5 py-2 rounded-md"
      >
        ← Back to Methods
      </button>
    </div>

    {/* From Academic Year */}
    <div className="mb-6">
      <label htmlFor="fromYear" className="block text-blue-900 font-semibold mb-2">
        From Academic Year
      </label>
      <select
        id="fromYear"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>2023-2024</option>
        <option>2024-2025</option>
        <option>2025-2026</option>
      </select>
    </div>

    {/* To Academic Year */}
    <div className="mb-6">
      <label htmlFor="toYear" className="block text-blue-900 font-semibold mb-2">
        To Academic Year
      </label>
      <select
        id="toYear"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>2024-2025</option>
        <option>2025-2026</option>
        <option>2026-2027</option>
      </select>
    </div>

    {/* Add Student Input and Button */}
    <div className="flex gap-4 mb-8">
      <input
        type="text"
        placeholder="Admission Number or Student Name"
        className="flex-grow border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-900 hover:bg-blue-800 transition text-white px-6 py-3 rounded-md font-semibold">
        Add Student
      </button>
    </div>

    {/* Info Message */}
    <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-md p-4 mb-8 text-center font-medium">
      No students added yet. Search and add students above.
    </div>

    {/* Save Button */}
    <div className="text-right">
      <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-md font-semibold">
        <span>🔒</span> Save All Promotions
      </button>
    </div>
  </div>
)}
{page === "add1" && (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-md p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-blue-900">
            Class Wise Promotion
          </h1>
          <button onClick={() => setPage("method")}
        className="bg-gray-600 hover:bg-gray-700 transition text-white px-5 py-2 rounded-md">
            
            ← Back to Methods
          </button>
        </div>

        {/* From Academic Year */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            From Academic Year
          </label>
          <select className="w-full border rounded-lg p-3">
            <option>2023-2024</option>
          </select>
        </div>

        {/* To Academic Year */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            To Academic Year
          </label>
          <select className="w-full border rounded-lg p-3">
            <option>2024-2025</option>
          </select>
        </div>

        {/* Class Selection Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* Source Class */}
          <div>
            <label className="block text-gray-700 mb-2">
              Select Source Class & Section
            </label>
            <select className="w-full border rounded-lg p-3">
              <option>Select Class</option>
            </select>
          </div>

          {/* Promote To */}
          <div>
            <label className="block text-gray-700 mb-2">
              Promote To Class & Section
            </label>
            <select className="w-full border rounded-lg p-3">
              <option>11-A</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
            💾 Save Selected Promotions
          </button>
        </div>

      </div>
    </div>
)}

  {page === "add2" && (
  <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
    <div className="bg-white w-full max-w-5xl rounded-2xl shadow-md p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Excel Bulk Promotion
        </h1>
        <button
          onClick={() => setPage("method")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          ← Back to Methods
        </button>
      </div>

      {/* From Academic Year */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          From Academic Year
        </label>
        <select className="w-full border rounded-lg p-3">
          <option>2023-2024</option>
          <option>2024-2025</option>
        </select>
      </div>

      {/* To Academic Year */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          To Academic Year
        </label>
        <select className="w-full border rounded-lg p-3">
          <option>2024-2025</option>
          <option>2025-2026</option>
        </select>
      </div>

      {/* ✅ Download Button FIXED */}
      <div className="mb-6">
        <button
          onClick={downloadCSV}
          className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          ⬇ Download Excel Format (CSV)
        </button>
      </div>

      {/* Upload Section */}
      <div className="mb-8">
        <label className="block text-gray-700 mb-2">
          Upload Excel/CSV File
        </label>
        <input
          type="file"
          accept=".csv, .xlsx"
          className="w-full border rounded-lg p-3 bg-gray-50"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
          💾 Save All Promotions
        </button>
      </div>

    </div>
  </div>
)}
    </div>
  );
}