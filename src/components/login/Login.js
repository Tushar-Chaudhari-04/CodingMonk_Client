import React, { useState } from 'react'
import "./Login.scss"
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { USER,ACCESS_TOKEN,setItem } from '../../utils/localstoragemanager';

const Login = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    email:"",
    password:""
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
  
    if(user.email && user.password){
      const userData=await axiosClient.post("/auth/login",
      {
        email:user.email.toString(),
        password:user.password.toString(),
      });
      console.log("userData",userData)
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
        <h2>Login to Coding Shuttle</h2>
        <div class="login-input">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleDataChange}
          />
        </div>

        <div class="login-input">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={handleDataChange}
          />
        </div>
        <button onClick={handleSubmit}  type="submit" class="btn-primary submit-btn">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Login