import React, { useState } from "react";
import "./TeacherPosting.css";

const TeacherPosting = () => {

const base = "teacher-posting";

const [editId,setEditId] = useState(null);
const [openMenu,setOpenMenu] = useState(null);

const [form,setForm] = useState({
name:"",
role:"",
subject:"",
experience:"",
bio:"",
preview:""
});

const [teachers,setTeachers] = useState([
{
id:1,
name:"Angel Di Maria",
role:"Assistant Teacher",
subject:"Maths",
experience:5,
preview:"https://randomuser.me/api/portraits/women/44.jpg"
},
{
id:2,
name:"Albert Cole",
role:"Teacher",
subject:"English",
experience:3,
preview:"https://randomuser.me/api/portraits/men/32.jpg"
}
]);

const handleChange=(e)=>{
const {name,value}=e.target;
setForm({...form,[name]:value});
};

const handleImage=(e)=>{
const file=e.target.files[0];
if(file){
setForm({...form,preview:URL.createObjectURL(file)});
}
};

const saveTeacher=()=>{

if(!form.name || !form.role) return;

if(editId){

setTeachers(
teachers.map(t =>
t.id === editId ? {...form,id:editId} : t
)
);

setEditId(null);

}else{

setTeachers([
...teachers,
{
//id:Date.now(),//
...form
}
]);

}

clearForm();
};

const clearForm=()=>{
setForm({
name:"",
role:"",
subject:"",
experience:"",
bio:"",
preview:""
});
};

const editTeacher=(teacher)=>{
setForm(teacher);
setEditId(teacher.id);
};

const deleteTeacher=(id)=>{
setTeachers(teachers.filter(t=>t.id!==id));
};

return(

<div className={base}>

<div className={`${base}__grid`}>

{/* FORM */}

<div className={`${base}__card`}>

<h2>Teacher Posting Form</h2>

<div className="form-group">
<input type="text" placeholder="Teacher Name" name="name" value={form.name} onChange={handleChange}/>
</div>

<div className="form-group">
<select name="role" value={form.role} onChange={handleChange}>
<option value="">Teacher Role</option>
<option>Teacher</option>
<option>Assistant Teacher</option>
<option>Professor</option>
</select>
</div>

<div className="form-group">
<input type="file" onChange={handleImage}/>
</div>

<div className="form-group">
<textarea placeholder="Short Bio" name="bio" value={form.bio} onChange={handleChange}/>
</div>

<div className="form-group">
<input type="number" placeholder="Experience" name="experience" value={form.experience} onChange={handleChange}/>
</div>

<div className="form-group">
<input type="text" placeholder="Subject" name="subject" value={form.subject} onChange={handleChange}/>
</div>

<div className="buttons">
<button className="save" onClick={saveTeacher}>{editId ? "Update" : "Save"}</button>
<button className="clear" onClick={clearForm}>Clear</button>
</div>

</div>


{/* PREVIEW */}

<div className={`${base}__card ${base}__preview`}>

<h2>Live Preview</h2>

<div className="preview-card">

<img src={form.preview || "https://via.placeholder.com/200x160"} alt=""/>

<div className="preview-info">
<h4>{form.name || "Teacher Name"}</h4>
<p>{form.role || "Teacher Role"}</p>
</div>

</div>

</div>

</div>


{/* TABLE */}

<div className={`${base}__card`}>

<h2>Teacher Posting List</h2>

<div className="table-wrap">

<table className="teacher-table">

<thead>
<tr>
<th>Photo</th>
<th>Name</th>
<th>Role</th>
<th>Subject</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{teachers.map((t)=>(
<tr key={t.id}>

<td className="photo">
<img src={t.preview} alt=""/>
</td>

<td>{t.name}</td>
<td>{t.role}</td>
<td>{t.subject}</td>

<td className="action-cell">

<div className="action-dropdown">

<button
className="action-btn"
onClick={()=>setOpenMenu(openMenu===t.id ? null : t.id)}
>
⋮
</button>

{openMenu===t.id && (

<div className="dropdown-menu">

<button onClick={()=>editTeacher(t)}>Edit</button>

<button className="delete" onClick={()=>deleteTeacher(t.id)}>
Delete
</button>

</div>

)}

</div>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

</div>

);

};

export default TeacherPosting;