import React, { useState } from "react";
// import "./App.css";

function TrackerForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(),
      name,
      category,
      amount: parseFloat(amount),
      date,
    };
    setExpenses([...expenses, newExpense]);
    setTotal(total + parseFloat(amount));
    // Clear inputs
    setName("");
    setCategory("");
    setAmount("");
    setDate("");
  };

  const handleDeleteExpense = (id, amount) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setTotal(total - amount);
  };

  return (
    <>
      <h1>Welcome</h1>

      <h1>Taxi Income and Expense Tracker Web App</h1>
      <div className="input-section">
        <label htmlFor="Name-input">Name:</label>
        <input
          type="text"
          id="Name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="category-select">Category:</label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Rank">Rank</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Once-Off">Once-Off</option>
        </select>
        <label htmlFor="amount-input">Amount:</label>
        <input
          type="number"
          id="amount-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="date-input">Date:</label>
        <input
          type="date"
          id="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="date-input">Date:</label>
        <input
          type="date"
          id="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button id="add-btn" onClick={handleAddExpense}>
          Add
        </button>
      </div>
      {/* expense list */}
      <div className="expenses-list">
        <h2>Expenses List</h2>
        <table>
          {/* table head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody id="expense-table-body">
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>
                  <button
                    onClick={() =>
                      handleDeleteExpense(expense.id, expense.amount)
                    }
                  >
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
    </>
  );
}

export default TrackerForm;
