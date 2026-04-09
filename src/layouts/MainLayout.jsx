import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
import { getAccessiblePages } from "../api/groupAccessApi"

export default function MainLayout() {

  const [sidebar, setSidebar] = useState(true)

  const [pages, setPages] = useState([])   // ⭐ यह missing था

  useEffect(() => {

    const loadSidebar = async () => {

      try {

        const groupId = localStorage.getItem("groupId")
        const moduleId = localStorage.getItem("activeModuleId")

        console.log("GROUP ID:", groupId);
        console.log("MODULE ID:", moduleId);

        if (!groupId || !moduleId) return

        const res = await getAccessiblePages(groupId, moduleId)

        console.log("SIDEBAR DATA", res.data)

        setPages(res.data)

      } catch (err) {

        console.log("Sidebar API error", err)

      }

    }

    loadSidebar()

  }, [])

  return (

    <div className="min-h-screen flex flex-col">

      <Navbar setSidebar={setSidebar} />

      <div className="flex flex-1">

        <Sidebar isOpen={sidebar} pages={pages} />

        <main
          className={`flex-1 p-6 bg-slate-50 transition-all duration-300 ${
            sidebar ? "ml-[280px]" : "ml-0"
          }`}
        >

          <Outlet />

        </main>

      </div>

    </div>

  )

}