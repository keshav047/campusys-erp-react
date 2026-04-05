import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CertificateTemplates() {
  const [showAdd, setShowAdd] = useState(false);

  const [editorData, setEditorData] = useState(
    "<h3 style='text-align:center'>CERTIFICATE</h3><p>Enter your certificate design here...</p>"
  );

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

  const placeholderList = [
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
  ];

  // 👉 Insert placeholder into editor
  const insertPlaceholder = (value) => {
    setEditorData((prev) => prev + " " + value);
  };

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
                {placeholderList.map((p, i) => (
                  <span
                    key={i}
                    style={styles.badge}
                    onClick={() => insertPlaceholder(p)}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* CKEDITOR */}
            <div style={styles.fullRow}>
              <label style={styles.label}>
                Certificate Design 
              </label>

              <div style={{ marginTop: "10px" }}>
                <CKEditor
                  editor={ClassicEditor}
                  data={editorData}
                  config={{
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "underline",
                      "strikethrough",
                      "|",
                      "bulletedList",
                      "numberedList",
                      "|",
                      "link",
                      "blockQuote",
                      "insertTable",
                      "|",
                      "undo",
                      "redo",
                    ],
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                  }}
                />
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
    background: "#f8fcfa",
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
  },

  addBtn: {
    background: "#1e3a8a",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
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
    fontSize: "12px",
    cursor: "pointer",
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
    border: "none",
    cursor: "pointer",
  },

  deleteBtn: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#fee2e2",
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

  backBtn: {
    background: "#6b7280",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
  },
};