import React from "react";
import "./ProgramBenefits.scss";
import ProgramBeniftsCard from "../pb-card/ProgramBeniftsCard";
import ProgramBenifitsData from "../../CodingBaba Database/ProgramBenifitsData";

const ProgramBenefits = () => {
  return (
    <div className="container">
    <div className="pb-section">
      <div className="program-beneifts">
        <h5 style={{ color: "var(--btn-secondary-color)" }}>
          PROGRAM BENEFITS
        </h5>
        <h1>
          Here Is What You Get{" "}
          <span style={{ color: "var(--btn-secondary-color)" }}>
            Out Of This Program
          </span>
        </h1>
      </div>
      <div className="pb-card-section">
          {ProgramBenifitsData.map((data) => (
            <ProgramBeniftsCard key={data.id} data={data} />
          ))}
        </div>
        </div>
    </div>
  );
};

export default ProgramBenefits;
