import React, { useState } from "react";
import style from "../styles/Signup.module.css";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState(
    "Please fill in this form to create an account."
  );

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    
      if (password.length >= 8) {
        const existingEmail = localStorage.getItem(`email-${email}`);
        if (existingEmail) {
          setLogin("This email already exists. Try with new one");
        } else {
          localStorage.setItem(`name-${email}`, userName)
          localStorage.setItem(`email-${email}`, email);
          localStorage.setItem(`password-${email}`, password);
          setLogin("Your account has been created.");
          setEmail("");
          setPassword("");
          setUserName("");
        }
      } else {
        setLogin("Password should be at least 8 characters long.");
      }
    
  };
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit}>
        <div className={style.container}>
          <h1>Sign Up</h1>
          <p> {login}</p>
          <hr />
          <label htmlFor="Name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={userName}
            onChange={handleNameChange}
            required
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <div className={style.clearfix}>
            <button type="submit" className={style.signupbtn}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
