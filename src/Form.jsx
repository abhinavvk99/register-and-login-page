import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerSuccess } from './counterSlice';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Form = () => {
  
  const navigate=useNavigate()
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userType,setuserType] = useState('');


  const dispatch = useDispatch()

  const handlesubmit=()=>{
    dispatch(registerSuccess({username,password,userType}))
    if (username,password,userType===username,password,userType) {
      toast.success('registration succesful', {
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
      navigate('/login');
    }, 2000);
    } else {
      toast.error('enter data', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }); 
    }
  };

  return (
    <>
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
    <section className='hai'>
        <div className='box'>
        <h1>register</h1>
        <label>username: <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='username' /></label>
        <label>password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' /></label>
        <label>email: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' /></label>
        <label >usertype:
          <select value={userType} onChange={(e)=>setuserType(e.target.value)} className='custom-select'>
          <option>select user</option>
          <option>Student</option>
          <option >Teacher</option>
          <option>Admin</option>
          </select>
        </label>
        <button onClick={handlesubmit}>submit</button>
        </div>
    </section>
    </>
  )
}
