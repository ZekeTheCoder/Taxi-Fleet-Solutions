import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/incomes";

function IncomeForm() {
  const [incomeDetails, setIncomeDetails] = useState({
    id: "",
    name: "",
    debiter: "",
    category: "",
    type: "",
    description: "",
    amount: 0,
    date: "",
  });
  const [incomes, setIncomes] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editIncomeId, setEditIncomeId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    try {
      const response = await axios.get(API_URL);
      setIncomes(response.data);
      setTotal(
        response.data.reduce(
          (acc, income) => acc + parseFloat(income.amount),
          0
        )
      );
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      try {
        await axios.put(`${API_URL}/${editIncomeId}`, incomeDetails);
        setIsEditing(false);
        setEditIncomeId(null);
      } catch (error) {
        console.error("Error updating income:", error);
      }
    } else {
      try {
        await axios.post(API_URL, {
          ...incomeDetails,
          id: Date.now().toString(),
          amount: parseFloat(incomeDetails.amount),
        });
      } catch (error) {
        console.error("Error adding income:", error);
      }
    }

    fetchIncomes();
    clearForm();
  };

  const handleDeleteIncome = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchIncomes();
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  const handleEditIncome = (income) => {
    setShowForm(true);
    setIsEditing(true);
    setEditIncomeId(income.id);
    setIncomeDetails(income);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setIncomeDetails({
      id: "",
      name: "",
      debiter: "",
      category: "",
      type: "",
      description: "",
      amount: 0,
      date: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <h1>Income Tracker</h1>
      {/* button to */}
      <div className="btn-container">
        <button className="btn" onClick={() => navigate("/dashboard")}>
          back
        </button>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Income"}
        </button>
      </div>

      {/* Income Form */}
      {showForm && (
        <div className="input-section">
          <label htmlFor="name-input">Income Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={incomeDetails.name}
            onChange={handleChange}
          />
          <label htmlFor="debiter-input">Debiter Name:</label>
          <input
            type="text"
            id="debiter-input"
            name="debiter"
            value={incomeDetails.debiter}
            onChange={handleChange}
          />
          <label htmlFor="category-select">Category:</label>
          <select
            id="category-select"
            name="category"
            value={incomeDetails.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Once-Off">Once-Off</option>
          </select>
          <label htmlFor="amount-input">Amount:</label>
          <input
            type="number"
            id="amount-input"
            name="amount"
            value={incomeDetails.amount}
            onChange={handleChange}
          />
          <label htmlFor="date-input">Date:</label>
          <input
            type="date"
            id="date-input"
            name="date"
            value={incomeDetails.date}
            onChange={handleChange}
          />
          <label htmlFor="type-select">Type:</label>
          <select
            id="type-select"
            name="type"
            value={incomeDetails.type}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="Customer">Customer</option>
            <option value="Driver">Driver</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="description-input">Description:</label>
          <input
            type="text"
            id="description-input"
            name="description"
            value={incomeDetails.description}
            onChange={handleChange}
          />
          <button id="add-btn" onClick={handleSubmit}>
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
      )}
      {/* Income list table */}
      {incomes.length > 0 ? (
        <div className="incomes-list">
          <h2>Income List</h2>
          <table>
            {/* table head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Debiter</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody id="income-table-body">
              {incomes.map((income) => (
                <tr key={income.id}>
                  <td>{income.name}</td>
                  <td>{income.debiter}</td>
                  <td>{income.category}</td>
                  <td>{income.amount}</td>
                  <td>{income.date}</td>
                  <td>{income.type}</td>
                  <td>{income.description}</td>
                  <td>
                    <button onClick={() => handleEditIncome(income)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteIncome(income.id)}>
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
        <p>No incomes. Add a new income.</p>
      )}
    </>
  );
}

export default IncomeForm;
