// import React, { useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { userVerify } from "../services/Apis"

// const Otp = () => {
//   const [otp, setOtp] = useState("");

//   const location = useLocation();

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the email exists in location state or local storage
//     const email = location.state || localStorage.getItem('email');
//     if (!email) {
//       navigate('/'); // Redirect to login if email is not found
//     }
//   }, [location, navigate]);

//   const LoginUser = async (e) => {
//     e.preventDefault();

//     if (otp === "") {
//       toast.error("Enter Your Otp")
//     } else if (!/[^a-zA-Z]/.test(otp)) {
//       toast.error("Enter Valid Otp")
//     } else if (otp.length < 6) {
//       toast.error("Otp Length minimum 6 digit")
//     } else {
//       const data = {
//         otp, email: location.state
//       }

//       const response = await userVerify(data);
//       if (response.status === 200) {
//         localStorage.setItem("userdbtoken", response.data.userToken);
//         localStorage.removeItem('email');
//         toast.success(response.data.message);
//         setTimeout(() => {
//           navigate("/dashboard")
//         }, 5000)
//       } else {
//         toast.error(response.response.data.error)
//       }
//     }
//   }

//   return (
//     <>
//       <section>
//         <div className="form_data">
//           <div className="form_heading">
//             <h1>Please Enter Your OTP Here</h1>
//           </div>
//           <form>
//             <div className="form_input">
//               <label htmlFor="otp">OTP</label>
//               <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
//             </div>
//             <button className='btn' onClick={LoginUser}>Submit</button>
//           </form>
//         </div>
//         <ToastContainer />
//       </section>
//     </>
//   )
// }

// export default Otp

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from "../services/Apis";
import "../styles/otp.css"; // Import the new CSS file
// import "../styles/mix.css";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const email = location.state || localStorage.getItem('email');
    if (!email) {
      navigate('/'); // Redirect to login if email is not found
    }
  }, [location, navigate]);

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp");
    } else if (!/^[0-9]+$/.test(otp)) { // Ensure OTP contains only digits
      toast.error("Enter Valid Otp");
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digits");
    } else {
      const data = { otp, email: location.state };

      const response = await userVerify(data);
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        localStorage.removeItem('email');
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 5000);
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <div className="otp-container">
      <div className="left-side">
        <h2>Welcome Back!</h2>
        <p>Verify your OTP to continue</p>
        {/* Optional: Add an image or other content */}
        {/* <img className="otp-image" src="path/to/image.jpg" alt="OTP Verification" /> */}
      </div>
      <div className="right-side">
        <div className="form-heading">
          <h1>Please Enter Your OTP Here</h1>
        </div>
        <form>
          <div className="form-input">
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              name="otp"
              id="otp"
              onChange={(e) => setOtp(e.target.value)}
              placeholder='Enter Your OTP'
            />
          </div>
          <button className='btn' onClick={LoginUser}>Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Otp;
