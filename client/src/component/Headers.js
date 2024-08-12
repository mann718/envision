// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Headers = () => {
//   return (
//     <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Envision</Navbar.Brand>
//           <Nav className="">
//             <Nav.Link href="#home">Register</Nav.Link>
//             </Nav>
//         </Container>
//       </Navbar>
//   )
// }

// export default Headers

// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Headers = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("userdbtoken");
//     if (token) {
//       setIsSignedIn(true);
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem("userdbtoken");
//     setIsSignedIn(false);
//   };

//   return (
//     <Navbar bg="dark" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="#home">Envision</Navbar.Brand>
//         <Nav className="">
//           {isSignedIn ? (
//             <Nav.Link href="/Login" onClick={handleSignOut}>Sign Out</Nav.Link>
//           ) : (
//             <Nav.Link href="/register">Register</Nav.Link>
//           )}
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Headers;


// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import NavLink from 'react-bootstrap/esm/NavLink';

// const Headers = () => {
  
//   return (
//     <Navbar bg="dark" data-bs-theme="dark">
//       <Container>
       
       
//         <Nav className="">
//         <Link to="/register">Sign up</Link>
//         <Link to="/login">Sign in</Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Headers;


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './E (3).png'; // Adjust the path to your logo file

const Headers = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav">
          <Link to="/register" className="nav-link">Sign up</Link>
          <span className='seperator'>/</span>
          <Link to="/login" className="nav-link">Sign in</Link>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
