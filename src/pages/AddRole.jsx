import React, { useState, useEffect } from "react";
import "./addRole.css";
import { getModuleById, createRole } from "../api/api";

function AddRole() {

  // 👉 JSON se moduleId (tumne diya tha)
  const moduleId = "7da6a560-db46-4a2c-a755-717fc70107dd";

  const [modulesList, setModulesList] = useState([]);
  const [columnsList] = useState([
    "Student ID",
    "Full Name",
    "Class",
    "Section",
    "Phone Number"
  ]);

  const [roleName, setRoleName] = useState("");
  const [mobileType, setMobileType] = useState("");
  const [talkToExpert, setTalkToExpert] = useState(false);

  const [modules, setModules] = useState([]);
  const [columns, setColumns] = useState([]);

  // ✅ MODULE API CALL
  useEffect(() => {
    getModuleById(moduleId)
      .then((res) => {
        console.log("Module API:", res.data);

        // backend structure ke hisab se adjust karo
        if (res.data) {
          setModulesList([res.data.moduleName || res.data.name]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // toggle module
  const toggleModule = (module) => {
    if (modules.includes(module)) {
      setModules(modules.filter((m) => m !== module));
    } else {
      setModules([...modules, module]);
    }
  };

  // toggle column
  const toggleColumn = (column) => {
    if (!column) return;

    if (columns.includes(column)) {
      setColumns(columns.filter((c) => c !== column));
    } else {
      setColumns([...columns, column]);
    }
  };

  // ✅ SUBMIT API
  const handleSubmit = () => {
    const data = {
      roleName,
      modules,
      mobileType,
      talkToExpert,
      columns
    };

    console.log("Sending:", data);

    createRole(data)
      .then(() => {
        alert("Role Created Successfully ✅");
      })
      .catch((err) => {
        console.error(err);
        alert("Error creating role ❌");
      });
  };

  return (
    <div className="role-container">

      <h2 className="page-title">Add New Role</h2>

      {/* Role Name */}
      <div className="form-group">
        <label>Role Name *</label>
        <input
          type="text"
          placeholder="Enter role name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
      </div>

      {/* Modules */}
      <div className="form-group">
        <label>Modules *</label>

        <div className="multiselect">
          {modulesList.map((m) => (
            <div
              key={m}
              className={`option ${modules.includes(m) ? "selected" : ""}`}
              onClick={() => toggleModule(m)}
            >
              {m}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Type */}
      <div className="form-group">
        <label>Mobile App Type *</label>

        <select
          value={mobileType}
          onChange={(e) => setMobileType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="STUDENT">STUDENT</option>
          <option value="TEACHER">Teacher</option>
          <option value="PARENT">Parent</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      {/* Toggle */}
      <div className="expert-card">
        <span className="expert-text">Talk to Expert</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={talkToExpert}
            onChange={() => setTalkToExpert(!talkToExpert)}
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* Columns */}
      <div className="form-group">
        <label>Show Columns</label>

        <select onChange={(e) => toggleColumn(e.target.value)}>
          <option value="">Select Column</option>

          {columnsList.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="cancel">Cancel</button>

        <button className="save" onClick={handleSubmit}>
          Save & Next →
        </button>
      </div>
    </div>
  );
}

export default AddRole;