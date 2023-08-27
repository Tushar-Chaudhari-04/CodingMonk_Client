import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axiosClient} from "../../utils/axiosClient"

export const getMyProfile=createAsyncThunk("/user/getMyProfile",async(body)=>{
    try {
        const response=await axiosClient.get("/user/getMyProfile");
        return response.data.result;
    } catch (err) {
        Promise.reject(err);
        console.log("err",err)
    }
})
const userSlice=createSlice({
    name:"userSlice",
    initialState:{
        getMyInfo:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(getMyProfile.fulfilled,(state,action)=>{
            state.getMyInfo=action.payload
        })
    }
})

export default userSlice.reducer;
//export const {}=userSlice.actions;