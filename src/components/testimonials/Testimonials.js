import React from "react";
import "./Testimonials.scss";
import TestimonialsCard from "../testimonials-card/TestimonialsCard";
import TestimonialsData from "../../CodingBaba Database/TestimonialsData"

const Testimonials = () => {
  return (
    <div className="container" >
      <div className="testimonials"  id="testimonials" >
      <p style={{ color: "#8f2d56",fontSize:"1.2rem",fontWeight:"700" }}>SUCCESS STORIES</p>
        <h1>
          Transform Your Life With
          <span style={{ color: "#8f2d56" }}>Coding Shuttle</span>
        </h1>

        <div className="testimonials-card-section">
          {TestimonialsData.map(data=>(
            <TestimonialsCard data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
