import React from "react";
import "./About.scss";
import AnujKumar from "../../assets/anuj-bhaiya.63a6af52ee6f42718d62.webp";

const About = () => {
  return (
    <div className="container">
      <div className="about" id="about">
        <h1>👋 From The Founder</h1>
        <div className="about-main">
          <div className="about-left">
            <img src={AnujKumar} alt="AnujKumar" />
          </div>
          <div className="about-right">
            <p className="about-details">
              Hello Everyone, I understand that there is an overwhelming number
              of online courses, tutorials, and books out there. There are some
              great ones. But most of them are outdated, overly complicated, and
              don't teach proper skills. Most people feel paralyzed and don't
              know where to start when learning complex topics and many don't
              have 3 Lakhs Rupees to spend on a coding boot camp. Programming &
              tech skills should be affordable and open to all. And educational
              materials should teach real-life skills that are current and not
              waste your valuable time. This has been our mission from Day 1 and
              this is what Coding Shuttle is all about.
            </p>

            <p className="about-details">
              A lot of students around the world have taken our previous courses
              and many of them are now working in their dream job at companies
              like <b>Microsoft,</b> <b>Google,</b> <b>Amazon,</b> <b>Atlassian</b> just to name a few.
            </p>

            <p className="about-details">You can too.</p>
            <p className="about-details">See you inside,</p>
            <p className="about-details" style={{marginBottom:"0rem"}}>Anuj Kumar</p>
            <p className="about-details">Founder of Coding Shuttle</p>
            <p className="about-details">Ex SDE-Amazon   Ex SDE-Urban-Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
