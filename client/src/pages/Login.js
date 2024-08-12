// import React, { useState } from 'react'
// import { NavLink, useNavigate } from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
// import { sentOtpFunction } from "../services/Apis";
// import Spinner from 'react-bootstrap/Spinner';
// import "../styles/mix.css";


// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [spiner,setSpiner] = useState(false);

    
//     const navigate = useNavigate();

    

//     // sendotp
//     const sendOtp = async (e) => {
//         e.preventDefault();

//         if (email === "") {
//             toast.error("Enter Your Email !")
//         } else if (!email.includes("@")) {
//             toast.error("Enter Valid Email !")
//         } else {
//             setSpiner(true)
//             const data = {
//                 email: email
//             }

//             const response = await sentOtpFunction(data);

//             if (response.status === 200) {
//                 setSpiner(false)
//                 localStorage.setItem('email',email);
//                 // navigate("/user/otp",{state:email});
//                 navigate("/user/otp",{state:email})
//             } else {
//                 toast.error(response.response.data.error);
//             }
//         }
//     }

//     return (
//         <>
//        {/* <Header2/> */}
//             <section>
//                 <div className="form_data">
//                     <div className="form_heading">
//                         <h1>Welcome Back, Log In</h1>
//                         <p>Hi, we are you glad you are back. Please login.</p>
//                     </div>
//                     <form>
//                         <div className="form_input">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
//                         </div>
//                         <button className='btn' onClick={sendOtp}>Login
//                         {
//                             spiner ? <span><Spinner animation="border" /></span>:""
//                         }
//                         </button>
//                         <p>Don't have an account?  <NavLink to="/register">Sign up</NavLink></p>
                       
//                     </form>
//                 </div>
//                 <ToastContainer />
//             </section>
//         </>
//     )
// }

// export default Login

// code with css
import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import "../styles/login.css";
// import "../styles/mix.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [spiner, setSpiner] = useState(false);
    const navigate = useNavigate();

    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !");
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !");
        } else {
            setSpiner(true);
            const data = { email };

            const response = await sentOtpFunction(data);

            if (response.status === 200) {
                setSpiner(false);
                localStorage.setItem('email', email);
                navigate("/user/otp", { state: email });
            } else {
                toast.error(response.response.data.error);
            }
        }
    };

    return (
        <>
            <section>
                <div className="left_side">
                    <h1>Welcome Back!</h1>
                    <p>We're glad to have you back. Please login to continue.</p>
                </div>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Log In</h1>
                        <p>Hi, we're glad you are back. Please login.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn' onClick={sendOtp}>Login
                            {spiner ? <span><Spinner animation="border" /></span> : ""}
                        </button>
                        <p>Don't have an account? <NavLink to="/register">Sign up</NavLink></p>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    );
};

export default Login;
