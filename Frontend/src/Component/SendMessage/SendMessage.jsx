import React from "react";
import "./SendMessage.css";
import { FaUser, FaEnvelope, FaPhoneAlt, FaInfoCircle, FaPen } from "react-icons/fa";

const SendMessage = () => {

const base = "send-message";

return (

<section className={base}>

<div className={`${base}__container`}>

<h2 className={`${base}__title`}>
Send Me Message
</h2>

<form className={`${base}__form`}>

{/* NAME */}

<div className={`${base}__input-group`}>

<FaUser className={`${base}__icon`} />

<input
type="text"
placeholder="Your Name"
/>

</div>


{/* EMAIL */}

<div className={`${base}__input-group`}>

<FaEnvelope className={`${base}__icon`} />

<input
type="email"
placeholder="Email Address"
/>

</div>


{/* PHONE */}

<div className={`${base}__input-group`}>

<FaPhoneAlt className={`${base}__icon`} />

<input
type="tel"
placeholder="Your Number"
/>

</div>


{/* SUBJECT */}

<div className={`${base}__input-group`}>

<FaInfoCircle className={`${base}__icon`} />

<select>

<option value="">Select Subject</option>
<option>General Inquiry</option>
<option>Course Information</option>
<option>Technical Support</option>
<option>Admission Query</option>
<option>Feedback</option>

</select>

<span className={`${base}__select-arrow`}></span>

</div>


{/* MESSAGE */}

<div className={`${base}__textarea-group`}>

<FaPen className={`${base}__icon`} />

<textarea
placeholder="Feel free to get in touch!"
rows="4"
/>

</div>


{/* FOOTER */}

<div className={`${base}__footer`}>

<button className={`${base}__btn`}>
Send Message
</button>

<label className={`${base}__checkbox`}>

<input type="checkbox"/>

<span>
I agree that my data is collected and stored.
</span>

</label>

</div>

</form>

</div>

</section>

);

};

export default SendMessage;