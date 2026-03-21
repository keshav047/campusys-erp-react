import { useState } from "react";

export default function UserDefinedFields() {
  const [fields, setFields] = useState([
    { id: 1, name: "Hobbies", sequence: 5, viewPage: "Student Profile" },
    { id: 2, name: "Emergency Contact", sequence: 8, viewPage: "Student Profile" },
    { id: 3, name: "Medical Conditions", sequence: 12, viewPage: "Student Profile" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    sequence: "",
    viewPage: "",
  });

  // Filter
  const filteredFields = fields.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open modal
  const openModal = (field = null) => {
    if (field) {
      setForm(field);
      setEditId(field.id);
    } else {
      setForm({ name: "", sequence: "", viewPage: "" });
      setEditId(null);
    }
    setShowModal(true);
  };

  // Save
  const handleSave = () => {
    if (!form.name || !form.sequence || !form.viewPage) {
      alert("All fields required");
      return;
    }

    if (editId) {
      setFields(fields.map((f) => (f.id === editId ? { ...form, id: editId } : f)));
    } else {
      setFields([
        ...fields,
        { ...form, id: Date.now() }
      ]);
    }

    setShowModal(false);
  };

  return (
    <div style={{ padding: "30px", background: "#f8fafc", minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <h2 style={{ color: "#1a4b8c" }}>User Defined Fields</h2>
        <button onClick={() => openModal()} style={btnPrimary}>
          + Add Field
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      {/* Table */}
      <div style={card}>
        <table width="100%">
          <thead>
            <tr style={{ background: "#e8f2fc" }}>
              <th style={th}>Name</th>
              <th style={th}>Sequence</th>
              <th style={th}>View Page</th>
              <th style={th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredFields.map((f) => (
              <tr key={f.id}>
                <td style={td}>{f.name}</td>
                <td style={td}>{f.sequence}</td>
                <td style={td}>{f.viewPage}</td>
                <td style={td}>
                  <button onClick={() => openModal(f)} style={btnEdit}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h3>{editId ? "Edit Field" : "Add Field"}</h3>

            <input
              placeholder="Field Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
            />

            <input
              placeholder="Sequence"
              type="number"
              value={form.sequence}
              onChange={(e) => setForm({ ...form, sequence: e.target.value })}
              style={inputStyle}
            />

            <select
              value={form.viewPage}
              onChange={(e) => setForm({ ...form, viewPage: e.target.value })}
              style={inputStyle}
            >
              <option value="">Select View Page</option>
              <option>Student Profile</option>
              <option>Parent Profile</option>
              <option>Teacher Profile</option>
            </select>

            <div style={{ marginTop: 20 }}>
              <button onClick={handleSave} style={btnPrimary}>
                Save
              </button>
              <button onClick={() => setShowModal(false)} style={btnCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================== STYLES ================== */

const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 10,
  marginTop: 20,
};

const th = {
  padding: 10,
  textAlign: "left",
};

const td = {
  padding: 10,
  borderBottom: "1px solid #eee",
};

const inputStyle = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const btnPrimary = {
  background: "#1a4b8c",
  color: "#fff",
  padding: "8px 15px",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};

const btnEdit = {
  background: "#f59e0b",
  color: "#fff",
  padding: "6px 10px",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
};

const btnCancel = {
  marginLeft: 10,
  padding: "8px 15px",
  border: "1px solid #ccc",
  borderRadius: 6,
  cursor: "pointer",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalBox = {
  background: "#fff",
  padding: 20,
  borderRadius: 10,
  width: 350,
};