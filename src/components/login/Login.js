import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { USER,ACCESS_TOKEN,setItem } from '../../utils/localstoragemanager';
import { Button, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    email:"",
    password:""
  });
  const handleDataChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUser({...user,[name]:value});
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
  
    if(user.email && user.password){
      const userData=await axiosClient.post("/auth/login",
      {
        email:user.email.toString(),
        password:user.password.toString(),
      });
      
      if(userData.data.statusCode!==(200 || 201)){
        alert(userData.data.result);
      }

      setItem(USER,userData?.data?.result);
      setItem(ACCESS_TOKEN, userData?.data?.result?.accessToken);
      userData.data.statusCode===(200 || 201)?navigate("/"):navigate("/login");
    }else{
      alert("Please Give Credentials:)");
    }
  }

  return (
    <div className="container">
      <div className="login">
        <h2>Login to Coding <span style={{color:"var(--btn-secondary-color)"}}>Shuttle</span></h2>
        <div class="login-input">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <Input
            placeholder='Enter Email'
            type="email"
            name="email"
            // class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleDataChange}
            prefix={<UserOutlined/>}
          />
        </div>

        <div class="login-input">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <Input.Password
          placeholder='Enter Password'
            // type="password"
            name="password"
            // class="form-control"
            id="exampleInputPassword1"
            onChange={handleDataChange}
            prefix={<LockOutlined className="site-form-item-icon"/>}
          />
        </div>
        <button onClick={handleSubmit}  type="submit" class="btn-primary submit-btn">
          Submit
        </button>
        <div className='login-end'>
          <p>Do not have an account? <Link to="/register" style={{color:"#000",fontWeight:"500"}}>Register</Link></p>
          <p>Want to go through Coding Shuttle? <Link to="/" style={{color:"#000",fontWeight:"500"}}>Browse</Link></p>
        </div>
        {/* <p>Not a Member?<Link to='/register' ></Link></p>
        <Link to="/register" ><span style={{color:"000"}}>Sign Up Now</span></Link> */}
        
      </div>
    </div>
  )
}

export default Login