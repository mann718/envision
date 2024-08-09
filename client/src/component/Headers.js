// // import React from 'react'
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';

// // const Headers = () => {
// //   return (
// //     <Navbar bg="dark" data-bs-theme="dark">
// //         <Container>
// //           <Navbar.Brand href="#home">Envision</Navbar.Brand>
// //           <Nav className="">
// //             <Nav.Link href="#home">Register</Nav.Link>
// //             </Nav>
// //         </Container>
// //       </Navbar>
// //   )
// // }

// // export default Headers

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



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    const token = localStorage.getItem("userdbtoken");
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("userdbtoken");
    setIsSignedIn(false);
    navigate('/login');  // Redirect to the login page after sign-out
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Envision</Navbar.Brand>
        <Nav className="">
          {isSignedIn ? (
            <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
          ) : (
            <Nav.Link href="/register">Register</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Headers;
