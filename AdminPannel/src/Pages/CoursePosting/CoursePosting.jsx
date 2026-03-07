import React, { useState } from "react";
import "./CoursePosting.css";

const CoursePosting = () => {

const base = "course-posting";

const [openMenu,setOpenMenu] = useState(null);
const [editId,setEditId] = useState(null);

const [form,setForm] = useState({
name:"",
price:"",
category:"",
desc:"",
image:""
});

const [courses,setCourses] = useState([
{
id:1,
name:"Water Color",
price:80,
category:"Painting",
image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f"
},
{
id:2,
name:"Swimming",
price:80,
category:"Sports",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
}
]);

const handleChange=(e)=>{
const {name,value}=e.target;
setForm({...form,[name]:value});
};

const handleImage=(e)=>{
const file=e.target.files[0];
if(file){
setForm({...form,image:URL.createObjectURL(file)});
}
};

const saveCourse=()=>{

if(!form.name) return;

if(editId){

setCourses(
courses.map(c =>
c.id===editId ? {...form,id:editId} : c
)
);

setEditId(null);

}else{

setCourses([
...courses,
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
price:"",
category:"",
desc:"",
image:""
});
};

const editCourse=(course)=>{
setForm(course);
setEditId(course.id);
};

const deleteCourse=(id)=>{
setCourses(courses.filter(c=>c.id!==id));
};

return (

<div className={base}>

<div className={`${base}__grid`}>

{/* FORM */}

<div className={`${base}__card`}>

<h2>Course Posting Form</h2>

<div className="form-group">
<input
type="text"
placeholder="Course Name"
name="name"
value={form.name}
onChange={handleChange}
/>
</div>

<div className="form-group">
<input
type="number"
placeholder="Course Price"
name="price"
value={form.price}
onChange={handleChange}
/>
</div>

<div className="form-group">
<select
name="category"
value={form.category}
onChange={handleChange}
>
<option value="">Course Category</option>
<option>Painting</option>
<option>Sports</option>
<option>Science</option>
<option>Language</option>
<option>Cooking</option>
</select>
</div>

<div className="form-group">
<input type="file" onChange={handleImage}/>
</div>

<div className="form-group">
<textarea
placeholder="Course Description"
name="desc"
value={form.desc}
onChange={handleChange}
/>
</div>

<div className="buttons">

<button className="save" onClick={saveCourse}>
{editId ? "Update" : "Save"}
</button>

<button className="clear" onClick={clearForm}>
Clear
</button>

</div>

</div>


{/* LIVE PREVIEW */}

<div className={`${base}__card ${base}__preview`}>

<h2>Live Preview</h2>

<div className="preview-card">

<img
src={form.image || "https://via.placeholder.com/250x170"}
alt=""
/>

<div className="preview-info">

<h4>{form.name || "Course Name"}</h4>

<div className="preview-price">

<span>{form.price || 80} USD</span>

<button className="read-btn">
Readmore
</button>

</div>

</div>

</div>

</div>

</div>


{/* COURSE TABLE */}

<div className={`${base}__card`}>

<h2>Course List</h2>

<div className="table-wrap">

<table className="course-table">

<thead>
<tr>
<th>Image</th>
<th>Name</th>
<th>Category</th>
<th>Price</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{courses.map((c)=>(

<tr key={c.id}>

<td className="photo">
<img src={c.image} alt=""/>
</td>

<td>{c.name}</td>
<td>{c.category}</td>
<td>{c.price} USD</td>

<td className="action-cell">

<div className="action-dropdown">

<button
className="action-btn"
onClick={()=>setOpenMenu(openMenu===c.id ? null : c.id)}
>
⋮
</button>

{openMenu===c.id && (

<div className="dropdown-menu">

<button onClick={()=>editCourse(c)}>
Edit
</button>

<button
className="delete"
onClick={()=>deleteCourse(c.id)}
>
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

export default CoursePosting;