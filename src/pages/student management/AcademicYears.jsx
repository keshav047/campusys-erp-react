import { useState } from "react";

export default function AcademicYears() {
  const [years, setYears] = useState([
    {
      id: 1,
      shortName: "2023-24",
      name: "Academic Year 2023-2024",
      startDate: "2023-04-01",
      endDate: "2024-03-31",
      status: "active",
    },
    {
      id: 2,
      shortName: "2022-23",
      name: "Academic Year 2022-2023",
      startDate: "2022-04-01",
      endDate: "2023-03-31",
      status: "completed",
    },
  ]);

  const getStatus = (start, end) => {
    const today = new Date();
    const s = new Date(start);
    const e = new Date(end);

    if (!start || !end) return "upcoming";
    if (today < s) return "upcoming";
    if (today > e) return "completed";
    return "active";
  };

  const addRow = () => {
    setYears([
      ...years,
      {
        id: Date.now(),
        shortName: "",
        name: "",
        startDate: "",
        endDate: "",
        status: "upcoming",
      },
    ]);
  };

  const removeRow = (id) => {
    setYears(years.filter((y) => y.id !== id));
  };

  const handleChange = (id, field, value) => {
    const updated = years.map((y) => {
      if (y.id === id) {
        const updatedRow = { ...y, [field]: value };
        updatedRow.status = getStatus(
          updatedRow.startDate,
          updatedRow.endDate
        );
        return updatedRow;
      }
      return y;
    });

    setYears(updated);
  };

  const saveAll = () => {
    console.log("Saved Data:", years);
    alert("Saved successfully ✅");
  };

  const statusColor = (status) => {
    if (status === "active") return "text-green-600";
    if (status === "upcoming") return "text-yellow-500";
    return "text-gray-500";
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          Academic Years
        </h1>

        <button
          onClick={saveAll}
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg w-full md:w-auto"
        >
          Save All Changes
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-4 md:p-6">

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-3 text-left">Short Name</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">End Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {years.map((y) => (
                <tr key={y.id} className="border-t">
                  <td className="p-2">
                    <input
                      value={y.shortName}
                      onChange={(e) =>
                        handleChange(y.id, "shortName", e.target.value)
                      }
                      className="border p-2 w-full rounded"
                    />
                  </td>

                  <td className="p-2">
                    <input
                      value={y.name}
                      onChange={(e) =>
                        handleChange(y.id, "name", e.target.value)
                      }
                      className="border p-2 w-full rounded"
                    />
                  </td>

                  <td className="p-2">
                    <input
                      type="date"
                      value={y.startDate}
                      onChange={(e) =>
                        handleChange(y.id, "startDate", e.target.value)
                      }
                      className="border p-2 rounded"
                    />
                  </td>

                  <td className="p-2">
                    <input
                      type="date"
                      value={y.endDate}
                      onChange={(e) =>
                        handleChange(y.id, "endDate", e.target.value)
                      }
                      className="border p-2 rounded"
                    />
                  </td>

                  <td className="p-2 text-center">
                    <span className={statusColor(y.status)}>
                      {y.status}
                    </span>
                  </td>

                  <td className="p-2 text-center">
                    <button
                      onClick={() => removeRow(y.id)}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white"
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {years.map((y) => (
            <div key={y.id} className="border rounded-lg p-4 shadow-sm">

              <input
                value={y.shortName}
                placeholder="Short Name"
                onChange={(e) =>
                  handleChange(y.id, "shortName", e.target.value)
                }
                className="border p-2 w-full mb-2 rounded"
              />

              <input
                value={y.name}
                placeholder="Name"
                onChange={(e) =>
                  handleChange(y.id, "name", e.target.value)
                }
                className="border p-2 w-full mb-2 rounded"
              />

              <input
                type="date"
                value={y.startDate}
                onChange={(e) =>
                  handleChange(y.id, "startDate", e.target.value)
                }
                className="border p-2 w-full mb-2 rounded"
              />

              <input
                type="date"
                value={y.endDate}
                onChange={(e) =>
                  handleChange(y.id, "endDate", e.target.value)
                }
                className="border p-2 w-full mb-2 rounded"
              />

              <div className="flex justify-between items-center mt-2">
                <span className={statusColor(y.status)}>
                  {y.status}
                </span>

                <button
                  onClick={() => removeRow(y.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Row */}
        <button
          onClick={addRow}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded w-full md:w-auto"
        >
          + Add Row
        </button>
      </div>
    </div>
  );
}