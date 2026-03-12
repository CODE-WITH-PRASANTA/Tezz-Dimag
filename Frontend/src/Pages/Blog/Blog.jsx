import React, { useState } from "react";
import "./Blog.css";

import img1 from "../../assets/Education1.webp";
import img2 from "../../assets/Education2.webp";
import img3 from "../../assets/Education3.webp";
import img4 from "../../assets/Education1.webp";
import img5 from "../../assets/Education2.webp";
import img6 from "../../assets/Education3.webp";

const Blog = () => {

const base = "blog-grid";

const blogs = [
{
id:1,
img:img1,
title:"Education Week News and Views on Education Policy and Practice",
date:"June 23, 2023"
},
{
id:2,
img:img2,
title:"The Learning Network: Teaching and Learning With The New York Times",
date:"June 23, 2023"
},
{
id:3,
img:img3,
title:"Nothing is Impossible to Learn If You are Passionate About This Subject",
date:"June 23, 2023"
},
{
id:4,
img:img4,
title:"Innovations in Classroom Technology for Modern Education",
date:"July 1, 2023"
},
{
id:5,
img:img5,
title:"The Future of Online Learning: Trends and Predictions On Crypto",
date:"July 5, 2023"
},
{
id:6,
img:img6,
title:"Empowering Students Through Personalized Modern Learning Paths",
date:"July 10, 2023"
}
];

const [page,setPage] = useState(1);

const perPage = 3;

const start = (page-1) * perPage;
const current = blogs.slice(start, start + perPage);

const totalPages = Math.ceil(blogs.length / perPage);

return (

<section className={base}>

<div className={`${base}__container`}>

{current.map((blog)=> (

<div className={`${base}__card`} key={blog.id}>

<div className={`${base}__image`}>
<img src={blog.img} alt="blog"/>
</div>

<div className={`${base}__content`}>

<div className={`${base}__meta`}>

<span className={`${base}__admin`}>
👤 Admin
</span>

<span className={`${base}__date`}>
🕒 {blog.date}
</span>

</div>

<h3 className={`${base}__title`}>
{blog.title}
</h3>

<button className={`${base}__btn`}>
Read More
</button>

</div>

</div>

))}

</div>

{/* PAGINATION */}

<div className={`${base}__pagination`}>

{[...Array(totalPages)].map((_,i)=>(
<button
key={i}
className={`${base}__page ${page === i+1 ? `${base}__page--active` : ""}`}
onClick={()=>setPage(i+1)}
>
{i+1}
</button>
))}

</div>

</section>

);

};

export default Blog;