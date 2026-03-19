import { useState } from "react";

export default function ProfilePageSetup() {
  const [fields, setFields] = useState([
    { name: "Student Name", rename: "", sequence: "", tab: "", admin: true, teacher: true },
    { name: "Mobile Number", rename: "", sequence: "", tab: "", admin: true, teacher: false },
    { name: "Father Name", rename: "", sequence: "", tab: "", admin: true, teacher: true },
    { name: "Mother Name", rename: "", sequence: "", tab: "", admin: false, teacher: true },
  ]);

  const handleChange = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  const handleCheckbox = (index, key) => {
    const updated = [...fields];
    updated[index][key] = !updated[index][key];
    setFields(updated);
  };

  const handleSave = () => {
    console.log("Saved Data:", fields);
    alert("✅ All changes saved successfully!");
  };

  return (
    <div className="container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .container {
          padding: 25px;
          background: #f4f7fb;
          min-height: 100vh;
        }

        .card {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        h2 {
          color: #1a4b8c;
        }

        .btn {
          background: #1a4b8c;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn:hover {
          background: #2c6cb0;
          transform: translateY(-2px);
        }

        .table-container {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        th, td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          text-align: left;
        }

        th {
          background: #e8f2fc;
          color: #1a4b8c;
        }

        tr:hover {
          background: #f9fbfd;
        }

        .field-name {
          font-weight: bold;
          color: #1a4b8c;
        }

        .input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
          transition: 0.2s;
        }

        .input:focus {
          border-color: #1a4b8c;
          outline: none;
          box-shadow: 0 0 0 2px rgba(26,75,140,0.1);
        }

        .checkbox {
          text-align: center;
        }

        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }

          table {
            min-width: 600px;
          }
        }
      `}</style>

      
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          Profile Page Setup
        </h1>
          <button className="btn" onClick={handleSave}>
            💾 Save All Changes
          </button>
        </div>
<div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Field Rename</th>
                <th>Sequence</th>
                <th>Tabs</th>
                <th>Admin</th>
                <th>Teacher</th>
              </tr>
            </thead>

            <tbody>
              {fields.map((field, index) => (
                <tr key={index}>
                  <td className="field-name">{field.name}</td>

                  <td>
                    <input
                      className="input"
                      value={field.rename}
                      onChange={(e) =>
                        handleChange(index, "rename", e.target.value)
                      }
                      placeholder="Rename field"
                    />
                  </td>

                  <td>
                    <input
                      className="input"
                      value={field.sequence}
                      onChange={(e) =>
                        handleChange(index, "sequence", e.target.value)
                      }
                      placeholder="Sequence"
                    />
                  </td>

                  <td>
                    <select
                      className="input"
                      value={field.tab}
                      onChange={(e) =>
                        handleChange(index, "tab", e.target.value)
                      }
                    >
                      <option value="">Select Tab</option>
                      <option value="basic">Basic Information</option>
                      <option value="additional">Additional Information</option>
                    </select>
                  </td>

                  <td className="checkbox">
                    <input
                      type="checkbox"
                      checked={field.admin}
                      onChange={() => handleCheckbox(index, "admin")}
                    />
                  </td>

                  <td className="checkbox">
                    <input
                      type="checkbox"
                      checked={field.teacher}
                      onChange={() => handleCheckbox(index, "teacher")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}