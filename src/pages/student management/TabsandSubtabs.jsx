import { useState } from "react";

export default function TabsSubTabs() {
  const [showTabModal, setShowTabModal] = useState(false);
  const [showSubTabModal, setShowSubTabModal] = useState(false);

  const data = [
    {
      name: "Basic Information",
      subTabs: 3,
      desc: "Student core details",
      status: "Active",
    },
    {
      name: "Additional Information",
      subTabs: 2,
      desc: "Extra details",
      status: "Active",
    },
    {
      name: "Academic Information",
      subTabs: 0,
      desc: "Education data",
      status: "Inactive",
    },
  ];

  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <h1 style={title}>Tabs & Sub Tabs</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <button style={btnSecondary} onClick={() => setShowSubTabModal(true)}>
            + Sub Tab
          </button>
          <button style={btnPrimary} onClick={() => setShowTabModal(true)}>
            + Tab
          </button>
        </div>
      </div>

      {/* Card */}
      <div style={card}>
        <h2 style={{ marginBottom: "15px", color: "#1a4b8c" }}>
          Student Form Tabs
        </h2>

        <table style={table}>
          <thead>
            <tr style={{ background: "#f1f5f9" }}>
              <th style={th}>Tab Name</th>
              <th style={th}>Sub Tabs</th>
              <th style={th}>Description</th>
              <th style={th}>Status</th>
              <th style={th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} style={tr}>
                <td style={tdBold}>{item.name}</td>
                <td style={td}>{item.subTabs}</td>
                <td style={td}>{item.desc}</td>
                
                <td style={td}>
                    
                  <span
                    style={{
                      ...badge,
                      background:
                        item.status === "Active" ? "#dcfce7" : "#fee2e2",
                      color:
                        item.status === "Active" ? "#166534" : "#991b1b",
                    }}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showTabModal && (
        <div style={modal}>
          <div style={modalBox}>
            <h3>Add Tab</h3>
            <input placeholder="Tab Name" style={input} />
            <div style={modalActions}>
              <button onClick={() => setShowTabModal(false)}>Cancel</button>
              <button style={btnPrimary}>Save</button>
            </div>
          </div>
        </div>
      )}

      {showSubTabModal && (
        <div style={modal}>
          <div style={modalBox}>
            <h3>Add Sub Tab</h3>
            <input placeholder="Sub Tab Name" style={input} />
            <div style={modalActions}>
              <button onClick={() => setShowSubTabModal(false)}>Cancel</button>
              <button style={btnPrimary}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🎨 Styles */

const container = {
  padding: "30px",
  background: "#f8fafc",
  minHeight: "100vh",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const title = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#1a4b8c",
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "12px",
  fontWeight: "600",
  color: "#1a4b8c",
};

const td = {
  padding: "12px",
  borderTop: "1px solid #eee",
  color: "#555",
};

const tdBold = {
  ...td,
  fontWeight: "600",
  color: "#111",
};

const tr = {
  transition: "0.2s",
};

const badge = {
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
};

const btnPrimary = {
  background: "#1a4b8c",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
};

const btnSecondary = {
  background: "#fff",
  border: "1px solid #1a4b8c",
  color: "#1a4b8c",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
};

const modal = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
};

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "6px",
};

const modalActions = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
};