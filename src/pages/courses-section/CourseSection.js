import React from 'react'
import "./CourseSection.scss"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CourseMainSection from '../../components/course-main-section/CourseMainSection'

const CourseSection = () => {
  return (
        <div className='course-section'>
            <Navbar/>
            <CourseMainSection/>
            <Footer data="90%"/>
        </div>
  )
}

export default CourseSection