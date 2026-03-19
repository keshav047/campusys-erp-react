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

  // handle input
  const handleChange = (e) => {
    setClassData({ ...classData, [e.target.id]: e.target.value });
  };

  // validation
  const validateStep1 = () => {
    if (!classData.name) return alert("Enter class name");
    if (!classData.sequence) return alert("Enter sequence");
    if (!classData.shortName) return alert("Enter short name");
    return true;
  };

  // next
  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  // add section
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

  // remove section
  const removeSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  // update section
  const updateSection = (id, field, value) => {
    setSections(
      sections.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  };

  // save
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
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">
        Add New Class
      </h1>

      {/* Steps */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-10">
          <div className={step === 1 ? "text-blue-700 font-bold" : ""}>
            1. Class Details
          </div>
          <div className={step === 2 ? "text-blue-700 font-bold" : ""}>
            2. Sections
          </div>
        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="bg-white p-6 rounded shadow">
          <div className="grid grid-cols-2 gap-4">
            <input
              id="name"
              placeholder="Class Name"
              className="border p-2 rounded"
              onChange={handleChange}
            />
            <input
              id="sequence"
              type="number"
              placeholder="Sequence"
              className="border p-2 rounded"
              onChange={handleChange}
            />

            <input
              id="shortName"
              placeholder="Short Name"
              className="border p-2 rounded"
              onChange={handleChange}
            />

            <select
              id="previousClass"
              className="border p-2 rounded"
              onChange={handleChange}
            >
              <option value="">Previous Class</option>
              <option>Class 1</option>
              <option>Class 2</option>
            </select>
          </div>

          <textarea
            id="description"
            placeholder="Description"
            className="border p-2 rounded mt-4 w-full"
            onChange={handleChange}
          />

          <div className="flex justify-end mt-6">
            <button
              onClick={handleNext}
              className="bg-blue-700 text-white px-4 py-2 rounded"
            >
              Save & Next →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="bg-white p-6 rounded shadow">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-50">
                <th className="p-2">Section</th>
                <th className="p-2">Capacity</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {sections.map((s) => (
                <tr key={s.id}>
                  <td className="p-2">
                    <input
                      value={s.name}
                      onChange={(e) =>
                        updateSection(s.id, "name", e.target.value)
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      value={s.capacity}
                      onChange={(e) =>
                        updateSection(s.id, "capacity", e.target.value)
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => removeSection(s.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={addSection}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            + Add Section
          </button>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(1)}
              className="border px-4 py-2 rounded"
            >
              ← Back
            </button>

            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}