import React from "react";
import "./FAQS.scss";
import FAQCard from "../faq-card/FAQCard";
import FAQsData from "../../CodingBaba Database/FAQsData";

const FAQS = () => {
  return (
    <div className="container">
      <div className="faqs">
        <h2 style={{ textAlign: "center" }}>Frequently Asked <span style={{color:"#007bff"}}>Questions</span></h2>
        <div className="faq-card-section">
          {FAQsData.map(data=>(
            <FAQCard data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
