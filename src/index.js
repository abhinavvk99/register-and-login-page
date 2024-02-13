import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form } from './Form';
import { Navigation } from './Navbar';
import { Login } from './Login';
import { Student } from './Student';
import { Teacher } from './Teacher';
import { Admin } from './Admin';
import { Provider } from 'react-redux';
import { store } from './store';
import { Home } from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
