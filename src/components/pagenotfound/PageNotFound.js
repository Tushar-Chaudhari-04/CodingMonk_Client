import React from "react";
import "./PageNotFound.scss";
import PageNotFoundImg from "../../assets/pagenotfound/pagenotfound.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="page-not-found">
        <div className="page-not-found-img">
          <img className="pageNotFoundImg" src={PageNotFoundImg} alt="PageNotFoundImg" />
        </div>
        <div className="page-not-found-details">
          <h1 className="error">404</h1>
          <p>Page Not Found</p>
          <button className="btn-primary pagenotfound-btn">
            <Link to="/">Go To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
