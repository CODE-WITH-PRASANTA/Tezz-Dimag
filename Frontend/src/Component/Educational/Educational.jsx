import React from "react";
import "./Educational.css";
import {
  FaStar,
  FaUser,
  FaClock,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

import author from "../../assets/DetailsSVG.webp";
import comment1 from "../../assets/DetailsBook1.webp";
import comment2 from "../../assets/SVG1.webp";
import blogImg from "../../assets/SVG2.webp";
import related1 from "../../assets/DetailsBook.webp";
import related2 from "../../assets/DetailsBook2.webp";

const Educational = () => {

const base="educational-page";

return (

<section className={base}>

<div className={`${base}__container`}>

{/* TITLE */}

<h1 className={`${base}__title`}>
Education Week News and Views on Education Policy and Practice
</h1>


{/* META INFO */}

<div className={`${base}__meta`}>

<div className={`${base}__meta-item`}>
<img src={author} alt=""/>
<div>
<span>Teacher</span>
<p>Admin</p>
</div>
</div>

<div className={`${base}__meta-divider`}></div>

<div className={`${base}__meta-item`}>
<span>Categories</span>
<p>Online Teaching</p>
</div>

<div className={`${base}__meta-divider`}></div>

<div className={`${base}__meta-item`}>
<span>Review</span>
<div className={`${base}__stars`}>
<FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
</div>
</div>

</div>


{/* CONTENT */}

<p className={`${base}__text`}>
Curabitur tempus tincidunt tellus ac placerat. Nullam non libero nisi.
Fusce congue est eget nisl tristique ornare. Vestibulum id massa felis.
Nullam vehicula bibendum nulla eu vulputate.
</p>

<p className={`${base}__text`}>
Curabitur tempus tincidunt tellus ac placerat. Nullam non libero nisi.
Fusce congue est eget nisl tristique ornare. Vestibulum id massa felis.
</p>


{/* QUOTE */}

<div className={`${base}__quote`}>

<p>
My experience of distance learning has been exciting and enlightening!
I have got to know people from various countries and continents.
</p>

<div className={`${base}__quote-author`}>
Dylan Meringue
</div>

</div>


{/* IMAGE + TITLE */}

<div className={`${base}__feature`}>

<img src={blogImg} alt=""/>

<h2>
Education Week News and View on Education Policy and Practice.
</h2>

</div>


{/* TAGS */}

<div className={`${base}__tags`}>

<div className={`${base}__tag-left`}>
<span>Tags :</span>
<button>Education</button>
<button>Branding</button>
<button>JavaScript</button>
</div>

<div className={`${base}__tag-right`}>
<span>Social Network :</span>
<FaTwitter/>
<FaFacebookF/>
<FaPinterestP/>
<FaLinkedinIn/>
</div>

</div>


{/* PREV NEXT */}

<div className={`${base}__nav`}>

<div className={`${base}__nav-card`}>
<FaArrowLeft/>
<p>Strategies for Fostering Critical Thinking in Students</p>
</div>

<div className={`${base}__nav-card`}>
<p>The Learning Network: Teaching and Learning With The New York...</p>
<FaArrowRight/>
</div>

</div>


{/* RELATED */}

<h2 className={`${base}__section-title`}>
Related Blogs
</h2>

<div className={`${base}__related`}>

<div className={`${base}__blog-card`}>

<img src={related1} alt=""/>

<div className={`${base}__blog-content`}>

<div className={`${base}__blog-meta`}>
<span><FaUser/> Admin</span>
<span><FaClock/> July 5, 2023</span>
</div>

<h3>
The Future of Online Learning: Trends and Predictions On Crypto
</h3>

<button>Read More</button>

</div>

</div>

<div className={`${base}__blog-card`}>

<img src={related2} alt=""/>

<div className={`${base}__blog-content`}>

<div className={`${base}__blog-meta`}>
<span><FaUser/> Admin</span>
<span><FaClock/> July 10, 2023</span>
</div>

<h3>
Empowering Students Through Personalized Modern Learning Paths
</h3>

<button>Read More</button>

</div>

</div>

</div>


{/* COMMENTS */}

<h2 className={`${base}__section-title`}>
3 Comments:
</h2>


<div className={`${base}__comment`}>

<img src={comment1} alt=""/>

<div>

<h4>Russell Sprout</h4>

<span>MARCH 29,2023 AT 10:47 PM</span>

<p>
There are many variations passages of lorem qoree available,
but the majority have content marketing suffered alteration.
</p>

<button>Reply</button>

</div>

</div>


<div className={`${base}__comment`}>

<img src={comment2} alt=""/>

<div>

<h4>Brian Cumin</h4>

<span>MARCH 29,2023 AT 10:47 PM</span>

<p>
There are many variations passages of lorem qoree available,
but the majority have content marketing suffered alteration.
</p>

<button>Reply</button>

</div>

</div>


</div>

</section>

);

};

export default Educational;