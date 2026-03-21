import React, { useState } from "react";
import "./groupParticipants.css";

export default function GroupParticipants() {
  const [search, setSearch] = useState("");

  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      admissionNo: "ADM2023001",
      classSection: "Class 10 - Section A",
      avatar: "RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      admissionNo: "ADM2023002",
      classSection: "Class 9 - Section B",
      avatar: "PP",
    },
    {
      id: 3,
      name: "Amit Kumar",
      admissionNo: "ADM2023003",
      classSection: "Class 11 - Section A",
      avatar: "AK",
    },
  ]);

  const filtered = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.admissionNo.toLowerCase().includes(search.toLowerCase()) ||
      p.classSection.toLowerCase().includes(search.toLowerCase())
  );

  const removeParticipant = (id) => {
    if (window.confirm("Remove this participant?")) {
      setParticipants(participants.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="page-wrapper">

      {/* HEADER */}
      <div className="top-bar">
        <div>
          <h1>Group Participants</h1>
          <p className="subtitle">Manage students inside this group</p>
        </div>

        <button className="btn-primary">+ Add Participant</button>
      </div>

      {/* GROUP CARD */}
      <div className="group-card">
        <div>
          <h2>Science Club</h2>
          <p>For students interested in science experiments and projects</p>
        </div>

        <div className="stats">
          <div className="stat-box">
            <h3>{participants.length}</h3>
            <span>Total Members</span>
          </div>

          <div className="stat-box">
            <h3>5</h3>
            <span>Sub Groups</span>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-container">
        <input
          placeholder="Search by name, admission no, class..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE CARD */}
      <div className="table-card">
        {filtered.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Class & Section</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div className="student">
                      <div className="avatar">{p.avatar}</div>
                      <div>
                        <div className="name">{p.name}</div>
                        <div className="sub">{p.admissionNo}</div>
                      </div>
                    </div>
                  </td>

                  <td className="class">{p.classSection}</td>

                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeParticipant(p.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty">
            <h3>No Participants Found</h3>
            <p>Add students to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}