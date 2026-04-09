import { useState, useEffect } from "react";
import {
  getModules,
  getMenusByModule,
  saveMenuRights,
} from "../api/api";

export default function MenuRights() {
  const roles = ["Administrator", "Teacher", "Student", "Parent", "Staff"];

  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState("");
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState("");
  const [rights, setRights] = useState({});

  /* ================= MODULE FETCH ================= */
  useEffect(() => {
    getModules()
      .then((res) => {
        console.log("MODULE API:", res.data);

        setModules(res.data || []);
      })
      .catch((err) => {
        console.error("MODULE ERROR:", err);

        // 🔥 fallback if backend fails
        setModules([
          { id: "student", name: "Student Management" },
          { id: "teacher", name: "Teacher Management" },
          { id: "attendance", name: "Attendance" },
        ]);
      });
  }, []);

  /* ================= MENU FETCH ================= */
  useEffect(() => {
    if (!selectedModule) return;

    getMenusByModule(selectedModule)
      .then((res) => {
        console.log("MENU API:", res.data);

        setMenus(res.data || []);
      })
      .catch((err) => {
        console.error("MENU ERROR:", err);

        // 🔥 fallback menus
        setMenus([
          { id: "profile", name: "Profile" },
          { id: "attendance", name: "Attendance" },
          { id: "reports", name: "Reports" },
        ]);
      });
  }, [selectedModule]);

  /* ================= CHECKBOX ================= */
  const handleCheck = (menuId, role) => {
    setRights((prev) => ({
      ...prev,
      [menuId]: {
        ...(prev[menuId] || {}),
        [role]: !prev?.[menuId]?.[role],
      },
    }));
  };

  /* ================= FILTER ================= */
  const filteredMenus = menus.filter((menu) =>
    menu.name?.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= SAVE ================= */
  const handleSave = () => {
    const payload = {
      moduleId: selectedModule,
      rights,
    };

    console.log("SAVE DATA:", payload);

    saveMenuRights(payload)
      .then(() => {
        alert("Menu Rights Saved ✅");
      })
      .catch((err) => {
        console.error(err);
        alert("Save Failed ❌");
      });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Menu Rights Management
      </h1>

      {/* ================= CONTROLS ================= */}
      <div className="flex gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded-lg"
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value)}
        >
          <option value="">Select Module</option>

          {modules.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg w-64"
        />
      </div>

      {/* ================= TABLE ================= */}
      {selectedModule && (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-100 text-blue-700">
              <tr>
                <th className="px-4 py-3 text-left">Menu</th>

                {roles.map((role) => (
                  <th key={role} className="px-4 py-3 text-center">
                    {role}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredMenus.map((menu) => (
                <tr key={menu.id}>
                  <td className="px-4 py-3 font-medium">
                    {menu.name}
                  </td>

                  {roles.map((role) => (
                    <td key={role} className="px-4 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={rights?.[menu.id]?.[role] || false}
                        onChange={() =>
                          handleCheck(menu.id, role)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================= BUTTONS ================= */}
      <div className="mt-6 flex gap-4">
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg">
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}