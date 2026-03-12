import React from "react";
import HeroSection from "../../Component/HeroSection/HeroSection";
import SchoolFacilites from "../../Component/SchoolFacilites/SchoolFacilites";
import OurTeachers from "../../Component/OurTeachers/OurTeachers";
import OurBlog from "../../Component/OurBlog/OurBlog";
import ContactUs from "../../Component/ContactUs/ContactUs";
import About from "../../Component/About/About";
import HomeCourse from "../../Component/HomeCourse/HomeCourse";
import HomeParents from "../../Component/HomeParents/HomeParents";

const Home = () => {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="sclf">
        <SchoolFacilites />
      </div>

      <div id="teacher">
        <OurTeachers />
      </div>
      <div id="course">
        <HomeCourse />
      </div>
      <div id="test">
        <HomeParents />
      </div>
      <div id="blog">
        <OurBlog />
      </div>
      <div id="cont">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
