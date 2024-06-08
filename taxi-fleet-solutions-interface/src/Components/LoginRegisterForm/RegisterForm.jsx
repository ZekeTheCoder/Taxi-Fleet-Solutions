import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginRegisterFormStyles.css";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        alert("Failed to register");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering");
    }
  };

  return (
    <>
      <div className="forms">
        <div className="signup-box">
          <h1>Sign Up</h1>
          <h4>It's free and only takes a minute</h4>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
          <p>
            By clicking the Sign Up button, you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
          </p>
        </div>
        <p className="para-2">
          Already have an account? <a href="login">Login here</a>
        </p>
      </div>
    </>
  );
}

export default RegisterForm;
