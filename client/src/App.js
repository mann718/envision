// import React from 'react';
// import Login from './pages/Login';
// import Register from './pages/Register'
// import Dashboard from './pages/Dashboard';
// import Otp from './pages/Otp';
// import Error from './pages/Error';
// import { Routes,Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
// import Home from './pages/Home';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/register' element={<Register/>}/>
//         <Route path='/dashboard' element={<Dashboard/>}/>
//         <Route path='/user/otp' element={<Otp/>}/>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='*' element={<Error/>}/>
//       </Routes>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './component/footer';

function App() {
  const location = useLocation();

  const getTransitionClassNames = () => {
    switch (location.pathname) {
      case '/register':
        return {
          enter: 'page-enter page-enter-right',
          enterActive: 'page-enter-active',
          exit: 'page-exit page-exit-left',
          exitActive: 'page-exit-active-left',
        };
      case '/login':
        return {
          enter: 'page-enter page-enter-left',
          enterActive: 'page-enter-active',
          exit: 'page-exit page-exit-right',
          exitActive: 'page-exit-active-right',
        };
       case '/user/otp':
        return{
            enter: 'page-enter page-enter-right',
            enterActive: 'page-enter-active',
            exit: 'page-exit page-exit-left',
            exitActive: 'page-exit-active-left',
        };
        case '/':
        return{
            enter: 'page-enter page-enter-left',
          enterActive: 'page-enter-active',
          exit: 'page-exit page-exit-right',
          exitActive: 'page-exit-active-right',
        };
      default:
        return {};
    }
  };

  const transitionClassNames = getTransitionClassNames();

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames={transitionClassNames}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/otp" element={<Otp />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
