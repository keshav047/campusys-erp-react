import React, { useState } from "react";
import "./addRole.css";

function AddRole() {

const modulesList = [
"Student Management",
"Teacher Management",
"Attendance",
"Examination",
"Library",
"Transport"
];

const columnsList = [
"Student ID",
"Full Name",
"Class",
"Section",
"Phone Number"
];

const [roleName,setRoleName] = useState("");
const [mobileType,setMobileType] = useState("");
const [talkToExpert,setTalkToExpert] = useState(false);

const [modules,setModules] = useState([]);
const [columns,setColumns] = useState([]);

const toggleModule = (module)=>{
if(modules.includes(module)){
setModules(modules.filter(m=>m!==module))
}else{
setModules([...modules,module])
}
}

const toggleColumn = (column)=>{
if(columns.includes(column)){
setColumns(columns.filter(c=>c!==column))
}else{
setColumns([...columns,column])
}
}

const handleSubmit = ()=>{
const data={
roleName,
modules,
mobileType,
talkToExpert,
columns
}

console.log(data)
alert("Save & Next Clicked")
}

return (

<div className="role-container">

<h2 className="page-title">Add New Role</h2>

{/* Role Name */}
<div className="form-group">
<label>Role Name *</label>
<input
type="text"
placeholder="Enter role name"
value={roleName}
onChange={(e)=>setRoleName(e.target.value)}
/>
</div>

{/* Modules */}
<div className="form-group">
<label>Modules *</label>

<div className="multiselect">

{modulesList.map((m)=>(
<div
key={m}
className={`option ${modules.includes(m) ? "selected":""}`}
onClick={()=>toggleModule(m)}
>
{m}
</div>
))}

</div>

</div>

{/* Mobile App Type */}
<div className="form-group">
<label>Mobile App Type *</label>

<select
value={mobileType}
onChange={(e)=>setMobileType(e.target.value)}
>

<option value="">Select Mobile App Type</option>
<option value="student">Student</option>
<option value="teacher">Teacher</option>
<option value="parent">Parent</option>
<option value="admin">Admin</option>

</select>

</div>

{/* Talk To Expert */}
<div className="expert-card">
  
  <span className="expert-text">Talk to Expert</span>

  <label className="switch">
    <input
      type="checkbox"
      checked={talkToExpert}
      onChange={() => setTalkToExpert(!talkToExpert)}
    />
    <span className="slider"></span>
  </label>

</div>

{/* Show Columns */}
<div className="form-group">
  <label>Show Columns</label>

  <select
    onChange={(e) => toggleColumn(e.target.value)}
  >
    <option value="">Select Column</option>

    {columnsList.map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}

  </select>

</div>

{/* Buttons */}

<div className="buttons">

<button className="cancel">Cancel</button>

<button className="save" onClick={handleSubmit}>
Save & Next →
</button>

</div>

</div>

);

}

export default AddRole;