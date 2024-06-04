import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/registerForm.css"; // Ensure you have the appropriate CSS file

function VehicleForm() {
  const [vehicleDetails, setVehicleDetails] = useState({
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

  // creating a navigate variable to redirect
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      vehicleDetails,
    });
  };

  return (
    <div className="form-container">
      <h1>Registration</h1>
      {/* button to */}
      <button className="btn" onClick={() => navigate("/")}>
        back
      </button>

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

export default VehicleForm;
