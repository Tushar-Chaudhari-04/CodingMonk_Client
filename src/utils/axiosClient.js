import axios from "axios";
import { ACCESS_TOKEN, getItem } from "./localstoragemanager";

let origin = process.env.REACT_APP_LOCAL_BASE_URL;

if (process.env.NODE_ENV === "production") {
  origin = process.env.REACT_APP_SERVER_BASE_URL;
}


const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Z-Key",
    }
  };

export const axiosClient = axios.create({
  baseURL: origin,
  config
});


//Request and Response Interceptors

axiosClient.interceptors.request.use(request=>{
  const accessToken=getItem(ACCESS_TOKEN);
  request.headers["Authorization"]=`Bearer ${accessToken}`
  return request;
});