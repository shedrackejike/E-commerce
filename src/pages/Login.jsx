import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import LogData from '../Components/LogData';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated} = useSelector((state) => state.user);

  useEffect(() =>{
    if (isAuthenticated === true) {
      navigate("/")
    }

  },[])

  
  return (
    <div>
        <LogData
        />
    </div>
  )
}

export default Login;
