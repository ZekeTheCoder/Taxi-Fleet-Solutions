import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/salaries";

function SalaryForm() {
  const [salaryDetails, setSalaryDetails] = useState({
    id: "",
    name: "",
    paymentMethod: "",
    description: "",
    salaryAmount: 0,
    paymentDate: "",
  });
  const [salaries, setSalaries] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editSalaryId, setEditSalaryId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      const response = await axios.get(API_URL);
      setSalaries(response.data);
      setTotal(
        response.data.reduce(
          (acc, salary) => acc + parseFloat(salary.salaryAmount),
          0
        )
      );
    } catch (error) {
      console.error("Error fetching salaries:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      try {
        await axios.put(`${API_URL}/${editSalaryId}`, salaryDetails);
        setIsEditing(false);
        setEditSalaryId(null);
      } catch (error) {
        console.error("Error updating salary:", error);
      }
    } else {
      try {
        await axios.post(API_URL, {
          ...salaryDetails,
          id: Date.now().toString(),
          salaryAmount: parseFloat(salaryDetails.salaryAmount),
        });
      } catch (error) {
        console.error("Error adding salary:", error);
      }
    }

    fetchSalaries();
    clearForm();
  };

  const handleDeleteSalary = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchSalaries();
    } catch (error) {
      console.error("Error deleting salary:", error);
    }
  };

  const handleEditSalary = (salary) => {
    setShowForm(!showForm);
    setIsEditing(true);
    setEditSalaryId(salary.id);
    setSalaryDetails(salary);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalaryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setSalaryDetails({
      name: "",
      paymentMethod: "",
      description: "",
      salaryAmount: 0,
      paymentDate: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <h1>Salary Tracker</h1>
      {/* button to */}
      <div className="btn-container">
        <button className="btn" onClick={() => navigate("/dashboard")}>
          back
        </button>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Salary"}
        </button>
      </div>

      {/* Salary Form */}
      {showForm && (
        <div className="input-section">
          <label htmlFor="name-input">Driver Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={salaryDetails.name}
            onChange={handleChange}
          />
          <label htmlFor="paymentMethod-select">Payment Method:</label>
          <select
            id="paymentMethod-select"
            name="paymentMethod"
            value={salaryDetails.paymentMethod}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Payment Method
            </option>
            <option value="Cash">Cash</option>
            <option value="EFT">EFT</option>
          </select>
          <label htmlFor="salaryAmount-input">Salary Amount:</label>
          <input
            type="number"
            id="salaryAmount-input"
            name="salaryAmount"
            value={salaryDetails.salaryAmount}
            onChange={handleChange}
          />
          <label htmlFor="paymentDate-input">Payment Date:</label>
          <input
            type="date"
            id="paymentDate-input"
            name="paymentDate"
            value={salaryDetails.paymentDate}
            onChange={handleChange}
          />
          <label htmlFor="description-input">Description:</label>
          <input
            type="text"
            id="description-input"
            name="description"
            value={salaryDetails.description}
            onChange={handleChange}
          />
          <button id="add-btn" onClick={handleSubmit}>
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
      )}
      {/* Salary list table*/}
      {salaries.length > 0 ? (
        <div className="expenses-list">
          <h2>Salary List</h2>
          <table>
            {/* table head */}
            <thead>
              <tr>
                <th>Driver Name</th>
                <th>Payment Date</th>
                <th>Salary Amount</th>
                <th>Payment Method</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody id="expense-table-body">
              {salaries.map((salary) => (
                <tr key={salary.id}>
                  <td>{salary.name}</td>
                  <td>{salary.paymentDate}</td>
                  <td>{salary.salaryAmount}</td>
                  <td>{salary.paymentMethod}</td>
                  <td>{salary.description}</td>
                  <td>
                    <button onClick={() => handleEditSalary(salary)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteSalary(salary.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total:</td>
                <td id="total-amount">{total}</td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p>No salaries. Add a new salary.</p>
      )}
    </>
  );
}

export default SalaryForm;
