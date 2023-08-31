import React from "react";
import "./TopTech.scss";
import AmazonImg from "../../assets/amazon.0c3e0f6fb281de5d9536.webp";
import AdobeImg from "../../assets/adobe.c6a586981b3695d680df.webp";
import PaytmImg from "../../assets/paytm.cad9089c9d97f44973fd.webp";
import AtlassianImg from "../../assets/atlassian.f7c278ba26ae9a73b184.webp";
import MicrosoftImg from "../../assets/microsoft.4d55c9d64bfffa379ce3.webp";
import OracleImg from "../../assets/oracle.6e911e7d6c83a7e2df12.webp";

const TopTech = () => {
  return (
    <div className="container">
      <div className="trusted-company-container">
        <h1>Top Tech Companies <span>Hire Our Students</span></h1>
        <div class="trusted-company-img-container">
          <img src={AmazonImg} alt="amazon" loading="lazy" />
          <img src={AdobeImg} alt="adobe" loading="lazy" />
          <img src={PaytmImg} alt="paytm" loading="lazy" />
          <img src={AtlassianImg} alt="atlassian" loading="lazy" />
          <img src={MicrosoftImg} alt="microsoft" loading="lazy" />
          <img src={OracleImg} alt="oracle" loading="lazy" />
          <span class="secondary-heading">+100 More</span>
        </div>
      </div>
    </div>
  );
};

export default TopTech;
