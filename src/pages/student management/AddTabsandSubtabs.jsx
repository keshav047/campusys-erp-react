import { useState } from "react";

export default function AddTab() {
  const [step, setStep] = useState(1);
  const [tabName, setTabName] = useState("");
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
      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-bold mb-4">Add New Tab</h1>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="bg-white p-6 rounded shadow">

            <div className="mb-4">
              <label className="font-semibold">Tab Name *</label>
              <input
                value={tabName}
                onChange={(e) => setTabName(e.target.value)}
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="font-semibold">Show On *</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["student-profile", "admission", "report", "teacher"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => toggleShowOn(item)}
                      className={`px-3 py-1 rounded border ${
                        showOn.includes(item)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="bg-white p-6 rounded shadow">

            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">Sub Tabs</h2>

              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                + Add Sub Tab
              </button>
            </div>

            {subTabs.length === 0 ? (
              <p className="text-gray-500">No sub tabs added</p>
            ) : (
              subTabs.map((tab, i) => (
                <div key={i} className="border p-3 rounded mb-2">
                  <div className="font-semibold">
                    {tab.name} ({tab.parent})
                  </div>
                </div>
              ))
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setStep(1)}
                className="border px-4 py-2 rounded"
              >
                Back
              </button>

              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Save & Close
              </button>
            </div>
          </div>
        )}

        {/* MODAL */}
        {showModal && (
          <Modal
            close={() => setShowModal(false)}
            tabs={showOn}
            addSubTab={addSubTab}
          />
        )}
      </div>
    </div>
  );
}

/* ---------------- MODAL ---------------- */

function Modal({ close, tabs, addSubTab }) {
  const [selectedTab, setSelectedTab] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h2 className="font-bold text-lg mb-4">Add Sub Tab</h2>

        {/* DROPDOWN */}
        <div className="mb-4">
          <label className="font-semibold">Select Tab *</label>
          <select
            value={selectedTab}
            onChange={(e) => setSelectedTab(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">-- Select Tab --</option>
            {tabs.map((tab, i) => (
              <option key={i} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>

        {/* INPUT */}
        <div className="mb-4">
          <label className="font-semibold">Sub Tab Name *</label>
          <input
            type="text"
            placeholder="Enter sub tab name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-2">
          <button
            onClick={close}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            disabled={!selectedTab || !name}
            onClick={() => {
              addSubTab({
                name,
                parent: selectedTab,
              });
              close();
            }}
            className={`px-4 py-2 rounded ${
              selectedTab && name
                ? "bg-green-600 text-white"
                : "bg-gray-300"
            }`}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}