import React from "react";
import "./TestimonialsCard.scss";

const TestimonialsCard = (data) => {
  return (
    <div className="testimonialsCard">
      <div className="testimonial-top">
      <img className="testimonial-top-img" src={data.data.testimonialImg} alt="" />
        <h4>{data.data.testimonialName}</h4>
        <p>{data.data.testimonialDesignation}</p>
        <p>{data.data.testimonialCompany}</p>
      </div>
      <div className="testimonial-bottom">
        <p>
        {data.data.testimonialExperience}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
