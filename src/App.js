import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Adduser from './Pages/Managment/Adduser';
import Search from './Pages/Search';
import Splashsreen from './Pages/Splashsreen';
import GetUser from './Pages/Managment/GetUser';
import EditUser from './Pages/Managment/EditUser';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(()=>{
    setIsAuthenticated( JSON.parse(localStorage.getItem('token')));
  },[])
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Splashsreen/>}/>
            <Route path='/log' element={<Login/>}/>
            <Route  path='/home' element={isAuthenticated !=null ? <Home /> : <Navigate to="/log" />} />
            <Route  path='/adduser' element={isAuthenticated !=null?  <Adduser/> : <Navigate to="/log" />}/>
            <Route   path='/recherche' element={isAuthenticated !=null  ? <Search /> : <Navigate to="/log" />}/>
            <Route   path='/getuser' element={isAuthenticated !=null  ? <GetUser /> : <Navigate to="/log" />}/>
            <Route   path='/edituser' element={isAuthenticated !=null  ? <EditUser /> : <Navigate to="/log" />}/>    
        </Routes>
      </Router>
    </>
  );
}

export default App;
