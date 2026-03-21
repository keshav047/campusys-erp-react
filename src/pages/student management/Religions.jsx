import React, { useState } from "react";

const ReligionsPage = () => {
  const [religions, setReligions] = useState([
    { id: 1, sequence: 1, name: "Hindu" },
    { id: 2, sequence: 2, name: "Muslim" },
    { id: 3, sequence: 3, name: "Christian" },
    { id: 4, sequence: 4, name: "Sikh" },
    { id: 5, sequence: 5, name: "Buddhist" },
    { id: 6, sequence: 6, name: "Jain" },
    { id: 7, sequence: 7, name: "Other" }
  ]);

  const addReligion = () => {
    setReligions([
      ...religions,
      {
        id: Date.now(),
        sequence: religions.length + 1,
        name: "New Religion"
      }
    ]);
  };

  const removeReligion = (id) => {
    setReligions(religions.filter(r => r.id !== id));
  };

  const handleChange = (id, field, value) => {
    setReligions(
      religions.map(r =>
        r.id === id ? { ...r, [field]: value } : r
      )
    );
  };

  const saveData = () => {
    alert("Saved Successfully ✅");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold text-gray-800">
          Religions
        </h1>

        <button
          onClick={saveData}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
        >
          💾 Save All Changes
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="p-3">Sequence</th>
              <th className="p-3">Religion Name</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {religions.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3 w-32">
                  <input
                    type="number"
                    value={r.sequence}
                    onChange={(e) =>
                      handleChange(r.id, "sequence", e.target.value)
                    }
                    className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </td>

                <td className="p-3">
                  <input
                    type="text"
                    value={r.name}
                    onChange={(e) =>
                      handleChange(r.id, "name", e.target.value)
                    }
                    className="w-full border rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </td>

                <td className="p-3 flex justify-center gap-2">
                  {/* Print */}
                 

                  {/* Delete */}
                  <button
                    onClick={() => removeReligion(r.id)}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-700 hover:text-white transition"
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Row */}
        <button
          onClick={addReligion}
           className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
        >
          ➕ Click here to add new row
        </button>

        {/* Bottom Save */}
        <div className="flex justify-end mt-5">
          <button
            onClick={saveData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
          >
            💾 Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReligionsPage;