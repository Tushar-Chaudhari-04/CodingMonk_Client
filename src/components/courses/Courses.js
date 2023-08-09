import React from 'react'
import "./Courses.scss"
import CourseCard from '../courseCard/CourseCard'

const Courses = () => {
  return (
    <div className='container'>
        <div className='courses'>
             <h1>Structured Courses Vetted By <span style={{color:"#006d77"}}>Industry Experts</span></h1>   
             <div className='courses-card'>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
             </div>
        </div>
    </div>
  )
}

export default Courses