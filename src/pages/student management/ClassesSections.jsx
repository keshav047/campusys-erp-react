import { useState, useEffect } from "react";

export default function ClassesSections() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Class 1",
      sequence: 1,
      description: "First Grade",
      sections: ["A", "B", "C"],
    },
    {
      id: 2,
      name: "Class 2",
      sequence: 2,
      description: "Second Grade",
      sections: ["A", "B"],
    },
  ]);

  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState(null);

  const [form, setForm] = useState({
    name: "",
    sequence: "",
    description: "",
  });

  // open modal
  const openModal = (cls = null) => {
    setEditingClass(cls);
    setForm(
      cls || {
        name: "",
        sequence: "",
        description: "",
      }
    );
    setModalOpen(true);
  };

  // save class
  const saveClass = () => {
    if (!form.name || !form.sequence) {
      alert("Fill required fields");
      return;
    }

    if (editingClass) {
      setClasses(
        classes.map((c) =>
          c.id === editingClass.id ? { ...c, ...form } : c
        )
      );
    } else {
      setClasses([
        ...classes,
        {
          ...form,
          id: Date.now(),
          sections: [],
        },
      ]);
    }

    setModalOpen(false);
  };

  const filtered = classes.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          Classes & Sections
        </h1>

        <button
          onClick={() => openModal()}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full md:w-auto"
        >
          + Add Class
        </button>
      </div>

      {/* Search */}
      <input
        placeholder="Search class..."
        className="border p-2 rounded w-full md:w-1/3 mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table (Desktop) */}
      <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-50">
            <tr>
              <th className="p-3 text-left">Seq</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Sections</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.sequence}</td>

                <td className="p-3">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-sm text-gray-500">
                    {c.description}
                  </div>
                </td>

                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    {c.sections.map((s, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-4 py-4 flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                      ✎
                    </button>
                    
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) */}
      <div className="md:hidden space-y-4">
        {filtered.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg">{c.name}</h2>
            <p className="text-sm text-gray-500">{c.description}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {c.sections.map((s, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                >
                  {s}
                </span>
              ))}
            </div>

            <button
              onClick={() => openModal(c)}
              className="mt-3 bg-yellow-500 text-white px-3 py-1 rounded w-full"
            >
              Edit
            </button>
            
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-3">
          <div className="bg-white rounded-lg w-full max-w-md p-5">

            <h2 className="text-lg font-bold mb-4">
              {editingClass ? "Edit Class" : "Add Class"}
            </h2>

            <input
              placeholder="Class Name"
              className="border p-2 rounded w-full mb-3"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Sequence"
              className="border p-2 rounded w-full mb-3"
              value={form.sequence}
              onChange={(e) =>
                setForm({ ...form, sequence: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              className="border p-2 rounded w-full mb-3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <div className="flex flex-col md:flex-row gap-2 justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="border px-4 py-2 rounded w-full md:w-auto"
              >
                Cancel
              </button>

              <button
                onClick={saveClass}
                className="bg-blue-700 text-white px-4 py-2 rounded w-full md:w-auto"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}