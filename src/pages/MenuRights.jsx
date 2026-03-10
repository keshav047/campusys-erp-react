import { useState } from "react"

export default function MenuRights() {

const roles = ["Administrator","Teacher","Student","Parent","Staff"]

const moduleMenus = {

student:[
{ id:"profile", name:"Student Profile" },
{ id:"attendance", name:"Attendance" },
{ id:"grades", name:"Grades" },
{ id:"fees", name:"Fee Details" },
{ id:"timetable", name:"Timetable" }
],

teacher:[
{ id:"profile", name:"Teacher Profile" },
{ id:"attendance", name:"Attendance" },
{ id:"grades", name:"Grades" },
{ id:"timetable", name:"Timetable" },
{ id:"students", name:"Student List" }
],

attendance:[
{ id:"att_daily", name:"Daily Attendance" },
{ id:"att_reports", name:"Attendance Reports" },
{ id:"att_summary", name:"Attendance Summary" }
],

academics:[
{ id:"aca_courses", name:"Courses" },
{ id:"aca_subjects", name:"Subjects" },
{ id:"aca_syllabus", name:"Syllabus" },
{ id:"aca_exams", name:"Examinations" }
],

finance:[
{ id:"fin_fees", name:"Fee Management" },
{ id:"fin_invoices", name:"Invoices" },
{ id:"fin_reports", name:"Financial Reports" }
]

}

const [module,setModule] = useState("")
const [search,setSearch] = useState("")
const [rights,setRights] = useState({})

const handleCheck = (menu,role)=>{

setRights(prev => ({
...prev,
[menu]:{
...(prev[menu] || {}),
[role]:!prev?.[menu]?.[role]
}
}))

}

const menus = module ? moduleMenus[module] : []

const filteredMenus = menus.filter(menu =>
menu.name.toLowerCase().includes(search.toLowerCase())
)

return (

<div className="p-6 bg-gray-50 min-h-screen">

<h1 className="text-2xl font-bold text-blue-700 mb-6">
Menu Rights Management
</h1>

{/* Controls */}

<div className="flex gap-4 mb-6">

<select
className="border px-4 py-2 rounded-lg"
value={module}
onChange={(e)=>setModule(e.target.value)}
>

<option value="">Select Module</option>
<option value="student">Student Management</option>
<option value="teacher">Teacher Management</option>
<option value="attendance">Attendance</option>
<option value="academics">Academics</option>
<option value="finance">Finance</option>

</select>

<input
type="text"
placeholder="Search menu..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border px-4 py-2 rounded-lg w-64"
/>

</div>

{/* Table */}

{module && (

<div className="bg-white rounded-xl shadow overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-blue-100 text-blue-700">

<tr>

<th className="px-4 py-3 text-left">
Menu
</th>

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

)}

<div className="mt-6 flex gap-4">

<button className="bg-gray-500 text-white px-6 py-2 rounded-lg">
Cancel
</button>

<button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
Save & Next
</button>

</div>

</div>

)

}