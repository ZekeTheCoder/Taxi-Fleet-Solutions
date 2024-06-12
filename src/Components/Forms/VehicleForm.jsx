import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Ensure you have the appropriate CSS file imported here

const API_URL = "http://localhost:5000/vehicles";

function VehicleForm() {
  const [vehicles, setVehicles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState({
    id: "",
    vehicleName: "",
    licencePlate: "",
    model: "",
    make: "",
    vinNumber: "",
    year: "",
    driverName: "",
    description: "",
    mileage: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editVehicleId, setEditVehicleId] = useState(null);

  // creating a navigate variable to redirect
  const navigate = useNavigate();

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get(API_URL);
      setVehicles(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        await axios.put(`${API_URL}/${editVehicleId}`, vehicleDetails);
        setIsEditing(false);
        setEditVehicleId(null);
      } catch (error) {
        console.error("Error updating vehicle:", error);
      }
    } else {
      try {
        await axios.post(API_URL, {
          ...vehicleDetails,
          id: Date.now().toString(),
        });
      } catch (error) {
        console.error("Error adding vehicle:", error);
      }
    }
    setVehicleDetails({
      id: "",
      vehicleName: "",
      licencePlate: "",
      model: "",
      make: "",
      vinNumber: "",
      year: "",
      driverName: "",
      description: "",
      mileage: "",
    });
    fetchVehicles();
  };

  const handleDeleteVehicle = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchVehicles();
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  const handleEditVehicle = (vehicle) => {
    setShowForm(!showForm);
    setIsEditing(true);
    setEditVehicleId(vehicle.id);
    setVehicleDetails(vehicle);
  };

  return (
    <div className="form-container">
      <div className="btn-container">
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Vehicle"}
        </button>
        <button className="btn" onClick={() => navigate("/dashboard")}>
          back
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Vehicle Details</span>

              <div className="fields">
                {/* vehicleName */}
                <div className="input-field">
                  <label>Vehicle Name</label>
                  <input
                    type="text"
                    placeholder="Enter vehicle name"
                    name="vehicleName"
                    value={vehicleDetails.vehicleName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* licencePlate */}
                <div className="input-field">
                  <label>Licence Plate</label>
                  <input
                    type="text"
                    placeholder="Enter vehicle licence Plate"
                    name="licencePlate"
                    value={vehicleDetails.licencePlate}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* model */}
                <div className="input-field">
                  <label>Model</label>
                  <input
                    type="text"
                    placeholder="Enter model"
                    name="model"
                    value={vehicleDetails.model}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Make */}
                <div className="input-field">
                  <label>Make</label>
                  <input
                    type="text"
                    placeholder="Enter vehicle make"
                    name="make"
                    value={vehicleDetails.make}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Year */}
                <div className="input-field">
                  <label>Year</label>
                  <input
                    type="text"
                    placeholder="Enter vehicle year"
                    name="year"
                    value={vehicleDetails.year}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Driver Name */}
                <div className="input-field">
                  <label>Driver Name</label>
                  <input
                    type="text"
                    name="driverName"
                    placeholder="Enter vehicle driver name"
                    value={vehicleDetails.driverName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Vin Number */}
                <div className="input-field">
                  <label>Vin Number</label>
                  <input
                    type="text"
                    name="vinNumber"
                    placeholder="Enter vehicle vin number"
                    value={vehicleDetails.vinNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Vehicle Mileage */}
                <div className="input-field">
                  <label>Vehicle Mileage</label>
                  <input
                    type="number"
                    name="mileage"
                    placeholder="Enter vehicle mileage"
                    value={vehicleDetails.mileage}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Vehicle Description */}
                <div className="input-field">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Enter your customer description"
                    name="description"
                    value={vehicleDetails.description}
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

      {/* Vehicles list */}
      {vehicles.length > 0 ? (
        <div className="expenses-list">
          <h2>Vehicles List</h2>
          <table>
            <thead>
              <tr>
                <th>Vehicle Name</th>
                <th>Licence Plate</th>
                <th>Model</th>
                <th>Make</th>
                <th>VIN Number</th>
                <th>Year</th>
                <th>Driver Name</th>
                <th>Mileage</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate over vehicles array to display each vehicle */}
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.vehicleName}</td>
                  <td>{vehicle.licencePlate}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.vinNumber}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.driverName}</td>
                  <td>{vehicle.mileage}</td>
                  <td>{vehicle.description}</td>
                  <td>
                    {/* Buttons for edit and delete */}
                    <button onClick={() => handleEditVehicle(vehicle)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteVehicle(vehicle.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No Vehicles. Add a new Vehicles.</p>
      )}
    </div>
  );
}

export default VehicleForm;
