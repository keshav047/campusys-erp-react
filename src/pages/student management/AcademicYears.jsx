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

    if (today < s) return "upcoming";
    if (today > e) return "completed";
    return "active";
  };

  const addRow = () => {
    const id = Date.now();
    setYears([
      ...years,
      {
        id,
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

        if (field === "startDate" || field === "endDate") {
          updatedRow.status = getStatus(
            updatedRow.startDate,
            updatedRow.endDate
          );
        }

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
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">
          Academic Years
        </h1>

        <button
          onClick={saveAll}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Save All Changes
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-5">
        <table className="w-full border">
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
                    className="border p-2 w-full"
                  />
                </td>

                <td className="p-2">
                  <input
                    value={y.name}
                    onChange={(e) =>
                      handleChange(y.id, "name", e.target.value)
                    }
                    className="border p-2 w-full"
                  />
                </td>

                <td className="p-2">
                  <input
                    type="date"
                    value={y.startDate}
                    onChange={(e) =>
                      handleChange(y.id, "startDate", e.target.value)
                    }
                    className="border p-2"
                  />
                </td>

                <td className="p-2">
                  <input
                    type="date"
                    value={y.endDate}
                    onChange={(e) =>
                      handleChange(y.id, "endDate", e.target.value)
                    }
                    className="border p-2"
                  />
                </td>

                <td className="p-2 text-center">
                  <span className={statusColor(y.status)}>
                    {y.status}
                  </span>
                </td>

       <td className="px-4 py-4 flex gap-2">
                    
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white">
                      🗑
                    </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Row */}
        <button
          onClick={addRow}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Row
        </button>
      </div>
    </div>
  );
}