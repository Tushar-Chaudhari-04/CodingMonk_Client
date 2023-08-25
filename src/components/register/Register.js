import React, { useState } from "react";
import "./Register.scss";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
  });

  const handleDataChange = (e) => {
    e.preventDefault();
    console.log("user",user)
    const {name, value} = e.target;
    console.log("name,value", name, value);
    setUser({...user,[name]:value});
    console.log("user", user);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("user data", user);
  
    if(user.password===user.confirmPassword){
      const userData=await axiosClient.post("/auth/register",
      {
        firstName:user.firstName.toString(),
        lastName:user.lastName.toString(),
        email:user.email.toString(),
        password:user.password.toString(),
        mobileNo:user.mobileNo.toString(),
      });
      console.log("userData",userData)
      userData.data.statusCode===(200 || 201)?navigate("/login"):navigate("/register");
    }else{
      alert("Please use same password for confirm password :)");
    }
  }

  return (
    <div className="container">
      <div className="register">
        <h2>Register to Coding Shuttle</h2>
        <div className="register-input">
          <label htmlFor="exampleInputFirstName" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="exampleInputFirstName"
            onChange={handleDataChange}
          />
        </div>
        <div className="register-input">
          <label htmlFor="exampleInputLastName" className="form-label">
            LastName
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="exampleInputLastName"
            onChange={handleDataChange}
          />
        </div>
        <div className="register-input">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleDataChange}
          />
        </div>

        <div className="register-input">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleDataChange}
          />
        </div>

        <div className="register-input">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="exampleInputPassword2"
            onChange={handleDataChange}
          />
        </div>

        <div className="register-input">
          <label htmlFor="exampleInputMobNo" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            name="mobileNo"
            className="form-control"
            id="exampleInputMobNo"
            onChange={handleDataChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn-primary submit-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;