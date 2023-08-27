import React from "react";
import "./CourseMainSection.scss";
import CourseCard from "../courseCard/CourseCard";
import CourseData from "../../CodingBaba Database/CoursesData";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import CourseMainInfoCard from "../coursemaininfocard/CourseMainInfoCard";

const CourseMainSection = (course) => {

  const courseCardData = CourseData.filter(data=>(data.course===course.course))[0];
  courseCardData.buyFlag=true;
  return (
    <div className="container">
      <div className="coursemainsection">
        <div className="coursemainhero">
          <div className="coursemainhero-left">
            <h4>{courseCardData.courseHeading}</h4>
            <h1>{courseCardData.courseSubHeading}</h1>
            <p>
             {courseCardData.courseDetail}
            </p>
            <p>
              Rating: 4.9 <BsStarFill color="#FFA41B" />{" "}
              <BsStarFill color="#FFA41B" /> <BsStarFill color="#FFA41B" />
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
          
            {courseCardData.courseCurriculum.map(data=>(
              <CourseMainInfoCard key={data.id} data={data}/>
            ))}
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMainSection;
