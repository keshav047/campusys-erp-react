import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function TransferCertificate() {
  const [page, setPage] = useState("list");
  const [search, setSearch] = useState("");

  const [tcList, setTcList] = useState([]);

  const [form, setForm] = useState({
    student: "",
    admissionNo: "",
    academicYear: "2024-2025",
    tcNumber: "",
    tcDate: "",
    feeDate: "",
    result: "",
    firstClass: "",
    lastClass: "",
    workingDays: "",
    presents: "",
    ncc: "",
    activities: "",
    failed: "No",
    feesPaid: "",
  });

  // FILTER
  const filtered = tcList.filter(
    (t) =>
      t.student.toLowerCase().includes(search.toLowerCase()) ||
      t.tcNumber.toLowerCase().includes(search.toLowerCase())
  );

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.tcNumber) {
      alert("TC Number required");
      return;
    }

    setTcList([...tcList, { id: Date.now(), ...form }]);

    setForm({
      student: "",
      admissionNo: "",
      academicYear: "2024-2025",
      tcNumber: "",
      tcDate: "",
      feeDate: "",
      result: "",
      firstClass: "",
      lastClass: "",
      workingDays: "",
      presents: "",
      ncc: "",
      activities: "",
      failed: "No",
      feesPaid: "",
    });

    setPage("list");
  };

  return (
    <div style={styles.container}>
      {/* ================= LIST PAGE ================= */}
      {page === "list" && (
        <>
          <div style={styles.header}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: "rgb(26, 75, 140)" }}>Transfer Certificates</h2>

            <div style={styles.actions}>
              <div style={styles.searchBox}>
                <FaSearch style={styles.icon} />
                <input
                  style={styles.input}
                  placeholder="Search TC..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <button
  style={styles.primaryBtn}
  onClick={() => setPage("form")}
>
  <FaPlus /> Generate TC
</button>
            </div>
          </div>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th>TC No</th>
                  <th>Student</th>
                  <th>Year</th>
                  <th>Date</th>
                  <th>Fee Date</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={styles.noData}>
                      No Records Found
                    </td>
                  </tr>
                ) : (
                  filtered.map((t) => (
                    <tr key={t.id}>
                      <td>{t.tcNumber}</td>
                      <td>{t.student || "-"}</td>
                      <td>{t.academicYear}</td>
                      <td>{t.tcDate}</td>
                      <td>{t.feeDate}</td>
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
  <div style={styles.formContainer}>
    
    {/* HEADER */}
    <div style={styles.formHeader}>
      <h2 style={styles.heading}>
        Generate Transfer Certificate
      </h2>

      <button
        style={styles.backBtn}
        onClick={() => setPage("list")}
      >
        ← Back to List
      </button>
    </div>

    <form onSubmit={handleSubmit} style={styles.formCard}>

      {/* Academic Year */}
      <div style={styles.fullRow}>
        <label style={styles.label}>Academic Year *</label>
        <select style={styles.field}>
          <option>2024-2025</option>
          <option>2025-2026</option>
        </select>
      </div>

      {/* Student Search */}
      <div style={styles.fullRow}>
        <label style={styles.label}>
          Admission Number or Student Name *
        </label>

        <div style={styles.inputBtn}>
          <input
            style={styles.field}
            placeholder="Enter admission number or student name"
          />
          <button type="button" style={styles.fetchBtn}>
            Fetch Student
          </button>
        </div>
      </div>

      {/* TC DETAILS */}
      <div style={styles.grid3}>
        <div>
          <label style={styles.label}>TC Number *</label>
          <input style={styles.field} placeholder="TC/2024/001" />
        </div>

        <div>
          <label style={styles.label}>TC Date *</label>
          <input type="date" style={styles.field} />
        </div>

        <div>
          <label style={styles.label}>Fee Applicable Date *</label>
          <input type="date" style={styles.field} />
        </div>
      </div>

      <hr style={styles.divider} />

      {/* RESULT */}
      <div style={styles.grid2}>
        <div>
          <label style={styles.label}>Student Result</label>
          <select style={styles.field}>
            <option>Select Result</option>
            <option>Pass</option>
            <option>Fail</option>
          </select>
        </div>

        <div>
          <label style={styles.label}>
            Class of first admission in the School
          </label>
          <input
            style={styles.field}
            placeholder="e.g. Nursery, Class 1"
          />
        </div>
      </div>

      {/* CLASS INFO */}
      <div style={styles.grid3}>
        <div>
          <label style={styles.label}>Last Class Pass</label>
          <input style={styles.field} placeholder="Last class passed" />
        </div>

        <div>
          <label style={styles.label}>
            Total no. of Working days
          </label>
          <input style={styles.field} placeholder="Total working days" />
        </div>

        <div>
          <label style={styles.label}>
            Total No. of Working Day Presents
          </label>
          <input style={styles.field} placeholder="Total presents" />
        </div>
      </div>

      {/* NCC + ACTIVITIES */}
      <div style={styles.grid2}>
        <div>
          <label style={styles.label}>
            Whether NCC Cadet/Boy Scout/Girl Guide
          </label>
          <select style={styles.field}>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label style={styles.label}>
            Games Played or Curricular Activities
          </label>
          <input
            style={styles.field}
            placeholder="Games/Activities participated"
          />
        </div>
      </div>

      {/* SUBJECT */}
      <div style={styles.fullRow}>
        <label style={styles.label}>Subject Offered</label>
        <input
          style={styles.field}
          placeholder="Subjects studied (e.g. Science, Mathematics, English)"
        />
      </div>

      {/* FAIL + FEES */}
      <div style={styles.grid2}>
        <div>
          <label style={styles.label}>
            Whether the Student is failed
          </label>
          <select style={styles.field}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div>
          <label style={styles.label}>
            Month upto which all Due Paid
          </label>
          <input style={styles.field} placeholder="e.g. March 2025" />
        </div>
      </div>

      {/* PROMOTION + REMARKS */}
      <div style={styles.grid2}>
        <div>
          <label style={styles.label}>
            Promotion Status with Class
          </label>
          <input
            style={styles.field}
            placeholder="e.g. Promoted to Class 11"
          />
        </div>

        <div>
          <label style={styles.label}>Remarks</label>
          <input
            style={styles.field}
            placeholder="Any additional remarks"
          />
        </div>
      </div>

      {/* ACTION */}
      <div style={styles.actionsEnd}>
        <button
          type="button"
          style={styles.cancelBtn}
          onClick={() => setPage("list")}
        >
          Cancel
        </button>

        <button style={styles.successBtn}>
          Generate TC
        </button>
      </div>

    </form>
  </div>
)}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "20px",
    background: "#f8fafc",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  
  },

  title: {
    color: "#1e3a8a",
  },

  actions: {
    display: "flex",
    gap: "10px",
  },

  searchBox: {
    position: "relative",
  },

  icon: {
    position: "absolute",
    top: "10px",
    left: "10px",
  },

  input: {
    padding: "8px 10px 8px 30px",
  },

 primaryBtn: {
  background: "#1e3a8a",
  color: "#fff",
  padding: "10px 18px",
  border: "none",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  whiteSpace: "nowrap",   // ✅ MOST IMPORTANT (text break fix)
},

  secondaryBtn: {
    background: "#6b7280",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
  },

  tableWrapper: {
    background: "#fff",
    borderRadius: "10px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  thead: {
    background: "#e0edff",
  },

  noData: {
    textAlign: "center",
    padding: "20px",
  },

  /* FORM */
  formContainer: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "12px",
  },

  formHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  formCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "15px",
    marginBottom: "15px",
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "15px",
    marginBottom: "15px",
  },

  field: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    width: "100%",
    color: "#000",
  },

  inputBtn: {
    display: "flex",
    gap: "10px",
  },

  actionsEnd: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "20px",
  },

  cancelBtn: {
    background: "#6b7280",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
  },

  successBtn: {
    background: "#1e3a8a",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
  },
  heading: {
  color: "#1e3a8a",
  fontSize: "28px",
  fontWeight: "900",
},

backBtn: {
  background: "#6b7280",
  color: "#fff",
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
},

label: {
  fontSize: "14px",
  color: "#1e3a8a", // ✅ BLUE (same as screenshot)
  marginBottom: "5px",
  display: "block",
  fontWeight: "500",
},

fullRow: {
  marginBottom: "15px",
},

divider: {
  margin: "20px 0",
},

fetchBtn: {
  background: "#1e3a8a",
  color: "#fff",
  padding: "10px 16px",
  border: "none",
  borderRadius: "8px",
},
};