import React from "react";
import HeroSection from "../../Component/HeroSection/HeroSection";
import SchoolFacilites from "../../Component/SchoolFacilites/SchoolFacilites";
import OurTeachers from "../../Component/OurTeachers/OurTeachers";
import OurBlog from "../../Component/OurBlog/OurBlog";
import ContactUs from "../../Component/ContactUs/ContactUs";
import About from "../../Component/About/About";
import HomeCourse from "../../Component/HomeCourse/HomeCourse";
import HomeParents from "../../Component/HomeParents/HomeParents";
import OurGallary from "../../Component/OurGallary/OurGallary";
import Admission from "../../Component/Admission/Admission";
import AboutSection from "../../Component/AboutSection/AboutSection";

const Home = () => {
  return (
    <div>

      <section id="/">
        <HeroSection />
      </section>

      <AboutSection />

      <section id="about">
        <About />
      </section>

      <section id="sclf">
        <SchoolFacilites />
      </section>

      <Admission />

      <section id="teacher">
        <OurTeachers />
      </section>

      <section id="course">
        <HomeCourse />
      </section>

      <section id="test">
        <HomeParents />
      </section>

      <section id="blog">
        <OurBlog />
      </section>

      <OurGallary />

      <section id="contact">
        <ContactUs />
      </section>

    </div>
  );
};

export default Home;