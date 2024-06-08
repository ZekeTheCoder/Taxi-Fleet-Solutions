import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./form-style.css";

const API_URL = "http://localhost:5000/customers";

function CustomerForm() {
  const [customers, setCustomers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    id: "",
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    paymentDate: "",
    expiryDate: "",
    pickUpLocation: "",
    dropOffLocation: "",
    description: "",
    status: "",
  });

  // creating a navigate variable to redirect
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(API_URL);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(customerDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      try {
        await axios.put(`${API_URL}/${editCustomerId}`, customerDetails);
        setIsEditing(false);
        setEditCustomerId(null);
      } catch (error) {
        console.error("Error updating customer:", error);
      }
    } else {
      try {
        await axios.post(API_URL, {
          ...customerDetails,
          id: Date.now().toString(),
        });
      } catch (error) {
        console.error("Error adding customer:", error);
      }
    }

    setCustomerDetails({
      id: "",
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      paymentDate: "",
      expiryDate: "",
      pickUpLocation: "",
      dropOffLocation: "",
      description: "",
      status: "",
    });

    fetchCustomers();
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleEditCustomer = (customer) => {
    setShowForm(!showForm);
    setIsEditing(true);
    setEditCustomerId(customer.id);
    setCustomerDetails(customer);
  };

  return (
    <div className="form-container">
      <div className="btn-container">
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Customer"}
        </button>
        <button className="btn" onClick={() => navigate("/dashboard")}>
          back
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <div className="titleback">
                <h2>Customer Details</h2>
              </div>

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
                    <span className="btnText">
                      {isEditing ? "Update" : "Submit"}
                    </span>
                    <i className="uil uil-navigator"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* Customers list */}
      {customers.length > 0 ? (
        <div className="expenses-list">
          <h2>Customers List</h2>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Payment Date</th>
                <th>Expiry Date</th>
                <th>Pick Up Location</th>
                <th>Drop Off Location</th>
                <th>Description</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.fullName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.address}</td>
                  <td>{customer.paymentDate}</td>
                  <td>{customer.expiryDate}</td>
                  <td>{customer.pickUpLocation}</td>
                  <td>{customer.dropOffLocation}</td>
                  <td>{customer.description}</td>
                  <td>{customer.status}</td>
                  <td>
                    <button onClick={() => handleEditCustomer(customer)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteCustomer(customer.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No customers. Add a new customer.</p>
      )}
    </div>
  );
}

export default CustomerForm;
