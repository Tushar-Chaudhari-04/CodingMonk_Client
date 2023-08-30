import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import axios from "axios";
import { Button, Input, message } from "antd";
import { LockOutlined, UserOutlined,MobileOutlined } from "@ant-design/icons";

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
    const {name, value} = e.target;
    console.log("name,value", name, value);
    setUser({...user,[name]:value});
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
  // if(!user.firstName || !user.lastName || !user.email || !user.password || !user.mobileNo){
  //   alert("All Fields are Mandatory:)");
  
  // }
  console.log("user",user);
    if(user.password===user.confirmPassword){
      const userData=await axiosClient.post("/auth/register",
      {
        firstName:user.firstName.toString(),
        lastName:user.lastName.toString(),
        email:user.email.toString(),
        password:user.password.toString(),
        mobileNo:user.mobileNo.toString(),
      });
      console.log("userData.data.statusCode 1",userData.data.statusCode);
      
      if(userData.data.statusCode!==201){
        alert(userData.data.result);
      }

      if(userData.data.statusCode===201){
        console.log("userData.data.statusCode===201",userData.data.statusCode)
        navigate("/login")
      }else{
        navigate("/register")
      } 
    }else{
      alert("Please use same password for confirm password :)");
    }
  }

  return (
    <div className="container">
      <div className="register">
        <h2>Register to Coding <span style={{color:"var(--btn-secondary-color)"}}>Shuttle</span></h2>
        <div className="register-input">
          <label htmlFor="exampleInputFirstName" className="form-label">
            First Name
          </label>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input-field"
            //className="form-control"
            id="exampleInputFirstName"
            onChange={handleDataChange}
          />
        </div>
        <div className="register-input">
          <label htmlFor="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input-field"
            //className="form-control"
            id="exampleInputLastName"
            onChange={handleDataChange}
          />
        </div>
        <div className="register-input">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-field"
            //className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleDataChange}
            prefix={<UserOutlined/>}
          />
        </div>

        <div className="register-input">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <Input.Password
            placeholder="Passowrd"
            name="password"
            className="input-field"
            //className="form-control"
            id="exampleInputPassword1"
            onChange={handleDataChange}
            prefix={<LockOutlined className="site-form-item-icon"/>}
          />
        </div>

        <div className="register-input">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <Input.Password
          placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            className="input-field"
            //className="form-control"
            id="exampleInputPassword2"
            onChange={handleDataChange}
            prefix={<LockOutlined className="site-form-item-icon"/>}
          />
        </div>

        <div className="register-input">
          <label htmlFor="exampleInputMobNo" className="form-label">
            Mobile Number
          </label>
          <Input
            type="number"
            name="mobileNo"
            placeholder="Mobile Number"
            className="input-field"
            //className="form-control"
            id="exampleInputMobNo"
            onChange={handleDataChange}
            prefix={<MobileOutlined />}
          />
        </div>
        <Button
          onClick={handleSubmit}
          type="submit"
          className="btn-primary submit-btn"
        >
          Submit
        </Button>
        <div className='register-end'>
          <p>Already Register? <Link to="/login" style={{color:"#000",fontWeight:"500"}}>Login</Link></p>
          <p>Want to go through Coding Shuttle? <Link to="/" style={{color:"#000",fontWeight:"500"}}>Browse</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;