import React from "react";
import "./BlogDetails.css";

import BlogDetailsHero from "../../Component/BlogDetailsHero/BlogDetailsHero";
import PhotoSection from "../../Component/Photosection/Photosection";
import Educational from "../../Component/Educational/Educational";
import SendMessage from "../../Component/SendMessage/SendMessage";
import Search from "../../Component/Search/Search";

const BlogDetails = () => {

const base = "blog-details";

return (

<section className={base}>

{/* HERO */}
<BlogDetailsHero/>

{/* IMAGE SECTION */}
<PhotoSection/>


{/* MAIN CONTENT AREA */}

<div className={`${base}__container`}>

{/* LEFT CONTENT */}

<div className={`${base}__left`}>

<Educational/>

<SendMessage/>

</div>


{/* RIGHT SIDEBAR */}

<div className={`${base}__right`}>

<Search/>

</div>

</div>

</section>

);

};

export default BlogDetails;