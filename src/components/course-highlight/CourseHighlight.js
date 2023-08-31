import React from 'react'
import "./CourseHighlight.scss"

const CourseHighlight = () => {
  return (
    <div className='container'>
        <div className="course-highlight-container">
            <div className='course-highlight-section'>
                <p>1000+</p>
                <span>Success Stories</span>
            </div>
            <span className='vertical-stand'></span>
            <div className='course-highlight-section'>
                <p>120+</p>
                <span>Companies Hired</span>
            </div>
            <span className='vertical-stand'></span>
            <div className='course-highlight-section'>
                <p>40 LPA</p>
                <span>Highest Package</span>
            </div>
        </div>
    </div>
    
  )
}

export default CourseHighlight