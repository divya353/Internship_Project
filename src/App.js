import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import '../src/Css/Main.css';
import Answer from './Component/Answer';
import Follow from './Component/Follow';
import Home from './Component/Home';
import Login from './Component/Login';
import Nav from './Component/Nav';
import PrivateRoute from './Component/PrivateRoute';
import Signup from './Component/Signup';


function App() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem('Auth') === 'true';
    setAuth(storedAuth);
  }, [navigate]);

  useEffect(() => {
    if (auth) {
      navigate('/home');
    }
  }, [auth]);

  return (
    <>
      {auth && <Nav />}
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        
        {/* Protected Routes */}
        <Route path='/home' element={<PrivateRoute element={Home} />} />
        <Route path='/follow' element={<PrivateRoute element={Follow} />} />
        <Route path='/answer' element={<PrivateRoute element={Answer} />} />

        {/* Redirect from root path */}
        <Route path='/' element={<Navigate to={auth ? '/home' : '/login'} />} />
      </Routes>
    </>
  );
}

export default App;
