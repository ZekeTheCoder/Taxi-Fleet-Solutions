import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginRegisterFormStyles.css";

function LoginForm() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${loginData.email}`
      );
      const users = await response.json();

      if (users.length > 0 && users[0].password === loginData.password) {
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <>
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder=""
            value={loginData.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder=""
            value={loginData.password}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <p className="para-2">
        Not have an account? <a href="/register">Sign Up Here</a>
      </p>
    </>
  );
}

export default LoginForm;
