import React from "react";
import "./CourseCard.scss";
import PrimeProgram from "../../assets/Prime Program.png";
import {BsCurrencyRupee} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

const CourseCard = (data) => {
  const navigate=useNavigate();
  return (
    <div className="course-card" onClick={()=>navigate(`/courses/${data.data.course}`)}>
      <div className="course-card-Img">
        <img src={data.data.courseImg} alt={data.data.courseName} />
      </div>
      <div className="course-pricing">
        <h2 className="course-name">{data.data.courseName}</h2>
        <p className="course-mrp"><BsCurrencyRupee/> {data.data.courseMRP}</p>
        <p className="course-saleprice">
          <span style={{color:"#757575"}}><BsCurrencyRupee/></span> {data.data.courseSP}
        </p>
        <p className="course-emi">or EMI <BsCurrencyRupee/>{data.data.courseEMI}</p>
        <button className="btn-primary course-btn" onClick={()=>navigate(`/courses/${data.data.course}`)}>Start Learning</button>
      </div>
      <div className="course-highlights">
      <h3 style={{margin:"10px"}}>Key Features</h3>
      {data.data.courseFeatures.map(data=>(
        <p>{data}</p>
      ))}
      </div>
    </div>
  );
};

export default CourseCard;
