import React from "react";
import "./Price.css";

const Price = () => {

const base = "pricing";

return (

<section className={base}>

<div className={`${base}__container`}>

{/* STANDARD */}

<div className={`${base}__card`}>

<h3 className={`${base}__title`}>Standard</h3>

<p className={`${base}__old`}>₹1999</p>

<div className={`${base}__price`}>
<h2>₹1799</h2>
<span>Per Month</span>
</div>

<p className={`${base}__desc`}>
Discounted Price For India
</p>

<p className={`${base}__desc2`}>
Per User, billed annually
</p>

<button className={`${base}__btn`}>
Enroll Now
</button>

<div className={`${base}__save`}>
Choose 2-year plan <span>Save 6%</span>
</div>

<ul className={`${base}__list`}>
<li>Facilizes sed odic morbid quiz.</li>
<li>Design nexus et malasadas fames brand.</li>
<li>Artistic mind will be great for creation.</li>
<li>Roadmap for business agency arborator.</li>
</ul>

</div>


{/* PROFESSIONAL */}

<div className={`${base}__card ${base}__card--popular`}>

<div className={`${base}__badge`}>
Most Popular
</div>

<h3 className={`${base}__title`}>Professional</h3>

<p className={`${base}__old`}>₹2999</p>

<div className={`${base}__price`}>
<h2>₹2299</h2>
<span>Per Month</span>
</div>

<p className={`${base}__desc`}>
Discounted Price For India
</p>

<p className={`${base}__desc2`}>
Per User, billed annually
</p>

<button className={`${base}__btn ${base}__btn--primary`}>
Enroll Now
</button>

<div className={`${base}__save`}>
Choose 2-year plan <span>Save 24%</span>
</div>

<ul className={`${base}__list`}>
<li>Facilizes sed odic morbid quiz.</li>
<li>Design nexus et malasadas fames brand.</li>
<li>Artistic mind will be great for creation.</li>
<li>Roadmap for business agency arborator.</li>
</ul>

</div>


{/* BUSINESS */}

<div className={`${base}__card`}>

<h3 className={`${base}__title`}>Business</h3>

<p className={`${base}__old`}>₹5999</p>

<div className={`${base}__price`}>
<h2>₹4499</h2>
<span>Per Month</span>
</div>

<p className={`${base}__desc`}>
Discounted Price For India
</p>

<p className={`${base}__desc2`}>
Per User, billed annually
</p>

<button className={`${base}__btn`}>
Enroll Now
</button>

<div className={`${base}__save`}>
Choose 2-year plan <span>Save 12%</span>
</div>

<ul className={`${base}__list`}>
<li>Facilizes sed odic morbid quiz.</li>
<li>Design nexus et malasadas fames brand.</li>
<li>Artistic mind will be great for creation.</li>
<li>Roadmap for business agency arborator.</li>
</ul>

</div>

</div>

</section>

);

};

export default Price;