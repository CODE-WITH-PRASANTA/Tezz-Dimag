import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
    address:"",
    openHours:""
  });

  const [contactList,setContactList] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setContactList([...contactList,{...formData,id:Date.now()}]);

    setFormData({
      name:"",
      email:"",
      phone:"",
      subject:"",
      message:"",
      address:"",
      openHours:""
    });
  }

  return (
    <div className="contactUsAdmin-wrapper">

      {/* LEFT SIDE FORM */}

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
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Email</label>
            <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Phone</label>
            <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Subject</label>
            <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Address</label>
            <input
            type="text"
            name="address"
            placeholder="Enter office address"
            value={formData.address}
            onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Open Hours</label>
            <input
            type="text"
            name="openHours"
            placeholder="Mon - Sat : 8AM - 9PM"
            value={formData.openHours}
            onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Message</label>
            <textarea
            name="message"
            placeholder="Write message..."
            value={formData.message}
            onChange={handleChange}
            />
          </div>

          <button className="contactUsAdmin-submitBtn">
            Add Contact
          </button>

        </form>

      </div>


      {/* RIGHT SIDE TABLE */}

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
              </tr>
            </thead>

            <tbody>

              {contactList.map((item)=>(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.subject}</td>
                  <td>{item.address}</td>
                  <td>{item.openHours}</td>
                  <td>{item.message}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Contact;