import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./App.css"; // Add your styles here

function IncomeTracker() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
    };

    if (type === "expense") {
      setExpenses([...expenses, newItem]);
    } else {
      setIncomes([...incomes, newItem]);
    }

    // Clear input fields
    setDescription("");
    setAmount("");
  };

  const handleClear = (type) => {
    if (type === "expense") {
      setExpenses([]);
    } else {
      setIncomes([]);
    }
  };

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalIncomes = incomes.reduce((acc, item) => acc + item.amount, 0);
  const totalNet = totalIncomes - totalExpenses;

  return (
    <div className="container">
      <h1>
        <i className="fas fa-chart-line"></i>Expense-Income Tracker
      </h1>
      <form id="expense-form">
        <label>
          <i className="fas fa-file-alt"></i>Description:
          <input
            type="text"
            id="description"
            placeholder="Enter Expense/Income Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <i className="fas fa-dollar-sign"></i>Amount:
          <input
            type="number"
            id="amount"
            placeholder="Enter Expense/Income Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          <i className="fas fa-tags"></i>Type:
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>
        <button type="button" id="btn-add" onClick={handleAdd}>
          <i className="fas fa-plus-circle"></i>Add
        </button>
      </form>

      <div id="show-values">
        <div className="box-expense">
          <h2>
            <i className="fas fa-arrow-circle-down"></i>Expense
          </h2>
          <button
            className="btn"
            id="btn-clear-expense"
            style={{ display: expenses.length > 0 ? "block" : "none" }}
            onClick={() => handleClear("expense")}
          >
            <i className="fas fa-trash"></i>Clear All
          </button>
          <ul id="expense-list">
            {expenses.map((item) => (
              <li key={item.id}>
                {item.description} - ${item.amount}
              </li>
            ))}
          </ul>
        </div>

        <div className="box-income">
          <h2>
            <i className="fas fa-arrow-circle-up"></i>Income
          </h2>
          <button
            className="btn"
            id="btn-clear-income"
            style={{ display: incomes.length > 0 ? "block" : "none" }}
            onClick={() => handleClear("income")}
          >
            <i className="fas fa-trash"></i>Clear All
          </button>
          <ul id="income-list">
            {incomes.map((item) => (
              <li key={item.id}>
                {item.description} - ${item.amount}
              </li>
            ))}
          </ul>
        </div>

        <div className="box-calculate">
          <h2>
            <i className="fas fa-calculator"></i>Total Net
          </h2>
          <span id="total">${totalNet}</span>
        </div>
      </div>
    </div>
  );
}

export default IncomeTracker;
