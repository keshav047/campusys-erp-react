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
    getUsers(0, 50, "FAMILY") // 👈 change only here
      .then((res) => {
        console.log("Family API:", res.data);

        const users = res.data.content || res.data;

        const formattedData = users.map((item, i) => ({
          id: item.id || i + 1,
          name: `${item.firstName || ""} ${item.lastName || ""}`,
          adm: item.userName || "-",
          cls: item.userType || "-", // FAMILY type
          password: "********",
          status: item.isActive ? "Active" : "Inactive",
          initials: `${item.firstName?.[0] || ""}${item.lastName?.[0] || ""}`.toUpperCase(),
        }));

        setStudentsData(formattedData);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  /* ========= PAGINATION ========= */
  const totalPages = Math.ceil(studentsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = studentsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col">
      <h1 className="text-2xl font-semibold text-blue-600 mb-6">
        Family Users
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col">
        <div className="overflow-auto flex-1">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-blue-100 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Password</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentStudents.map((s) => (
                <tr key={s.id} className="border-b">
                  <td className="px-4 py-4 flex gap-3 items-center">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-bold">
                      {s.initials}
                    </div>
                    <div>
                      <p>{s.name}</p>
                      <p className="text-xs text-gray-500">{s.adm}</p>
                    </div>
                  </td>

                  <td className="px-4 py-4">{s.cls}</td>

                  <td className="px-4 py-4 flex gap-2">
                    {showPassword === s.id ? "Not Available" : "********"}
                    <button onClick={() => setShowPassword(s.id)}>👁</button>
                  </td>

                  <td className="px-4 py-4">
                    {s.status === "Active" ? "🟢 Active" : "🔴 Inactive"}
                  </td>

                  <td className="px-4 py-4">
                    <ActionDropdown />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} className="px-3 py-1 bg-gray-200 rounded">
            Prev
          </button>
          <span>
            {currentPage} / {totalPages || 1}
          </span>
          <button onClick={handleNext} className="px-3 py-1 bg-gray-200 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}