import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input
          id="loginIpt"
          type="email"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label htmlFor="">Password</label>
        <input
          id="loginPassword"
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginBtn">Login</button>
      </form>
      <button className="loginRegisterBtn">Register</button>
    </div>
  );
}
