import { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaArrowLeft,
  FaSave,
  FaEdit,
  FaUserGraduate,
} from "react-icons/fa";

export default function SectionChange() {
  const [page, setPage] = useState("list");
  const [search, setSearch] = useState("");

  // 🔹 Students DB
  const [students] = useState([
    {
      id: 101,
      name: "Aarav Sharma",
      admissionNo: "S001",
      father: "Rajesh Sharma",
      mother: "Neha Sharma",
      class: "10",
      section: "A",
    },
    {
      id: 102,
      name: "Ishita Verma",
      admissionNo: "S002",
      father: "Anil Verma",
      mother: "Sunita Verma",
      class: "9",
      section: "C",
    },
  ]);

  // 🔥 Hardcoded Section Change Data
  const [changes, setChanges] = useState([
    {
      id: 1,
      studentName: "Aarav Sharma",
      admissionNo: "S001",
      classSection: "10 - A",
      newSection: "B",
      fromDate: "2025-01-15",
      toDate: "",
      academicYear: "2024-2025",
    },
    {
      id: 2,
      studentName: "Ishita Verma",
      admissionNo: "S002",
      classSection: "9 - C",
      newSection: "A",
      fromDate: "2025-02-01",
      toDate: "",
      academicYear: "2024-2025",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    academicYear: "",
    studentQuery: "",
    newSection: "",
    fromDate: "",
    toDate: "",
  });

  // 🔍 Fetch Student
  const fetchStudent = () => {
    const found = students.find(
      (s) =>
        s.admissionNo === form.studentQuery ||
        s.name.toLowerCase().includes(form.studentQuery.toLowerCase())
    );

    if (!found) {
      alert("Student not found");
      return;
    }

    setSelectedStudent(found);
  };

  // 💾 Save / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedStudent || !form.newSection || !form.fromDate) {
      alert("Fill all required fields");
      return;
    }

    const newData = {
      id: editId || Date.now(),
      studentName: selectedStudent.name,
      admissionNo: selectedStudent.admissionNo,
      classSection: `${selectedStudent.class} - ${selectedStudent.section}`,
      newSection: form.newSection,
      fromDate: form.fromDate,
      toDate: form.toDate,
      academicYear: form.academicYear,
    };

    if (editId) {
      setChanges(changes.map((c) => (c.id === editId ? newData : c)));
    } else {
      setChanges([...changes, newData]);
    }

    resetForm();
  };

  const resetForm = () => {
    setForm({
      academicYear: "",
      studentQuery: "",
      newSection: "",
      fromDate: "",
      toDate: "",
    });
    setSelectedStudent(null);
    setEditId(null);
    setPage("list");
  };

  // ✏️ Edit
  const handleEdit = (data) => {
    setEditId(data.id);
    setPage("form");

    setForm({
      academicYear: data.academicYear,
      studentQuery: data.admissionNo,
      newSection: data.newSection,
      fromDate: data.fromDate,
      toDate: data.toDate,
    });

    const stu = students.find((s) => s.admissionNo === data.admissionNo);
    setSelectedStudent(stu);
  };

  // 🔎 Filter
  const filtered = changes.filter(
    (c) =>
      c.studentName.toLowerCase().includes(search.toLowerCase()) ||
      c.admissionNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen" style={{ background: "#f8fafc" }}>
      {/* ================= LIST PAGE ================= */}
      {page === "list" && (
        <>
          <div className="flex justify-between mb-6 flex-wrap gap-3">
            <h1 className="text-2xl font-bold text-blue-900" style={{ fontSize: "28px", fontWeight: 800, color: "rgb(26, 75, 140)" }}>
              Section Change History
            </h1>

            <div className="flex gap-2">
             <div style={{ position: "relative", width: "280px" }}>
  <span
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      fontSize: "16px",
    }}
  >
    🔍
  </span>

  <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "100%",
      padding: "8px 10px 8px 35px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
    }}
  />
</div>

              <button
                onClick={() => setPage("form")}
                className="bg-blue-900 text-white px-4 py-2 rounded flex gap-2 items-center"
              >
                <FaPlus />  Add Section Change
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-3">Student</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">New Section</th>
                  <th className="p-3">From</th>
                  <th className="p-3">To</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center p-6 text-gray-500">
                      No Records
                    </td>
                  </tr>
                ) : (
                  filtered.map((c) => (
                    <tr key={c.id} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <div className="font-semibold">
                          {c.studentName}
                        </div>
                        <div className="text-xs text-gray-500">
                          {c.admissionNo}
                        </div>
                      </td>

                      <td className="p-3">{c.classSection}</td>
                      <td className="p-3">{c.newSection}</td>
                      <td className="p-3">{c.fromDate}</td>
                      <td className="p-3">{c.toDate || "-"}</td>
<td className="px-4 py-4 flex gap-2">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                    ✎
                  </button>
                
                </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ================= FORM PAGE ================= */}
    {page === "form" && (
  <div className="bg-gray-100 min-h-screen flex justify-center items-start py-8">
    <div className="bg-white w-full max-w-4xl rounded-xl shadow-md p-8">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">
          {editId ? "Edit" : "Add"} Section Change
        </h2>

        <button
          onClick={() => setPage("list")}
          className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <FaArrowLeft /> Back to List
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Academic Year */}
        <div>
          <label className="block text-blue-900 font-semibold mb-1">
            📅 Academic Year <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200"
            value={form.academicYear}
            onChange={(e) =>
              setForm({ ...form, academicYear: e.target.value })
            }
            required
          >
            <option value="">Select Academic Year</option>
            <option>2024-2025</option>
            <option>2025-2026</option>
          </select>
        </div>

        {/* Student Search */}
        <div>
          <label className="block text-blue-900 font-semibold mb-1">
            🪪 Admission Number or Student Name <span className="text-red-500">*</span>
          </label>

          <input
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Enter admission number or student name"
            value={form.studentQuery}
            onChange={(e) =>
              setForm({ ...form, studentQuery: e.target.value })
            }
          />

          <button
            type="button"
            onClick={fetchStudent}
            className="mt-3 bg-blue-900 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-800"
          >
            <FaSearch /> Fetch Student Details
          </button>
        </div>

        {/* STUDENT PREVIEW */}
        {selectedStudent && (
          <div className="bg-blue-50 border rounded-xl p-5 flex gap-6 items-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl text-blue-900">
              <FaUserGraduate />
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><b>Name:</b> {selectedStudent.name}</div>
              <div><b>Admission:</b> {selectedStudent.admissionNo}</div>
              <div><b>Father:</b> {selectedStudent.father}</div>
              <div><b>Mother:</b> {selectedStudent.mother}</div>
              <div>
                <b>Current Class:</b>{" "}
                {selectedStudent.class} - {selectedStudent.section}
              </div>
            </div>
          </div>
        )}

        {/* New Section */}
        <div>
          <label className="block text-blue-900 font-semibold mb-1">
            🏫 New Section <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border rounded-lg px-4 py-3"
            value={form.newSection}
            onChange={(e) =>
              setForm({ ...form, newSection: e.target.value })
            }
            required
          >
            <option value="">Select New Section</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-blue-900 font-semibold mb-1">
              📆 From Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-3"
              value={form.fromDate}
              onChange={(e) =>
                setForm({ ...form, fromDate: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-blue-900 font-semibold mb-1">
              📆 To Date (Optional)
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-3"
              value={form.toDate}
              onChange={(e) =>
                setForm({ ...form, toDate: e.target.value })
              }
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>

          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-800">
            <FaSave /> Save Section Change
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
}