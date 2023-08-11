import React from "react";
import "./CourseMainSection.scss";
import CourseCard from "../courseCard/CourseCard";
import CourseData from "../../CodingBaba Database/CoursesData";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import CourseMainInfoCard from "../coursemaininfocard/CourseMainInfoCard";
import CourseCurriculum from "../../CodingBaba Database/CourseCurriculumData"

const CourseMainSection = () => {
  const courseCardData = CourseData[1];
  return (
    <div className="container">
      <div className="coursemainsection">
        <div className="coursemainhero">
          <div className="coursemainhero-left">
            <h4>Welcome to @supreme-dev Family</h4>
            <h1>Data Structures & Algorithms BootCamp @Supreme-2.0</h1>
            <p>
              A comprehensive program that covers the fundamentals of data
              structures and algorithms. It includes lectures and exercises to
              help students design and implement efficient solutions. This
              course is suitable for beginners and experienced programmers and
              aims to prepare students for technical interviews and placement
              exams.
            </p>
            <p>
              Rating: 4.9 <BsStarFill color="#FFA41B" />{" "}
              <BsStarFill color="#FFA41B" /> <BsStarFill color="#FFA41B" />{" "}
              <BsStarFill color="#FFA41B" /> <BsStarHalf color="#FFA41B" />
            </p>
          </div>
          <div className="coursemainhero-right">
            <CourseCard data={courseCardData} />
          </div>
        </div>
        <div className="coursemaindetails">
          <p>OUR CURRICULUM</p>
          <h1>Structured Curriculum Vetted By Industry Experts</h1>
        <div className="course-main-info-section">
          
            {CourseCurriculum.map(data=>(
              <CourseMainInfoCard data={data}/>
            ))}
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMainSection;
