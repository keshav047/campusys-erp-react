import React, { useState } from "react";
import "./deregistration.css";

export default function Deregistration() {
  const [page, setPage] = useState("list");
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [form, setForm] = useState({
    academicYear: "2024-2025",
    actionType: "",
    deregDate: "",
    feeDate: "",
    reason: "",
  });

  const [deregHistory, setDeregHistory] = useState([
    {
      id: 1,
      studentName: "Rohan Mehta",
      admissionNo: "S003",
      academicYear: "2024-2025",
      type: "De-Registration",
      deregDate: "2025-01-15",
      feeApplicableDate: "2025-01-01",
      status: "De-Registered",
    },
  ]);

  const studentsDB = [
    { name: "Aarav Sharma", admissionNo: "S001", class: "10-A" },
    { name: "Ishita Verma", admissionNo: "S002", class: "9-B" },
    { name: "Rohan Mehta", admissionNo: "S003", class: "10-A" },
  ];

  const filteredData = deregHistory.filter(
    (d) =>
      d.studentName.toLowerCase().includes(search.toLowerCase()) ||
      d.admissionNo.toLowerCase().includes(search.toLowerCase())
  );

  const fetchStudent = (query) => {
    const student = studentsDB.find(
      (s) =>
        s.admissionNo.toLowerCase() === query.toLowerCase() ||
        s.name.toLowerCase().includes(query.toLowerCase())
    );

    if (!student) {
      alert("Student not found!");
      return;
    }

    setSelectedStudent(student);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedStudent) {
      alert("Select student first");
      return;
    }

    const newRecord = {
      id: Date.now(),
      studentName: selectedStudent.name,
      admissionNo: selectedStudent.admissionNo,
      academicYear: form.academicYear,
      type: form.actionType,
      deregDate: form.deregDate,
      feeApplicableDate: form.feeDate,
      status:
        form.actionType === "De-Registration"
          ? "De-Registered"
          : "Suspended",
    };

    setDeregHistory([...deregHistory, newRecord]);
    setPage("list");
  };

  return (
    <div className="main-container">
      <div className="module-content">

        {/* ===== LIST PAGE ===== */}
       {page === "list" && (
  <>
    <div className="content-header">
      <h1 className="page-title2">
        De-Registration & Suspension History
      </h1>

      <div className="page-actions">
        {/* SEARCH */}
        <div className="search-group">
          <input
            type="text"
            className="search-input"
            placeholder="Search by student name or admission no"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
         
        </div>

        {/* ADD BUTTON */}
        <button
          className="action-btn btn-success"
          onClick={() => setPage("add")}
        >
          + Add New
        </button>
      </div>
    </div>

    <div className="content-card">
      <table className="data-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Admission No</th>
            <th>Academic Year</th>
            <th>Type</th>
            <th>De-Registration Date</th>
            <th>Fee Applicable Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((d) => (
            <tr key={d.id}>
              <td className="bold">{d.studentName}</td>
              <td>{d.admissionNo}</td>
              <td>{d.academicYear}</td>

              {/* TYPE BADGE */}
              <td>
                <span
                  className={
                    d.type === "De-Registration"
                      ? "badge badge-danger"
                      : "badge badge-warning"
                  }
                >
                  {d.type}
                </span>
              </td>

              <td>{d.deregDate}</td>
              <td>{d.feeDate}</td>
              <td>{d.reason}</td>

              {/* STATUS BADGE */}
              <td>
                <span
                  className={
                    d.status === "De-Registered"
                      ? "badge badge-danger"
                      : "badge badge-warning"
                  }
                >
                  {d.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

        {/* ===== ADD PAGE ===== */}
       {page === "add" && (
  <div className="content-card">
    <div className="content-header">
      <h1 className="page-title">New De-Registration / Suspension</h1>

      <button
        className="action-btn btn-secondary"
        onClick={() => setPage("list")}
      >
        ← Back to List
      </button>
    </div>

    <form onSubmit={handleSubmit}>
      {/* Academic Year */}
      <div className="form-group">
        <label>Academic Year <span className="required">*</span></label>
        <select
          className="form-control"
          onChange={(e) =>
            setForm({ ...form, academicYear: e.target.value })
          }
        >
          <option value="">Select Year</option>
          <option>2024-2025</option>
          <option>2025-2026</option>
        </select>
      </div>

      {/* Action Type */}
      <div className="form-group">
        <label>Action Type <span className="required">*</span></label>
        <select
          className="form-control"
          onChange={(e) =>
            setForm({ ...form, actionType: e.target.value })
          }
        >
          <option value="">Select Type</option>
          <option>De-Registration</option>
          <option>Suspension</option>
        </select>
      </div>

      {/* Student Search */}
      <div className="form-group">
        <label>
          Admission Number or Student Name <span className="required">*</span>
        </label>

        <div className="input-with-btn">
          <input
            className="form-control"
            placeholder="Enter admission number or student name"
            onChange={(e) =>
              setForm({ ...form, search: e.target.value })
            }
          />
          <button
            type="button"
            className="action-btn btn-primary"
            onClick={() => fetchStudent(form.search)}
          >
            Fetch Student
          </button>
        </div>
      </div>

      {/* Student Preview */}
      {selectedStudent && (
        <div className="student-preview">
          {selectedStudent.name} | {selectedStudent.admissionNo} |{" "}
          {selectedStudent.class}
        </div>
      )}

      {/* De-Registration Date */}
      <div className="form-group">
        <label>
          De-Registration / Suspension Date{" "}
          <span className="required">*</span>
        </label>
        <input
          type="date"
          className="form-control"
          onChange={(e) =>
            setForm({ ...form, deregDate: e.target.value })
          }
        />
      </div>

      {/* Fee Applicable Date */}
      <div className="form-group">
        <label>
          Fee Applicable Date <span className="required">*</span>
        </label>
        <input
          type="date"
          className="form-control"
          onChange={(e) =>
            setForm({ ...form, feeDate: e.target.value })
          }
        />
        <small className="helper-text">
          Date from which fees will be calculated/applicable
        </small>
      </div>

      {/* Reason */}
      <div className="form-group">
        <label>
          Reason for De-Registration / Suspension{" "}
          <span className="required">*</span>
        </label>
        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter detailed reason for this action..."
          onChange={(e) =>
            setForm({ ...form, reason: e.target.value })
          }
        />
      </div>

      {/* Submit */}
      <div className="form-actions">
  <button
    type="button"
    className="action-btn btn-secondary"
    onClick={() => setPage("list")}
  >
    Cancel
  </button>

  <button
    type="submit"
    className="action-btn btn-success"
  >
    Save
  </button>
</div>
    </form>
  </div>
)}
      </div>
    </div>
  );
}