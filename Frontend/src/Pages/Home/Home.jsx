import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import SchoolFacilites from '../../Component/SchoolFacilites/SchoolFacilites'
import OurTeachers from '../../Component/OurTeachers/OurTeachers'
import OurBlog from '../../Component/OurBlog/OurBlog'
import ContactUs from '../../Component/ContactUs/ContactUs'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SchoolFacilites />
      <OurTeachers />
      <OurBlog />
      <ContactUs />

      
    </div>
  )
}

export default Home
