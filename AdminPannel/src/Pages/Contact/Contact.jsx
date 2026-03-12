import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

const [editId,setEditId] = useState(null);

const [formData,setFormData] = useState({
name:"",
email:"",
phone:"",
subject:"",
message:"",
address:"",
openHours:""
});

const [contactList,setContactList] = useState([]);

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();

if(editId){

setContactList(
contactList.map((item)=>
item.id === editId ? {...formData,id:editId} : item
)
);

setEditId(null);

}else{

setContactList([
...contactList,
{...formData,id:Date.now()}
]);

}

setFormData({
name:"",
email:"",
phone:"",
subject:"",
message:"",
address:"",
openHours:""
});
};

const handleEdit=(item)=>{
setFormData(item);
setEditId(item.id);
};

const handleDelete=(id)=>{
setContactList(contactList.filter(item=>item.id !== id));
};

return(

<div className="contactUsAdmin-wrapper">

{/* LEFT FORM */}

<div className="contactUsAdmin-formSection">

<h2 className="contactUsAdmin-heading">
Create Contact Info
</h2>

<form
className="contactUsAdmin-form"
onSubmit={handleSubmit}
>

<div className="contactUsAdmin-inputGroup">
<label>Name</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
/>
</div>

<div className="contactUsAdmin-inputGroup">
<label>Email</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
/>
</div>

<div className="contactUsAdmin-inputGroup">
<label>Phone</label>
<input
type="text"
name="phone"
value={formData.phone}
onChange={handleChange}
/>
</div>

<div className="contactUsAdmin-inputGroup">
<label>Subject</label>
<input
type="text"
name="subject"
value={formData.subject}
onChange={handleChange}
/>
</div>

<div className="contactUsAdmin-inputGroup">
<label>Address</label>
<input
type="text"
name="address"
value={formData.address}
onChange={handleChange}
/>
</div>

<div className="contactUsAdmin-inputGroup">
<label>Open Hours</label>
<input
type="text"
name="openHours"
value={formData.openHours}
onChange={handleChange}
/>
</div>

<div className="contactUsAdmin-inputGroup">
<label>Message</label>
<textarea
name="message"
value={formData.message}
onChange={handleChange}
/>
</div>

<button className="contactUsAdmin-submitBtn">
{editId ? "Update Contact" : "Add Contact"}
</button>

</form>

</div>


{/* RIGHT TABLE */}

<div className="contactUsAdmin-tableSection">

<h2 className="contactUsAdmin-heading">
Contact List
</h2>

<div className="contactUsAdmin-tableWrapper">

<table className="contactUsAdmin-table">

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Subject</th>
<th>Address</th>
<th>Open Hours</th>
<th>Message</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{contactList.length === 0 ? (

<tr>
<td colSpan="8" className="no-data">
No contacts added
</td>
</tr>

):( 

contactList.map((item)=>(
<tr key={item.id}>

<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>{item.subject}</td>
<td>{item.address}</td>
<td>{item.openHours}</td>
<td>{item.message}</td>

<td className="contact-action">

<button
className="edit-btn"
onClick={()=>handleEdit(item)}
>
Edit
</button>

<button
className="delete-btn"
onClick={()=>handleDelete(item.id)}
>
Delete
</button>

</td>

</tr>
))

)}

</tbody>

</table>

</div>

</div>

</div>
);
};

export default Contact;