import React from "react";
import "./Profile.css";

import {
FaFacebookF,
FaXTwitter,
FaLinkedinIn,
FaInstagram,
FaPen
} from "react-icons/fa6";

const Profile = () => {

return (

<div className="profile-page">

{/* PAGE HEADER */}

<div className="profile-breadcrumb">

<h2>Profile</h2>

<div className="profile-path">
Home &nbsp;›&nbsp; Profile
</div>

</div>


{/* PROFILE CARD */}

<div className="profile-card">

<img
src="https://randomuser.me/api/portraits/men/32.jpg"
alt="user"
className="profile-avatar"
/>

<div className="profile-social">

<span><FaFacebookF/></span>
<span><FaXTwitter/></span>
<span><FaLinkedinIn/></span>
<span><FaInstagram/></span>

</div>

<h3 className="profile-name">
Musharof Chowdhury
</h3>

<p className="profile-role">
Team Manager
</p>

<p className="profile-location">
Arizona, United States
</p>

<button className="profile-edit">
<FaPen/> Edit
</button>

</div>


{/* PERSONAL INFORMATION */}

<div className="profile-section">

<div className="profile-section-header">

<h3>Personal Information</h3>

<button className="section-edit">
<FaPen/> Edit
</button>

</div>

<div className="profile-grid">

<div>
<span>First Name</span>
<p>Musharof</p>
</div>

<div>
<span>Last Name</span>
<p>Chowdhury</p>
</div>

<div>
<span>Email Address</span>
<p>randomuser@pimjo.com</p>
</div>

<div>
<span>Phone</span>
<p>+09 363 398 46</p>
</div>

<div>
<span>Bio</span>
<p>Team Manager</p>
</div>

</div>

</div>


{/* ADDRESS */}

<div className="profile-section">

<div className="profile-section-header">

<h3>Address</h3>

<button className="section-edit">
<FaPen/> Edit
</button>

</div>

<div className="profile-grid">

<div>
<span>Country</span>
<p>United States</p>
</div>

<div>
<span>City/State</span>
<p>Phoenix, Arizona</p>
</div>

<div>
<span>Postal Code</span>
<p>ERT 2489</p>
</div>

<div>
<span>TAX ID</span>
<p>AS4568384</p>
</div>

</div>

</div>

</div>

);

};

export default Profile;