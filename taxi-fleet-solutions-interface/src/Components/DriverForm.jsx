import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/form.css";

function DriverForm() {
  const [drivers, setDrivers] = useState([
    {
      fullName: "Thabang Maphangisane",
      vehiclePlate: "FZ 09 FT GP",
      email: "thabangh647@gmail.com",
      phone: "0729959556",
      gender: "Male",
      address: "112 Rabie street, Randburg,2188",
      description: "tall and dark",
    },
    {
      fullName: "Thabang Maphangisane",
      vehiclePlate: "FZ 09 FT GP",
      email: "thabangh647@gmail.com",
      phone: "0729959556",
      gender: "Male",
      address: "112 Rabie street, Randburg,2188",
      description: "tall and dark",
    },
  ]);
  const [driverDetails, setDriverDetails] = useState({
    fullName: "",
    vehiclePlate: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    description: "",
  });
  // creating a navigate variable to redirect
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDrivers([...drivers, driverDetails]);

    console.log({
      driverDetails,
    });
  };

  const handleDeleteDrivers = (id, driver) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
    // setTotal(length(customers));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form first">
          <div className="details personal">
            <div className="titleback">
              <h2>Driver Details</h2>
              {/* button to  */}
              <button className="btn" onClick={() => navigate("/")}>
                back
              </button>
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

      {/* expense list table*/}
      <div className="expenses-list">
        <h2>Drivers List</h2>
        <table>
          {/* table head */}
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Vehicle Plate</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody id="expense-table-body">
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
                  <button
                    onClick={() => handleDeleteDrivers(driver.id, driver.email)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                  // onClick={() => handleAddIncome(income.id, income.amount)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DriverForm;
