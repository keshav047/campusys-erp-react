import { useState, useEffect } from "react";
import ActionDropdown from "../../components/ActionDropdown";
import { getUsers } from "../../api/api"; // ✅ API import

export default function User() {

  const [employeesData, setEmployeesData] = useState([]);
  const [showPassword, setShowPassword] = useState(null);

  /* PAGINATION */
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  /* ========= API CALL ========= */
  useEffect(() => {
    getUsers(0, 100, "EMPLOYEE") // 🔥 important: userType EMPLOYEE
      .then((res) => {
        console.log("Employee API:", res.data);

        const users = res.data.content || res.data;

        const formattedData = users.map((item, i) => ({
          id: item.id || i + 1,
          name: `${item.firstName || ""} ${item.lastName || ""}`,
          empId: item.userName || "-",
          department: item.departmentName || "-",
          role: item.roleName || "-",
          password: "********",
          status: item.isActive ? "Active" : "Inactive",
          initials: `${item.firstName?.[0] || ""}${item.lastName?.[0] || ""}`.toUpperCase(),
        }));

        setEmployeesData(formattedData);
      })
      .catch((err) => {
        console.error("Employee API Error:", err);
      });
  }, []);

  const totalPages = Math.ceil(employeesData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentEmployees = employeesData.slice(
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
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[var(--primary-blue)]">
          Employee Users
        </h1>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col">

        <div className="overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-sm border-collapse">

            <thead className="bg-[var(--light-blue)] text-[var(--primary-blue)] sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left">Employee</th>
                <th className="px-4 py-3 text-left">Department</th>
                <th className="px-4 py-3 text-left">Password</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {currentEmployees.map((e) => (
                <tr key={e.id}>

                  {/* Employee */}
                  <td className="px-4 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-[var(--primary-blue)]">
                      {e.initials}
                    </div>

                    <div>
                      <p className="font-medium">{e.name}</p>
                      <p className="text-xs text-gray-500">{e.empId}</p>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="px-4 py-4">{e.department}</td>

                  {/* Password */}
                  <td className="px-4 py-4 flex items-center gap-2 font-mono">
                    {showPassword === e.id ? e.password : "********"}

                    <button
                      onClick={() =>
                        setShowPassword(showPassword === e.id ? null : e.id)
                      }
                      className="text-gray-400"
                    >
                      👁
                    </button>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        e.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>

                  {/* Role */}
                  <td className="px-4 py-4">{e.role}</td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <ActionDropdown
                      onChangePassword={() =>
                        alert(`Change password for ${e.name}`)
                      }
                      onDeactivate={() =>
                        alert(`Deactivate ${e.name}`)
                      }
                    />
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm">

          <p className="text-gray-500">
            Showing {startIndex + 1} to{" "}
            {startIndex + currentEmployees.length} of{" "}
            {employeesData.length} employees
          </p>

          <div className="flex gap-2 flex-wrap">

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