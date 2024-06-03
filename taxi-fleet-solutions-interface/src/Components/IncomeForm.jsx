import React, { useState } from "react";
// import "./App.css";

function IncomeForm() {
  const [name, setName] = useState("");
  const [debiter, setDebiter] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [incomes, setIncomes] = useState([]);
  const [total, setTotal] = useState(0);

  //   const [incomeDetails, setIncomeDetails] = useState({
  //     id: Date.now(),
  //     name: "",
  //     debiter: "",
  //     category: "",
  //     type: "",
  //     description: "",
  //     amount: "",
  //   });
  const handleAddIncome = () => {
    const newIncome = {
      id: Date.now(),
      name,
      category,
      amount: parseFloat(amount),
      date,
      type,
      description,
      debiter,
    };

    console.log({
      newIncome,
    });

    setIncomes([...incomes, newIncome]);
    setTotal(total + parseFloat(amount));
    // Clear inputs
    setName("");
    setCategory("");
    setAmount("");
    setDate("");
    setType("");
    setDescription("");
    setDebiter("");
  };

  const handleDeleteIncome = (id, amount) => {
    setIncomes(incomes.filter((income) => income.id !== id));
    setTotal(total - amount);
  };

  return (
    <>
      <h1>Welcome</h1>

      <h1>Taxi Income Tracker Web App</h1>
      <div className="input-section">
        {/* Income Name */}
        <label htmlFor="Name-input">Income Name:</label>
        <input
          type="text"
          id="Name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Debiter Name */}
        <label htmlFor="Name-input">Debiter Name:</label>
        <input
          type="text"
          id="Name-input"
          value={debiter}
          onChange={(e) => setDebiter(e.target.value)}
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
        {/* Date */}
        <label htmlFor="date-input">Date:</label>
        <input
          type="date"
          id="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {/* Type */}
        <label htmlFor="type-select">Type:</label>
        <select
          id="type-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Customer">Customer</option>
          <option value="Driver">Driver</option>
          <option value="Other">Other</option>
        </select>
        {/* Description */}
        <label htmlFor="Name-input">Description:</label>
        <input
          type="text"
          id="Name-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* submit button */}
        <button id="add-btn" onClick={handleAddIncome}>
          Add
        </button>
      </div>

      {/* expense list table*/}
      <div className="expenses-list">
        <h2>Incomes List</h2>
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
              <th>Delete</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody id="expense-table-body">
            {incomes.map((income) => (
              <tr key={income.id}>
                <td>{income.name}</td>
                <td>{income.debiter}</td>
                <td>{income.category}</td>
                <td>{income.amount}</td>
                <td>{income.date}</td>
                <td>{income.description}</td>
                <td>{income.type}</td>
                <td>
                  <button
                    onClick={() => handleAddIncome(income.id, income.amount)}
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

export default IncomeForm;
