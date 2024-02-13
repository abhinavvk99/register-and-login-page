import React, { useState }  from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from './counterSlice'
import { Student } from './Student'
import { Teacher } from './Teacher'
import { Admin } from './Admin'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


export const Login = () => {
const navigate=useNavigate()
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')

  const users = useSelector((state)=> state.auth.users);

  const handleLogin = ()=> {
    if(users.username==username && users.password==password)
    {
    if(users.userType=='Student'){
      toast.success('welcome student', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          navigate('/student');
        }, 1000);    }
    else if (users.userType=='Teacher') {
      toast.success('welcome Teacher', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          navigate('/teacher');
        }, 1000);     }
    else if(users.userType=='Admin'){
      toast.success('welcome Admin', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          navigate('/admin');
        }, 1000);     }
    else{
      toast.error('invaild user', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });     }
    }else{
      toast.error('incorrect password or user', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });    }
  };

  
  return (
    <>
    <div className='mainbox'>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>
      <div className='box'>
        <h1>Login</h1>
        <label>username: <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='username' /></label>
        <label>password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='password' /></label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </>    
  )
}
