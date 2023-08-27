import React from 'react'
import "./CourseMainInfoCard.scss"

const CourseMainInfoCard = (data) => {
  return (
    <div className='coursemaininfocard'>
        <div className='curriculam-head'>
          <h2>{data.data.topicHeading}</h2>
          <p>{data.data.topicDuration}</p>
        </div>
        {/* <div className='curriculam-tail'>
          <p>Java is the Most Popular programming language in the software world Today. And we are going to learn Java concepts from beginner to advanced level.</p>
          <p>Install IDE and JDK, Write your first Java program, Taking user input, Loops, Various patterns problems like Square, Triangle, Inverted Triangle, etc.</p>
          <p>Introduction to Arrays, 1D and 2D Array problems, Understanding Bubble sort, Insertion sort and Selection sort, Functions and scope</p>
        </div> */}
    </div>
  )
}

export default CourseMainInfoCard