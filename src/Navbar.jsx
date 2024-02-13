import { Link, Outlet } from 'react-router-dom'
import './App.css'

export const Navigation = () => {
  return (
    <>
    <div className=' nav'>
        <Link to={'/'} style={{textDecoration:'none'}}><div>Home</div></Link>
        <Link to={'/form'} style={{textDecoration:'none'}}><div>Register</div></Link>
        <Link to={'/login'} style={{textDecoration:'none'}}><div>Login</div></Link>
    </div>
    
    <Outlet/>
    </>
  )
}
