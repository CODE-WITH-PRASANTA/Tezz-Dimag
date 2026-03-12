import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import SchoolFacilites from '../../Component/SchoolFacilites/SchoolFacilites'
import OurTeachers from '../../Component/OurTeachers/OurTeachers'
import OurBlog from '../../Component/OurBlog/OurBlog'
import ContactUs from '../../Component/ContactUs/ContactUs'
import About from '../../Component/About/About'
import HomeCourse from '../../Component/HomeCourse/HomeCourse'
import HomeParents from '../../Component/HomeParents/HomeParents'





const Home = () => {
  return (
    <div>
      <HeroSection/>
       <About/>
      <SchoolFacilites />
      <OurTeachers />
      <HomeCourse/>
       <HomeParents/>
      <OurBlog />
      
      
      <ContactUs />

      
     
      
     
    </div>
  )
}

export default Home
