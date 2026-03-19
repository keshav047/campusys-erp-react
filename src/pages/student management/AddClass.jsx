import { useState } from "react";

export default function AddClass() {
  const [step, setStep] = useState(1);

  const [classData, setClassData] = useState({
    name: "",
    sequence: "",
    shortName: "",
    previousClass: "",
    description: "",
  });

  const [sections, setSections] = useState([
    { id: 1, name: "Section A", capacity: 40 },
    { id: 2, name: "Section B", capacity: 35 },
  ]);

  const handleChange = (e) => {
    setClassData({ ...classData, [e.target.id]: e.target.value });
  };

  const validateStep1 = () => {
    if (!classData.name) return alert("Enter class name");
    if (!classData.sequence) return alert("Enter sequence");
    if (!classData.shortName) return alert("Enter short name");
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Date.now(),
        name: `Section ${String.fromCharCode(65 + sections.length)}`,
        capacity: 40,
      },
    ]);
  };

  const removeSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const updateSection = (id, field, value) => {
    setSections(
      sections.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  };

  const handleSave = () => {
    if (sections.length === 0) {
      alert("Add at least one section");
      return;
    }

    console.log("Class:", classData);
    console.log("Sections:", sections);

    alert("Saved Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">
        Add New Class
      </h1>

      {/* Steps */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-4 md:gap-10 text-sm md:text-base">
          <div className={step === 1 ? "text-blue-700 font-bold" : "text-gray-400"}>
            1. Class Details
          </div>
          <div className={step === 2 ? "text-blue-700 font-bold" : "text-gray-400"}>
            2. Sections
          </div>
        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow max-w-5xl mx-auto">

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              id="name"
              placeholder="Class Name"
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />

            <input
              id="sequence"
              type="number"
              placeholder="Sequence"
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />

            <input
              id="shortName"
              placeholder="Short Name"
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />

            <select
              id="previousClass"
              className="border p-2 rounded w-full"
              onChange={handleChange}
            >
              <option value="">Previous Class</option>
              <option>Class 1</option>
              <option>Class 2</option>
            </select>
          </div>

          {/* Description */}
          <textarea
            id="description"
            placeholder="Description"
            className="border p-2 rounded mt-4 w-full"
            onChange={handleChange}
          />

          {/* Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleNext}
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded"
            >
              Save & Next →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow max-w-5xl mx-auto">

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-3 text-left">Section</th>
                  <th className="p-3 text-left">Capacity</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {sections.map((s) => (
                  <tr key={s.id} className="border-t">
                    <td className="p-2">
                      <input
                        value={s.name}
                        onChange={(e) =>
                          updateSection(s.id, "name", e.target.value)
                        }
                        className="border p-2 rounded w-full"
                      />
                    </td>

                    <td className="p-2">
                      <input
                        type="number"
                        value={s.capacity}
                        onChange={(e) =>
                          updateSection(s.id, "capacity", e.target.value)
                        }
                        className="border p-2 rounded w-full"
                      />
                    </td>

                    <td className="p-2">
                      <button
                        onClick={() => removeSection(s.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {sections.map((s) => (
              <div key={s.id} className="border p-4 rounded-lg shadow-sm">

                <input
                  value={s.name}
                  onChange={(e) =>
                    updateSection(s.id, "name", e.target.value)
                  }
                  className="border p-2 rounded w-full mb-2"
                  placeholder="Section Name"
                />

                <input
                  type="number"
                  value={s.capacity}
                  onChange={(e) =>
                    updateSection(s.id, "capacity", e.target.value)
                  }
                  className="border p-2 rounded w-full mb-2"
                  placeholder="Capacity"
                />

                <button
                  onClick={() => removeSection(s.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded w-full"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Add Button */}
          <button
            onClick={addSection}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded w-full md:w-auto"
          >
            + Add Section
          </button>

          {/* Bottom Buttons */}
          <div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
            <button
              onClick={() => setStep(1)}
              className="border px-5 py-2 rounded w-full md:w-auto"
            >
              ← Back
            </button>

            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded w-full md:w-auto"
            >
              Save & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}