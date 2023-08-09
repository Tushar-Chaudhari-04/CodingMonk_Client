import React from "react";
import "./CourseCard.scss";
import PrimeProgram from "../../assets/Prime Program.png";
import {BsCurrencyRupee} from "react-icons/bs"

const CourseCard = () => {
  return (
    <div className="course-card">
      <div className="course-card-Img">
        <img src={PrimeProgram} alt="PrimeProgram" />
      </div>
      <div className="course-pricing">
        <p className="course-mrp"><BsCurrencyRupee/> 7,800/-</p>
        <p className="course-saleprice">
          <span style={{color:"#757575"}}><BsCurrencyRupee/></span> 6,580
        </p>
        <p className="course-emi">or EMI <BsCurrencyRupee/>1,097/mon*</p>
        <button className="btn-primary course-btn">Start Learning</button>
      </div>
      <div className="course-highlights">
      <h3 style={{margin:"10px"}}>Key Features</h3>
        <p>30+ Hrs LIVE Problem Solving Classes</p>
        <p> 60+ Hrs Online Content</p>
        <p>400+ Handpicked Problems</p>
        <p> 5 Months Program</p>
        <p> 2 Years Access</p>
      </div>
    </div>
  );
};

export default CourseCard;
