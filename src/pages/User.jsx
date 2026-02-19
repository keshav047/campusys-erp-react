import { useState } from "react";
import ActionDropdown from "../components/ActionDropdown";

export default function User() {
  const studentsData = [
    {
      id: 1,
      name: "Rahul Sharma",
      adm: "ADM2023001",
      cls: "10-A",
      password: "rahul@123",
      status: "Active",
      initials: "RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      adm: "ADM2023002",
      cls: "9-B",
      password: "priya@123",
      status: "Active",
      initials: "PP",
    },
    {
      id: 3,
      name: "Amit Kumar",
      adm: "ADM2023003",
      cls: "11-C",
      password: "amit@123",
      status: "Inactive",
      initials: "AK",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      adm: "ADM2023004",
      cls: "8-A",
      password: "sneha@123",
      status: "Active",
      initials: "SG",
    },
    {
      id: 5,
      name: "Rohit Verma",
      adm: "ADM2023005",
      cls: "12-A",
      password: "rohit@123",
      status: "Active",
      initials: "RV",
    },
    {
      id: 6,
      name: "Neha Singh",
      adm: "ADM2023006",
      cls: "10-B",
      password: "neha@123",
      status: "Inactive",
      initials: "NS",
    },
  ];

  /* ===========================
     PAGINATION STATES
  =========================== */
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [showPassword, setShowPassword] = useState(null);

  const totalPages = Math.ceil(studentsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = studentsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[var(--primary-blue)]">
          Student Users
        </h1>
        <button className="bg-[var(--light-blue)] text-[var(--primary-blue)] px-4 py-2 rounded-lg font-medium">
          + Add Student
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        {/* Table */}
        <table className="w-full text-sm">
          <thead className="bg-[var(--light-blue)] text-[var(--primary-blue)]">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Password</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {currentStudents.map((s) => (
              <tr key={s.id}>
                <td className="px-4 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-[var(--primary-blue)]">
                    {s.initials}
                  </div>
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-xs text-gray-500">{s.adm}</p>
                  </div>
                </td>

                <td className="px-4 py-4">{s.cls}</td>

                <td className="px-4 py-4 flex items-center gap-2 font-mono">
                  {showPassword === s.id ? s.password : "********"}
                  <button
                    onClick={() =>
                      setShowPassword(showPassword === s.id ? null : s.id)
                    }
                    className="text-gray-400"
                  >
                    👁
                  </button>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      s.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>

                <td className="px-4 py-4">
                    <ActionDropdown
                        onChangePassword={() =>
                        alert(`Change password for ${s.name}`)
                        }
                        onDeactivate={() =>
                        alert(`Deactivate ${s.name}`)
                        }
                    />
                    </td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-6 text-sm">
          <p className="text-gray-500">
            Showing{" "}
            <span className="font-medium">
              {startIndex + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(startIndex + itemsPerPage, studentsData.length)}
            </span>{" "}
            of <span className="font-medium">{studentsData.length}</span>
          </p>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-[var(--primary-blue)] text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
