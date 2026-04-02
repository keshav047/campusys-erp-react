import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import "./demotions.css";

export default function Demotions() {
  const [page, setPage] = useState("list");
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [form, setForm] = useState({
    academicYear: "2024-2025",
    searchInput: "",
    demoteToClass: "",
    reason: "",
  });

  const [demotionsHistory, setDemotionsHistory] = useState([
    {
      id: 1,
      studentName: "Rohan Mehta",
      admissionNo: "S003",
      academicYear: "2024-2025",
      fromClass: "10-A",
      demotedTo: "9-B",
      reason: "Academic performance below expectations",
      date: "2025-01-15",
    },
  ]);

  const studentsDB = [
    {
      id: 1,
      name: "Aarav Sharma",
      admissionNo: "S001",
      fatherName: "Rajesh Sharma",
      motherName: "Neha Sharma",
      currentClass: "10-A",
    },
  ];

  const fetchStudent = () => {
    const student = studentsDB.find(
      (s) =>
        s.admissionNo.toLowerCase() === form.searchInput.toLowerCase() ||
        s.name.toLowerCase().includes(form.searchInput.toLowerCase())
    );

    if (!student) {
      alert("Student not found");
      setSelectedStudent(null);
      return;
    }

    setSelectedStudent(student);
  };

  const saveDemotion = () => {
    if (!selectedStudent) return alert("Select student");

    const newEntry = {
      id: Date.now(),
      studentName: selectedStudent.name,
      admissionNo: selectedStudent.admissionNo,
      academicYear: form.academicYear,
      fromClass: selectedStudent.currentClass,
      demotedTo: form.demoteToClass,
      reason: form.reason,
      date: new Date().toISOString().split("T")[0],
    };

    setDemotionsHistory([...demotionsHistory, newEntry]);
    setPage("list");
  };

  const filtered = demotionsHistory.filter(
    (d) =>
      d.studentName.toLowerCase().includes(search.toLowerCase()) ||
      d.admissionNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="module-content">

      {/* ================= LIST PAGE ================= */}
      {page === "list" && (
        <div className="demotion-container">

          {/* HEADER */}
          <div className="demotion-header">

            <h1 style={{ color: "#1a4b8c", fontSize: "32px",fontWeight: "bold" }} >
              Student Demotions History
            </h1>

            <div className="demotion-actions">

              {/* SEARCH */}
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by student name or admission..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              

              <button
                className="btn add-btn"
                onClick={() => setPage("add")}
              >
                <FaPlus /> Add Demotion
              </button>

            </div>
          </div>

          {/* TABLE */}
          <div className="table-card">
            <table className="custom-table">

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Academic Year</th>
                  <th>From Class</th>
                  <th>Demoted To</th>
                  <th>Reason</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="no-data">No data</td>
                  </tr>
                ) : (
                  filtered.map((d) => (
                    <tr key={d.id}>

                      <td>
                        <div className="student-cell">
                          <div className="name">{d.studentName}</div>
                          <div className="admission">{d.admissionNo}</div>
                        </div>
                      </td>

                      <td>{d.academicYear}</td>
                      <td>{d.fromClass}</td>

                      <td>
                        <span className="badge">
                          {d.demotedTo}
                        </span>
                      </td>

                      <td>{d.reason || "-"}</td>
                      <td>{d.date}</td>

                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>

        </div>
      )}

      {/* ================= ADD PAGE ================= */}
      {page === "add" && (
        <div className="content-page active">
          <div className="form-card">

            <div className="content-header">
              <h1 className="page-title">Add New Demotion</h1>
              <button
                className="action-btn btn-secondary"
                onClick={() => setPage("list")}
              >
                ← Back to List
              </button>
            </div>

            <div className="form-group">
              <label>Academic Year *</label>
              <select
                className="form-control"
                value={form.academicYear}
                onChange={(e) =>
                  setForm({ ...form, academicYear: e.target.value })
                }
              >
                <option>2024-2025</option>
                <option>2025-2026</option>
              </select>
            </div>

            <div className="form-group">
              <label>Admission Number or Student Name *</label>
              <div className="search-student-input">
                <input
                  className="form-control"
                  placeholder="Enter admission number or student name"
                  value={form.searchInput}
                  onChange={(e) =>
                    setForm({ ...form, searchInput: e.target.value })
                  }
                />
                <button
                  className="action-btn btn-primary"
                  onClick={fetchStudent}
                >
                  Fetch Student
                </button>
              </div>
            </div>

            {selectedStudent && (
              <div className="student-preview">
                <p><strong>Name:</strong> {selectedStudent.name}</p>
                <p><strong>Admission:</strong> {selectedStudent.admissionNo}</p>
                <p><strong>Current Class:</strong> {selectedStudent.currentClass}</p>
              </div>
            )}

            <div className="form-group">
              <label>Demote To Class & Section *</label>
              <select
                className="form-control"
                value={form.demoteToClass}
                onChange={(e) =>
                  setForm({ ...form, demoteToClass: e.target.value })
                }
              >
                <option value="">Select Class & Section</option>
                <option>9-B</option>
                <option>8-A</option>
                <option>7-A</option>
              </select>
              <small className="hint-text">
                Select the class to which the student will be demoted
              </small>
            </div>

            <div className="form-group">
              <label>Reason for Demotion (Optional)</label>
              <textarea
                className="form-control"
                placeholder="Enter reason for demotion..."
                value={form.reason}
                onChange={(e) =>
                  setForm({ ...form, reason: e.target.value })
                }
              />
            </div>

            <div className="form-actions">
              <button
                className="action-btn btn-secondary"
                onClick={() => setPage("list")}
              >
                Cancel
              </button>
              <button
                className="action-btn btn-success"
                onClick={saveDemotion}
              >
                Save Demotion
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}