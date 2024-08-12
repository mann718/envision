 import { commonrequest } from "./ApiCall";
 import {BACKEND_URL} from "./Helper";


 export const registerfunction = async(data)=>{
     return await commonrequest("POST",`${BACKEND_URL}/user/register`,data)
 }

 export const sentOtpFunction = async(data)=>{
     return await commonrequest("POST",`${BACKEND_URL}/user/sendotp`,data)
 }

 export const userVerify = async(data)=>{
     return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
 }




// import { commonrequest } from "./ApiCall";
// import { BACKEND_URL } from "./Helper";

// export const registerfunction = async(data) => {
//     console.log("registerfunction data: ", data);
//     return await commonrequest("POST", `${BACKEND_URL}/user/register`, data);
// }

// export const sentOtpFunction = async(data) => {
//     console.log("sentOtpFunction data: ", data);
//     return await commonrequest("POST", `${BACKEND_URL}/user/sendotp`, data);
// }

// export const userVerify = async(data) => {
//     console.log("userVerify data: ", data);
//     return await commonrequest("POST", `${BACKEND_URL}/user/login`, data);
// }
