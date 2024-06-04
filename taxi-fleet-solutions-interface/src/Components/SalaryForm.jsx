import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/trackerform.css";

function SalaryForm() {
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [description, setDescription] = useState("");
  const [salaryAmount, setSalaryAmount] = useState(0);
  const [paymentDate, setPaymentDate] = useState("");
  //   const [incomes, setIncomes] = useState([]);
  //   const [expenses, setExpenses] = useState([]);
  const [salaries, setSalaries] = useState([
    {
      id: 1717436658601,
      name: "david",
      paymentMethod: "EFT",
      salaryAmount: 1000,
      paymentDate: "2024-06-30",
      description: "with bonus of 100",
    },
  ]);
  const [total, setTotal] = useState(0);

  // creating a navigate variable to redirect
  const navigate = useNavigate();

  const handleAddSalary = () => {
    const newSalary = {
      id: Date.now(),
      name,
      paymentMethod,
      salaryAmount: parseFloat(salaryAmount),
      paymentDate,
      description,
    };

    console.log({
      newSalary,
    });

    setSalaries([...salaries, newSalary]);
    setTotal(total + parseFloat(salaryAmount));
    // Clear inputs
    setName("");
    setPaymentMethod("");
    setSalaryAmount("");
    setPaymentDate("");
    setDescription("");
  };

  const handleDeleteSalary = (id, salaryAmount) => {
    setSalaries(salaries.filter((salary) => salary.id !== id));
    setTotal(total - salaryAmount);
  };

  return (
    <>
      <h1>Welcome</h1>

      <h1>Taxi Salary Tracker Web App</h1>
      {/* button to */}
      <button className="btn" onClick={() => navigate("/")}>
        back
      </button>
      <div className="input-section">
        {/* Salary Name */}
        <label htmlFor="Name-input">Driver Name:</label>
        <input
          type="text"
          id="Name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Payment Method */}
        <label htmlFor="category-select">Payment Method:</label>
        <select
          id="category-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="" disabled>
            Select Payment Method
          </option>
          <option value="Cash">Cash</option>
          <option value="EFT">EFT</option>
        </select>
        {/* Salary Amount */}
        <label htmlFor="amount-input">SalaryAmount:</label>
        <input
          type="number"
          id="amount-input"
          value={salaryAmount}
          onChange={(e) => setSalaryAmount(e.target.value)}
        />
        {/* Payment Date */}
        <label htmlFor="date-input">Payment Date:</label>
        <input
          type="date"
          id="date-input"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
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
        <button id="add-btn" onClick={handleAddSalary}>
          Add
        </button>
      </div>

      {/* expense list table*/}
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
              <th>Delete</th>
              {/* <th>Edit</th> */}
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
                  <button
                    onClick={() =>
                      handleDeleteSalary(salary.id, salary.salaryAmount)
                    }
                  >
                    Delete
                  </button>
                </td>
                {/* <td>
                  <button
                  // onClick={() => handleDeleteSalary(salary.id, salary.amount)}
                  >
                    Edit
                  </button>
                </td> */}
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

export default SalaryForm;
