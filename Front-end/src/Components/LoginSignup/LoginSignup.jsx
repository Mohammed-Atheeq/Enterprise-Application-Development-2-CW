import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginSignup.css";
import logo from "../Assets/logo.png";


const LoginSignup = () => {
  //let test1;
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const testid = 11;
  
  const switchToLogin = () => {
    setActiveForm("login");
    //<Link to = {/HomePage/${testid}}></Link>
  };

  const switchToSignup = () => {
    setActiveForm("signup");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8087/fly-loka/login",
        // "http://192.168.190.184:8087/fly-loka/login",
        { email, password }
      );
  
      // Log the response data
      //console.log("Response Data:", response.data);

      
  
      if (response.status === 200) {
        setError("");
        // Split userDetails into ID and role if the response data is a string
        if (typeof response.data === "string") {
          const [fetchedUserId, fetchedRole] = response.data.split(",");
          // Store ID and role in separate state variables
          //setUserId(fetchedUserId);
          //setRole(fetchedRole);
          // Continue with your logic based on the role
          //localStorage.setItem("fetchedUserId", fetchedUserId);

          
          if (fetchedRole === "admin") {
            console.log("Role:", fetchedRole);
            console.log("User ID:", fetchedUserId);
           
            navigate("/AdminHome");
          } else if (fetchedRole === "user") {
            //console.log("Role:", fetchedRole);
            //console.log("User ID:", fetchedUserId);
            
            navigate(`/HomePage/${fetchedUserId}`);
            //navigate(/Profile/${fetchedUserId});
          }
        } else {
          setError("Invalid response data format.");
        }
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in. Please try again.");
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8087/fly-loka/user",
        { username, email, password,role:"user" }
      );

      if (response.status === 200) {
        // Signup successful, navigate to login page
        alert("Signup Successful")
        switchToLogin();
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <div className="logo-container">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="form-buttons">
          <button
            onClick={switchToLogin}
            className={activeForm === "login" ? "active" : ""}
          >
            Login
          </button>
          <button
            onClick={switchToSignup}
            className={activeForm === "signup" ? "active" : ""}
          >
            Signup
          </button>
        </div>

        {activeForm === "login" && (
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="button" onClick={handleLogin}>
              Login
        </button>
          </form>
        )}

        {activeForm === "signup" && (
          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Signup</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="button" onClick={handleSignup}>
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
};


export default LoginSignup;