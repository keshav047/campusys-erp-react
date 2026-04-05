import React, { useState } from "react";

export default function StudentCertificates() {
  const [page, setPage] = useState("list");
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [certificates, setCertificates] = useState([
    {
      id: 1,
      docNumber: "CERT/2025/001",
      admissionNo: "S001",
      studentName: "Aarav Sharma",
      classSection: "10-A",
    },
    {
      id: 2,
      docNumber: "CERT/2025/002",
      admissionNo: "S002",
      studentName: "Ishita Verma",
      classSection: "9-B",
    },
    {
      id: 3,
      docNumber: "CERT/2025/003",
      admissionNo: "S003",
      studentName: "Rohan Mehta",
      classSection: "10-A",
    },
  ]);

  const studentsDB = [
    {
      id: 1,
      admissionNo: "S001",
      name: "Aarav Sharma",
      classSection: "10-A",
    },
    {
      id: 2,
      admissionNo: "S002",
      name: "Ishita Verma",
      classSection: "9-B",
    },
    {
      id: 3,
      admissionNo: "S003",
      name: "Rohan Mehta",
      classSection: "10-A",
    },
  ];

  const filtered = certificates.filter(
    (c) =>
      c.studentName.toLowerCase().includes(search.toLowerCase()) ||
      c.admissionNo.toLowerCase().includes(search.toLowerCase()) ||
      c.docNumber.toLowerCase().includes(search.toLowerCase())
  );

  const [studentSearch, setStudentSearch] = useState("");

  const filteredStudents = studentsDB.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.admissionNo.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const generateCertificate = () => {
    if (!selectedStudent) {
      alert("Select student first");
      return;
    }

    const newCert = {
      id: Date.now(),
      docNumber: `CERT/2025/00${certificates.length + 1}`,
      admissionNo: selectedStudent.admissionNo,
      studentName: selectedStudent.name,
      classSection: selectedStudent.classSection,
    };

    setCertificates([...certificates, newCert]);
    setPage("list");
  };

  return (
    <div style={styles.container}>
      {/* LIST PAGE */}
      {page === "list" && (
        <>
          <div style={styles.headerRow}>
            <h2 style={styles.title}>Student Certificates</h2>

            <div style={styles.actions}>
              <input
                placeholder="Search by student name or document..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.searchInput}
              />
              
              <button
                style={styles.greenBtn}
                onClick={() => setPage("form")}
              >
                + Generate Certificate
              </button>
            </div>
          </div>

          <div style={styles.card}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.thead}>
                  <th>Document Number</th>
                  <th>Student Admission No</th>
                  <th>Student Name</th>
                  <th>Class & Section</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id} style={styles.row}>
                    <td>{c.docNumber}</td>
                    <td>{c.admissionNo}</td>
                    <td>{c.studentName}</td>
                    <td>{c.classSection}</td>
                    <td className="p-3 flex justify-center gap-2" style={{paddingRight:"100px"}}>
                  {/* Print */}
                 

                  {/* Delete */}
                <button
  onClick={() => window.print()}
  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[#1e3a8a] hover:text-white transition"
>
  🖨
</button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* FORM PAGE */}
      {page === "form" && (
        <div style={styles.card}>
          <div style={styles.formHeader}>
            <h2 style={styles.title}>Generate New Certificate</h2>
            <button
              style={styles.grayBtn}
              onClick={() => setPage("list")}
            >
              ← Back to List
            </button>
          </div>

          {/* SEARCH STUDENT */}
          <label style={styles.label}>
            Select Student (Admission Number or Name)
          </label>

          <div style={styles.searchRow}>
            <input
              placeholder="Type admission number or name..."
              value={studentSearch}
              onChange={(e) => setStudentSearch(e.target.value)}
              style={styles.fullInput}
            />
            <button style={styles.searchBtn}>🔍 Search</button>
          </div>

          {/* STUDENT LIST */}
       

          {/* TEMPLATE */}
          <label style={styles.label}>
            Select Certificate Template
          </label>

          <select style={styles.dropdown}>
            <option>Bonafide Certificate</option>
            <option>Conduct Certificate</option>
          </select>

          {/* ACTION BUTTONS */}
          <div style={styles.footerBtns}>
            <button style={styles.grayBtn}>Cancel</button>
            <button
              style={styles.greenBtn}
              onClick={generateCertificate}
            >
              👁 Generate & Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "30px",
    background: "#f8fafc",
    minHeight: "100vh",
    fontFamily: "Arial",

  },

  title: {
    color: "#1e3a8a",
    
  fontSize: "28px",
  fontWeight: "900",
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
     
  },

  actions: {
    display: "flex",
    gap: "10px",
  },

  searchInput: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "280px",
  },

  searchBtn: {
    background: "#1e3a8a",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
  },

  greenBtn: {
    background: "#1e3a8a",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  grayBtn: {
    background: "#6b7280",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
  },

  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "20px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  thead: {
    background: "#e5edf9",
    textAlign: "left",
  },

  row: {
    borderBottom: "1px solid #eee",
  },

  printBtn: {
    background: "#1e3a8a",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
  },

  formHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginTop: "15px",
    marginBottom: "5px",
    color: "#1e3a8a",
  },

  searchRow: {
    display: "flex",
    gap: "10px",
  },

  fullInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  studentList: {
    marginTop: "10px",
    border: "1px solid #eee",
    borderRadius: "8px",
    maxHeight: "150px",
    overflowY: "auto",
  },

  studentItem: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },

  dropdown: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  footerBtns: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "20px",
  },
};