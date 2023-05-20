import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../styles/Navbar.module.css'



export default function Navbar() {
  const [Login, setLogIn]= useState(false);
  

const navigate = useNavigate();
useEffect(()=>{
  const storedLogin = JSON.parse(localStorage.getItem('login'));
  setLogIn(storedLogin);
},[]
)
 function logoutHandler(){
    localStorage.setItem("login", false)
    setLogIn(false)
    navigate("/")
    
 }
 
  return (
    <div className={style.navbar}>
      {Login? (<> 
        <div> <Link className={style.text} to= '/userquote'>UserQuotes</Link> </div>
        <div className={style.text} onClick={logoutHandler}> Logout </div>
      </>): (<> 
        <div> <Link className={style.text} to= '/'>Quotes</Link> </div>
      
      <div> <Link className={style.text} to= '/signUp'>SignUp</Link> </div>
      <div> <Link className={style.text} to= '/logIn'>LogIn</Link> </div>
      </>)}
       
      
    </div>
  )
}
