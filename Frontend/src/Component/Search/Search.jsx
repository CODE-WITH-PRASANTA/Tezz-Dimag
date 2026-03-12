import React from "react";
import "./Search.css";
import { FaSearch, FaClock } from "react-icons/fa";

/* images */
import post1 from "../../assets/RecentPost1.webp";
import post2 from "../../assets/RecentPost2.webp";
import post3 from "../../assets/RecentPost3.webp";

import course1 from "../../assets/Popular1.webp";
import course2 from "../../assets/Popular2.webp";
import course3 from "../../assets/Popular3.webp";

const Search = () => {

const base = "search-sidebar";

return (

<aside className={base}>

{/* SEARCH BOX */}

<div className={`${base}__card`}>

<h3 className={`${base}__title`}>
Search
</h3>

<div className={`${base}__search-box`}>

<input
type="text"
placeholder="Search here..."
/>

<button>
<FaSearch/>
</button>

</div>

</div>



{/* RECENT POSTS */}

<div className={`${base}__card`}>

<h3 className={`${base}__title`}>
Recent Posts
</h3>

<div className={`${base}__recent`}>

<div className={`${base}__post`}>

<img src={post1} alt=""/>

<div>
<span className={`${base}__date`}>
<FaClock/> June 23, 2023
</span>

<p>
Education Week News and Views on Education...
</p>
</div>

</div>



<div className={`${base}__post`}>

<img src={post2} alt=""/>

<div>
<span className={`${base}__date`}>
<FaClock/> June 23, 2023
</span>

<p>
The Learning Network: Teaching and Learning...
</p>
</div>

</div>



<div className={`${base}__post`}>

<img src={post3} alt=""/>

<div>
<span className={`${base}__date`}>
<FaClock/> June 23, 2023
</span>

<p>
Nothing is Impossible to Learn If You...
</p>
</div>

</div>

</div>

</div>



{/* CATEGORIES */}

<div className={`${base}__card`}>

<h3 className={`${base}__title`}>
Categories
</h3>

<ul className={`${base}__categories`}>

<li>College</li>
<li>High School</li>
<li>Primary</li>
<li>University</li>
<li>Course</li>

</ul>

</div>



{/* POPULAR COURSES */}

<div className={`${base}__card`}>

<h3 className={`${base}__title`}>
Popular Courses
</h3>

<div className={`${base}__courses`}>

<div className={`${base}__course`}>

<img src={course1} alt=""/>

<div>
<p>The Complete JavaScript Course From Zero...</p>
<span>Free</span>
</div>

</div>



<div className={`${base}__course`}>

<img src={course2} alt=""/>

<div>
<p>High-Quality Online Course Access For...</p>
<span>Free</span>
</div>

</div>



<div className={`${base}__course`}>

<img src={course3} alt=""/>

<div>
<p>Access Premium Content With Online Cou...</p>
<span>Free</span>
</div>

</div>

</div>

</div>



{/* TAGS */}

<div className={`${base}__card`}>

<h3 className={`${base}__title`}>
Tags
</h3>

<div className={`${base}__tags`}>

<span>Consulting</span>
<span>Student</span>
<span>Course</span>
<span>Art</span>
<span>School</span>
<span>Education</span>
<span>Learning</span>
<span>Design</span>
<span>Online Courses</span>
<span>UI Design</span>

</div>

</div>

</aside>

);

};

export default Search;