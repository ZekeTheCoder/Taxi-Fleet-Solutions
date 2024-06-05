import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/expenses";

function ExpenseForm() {
  const [expenseDetails, setExpenseDetails] = useState({
    id: "",
    name: "",
    creditor: "",
    category: "",
    type: "",
    description: "",
    amount: 0,
    date: "",
  });
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editExpenseId, setEditExpenseId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(API_URL);
      setExpenses(response.data);
      setTotal(
        response.data.reduce(
          (acc, expense) => acc + parseFloat(expense.amount),
          0
        )
      );
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      try {
        await axios.put(`${API_URL}/${editExpenseId}`, expenseDetails);
        setIsEditing(false);
        setEditExpenseId(null);
      } catch (error) {
        console.error("Error updating expense:", error);
      }
    } else {
      try {
        await axios.post(API_URL, {
          ...expenseDetails,
          id: Date.now().toString(),
          amount: parseFloat(expenseDetails.amount),
        });
      } catch (error) {
        console.error("Error adding expense:", error);
      }
    }

    fetchExpenses();
    clearForm();
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const handleEditExpense = (expense) => {
    setShowForm(true);
    setIsEditing(true);
    setEditExpenseId(expense.id);
    setExpenseDetails(expense);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setExpenseDetails({
      id: "",
      name: "",
      creditor: "",
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
      <h1>Expense Tracker</h1>
      {/* button to */}
      <div className="btn-container">
        <button className="btn" onClick={() => navigate("/dashboard")}>
          back
        </button>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Expense"}
        </button>
      </div>

      {/* Expense Form */}
      {showForm && (
        <div className="input-section">
          <label htmlFor="name-input">Expense Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={expenseDetails.name}
            onChange={handleChange}
          />
          <label htmlFor="creditor-input">Creditor Name:</label>
          <input
            type="text"
            id="creditor-input"
            name="creditor"
            value={expenseDetails.creditor}
            onChange={handleChange}
          />
          <label htmlFor="category-select">Category:</label>
          <select
            id="category-select"
            name="category"
            value={expenseDetails.category}
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
            value={expenseDetails.amount}
            onChange={handleChange}
          />
          <label htmlFor="type-select">Type:</label>
          <select
            id="type-select"
            name="type"
            value={expenseDetails.type}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="Vehicle">Vehicle</option>
            <option value="Driver">Driver</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="date-input">Date:</label>
          <input
            type="date"
            id="date-input"
            name="date"
            value={expenseDetails.date}
            onChange={handleChange}
          />
          <label htmlFor="description-input">Description:</label>
          <input
            type="text"
            id="description-input"
            name="description"
            value={expenseDetails.description}
            onChange={handleChange}
          />
          <button id="add-btn" onClick={handleSubmit}>
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
      )}
      {/* Expense list table */}
      {expenses.length > 0 ? (
        <div className="expenses-list">
          <h2>Expense List</h2>
          <table>
            {/* table head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Creditor</th>
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
            <tbody id="expense-table-body">
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.name}</td>
                  <td>{expense.creditor}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
                  <td>{expense.type}</td>
                  <td>{expense.description}</td>
                  <td>
                    <button onClick={() => handleEditExpense(expense)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteExpense(expense.id)}>
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
        <p>No expenses. Add a new expense.</p>
      )}
    </>
  );
}

export default ExpenseForm;
