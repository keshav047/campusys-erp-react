import { useState } from "react";

export default function AddTab() {
  const [step, setStep] = useState(1);
  const [tabName, setTabName] = useState("");
  const [tabIcon, setTabIcon] = useState("fas fa-user");
  const [description, setDescription] = useState("");
  const [showOn, setShowOn] = useState([]);
  const [subTabs, setSubTabs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleShowOn = (value) => {
    setShowOn((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    if (!tabName.trim()) return alert("Enter tab name");
    if (showOn.length === 0) return alert("Select at least one option");
    setStep(2);
  };

  const addSubTab = (subTab) => {
    setSubTabs((prev) => [...prev, subTab]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          Add New Tab
        </h1>

        {/* Step Indicator */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <div className={`flex items-center gap-2 ${step === 1 ? "text-blue-600" : "text-gray-500"}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step === 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}>1</div>
            Tab Details
          </div>
          <div className="w-10 h-[2px] bg-gray-300 hidden sm:block" />
          <div className={`flex items-center gap-2 ${step === 2 ? "text-blue-600" : "text-gray-500"}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step === 2 ? "bg-blue-600 text-white" : "bg-gray-300"}`}>2</div>
            Sub Tabs
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="bg-white p-4 md:p-6 rounded-xl shadow">

            <div className="mb-4">
              <label className="block font-semibold mb-1">Tab Name *</label>
              <input
                value={tabName}
                onChange={(e) => setTabName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Tab Icon</label>
              <select
                value={tabIcon}
                onChange={(e) => setTabIcon(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="fas fa-user">User</option>
                <option value="fas fa-info-circle">Info</option>
                <option value="fas fa-graduation-cap">Academic</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Show On *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {["student-profiles","transfer-certificate","admission-form","student-report","parent-portal","teacher-portal"].map((item) => (
                  <div
                    key={item}
                    onClick={() => toggleShowOn(item)}
                    className={`p-3 border rounded cursor-pointer ${showOn.includes(item) ? "bg-blue-100 border-blue-500" : "bg-gray-50"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button className="border px-4 py-2 rounded">Cancel</button>
              <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                Save & Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="bg-white p-4 md:p-6 rounded-xl shadow">

            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">Sub Tabs</h2>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                + Add
              </button>
            </div>

            {subTabs.length === 0 ? (
              <p className="text-gray-500">No sub tabs added</p>
            ) : (
              subTabs.map((tab, i) => (
                <div key={i} className="border p-3 rounded mb-2">
                  <div className="font-semibold">{tab.name}</div>
                  <div className="text-sm text-gray-500">{tab.desc}</div>
                </div>
              ))
            )}

            <div className="flex justify-between mt-4">
              <button onClick={() => setStep(1)} className="border px-4 py-2 rounded">
                Back
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Save & Close
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <Modal addSubTab={addSubTab} close={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
}

function Modal({ addSubTab, close }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="font-bold mb-3">Add Sub Tab</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-3"
        />

        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full border p-2 mb-3"
        />

        <div className="flex justify-end gap-3">
          <button onClick={close}>Cancel</button>
          <button
            onClick={() => {
              if (!name) return;
              addSubTab({ name, desc });
              close();
            }}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
