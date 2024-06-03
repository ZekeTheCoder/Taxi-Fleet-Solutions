import React, { useState } from "react";
import "./styles/registerForm.css";

function CustomerForm() {
  const [customerDetails, setCustomerDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    paymentDate: "",
    expiryDate: "",
    amount: "",
    pickUpLocation: "",
    dropOffLocation: "",
    description: "",
    status: "", // active, offline, owing
    type: "", // weekly, monthly, once off
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      customerDetails,
    });
  };

  return (
    <div className="form-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form first">
          <div className="details personal">
            <span className="title">Customer Details</span>

            <div className="fields">
              <div className="input-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullName"
                  value={customerDetails.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={customerDetails.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  value={customerDetails.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Gender</label>
                <select
                  name="gender"
                  value={customerDetails.gender}
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
                  placeholder="Enter your address"
                  name="address"
                  value={customerDetails.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Payment Date</label>
                <input
                  type="date"
                  name="paymentDate"
                  value={customerDetails.paymentDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={customerDetails.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Amount Paid</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter Expense/Income Amount"
                  value={customerDetails.amount}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Type</label>
                <select
                  name="type"
                  value={customerDetails.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option>weekly</option>
                  <option>monthly</option>
                  <option>Once-off</option>
                </select>
              </div>

              <div className="input-field">
                <label>Status</label>
                <select
                  name="status"
                  value={customerDetails.status}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option>active</option>
                  <option>Due</option>
                  <option>Terminated</option>
                </select>
              </div>

              <div className="input-field">
                <label>Pick Up Location</label>
                <input
                  type="text"
                  placeholder="Enter pick Up Location"
                  name="pickUpLocation"
                  value={customerDetails.pickUpLocation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Drop Off Location</label>
                <input
                  type="text"
                  placeholder="Enter Drop Off Location"
                  name="dropOffLocation"
                  value={customerDetails.dropOffLocation}
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
                  value={customerDetails.description}
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

export default CustomerForm;
