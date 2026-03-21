import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="main-container">

      {/* DASHBOARD */}
      <div className="module-content">

        <div className="content-header">
          <h1 className="page-title">Student Information Dashboard</h1>

          <div className="page-actions">
            <button className="action-btn btn-primary">
              + Add New Student
            </button>
            <button className="action-btn btn-secondary">
              Export Report
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon dashboard">📊</div>
            <div className="stat-value">1,248</div>
            <div className="stat-label">Total Students</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon profiles">🪪</div>
            <div className="stat-value">1,120</div>
            <div className="stat-label">Active Profiles</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon management">👥</div>
            <div className="stat-value">85</div>
            <div className="stat-label">Pending Actions</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon certificates">🏆</div>
            <div className="stat-value">45</div>
            <div className="stat-label">Certificates Issued</div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">Recent Student Activity</h2>

            <div className="card-actions">
              <button className="card-action-btn">Today</button>
              <button className="card-action-btn">This Week</button>
              <button className="card-action-btn">This Month</button>
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Grade/Class</th>
                <th>Activity</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Emily Davis</td>
                <td>Grade 10-A</td>
                <td>Profile Updated</td>
                <td>Today, 09:15 AM</td>
                <td><span className="status-badge status-active">Completed</span></td>
              </tr>

              <tr>
                <td>James Wilson</td>
                <td>Grade 11-B</td>
                <td>Section Change Request</td>
                <td>Yesterday, 03:45 PM</td>
                <td><span className="status-badge status-pending">Pending</span></td>
              </tr>

              <tr>
                <td>Sophia Martinez</td>
                <td>Grade 9-C</td>
                <td>Transfer Certificate Issued</td>
                <td>2 days ago</td>
                <td><span className="status-badge status-active">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* STUDENT PROFILES */}
        <div className="content-header">
          <h1 className="page-title">Student Profiles</h1>

          <div className="page-actions">
            <button className="action-btn btn-primary">
              + Add Student
            </button>
            <button className="action-btn btn-secondary">
              Filter
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="student-cards">
          <div className="student-card">
            <div className="student-header">
              <div className="student-avatar">ED</div>
              <div>
                <h3>Emily Davis</h3>
                <p>Grade 10-A | Roll No: 25</p>
              </div>
            </div>

            <div className="student-details">
              <div>
                <small>Admission No</small>
                <p>ADM-2023-001</p>
              </div>

              <div>
                <small>Date of Birth</small>
                <p>15 Mar 2007</p>
              </div>

              <div>
                <small>Parent</small>
                <p>Robert Davis</p>
              </div>

              <div>
                <small>Status</small>
                <p className="status-active">Active</p>
              </div>
            </div>
          </div>

          <div className="student-card">
            <div className="student-header">
              <div className="student-avatar">JW</div>
              <div>
                <h3>James Wilson</h3>
                <p>Grade 11-B | Roll No: 12</p>
              </div>
            </div>

            <div className="student-details">
              <div>
                <small>Admission No</small>
                <p>ADM-2022-045</p>
              </div>

              <div>
                <small>Date of Birth</small>
                <p>22 Aug 2006</p>
              </div>

              <div>
                <small>Parent</small>
                <p>Sarah Wilson</p>
              </div>

              <div>
                <small>Status</small>
                <p className="status-active">Active</p>
              </div>
            </div>
          </div>

          <div className="student-card">
            <div className="student-header">
              <div className="student-avatar">SM</div>
              <div>
                <h3>Sophia Martinez</h3>
                <p>Grade 9-C | Roll No: 08</p>
              </div>
            </div>

            <div className="student-details">
              <div>
                <small>Admission No</small>
                <p>ADM-2023-112</p>
              </div>

              <div>
                <small>Date of Birth</small>
                <p>10 Nov 2008</p>
              </div>

              <div>
                <small>Parent</small>
                <p>Carlos Martinez</p>
              </div>

              <div>
                <small>Status</small>
                <p className="status-inactive">Inactive</p>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="content-card">
          <h2 className="card-title">All Student Profiles</h2>

          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Admission</th>
                <th>Parent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>STU-00125</td>
                <td>Emily Davis</td>
                <td>Grade 10-A</td>
                <td>15 Aug 2023</td>
                <td>Robert Davis</td>
                <td><span className="status-active">Active</span></td>
                 <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
              </tr>

              <tr>
                <td>STU-00126</td>
                <td>James Wilson</td>
                <td>Grade 11-B</td>
                <td>20 Jul 2022</td>
                <td>Sarah Wilson</td>
                <td><span className="status-active">Active</span></td>
                  <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
              </tr>

              <tr>
                <td>STU-00127</td>
                <td>Sophia Martinez</td>
                <td>Grade 9-C</td>
                <td>05 Jun 2023</td>
                <td>Carlos Martinez</td>
                <td><span className="status-inactive">Inactive</span></td>
                  <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-header">
          <h1 className="page-title">Section Change Requests</h1>

          <div className="page-actions">
            <button className="action-btn btn-primary">
               New Section Change
            </button>
            
          </div>
        </div>
<div className="content-card">
          <h2 className="card-title">Pending Section Change Requests</h2>

          <table className="data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Current Section</th>
                <th>Requested Section</th>
                <th>Request Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>James Wilson</td>
                <td>Grade 11-B</td>
                <td>Grade 11-A</td>
                <td>Yesterday, 03:45 PM</td>
                <td>Schedule Conflict</td>
                <td><span className="status-active">Pending</span></td>
                  <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
              </tr>

              <tr>
                <td>Michael Brown</td>
                <td>Grade 10-C</td>
                <td>Grade 10-B</td>
                <td>2 days ago</td>
                <td>Friend Group</td>
                <td><span className="status-active">Pending</span></td>
                  <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
              </tr>

            
            </tbody>
          </table>
 
      </div>
            <div className="content-header">
  <h1 className="page-title">Student Profiles</h1>

  <div className="page-actions">
    <button className="action-btn btn-primary">
      + Generate Certificate
    </button>
    <button className="action-btn btn-outline">
      🖨 Bulk Print
    </button>
  </div>
</div>
        <div className="content-card">
          <h2 className="card-title">Certificate Management</h2>

          <table className="data-table">
            <thead>
              <tr>
                <th>Certificate ID</th>
                <th>Student Name</th>
                <th>Certificate Type</th>
                <th>Issue Date</th>
                <th>Purpose</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>CERT-2024-001</td>
                <td>Sophia Martinez</td>
                <td>Transfer Certificate</td>
                <td>2 days ago</td>
                <td>School Transfer</td>
                <td><span className="status-active">Issued</span></td>
               <td className="px-4 py-4 flex gap-2">
  {/* Print Button */}
  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
    🖨️
  </button>

  {/* Download Button */}
  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
    ⬇️
  </button>
</td>
              </tr>

             
            </tbody>
          </table>
        </div>
    </div>
    </div>
  );
}