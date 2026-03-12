import React, { useState, useRef, useEffect } from "react";
import "./Topbar.css";

import { FaBars, FaChevronDown } from "react-icons/fa";

const Topbar = ({ toggleSidebar }) => {

const [open,setOpen] = useState(false);
const dropdownRef = useRef(null);

useEffect(()=>{

const handleClickOutside = (e)=>{
if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
setOpen(false);
}
};

document.addEventListener("mousedown",handleClickOutside);

return ()=> document.removeEventListener("mousedown",handleClickOutside);

},[]);

return (

<div className="kgTopbar-wrapper">

{/* LEFT MENU */}

<div className="kgTopbar-left">

<FaBars
className="kgTopbar-menuIcon"
onClick={toggleSidebar}
/>

</div>


{/* RIGHT PROFILE */}

<div className="kgTopbar-right" ref={dropdownRef}>

<div
className="kgTopbar-profile"
onClick={()=>setOpen(!open)}
>

<img
src="https://randomuser.me/api/portraits/men/32.jpg"
alt="user"
className="kgTopbar-avatar"
/>

<span className="kgTopbar-username">
Musharof
</span>

<FaChevronDown className="kgTopbar-arrow"/>

</div>


{/* DROPDOWN */}

{open && (

<div className="kgTopbar-dropdown">

<div className="kgTopbar-userInfo">

<h4>Musharof Chowdhury</h4>

<p>randomuser@pimjo.com</p>

</div>

<ul>

<li>Edit Profile</li>

<li>Account Settings</li>

<li>Support</li>

<hr/>

<li className="logout">
Sign Out
</li>

</ul>

</div>

)}

</div>

</div>

);

};

export default Topbar;