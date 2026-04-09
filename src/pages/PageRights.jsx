import { useEffect, useState } from "react"
import { getModuleById } from "../api/moduleApi"

export default function PageRights() {

  const roles = ["Administrator","Teacher","Student","Parent","Staff"]

  const moduleId = "e96f8bfb-6022-40ce-869a-8e003354c43c"

  const [menus,setMenus] = useState([])
  const [search,setSearch] = useState("")
  const [rights,setRights] = useState({})

  // ================= LOAD MODULE =================
  useEffect(() => {

    getModuleById(moduleId).then(res => {

      const module = res.data

      const allMenus = []

      module.pages.forEach(page => {

        allMenus.push({
          id: page.id,
          name: page.displayName
        })

        if(page.subPages?.length){
          page.subPages.forEach(sub => {
            allMenus.push({
              id: sub.id,
              name: `↳ ${sub.displayName}`
            })
          })
        }

      })

      setMenus(allMenus)

    })

  }, [])

  // ================= HANDLE CHECK =================
  const handleCheck = (menuId, role) => {

    setRights(prev => ({
      ...prev,
      [menuId]: {
        ...(prev[menuId] || {}),
        [role]: !prev?.[menuId]?.[role]
      }
    }))

  }

  // ================= FILTER =================
  const filteredMenus = menus.filter(menu =>
    menu.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="p-6 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Page Rights Management
      </h1>

      <input
        type="text"
        placeholder="Search menu..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg w-64 mb-6"
      />

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="px-4 py-3 text-left">Menu</th>

              {roles.map(role => (
                <th key={role} className="px-4 py-3 text-center">
                  {role}
                </th>
              ))}

            </tr>
          </thead>

          <tbody className="divide-y">

            {filteredMenus.map(menu => (

              <tr key={menu.id}>

                <td className="px-4 py-3 font-medium">
                  {menu.name}
                </td>

                {roles.map(role => (

                  <td key={role} className="px-4 py-3 text-center">

                    <input
                      type="checkbox"
                      checked={rights?.[menu.id]?.[role] || false}
                      onChange={()=>handleCheck(menu.id,role)}
                    />

                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )
}