import { useState } from "react";

export default function AddStudentGroup() {
  const [groupName, setGroupName] = useState("");
  const [allowSubGroup, setAllowSubGroup] = useState(false);
  const [allowMultipleParticipation, setAllowMultipleParticipation] = useState(false);
  const [selectedIncharges, setSelectedIncharges] = useState([]);

  const employees = [
    { id: 1, name: "Dr. Rajesh Kumar - Mathematics" },
    { id: 2, name: "Prof. Sunita Sharma - Science" },
    { id: 3, name: "Mr. Amit Patel - English" },
    { id: 4, name: "Dr. Priya Singh - Computer Science" },
    { id: 5, name: "Ms. Anjali Gupta - Social Studies" },
  ];

  const handleSelectChange = (e) => {
    const values = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setSelectedIncharges(values);
  };

  const handleSave = () => {
    if (!groupName.trim()) {
      alert("Please enter group name");
      return;
    }

    alert("Student group saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Add Student Group
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Create and manage student groups easily
        </p>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-5 sm:p-8">

        {/* Group Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Name *
          </label>
          <input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full border rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Sub Group */}
        <div className="mb-5 p-4 border rounded-lg bg-gray-50">
          <label className="flex items-start sm:items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={allowSubGroup}
              onChange={(e) => {
                setAllowSubGroup(e.target.checked);
                if (!e.target.checked) setAllowMultipleParticipation(false);
              }}
              className="mt-1 sm:mt-0 w-4 h-4 accent-blue-600"
            />
            <div>
              <span className="font-medium text-gray-800 block">
                Allow Sub-Groups
              </span>
              <span className="text-xs text-gray-500">
                Enable sub-groups inside this group
              </span>
            </div>
          </label>

          {allowSubGroup && (
            <div className="mt-4 ml-0 sm:ml-6 p-3 border rounded bg-white">
              <label className="flex items-start sm:items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowMultipleParticipation}
                  onChange={(e) =>
                    setAllowMultipleParticipation(e.target.checked)
                  }
                  className="mt-1 sm:mt-0 w-4 h-4 accent-green-600"
                />
                <div>
                  <span className="font-medium text-gray-800 block">
                    Allow Multiple Participation
                  </span>
                  <span className="text-xs text-gray-500">
                    Students can join multiple sub-groups
                  </span>
                </div>
              </label>
            </div>
          )}
        </div>

        {/* Incharge */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Incharge
          </label>

          <select
            multiple
            onChange={handleSelectChange}
            className="w-full border rounded-md p-3 text-sm h-32 sm:h-40 focus:ring-2 focus:ring-blue-500"
          >
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mt-2">
            <span className="text-xs text-gray-500">
              Hold Ctrl to select multiple
            </span>
            <span className="text-xs font-medium text-blue-600">
              {selectedIncharges.length} selected
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <button
            className="w-full sm:w-auto px-5 py-2 rounded-md border text-sm hover:bg-gray-100"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-6 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            Save Group
          </button>
        </div>
      </div>
    </div>
  );
}