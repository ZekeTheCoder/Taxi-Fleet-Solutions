import React, { useState } from "react";
// import "./App.css";

function ExpenseForm() {
  const [name, setName] = useState("");
  const [creditor, setCreditor] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(),
      name,
      creditor,
      category,
      amount: parseFloat(amount),
      date,
      type,
      description,
    };

    console.log({
      newExpense,
    });

    setExpenses([...expenses, newExpense]);
    setTotal(total + parseFloat(amount));
    // Clear inputs
    setName("");
    setCreditor("");
    setCategory("");
    setAmount("");
    setDate("");
    setType("");
    setDescription("");
  };

  const handleDeleteExpense = (id, amount) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setTotal(total - amount);
  };

  return (
    <>
      <h1>Welcome</h1>

      <h1>Taxi Expense Tracker Web App</h1>
      <div className="input-section">
        {/* Expense Name */}
        <label htmlFor="Name-input">Name:</label>
        <input
          type="text"
          id="Name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Creditor Name */}
        <label htmlFor="Name-input">Creditor Name:</label>
        <input
          type="text"
          id="Name-input"
          value={creditor}
          onChange={(e) => setCreditor(e.target.value)}
        />
        {/* Category */}
        <label htmlFor="category-select">Category:</label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Once-Off">Once-Off</option>
        </select>
        {/* Amount */}
        <label htmlFor="amount-input">Amount:</label>
        <input
          type="number"
          id="amount-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Type */}
        <label htmlFor="type-select">Type:</label>
        <select
          id="type-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Vehicle">Vehicle</option>
          <option value="Driver">Driver</option>
          <option value="Other">Other</option>
        </select>
        {/* Date */}
        <label htmlFor="date-input">Date:</label>
        <input
          type="date"
          id="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {/* Description */}
        <label htmlFor="Name-input">Description:</label>
        <input
          type="text"
          id="Name-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* submit button */}
        <button id="add-btn" onClick={handleAddExpense}>
          Add
        </button>
      </div>

      {/* expense list table*/}
      <div className="expenses-list">
        <h2>Expenses List</h2>
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
                <td>{expense.description}</td>
                <td>{expense.type}</td>
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

export default ExpenseForm;
