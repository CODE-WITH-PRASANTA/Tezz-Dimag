import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import About from '../../Component/About/About'
import HomeCourse from '../../Component/HomeCourse/HomeCourse'
import HomeParents from '../../Component/HomeParents/HomeParents'



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <HomeCourse/>
      <HomeParents/>
    </div>
  )
}

export default Home
