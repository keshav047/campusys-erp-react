import { useState, useEffect } from "react";
import ActionDropdown from "../../components/ActionDropdown";
import { getUsers } from "../../api/api";

export default function User() {
  const [studentsData, setStudentsData] = useState([]);
  const [showPassword, setShowPassword] = useState(null);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  /* ========= API CALL ========= */
  useEffect(() => {
    getUsers(0, 50, "STUDENT")
      .then((res) => {
        console.log("Student API:", res.data);

        const users = res.data.content || res.data;

        const formattedData = users.map((item, i) => ({
          id: item.id || i + 1,
          name: `${item.firstName || ""} ${item.lastName || ""}`,
          adm: item.userName || "-",
          cls: item.className || "-",
          password: "********",
          status: item.isActive ? "Active" : "Inactive",
          initials: `${item.firstName?.[0] || ""}${item.lastName?.[0] || ""}`.toUpperCase(),
        }));

        setStudentsData(formattedData);
      })
      .catch((err) => console.error(err));
  }, []);

  /* ========= PAGINATION ========= */
  const totalPages = Math.ceil(studentsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = studentsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[var(--primary-blue)]">
          Student Users
        </h1>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col">
        {/* Table Scrollable Wrapper */}
        <div className="overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-[var(--light-blue)] text-[var(--primary-blue)] sticky top-0 z-10">
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
                      onChangePassword={() => alert(`Change password for ${s.name}`)}
                      onDeactivate={() => alert(`Deactivate ${s.name}`)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <p className="text-gray-500">
            Showing {startIndex + 1} to {startIndex + currentStudents.length} of {studentsData.length} students
          </p>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
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
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
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