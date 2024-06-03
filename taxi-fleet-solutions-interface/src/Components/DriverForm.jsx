import React, { useState } from "react";
import "./styles/registerForm.css"; // Ensure you have the appropriate CSS file

function DriverForm() {
  //   const [expenses, setExpenses] = useState([]);
  //   const [incomes, setIncomes] = useState([]);
  //   const [salary, setSalary] = useState([]);
  const [driverDetails, setDriverDetails] = useState({
    fullName: "",
    vehiclePlate: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      driverDetails,
    });
  };

  return (
    <div className="form-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form first">
          <div className="details personal">
            <span className="title">Driver Details</span>

            <div className="fields">
              <div className="input-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter driver name"
                  name="fullName"
                  value={driverDetails.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter driver email"
                  name="email"
                  value={driverDetails.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter driver phone number"
                  name="phone"
                  value={driverDetails.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Gender</label>
                <select
                  name="gender"
                  value={driverDetails.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="input-field">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter driver address"
                  name="address"
                  value={driverDetails.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Vehicle Plate</label>
                <input
                  type="number"
                  name="vehiclePlate"
                  placeholder="Enter driver vehicle plate"
                  value={driverDetails.vehiclePlate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Enter your customer description"
                  name="description"
                  value={driverDetails.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="buttons">
                <button type="submit" className="submit">
                  <span className="btnText">Submit</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DriverForm;
