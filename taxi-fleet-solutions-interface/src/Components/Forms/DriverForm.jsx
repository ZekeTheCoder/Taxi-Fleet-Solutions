import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./form1.css";

const API_URL = "http://localhost:5000/drivers";

function DriverForm() {
  const [drivers, setDrivers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editDriverId, setEditDriverId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [driverDetails, setDriverDetails] = useState({
    id: "",
    fullName: "",
    vehiclePlate: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get(API_URL);
      setDrivers(response.data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        await axios.put(`${API_URL}/${editDriverId}`, driverDetails);
        setIsEditing(false);
        setEditDriverId(null);
      } catch (error) {
        console.error("Error updating driver:", error);
      }
    } else {
      try {
        await axios.post(API_URL, {
          ...driverDetails,
          id: Date.now().toString(),
        });
      } catch (error) {
        console.error("Error adding driver:", error);
      }
    }
    setDriverDetails({
      id: "",
      fullName: "",
      vehiclePlate: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      description: "",
    });
    fetchDrivers();
  };

  const handleDeleteDriver = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchDrivers();
    } catch (error) {
      console.error("Error deleting driver:", error);
    }
  };

  const handleEditDriver = (driver) => {
    setIsEditing(true);
    setEditDriverId(driver.id);
    setDriverDetails(driver);
  };

  return (
    <div className="form-container">
      <div className="btn-container">
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Driver"}
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
                <h2>Driver Details</h2>
              </div>

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
                      Select driver gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
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
                    type="text"
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
                    placeholder="Enter your driver description"
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
      )}

      {/* Drivers list */}
      {drivers.length > 0 ? (
        <div className="expenses-list">
          <h2>Drivers List</h2>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Vehicle Plate</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate over drivers array to display each driver */}
              {drivers.map((driver) => (
                <tr key={driver.id}>
                  <td>{driver.fullName}</td>
                  <td>{driver.email}</td>
                  <td>{driver.phone}</td>
                  <td>{driver.gender}</td>
                  <td>{driver.address}</td>
                  <td>{driver.vehiclePlate}</td>
                  <td>{driver.description}</td>
                  <td>
                    {/* Buttons for edit and delete */}
                    <button onClick={() => handleEditDriver(driver)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteDriver(driver.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No drivers. Add a new drivers.</p>
      )}
    </div>
  );
}

export default DriverForm;
