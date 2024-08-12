


// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { registerfunction } from "../services/Apis";
// import { useNavigate } from "react-router-dom";
// import "../styles/register.css";



// const Register = () => {

//   const [passhow, setPassShow] = useState(false);

//   const [inputdata, setInputdata] = useState({
//     fname: "",
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   // Set input value
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputdata({ ...inputdata, [name]: value });
//   }

//   // Register data
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { fname, email, password } = inputdata;

//     if (fname === "") {
//       toast.error("Enter Your Name");
//     } else if (email === "") {
//       toast.error("Enter Your Email");
//     } else if (!email.includes("@")) {
//       toast.error("Enter Valid Email");
//     } else if (password === "") {
//       toast.error("Enter Your Password");
//     } else if (password.length < 6) {
//       toast.error("Password length minimum 6 characters");
//     } else {
//       const response = await registerfunction(inputdata);

//       if (response.status === 200) {
//         setInputdata({ ...inputdata, fname: "", email: "", password: "" });
//         navigate("./Login");
//       } else {
//         toast.error(response.response.data.error);
//       }
//     }
//   }

//   // Navigate to login page
//   const handleNavigateToLogin = () => {
//     navigate("/login");
//   }

//   return (
//     <>
    
//       <section>
        
//         <div className="form_data">
//           <div className="form_heading">
            
//             <h1>Sign Up</h1>
//             <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage
//               your tasks! We hope that you will like it.</p>
//           </div>
//           <form>
//             <div className="form_input">
//               <label htmlFor="fname">Name</label>
//               <input type="text" name="fname" onChange={handleChange} placeholder='Enter Your Name' />
//             </div>
//             <div className="form_input">
//               <label htmlFor="email">Email</label>
//               <input type="email" name="email" onChange={handleChange} placeholder='Enter Your Email Address' />
//             </div>
//             <div className="form_input">
//               <label htmlFor="password">Password</label>
//               <div className='two'>
//                 <input type={!passhow ? "password" : "text"} name="password" onChange={handleChange} placeholder='Enter Your password' />
//                 <div className='showpass' onClick={() => setPassShow(!passhow)}>
//                   {!passhow ? "Show" : "Hide"}
//                 </div>
//               </div>
//             </div>
//             <button className='btn' onClick={handleSubmit}>Sign Up</button>
//             <p onClick={handleNavigateToLogin} style={{ cursor: "pointer"}}>Already have an account?</p>
//           </form>
//         </div>
//         <ToastContainer />
//       </section>
//     </>
//   )
// }

// export default Register;


import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { registerfunction } from "../services/Apis";
import { useNavigate } from "react-router-dom";
//import "../styles/mix.css";
import "../styles/register.css";

// import signupImage from '../assets/signup-image.png'; // Adjust the path to your image

const Register = () => {
  const [passhow, setPassShow] = useState(false);
  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;

    if (fname === "") {
      toast.error("Enter Your Name");
    } else if (email === "") {
      toast.error("Enter Your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (password === "") {
      toast.error("Enter Your Password");
    } else if (password.length < 6) {
      toast.error("Password length minimum 6 characters");
    } else {
      const response = await registerfunction(inputdata);

      if (response.status === 200) {
        setInputdata({ ...inputdata, fname: "", email: "", password: "" });
        navigate("/login");
      } else {
        toast.error(response.response.data.error);
      }
    }
  }

  const handleNavigateToLogin = () => {
    navigate("/login");
  }

  return (
    <div className="register-container">
      <div className="form-section">
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage
              your tasks! We hope that you will like it.
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" onChange={handleChange} placeholder='Enter Your Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} placeholder='Enter Your Email Address' />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
                <input type={!passhow ? "password" : "text"} name="password" onChange={handleChange} placeholder='Enter Your password' />
                <div className='showpass' onClick={() => setPassShow(!passhow)}>
                  {!passhow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={handleSubmit}>Sign Up</button>
            <p onClick={handleNavigateToLogin} style={{ cursor: "pointer" }}>Already have an account?</p>
          </form>
        </div>
      </div>
      <div className="info-section">
      
        <h2>Welcome to E N V I S I O N</h2>
        <p>Imagine ▶︎ Learn ▶︎ Implement  </p>
        {/* <img src={signupImage} alt="Sign Up" className="signup-image" /> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register;
