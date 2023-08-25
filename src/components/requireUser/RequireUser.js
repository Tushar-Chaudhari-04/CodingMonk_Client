import React from 'react'
import {useSelector} from "react-redux"
import Home from "../../pages/home/Home"
import Login from "../login/Login"
import { USER, getItem } from '../../utils/localstoragemanager'
import { Navigate, Outlet } from 'react-router-dom'

const RequireUser = () => {
    const user=getItem(USER);
    console.log("user",user);

    return (
    <>
        {user?<Outlet/>:<Navigate to="/"/>}
    </>
  )
}

export default RequireUser