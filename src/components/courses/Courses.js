import React, { useEffect } from 'react'
import "./Courses.scss"
import CourseCard from '../courseCard/CourseCard'
import CourseData from "../../CodingBaba Database/CoursesData"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Courses = () => {
  
  const cartData=useSelector(state=>state?.CartReducer?.cart);
  useEffect(() => {
  }, [cartData]);
  
  return (
    <div className='container'>
        <div className='courses' id="course">
             <h1>Structured Courses Vetted By <span style={{color:"#006d77"}}>Industry Experts</span></h1>   
             <div className='courses-card'>
             {CourseData.map(data=>(
                  data.buyFlag=false
                ))}

                {CourseData.map(data=>(
                  <CourseCard data={data}/>
                ))}
             </div>
        </div>
    </div>
  )
}

export default Courses