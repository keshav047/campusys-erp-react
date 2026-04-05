import React, { useState } from "react";

export default function CertificateTemplates() {
  const [showAdd, setShowAdd] = useState(false);

  const templates = [
    {
      name: "Bonafide Certificate",
      placeholders: ["{{student_name}}", "{{admission_no}}"],
      date: "2025-03-30",
    },
    {
      name: "Conduct Certificate",
      placeholders: ["{{student_name}}"],
      date: "2025-03-30",
    },
  ];

  return (
    <div style={styles.container}>
      {!showAdd ? (
        <>
          {/* HEADER */}
          <div style={styles.header}>
            <h2 style={styles.title}>Certificate Templates</h2>

            <div style={styles.actions}>
              <input
                style={styles.searchInput}
                placeholder="Search by template name..."
              />

              

              <button
                style={styles.addBtn}
                onClick={() => setShowAdd(true)}
              >
                + Add Template
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div style={styles.card}>
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>Template Name</th>
                  <th style={styles.th}>Placeholders Used</th>
                  <th style={styles.th}>Last Modified</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {templates.map((item, index) => (
                  <tr key={index} style={styles.tr}>
                    <td style={styles.td}>{item.name}</td>

                    <td style={styles.td}>
                      {item.placeholders.map((p, i) => (
                        <span key={i} style={styles.badge}>
                          {p}
                        </span>
                      ))}
                    </td>

                    <td style={styles.td}>{item.date}</td>

                    <td style={styles.td}>
                      <div style={styles.actionBtns}>
                        <button style={styles.editBtn}>✎</button>
                        <button style={styles.deleteBtn}>🗑</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          {/* ADD PAGE */}
          <div style={styles.header}>
            <h2 style={styles.title}>Add New Template</h2>

            <button
              style={styles.backBtn}
              onClick={() => setShowAdd(false)}
            >
              ← Back to List
            </button>
          </div>

          <div style={styles.formCard}>
            {/* NAME */}
            <div style={styles.fullRow}>
              <label style={styles.label}>
                Template Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                style={styles.field}
                placeholder="e.g., Bonafide Certificate"
              />
            </div>

            {/* PLACEHOLDERS */}
            <div style={styles.fullRow}>
              <label style={styles.label}>
                Available Placeholders (Click to insert)
              </label>

              <div style={styles.placeholderList}>
                {[
                  "{{student_name}}",
                  "{{admission_no}}",
                  "{{father_name}}",
                  "{{mother_name}}",
                  "{{class_section}}",
                  "{{current_date}}",
                  "{{principal_name}}",
                  "{{school_name}}",
                  "{{academic_year}}",
                  "{{certificate_number}}",
                ].map((p, i) => (
                  <span key={i} style={styles.badge}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* EDITOR */}
            <div style={styles.fullRow}>
              <label style={styles.label}>
                Certificate Design (WYSIWYG Editor)
              </label>

              <div style={styles.toolbar}>
                <button style={styles.toolBtn}>B</button>
                <button style={styles.toolBtn}>I</button>
                <button style={styles.toolBtn}>U</button>
                <button style={styles.toolBtn}>≡</button>
                <button style={styles.toolBtn}>•</button>
                <button style={styles.toolBtn}>1.</button>

                <select style={styles.select}>
                  <option>Large</option>
                  <option>Medium</option>
                </select>

                <select style={styles.select}>
                  <option>Red</option>
                  <option>Black</option>
                </select>
              </div>

              <div style={styles.editor}>
                <h3 style={{ textAlign: "center" }}>CERTIFICATE</h3>
                <p>
                  Enter your certificate design here. Use placeholders from the
                  buttons above.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "20px 30px",
    background: "#f5f7fb",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "900",
    color: "#1e3a8a",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  searchInput: {
    width: "280px",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
  },

  searchBtn: {
    background: "#1e3a8a",
    color: "#fff",
    padding: "12px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  addBtn: {
    background: "#1e3a8a",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "500",
    cursor: "pointer",
  },

  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  thead: {
    background: "#e0edff",
  },

  th: {
    textAlign: "left",
    padding: "12px",
    fontWeight: "600",
  },

  tr: {
    borderBottom: "1px solid #eee",
  },

  td: {
    padding: "12px",
  },

  badge: {
    background: "#e6f0ff",
    color: "#1e3a8a",
    padding: "5px 10px",
    borderRadius: "15px",
    marginRight: "5px",
    fontSize: "12px",
  },

  actionBtns: {
    display: "flex",
    gap: "8px",
  },

  editBtn: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#dbeafe",
    color: "#1e40af",
    border: "none",
    cursor: "pointer",
  },

  deleteBtn: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#fee2e2",
    color: "#dc2626",
    border: "none",
    cursor: "pointer",
  },

  formCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },

  label: {
    color: "#1e3a8a",
    marginBottom: "5px",
    display: "block",
  },

  field: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    width: "100%",
  },

  fullRow: {
    marginBottom: "15px",
  },

  placeholderList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  toolbar: {
    background: "#eee",
    padding: "10px",
    borderRadius: "6px",
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  toolBtn: {
    background: "#fff",
    border: "1px solid #ccc",
    padding: "5px 10px",
  },

  select: {
    padding: "5px",
  },

  editor: {
    border: "1px solid #ccc",
    padding: "20px",
    marginTop: "10px",
    background: "#fafafa",
    minHeight: "200px",
  },

  backBtn: {
    background: "#6b7280",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
  },
};