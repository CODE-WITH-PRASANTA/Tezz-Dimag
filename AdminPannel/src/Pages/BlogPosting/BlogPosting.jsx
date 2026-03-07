import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./BlogPosting.css";

const BlogPosting = () => {

const [blogs,setBlogs] = useState([]);
const [editIndex,setEditIndex] = useState(null);

const [formData,setFormData] = useState({
title:"",
quote:"",
content:"",
author:"",
designation:"",
location:"",
category:"",
tags:"",
image:null
});

const handleChange = (e)=>{
const {name,value} = e.target;
setFormData({...formData,[name]:value});
};

const handleEditorChange = (content)=>{
setFormData({...formData,content});
};

const handleImage = (e)=>{
setFormData({...formData,image:e.target.files[0]});
};

const handleSubmit = (e)=>{
e.preventDefault();

if(editIndex !== null){

const updatedBlogs = [...blogs];
updatedBlogs[editIndex] = formData;
setBlogs(updatedBlogs);
setEditIndex(null);

}else{

setBlogs([...blogs,formData]);

}

setFormData({
title:"",
quote:"",
content:"",
author:"",
designation:"",
location:"",
category:"",
tags:"",
image:null
});

};

const handleEdit = (index)=>{

setFormData(blogs[index]);
setEditIndex(index);

};

const handleDelete = (index)=>{

const updatedBlogs = blogs.filter((_,i)=>i!==index);
setBlogs(updatedBlogs);

};

return(

<div className="BlogPosting">

{/* BLOG FORM */}

<div className="BlogPosting-form">

<h2>Blog Posting</h2>

<form onSubmit={handleSubmit}>

<label>Blog Title</label>
<input
type="text"
name="title"
placeholder="Enter Blog Title"
value={formData.title}
onChange={handleChange}
/>

<label>Blog Quote</label>
<input
type="text"
name="quote"
placeholder="Enter Blog Quote"
value={formData.quote}
onChange={handleChange}
/>

<label>Blog Content</label>

<Editor
apiKey="no-api-key"
value={formData.content}
init={{
height:300,
menubar:true,
plugins:[
'advlist','autolink','lists','link','image','charmap','preview',
'anchor','searchreplace','visualblocks','code','fullscreen',
'insertdatetime','media','table','help','wordcount'
],
toolbar:
'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | removeformat'
}}
onEditorChange={handleEditorChange}
/>

<label>Author Name</label>
<input
type="text"
name="author"
placeholder="Author Name"
value={formData.author}
onChange={handleChange}
/>

<label>Author Designation</label>
<input
type="text"
name="designation"
placeholder="Author Designation"
value={formData.designation}
onChange={handleChange}
/>

<label>Location</label>
<input
type="text"
name="location"
placeholder="Author Location"
value={formData.location}
onChange={handleChange}
/>

<label>Category</label>

<select
name="category"
value={formData.category}
onChange={handleChange}
>

<option value="">Select Category</option>
<option>Technology</option>
<option>Education</option>
<option>Programming</option>
<option>Business</option>
<option>Marketing</option>

</select>

<label>Tags</label>

<input
type="text"
name="tags"
placeholder="React, JavaScript, AI"
value={formData.tags}
onChange={handleChange}
/>

<label>Upload Blog Image</label>
<input type="file" onChange={handleImage}/>

<button type="submit">

{editIndex !== null ? "Update Blog" : "Publish Blog"}

</button>

</form>

</div>

{/* BLOG LIST */}

<div className="BlogPosting-list">

<h2>Blog List</h2>

<div className="BlogPosting-tableWrapper">

<table>

<thead>

<tr>

<th>Title</th>
<th>Author</th>
<th>Designation</th>
<th>Location</th>
<th>Category</th>
<th>Tags</th>
<th>Action</th>

</tr>

</thead>

<tbody>

{blogs.map((blog,index)=>(

<tr key={index}>

<td>{blog.title}</td>
<td>{blog.author}</td>
<td>{blog.designation}</td>
<td>{blog.location}</td>
<td>{blog.category}</td>
<td>{blog.tags}</td>

<td className="BlogPosting-actions">

<button
className="BlogPosting-editBtn"
onClick={()=>handleEdit(index)}
>
Edit
</button>

<button
className="BlogPosting-deleteBtn"
onClick={()=>handleDelete(index)}
>
Delete
</button>

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

export default BlogPosting;