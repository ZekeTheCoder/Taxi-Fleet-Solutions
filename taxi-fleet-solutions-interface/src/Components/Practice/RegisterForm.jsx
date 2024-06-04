import React, { useState } from "react";
import "./styles/registerForm.css"; // Ensure you have the appropriate CSS file

const RegisterForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    issuedDate: "",
    expiryDate: "",
  });

  const [identityDetails, setIdentityDetails] = useState({
    idType: "",
    idNumber: "",
    issuedAuthority: "",
    issuedState: "",
    issuedDate: "",
    expiryDate: "",
  });

  const [addressDetails, setAddressDetails] = useState({
    addressType: "",
    nationality: "",
    state: "",
    district: "",
    blockNumber: "",
    wardNumber: "",
  });

  const [familyDetails, setFamilyDetails] = useState({
    fatherName: "",
    motherName: "",
    grandfatherName: "",
    spouseName: "",
    fatherInLaw: "",
    motherInLaw: "",
  });

  const handleChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      personalDetails,
      identityDetails,
      addressDetails,
      familyDetails,
    });
  };

  return (
    <div className="container">
      <header>Registration</header>
      <form onSubmit={handleSubmit}>
        <div className="form first">
          <div className="details personal">
            <span className="title">Personal Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullName"
                  value={personalDetails.fullName}
                  onChange={(e) => handleChange(e, setPersonalDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={personalDetails.dob}
                  onChange={(e) => handleChange(e, setPersonalDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={personalDetails.email}
                  onChange={(e) => handleChange(e, setPersonalDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  value={personalDetails.phone}
                  onChange={(e) => handleChange(e, setPersonalDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Gender</label>
                <select
                  name="gender"
                  value={personalDetails.gender}
                  onChange={(e) => handleChange(e, setPersonalDetails)}
                  required
                >
                  <option disabled selected>
                    Select gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="input-field">
                <label>address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={personalDetails.address}
                  onChange={(e) => handleChange(e, setPersonalDetails)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="details ID">
            <span className="title">Identity Details</span>
            <div className="fields">
              <div className="input-field">
                <label>ID Type</label>
                <input
                  type="text"
                  placeholder="Enter ID type"
                  name="idType"
                  value={identityDetails.idType}
                  onChange={(e) => handleChange(e, setIdentityDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>ID Number</label>
                <input
                  type="text"
                  placeholder="Enter ID number"
                  name="idNumber"
                  value={identityDetails.idNumber}
                  onChange={(e) => handleChange(e, setIdentityDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Issued Authority</label>
                <input
                  type="text"
                  placeholder="Enter issued authority"
                  name="issuedAuthority"
                  value={identityDetails.issuedAuthority}
                  onChange={(e) => handleChange(e, setIdentityDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Issued State</label>
                <input
                  type="text"
                  placeholder="Enter issued state"
                  name="issuedState"
                  value={identityDetails.issuedState}
                  onChange={(e) => handleChange(e, setIdentityDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Issued Date</label>
                <input
                  type="date"
                  name="issuedDate"
                  value={identityDetails.issuedDate}
                  onChange={(e) => handleChange(e, setIdentityDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={identityDetails.expiryDate}
                  onChange={(e) => handleChange(e, setIdentityDetails)}
                  required
                />
              </div>
            </div>
            <button type="button" className="nextBtn">
              <span className="btnText">Next</span>
              <i className="uil uil-navigator"></i>
            </button>
          </div>
        </div>
        <div className="form second">
          <div className="details address">
            <span className="title">Address Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Address Type</label>
                <input
                  type="text"
                  placeholder="Permanent or Temporary"
                  name="addressType"
                  value={addressDetails.addressType}
                  onChange={(e) => handleChange(e, setAddressDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Nationality</label>
                <input
                  type="text"
                  placeholder="Enter nationality"
                  name="nationality"
                  value={addressDetails.nationality}
                  onChange={(e) => handleChange(e, setAddressDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>State</label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  name="state"
                  value={addressDetails.state}
                  onChange={(e) => handleChange(e, setAddressDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>District</label>
                <input
                  type="text"
                  placeholder="Enter your district"
                  name="district"
                  value={addressDetails.district}
                  onChange={(e) => handleChange(e, setAddressDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Block Number</label>
                <input
                  type="number"
                  placeholder="Enter block number"
                  name="blockNumber"
                  value={addressDetails.blockNumber}
                  onChange={(e) => handleChange(e, setAddressDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Ward Number</label>
                <input
                  type="number"
                  placeholder="Enter ward number"
                  name="wardNumber"
                  value={addressDetails.wardNumber}
                  onChange={(e) => handleChange(e, setAddressDetails)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="details family">
            <span className="title">Family Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Father Name</label>
                <input
                  type="text"
                  placeholder="Enter father name"
                  name="fatherName"
                  value={familyDetails.fatherName}
                  onChange={(e) => handleChange(e, setFamilyDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Mother Name</label>
                <input
                  type="text"
                  placeholder="Enter mother name"
                  name="motherName"
                  value={familyDetails.motherName}
                  onChange={(e) => handleChange(e, setFamilyDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Grandfather</label>
                <input
                  type="text"
                  placeholder="Enter grandfather name"
                  name="grandfatherName"
                  value={familyDetails.grandfatherName}
                  onChange={(e) => handleChange(e, setFamilyDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Spouse Name</label>
                <input
                  type="text"
                  placeholder="Enter spouse name"
                  name="spouseName"
                  value={familyDetails.spouseName}
                  onChange={(e) => handleChange(e, setFamilyDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Father in Law</label>
                <input
                  type="text"
                  placeholder="Father in law name"
                  name="fatherInLaw"
                  value={familyDetails.fatherInLaw}
                  onChange={(e) => handleChange(e, setFamilyDetails)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Mother in Law</label>
                <input
                  type="text"
                  placeholder="Mother in law name"
                  name="motherInLaw"
                  value={familyDetails.motherInLaw}
                  onChange={(e) => handleChange(e, setFamilyDetails)}
                  required
                />
              </div>
            </div>

            <div className="buttons">
              <div className="backBtn">
                <i className="uil uil-navigator"></i>
                <span className="btnText">Back</span>
              </div>
              <button type="submit" className="submit">
                <span className="btnText">Submit</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
