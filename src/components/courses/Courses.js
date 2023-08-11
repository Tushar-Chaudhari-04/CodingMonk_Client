import React from 'react'
import "./Courses.scss"
import CourseCard from '../courseCard/CourseCard'
import CourseData from "../../CodingBaba Database/CoursesData"

const Courses = () => {
  return (
    <div className='container'>
        <div className='courses' id="course">
             <h1>Structured Courses Vetted By <span style={{color:"#006d77"}}>Industry Experts</span></h1>   
             <div className='courses-card'>
                {CourseData.map(data=>(
                  <CourseCard data={data}/>
                ))}
             </div>
        </div>
    </div>
  )
}

export default Courses