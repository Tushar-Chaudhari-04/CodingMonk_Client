import React from 'react'
import "./CourseSection.scss"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CourseMainSection from '../../components/course-main-section/CourseMainSection'
import { useParams } from 'react-router-dom'

const CourseSection = () => {
  const params=useParams();
  console.log("params",params,params.course)
  return (
        <div className='course-section'>
            <Navbar />
            <CourseMainSection course={params.course}/>
            <Footer data="90%"/>
        </div>
  )
}

export default CourseSection