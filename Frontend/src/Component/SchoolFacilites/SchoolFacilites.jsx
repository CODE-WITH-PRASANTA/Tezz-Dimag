import React, { useState, useEffect } from "react";
import "./SchoolFacilites.css";

import {
FaBrain,
FaCalculator,
FaPenFancy,
FaRobot,
FaMicrophone,
FaLanguage,
FaPalette,
FaBookReader,
FaLightbulb,
FaUserFriends,
FaGlobe,
FaMagic,
FaAtom,
FaLaptopCode,
FaStar,
FaProjectDiagram,
FaComments,
FaChild,
FaFingerprint,
FaChalkboardTeacher
} from "react-icons/fa";

const SchoolFacilites = () => {

const facilities = [

{
title:"Abacus Training",
icon:<FaCalculator/>,
color:"#46b576",
text:"Abacus training improves calculation speed, concentration and memory power for students. Children learn mental maths techniques that help them solve complex calculations quickly. It strengthens brain development and improves focus in daily studies."
},

{
title:"Vedic Mathematics",
icon:<FaBrain/>,
color:"#f06277",
text:"Vedic Maths teaches shortcut methods that make solving mathematical problems easier and faster. Students gain confidence while handling numbers and calculations. This course builds strong logical thinking and analytical ability."
},

{
title:"Memory Science",
icon:<FaLightbulb/>,
color:"#e4b847",
text:"Memory science training helps children improve their ability to remember lessons and information. Special memory techniques and brain exercises are used during the sessions. It helps students perform better in academics and exams."
},

{
title:"Calligraphy & Handwriting",
icon:<FaPenFancy/>,
color:"#3e3e49",
text:"This course improves handwriting clarity, writing speed and presentation skills. Good handwriting helps students score better in exams. Children also learn creative lettering and calligraphy techniques."
},

{
title:"DMIT Test",
icon:<FaFingerprint/>,
color:"#59a7b9",
text:"DMIT (Dermatoglyphics Multiple Intelligence Test) helps discover a child's natural talent and intelligence type. It analyzes fingerprint patterns to understand learning style. Parents receive guidance for the child's future development."
},

{
title:"Robotics & Coding",
icon:<FaRobot/>,
color:"#e87547",
text:"Students learn robotics and computer coding through hands-on projects. This course develops logical thinking and problem solving ability. It prepares children for future technology and innovation careers."
},

{
title:"STEM Education",
icon:<FaAtom/>,
color:"#7b5de3",
text:"STEM education introduces students to science, technology, engineering and mathematics through practical activities. Children build small experiments and projects. It develops curiosity and scientific thinking."
},

{
title:"NLP Training",
icon:<FaComments/>,
color:"#ff7f50",
text:"Neuro Linguistic Programming helps children develop confidence and positive thinking. Students learn communication techniques and emotional control. It improves mindset and personality development."
},

{
title:"Mid Brain Activation",
icon:<FaStar/>,
color:"#2e8b57",
text:"Mid Brain Activation training helps unlock hidden potential in young minds. Special brain exercises improve imagination and focus. It also strengthens memory and learning ability."
},

{
title:"7 Chakra Awareness",
icon:<FaMagic/>,
color:"#4169e1",
text:"This awareness program helps children maintain emotional balance and inner confidence. Students learn techniques for focus and relaxation. It supports mental and emotional development."
},

{
title:"Telekinesis Awareness",
icon:<FaGlobe/>,
color:"#ff6b6b",
text:"Telekinesis awareness introduces children to concentration and mental focus exercises. It improves imagination and awareness. Students develop strong attention and discipline."
},

{
title:"Phonics Learning",
icon:<FaBookReader/>,
color:"#ffa500",
text:"Phonics learning helps children improve reading ability and pronunciation. It builds a strong foundation for English language learning. Students become confident readers and speakers."
},

{
title:"Public Speaking",
icon:<FaMicrophone/>,
color:"#20b2aa",
text:"Public speaking classes help students overcome stage fear and express their ideas confidently. They learn voice control and presentation skills. This improves leadership and communication ability."
},

{
title:"Spoken English",
icon:<FaLanguage/>,
color:"#4caf50",
text:"Spoken English classes improve vocabulary, pronunciation and fluency. Students practice real life conversations. This helps them communicate confidently in school and social environments."
},

{
title:"Art & Craft",
icon:<FaPalette/>,
color:"#ff69b4",
text:"Art and craft activities encourage creativity and imagination. Students work on drawing, painting and design projects. It develops artistic skills and confidence."
},

{
title:"Arduino Projects",
icon:<FaLaptopCode/>,
color:"#9c27b0",
text:"Arduino project training introduces students to electronics and programming. They build simple automation and robotics projects. This develops technical thinking and innovation."
},

{
title:"Personality Development",
icon:<FaUserFriends/>,
color:"#00bcd4",
text:"Personality development sessions help students build confidence and leadership qualities. They learn teamwork and communication skills. It prepares them for future success."
},

{
title:"Logical Thinking",
icon:<FaProjectDiagram/>,
color:"#ff5722",
text:"Logical thinking training helps students analyze problems and find solutions. Puzzle based activities sharpen the brain. It improves reasoning ability and academic performance."
},

{
title:"Confidence Building",
icon:<FaChild/>,
color:"#e91e63",
text:"Confidence building activities help children overcome fear and express themselves freely. Students participate in discussions and stage activities. It improves self belief and communication skills."
},

{
title:"Creative Learning",
icon:<FaChalkboardTeacher/>,
color:"#3f51b5",
text:"Creative learning programs combine education with fun activities and skill development. Students explore different talents and interests. It creates a joyful and engaging learning environment."
}

];

const [currentPage,setCurrentPage]=useState(1);
const [cardsPerPage,setCardsPerPage]=useState(6);

useEffect(()=>{

const updateCards=()=>{

if(window.innerWidth<=600){
setCardsPerPage(2);
}
else if(window.innerWidth<=992){
setCardsPerPage(4);
}
else{
setCardsPerPage(6);
}

};

updateCards();
window.addEventListener("resize",updateCards);
return ()=>window.removeEventListener("resize",updateCards);

},[]);

const indexOfLast=currentPage*cardsPerPage;
const indexOfFirst=indexOfLast-cardsPerPage;
const currentCards=facilities.slice(indexOfFirst,indexOfLast);

const totalPages=Math.ceil(facilities.length/cardsPerPage);

const paginate=(number)=>{
setCurrentPage(number);
};

return (

<section className="SchoolFacilites-wrapper" id="course">

<div className="SchoolFacilites-header">

<h2 className="SchoolFacilites-title">
Tezz Dimag Skill Development Courses
</h2>

<p className="SchoolFacilites-subtitle">
Tezz Dimag is Odisha’s first platform offering multiple brain development and
skill-development courses for students from Class 1 to Class 12. Our programs
focus on improving memory power, logical thinking, communication skills,
creativity and confidence through practical learning methods.
</p>

</div>


<div className="SchoolFacilites-grid">

{currentCards.map((item,index)=>(

<div
key={index}
className="SchoolFacilites-card"
style={{background:item.color}}
>

<div className="SchoolFacilites-bgIcon">
{item.icon}
</div>

<h3 className="SchoolFacilites-cardTitle">
{item.title}
</h3>

<p className="SchoolFacilites-cardText">
{item.text}
</p>

</div>

))}

</div>


<div className="SchoolFacilites-pagination">

{Array.from({length:totalPages},(_,i)=>(

<button
key={i}
className={`SchoolFacilites-pageBtn ${currentPage===i+1?"active":""}`}
onClick={()=>paginate(i+1)}
>
{i+1}
</button>

))}

</div>

</section>

);

};

export default SchoolFacilites;