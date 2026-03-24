import React from 'react'
import FransiceHome from '../../Component/FransiceHome/FransiceHome'
import FransiceStudy from '../../Component/FransiceStudy/FransiceStudy'
import OurClasses from '../../Component/OurClasses/OurClasses'
import Teachers from '../../Component/Teachers/Teachers'
import FindCourse from '../../Component/FindCourse/FindCourse'
import RecentNews from '../../Component/RecentNews/RecentNews'

const Fransice = () => {
  return (
    <div>
        <FransiceHome/>
        <FransiceStudy/>
        <OurClasses/>
        <Teachers/>
        <FindCourse/>
        <RecentNews/>
    </div>
  )
}

export default Fransice