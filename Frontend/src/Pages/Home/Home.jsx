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
import ClubsSection from "../../Component/ClubsSection/ClubsSection";
import FaqSection from "../../Component/FaqSection/FaqSection";
import StudentKnowledgeSection from "../../Component/StudentKnowledgeSection/StudentKnowledgeSection";
import PricingSection from "../../Component/PricingSection/PricingSection";

const Home = () => {
  return (
    <div>

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
        <About />
      </section>

      <section id="programs">
        <ClubsSection />
      </section>

      <section id="courses">
        <SchoolFacilites />
        <HomeCourse />
      </section>

      <section id="admission">
        <Admission />
      </section>

      <section id="teacher">
        <OurTeachers />
      </section>

      <section id="testimonial">
        <HomeParents />
      </section>

      <section id="blog">
        <OurBlog />
      </section>

      <section id="gallery">
        <OurGallary />
      </section>
          <FaqSection/>
          <StudentKnowledgeSection/>
          <PricingSection/>
      <section id="contact">
        <ContactUs />
      </section>

    </div>
  );
};

export default Home;