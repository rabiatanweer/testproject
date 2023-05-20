import React, { useState } from 'react'
import style from  '../styles/Signup.module.css'




export default function LogIn() {
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  const [validLogin, setvalidLogin]= useState("Please fill in this form to LogIn an account.")
  
 
  
  const handleEmailChange= (e)=>{
      setEmail(e.target.value);
  };
  const handlePasswordChange= (e)=>{
      setPassword(e.target.value);
  };
   let inputEmail= localStorage.getItem(`email-${email}`)
   let inputPassword= localStorage.getItem(`password-${email}`)
    function handleSubmit(e){
      e.preventDefault();
      if(email===inputEmail && password===inputPassword){

     localStorage.setItem("login", true)
      window.location.href = "/userquote";
        console.log(email, password, "hello")
        localStorage.setItem("useremail", email)
      }
      else{
        setvalidLogin("Invalid email or password, please try again")
        localStorage.setItem("login", false)
      }

    }

  return (
    <div className={style.main}> 
      <form >
  <div className={style.container}>
    <h1>Log In</h1>
    <p>{validLogin}</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email"value={email} onChange={handleEmailChange} required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={handlePasswordChange} required />
   
    
    <div className= {style.clearfix}>
      
      <button type="submit" className={style.signupbtn} onClick={handleSubmit}>Log In</button>
    </div>
  </div>
</form>
    </div>
  )
}
