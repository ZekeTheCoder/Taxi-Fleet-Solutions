import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PAYMENTS_API_URL = "http://localhost:5000/payments";
const INCOME_API_URL = "http://localhost:5000/incomes";
const EXPENSE_API_URL = "http://localhost:5000/expenses";
const CUSTOMERS_API_URL = "http://localhost:5000/customers";
const DRIVER_API_URL = "http://localhost:5000/drivers";
const VEHICLE_API_URL = "http://localhost:5000/vehicles";
const SALARY_API_URL = "http://localhost:5000/salaries";

function PaymentForm() {
  const [paymentDetails, setpaymentDetails] = useState({
    id: "",
    depositerID: "",
    category: "", // customer, driver|vehicle,salary
    type: "", // expense, income
    period: "", // daily, monthly,once-off
    paymentDate: "",
    description: "",
    paymentAmount: "",
  });
  const [payments, setPayments] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  // depositors
  const [customers, setCustomers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [salaries, setSalaries] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  // calculations

  //   driver salary
  const [driverId, setDriverId] = useState("");
  const [driverIncomes, setDriverIncomes] = useState(0);
  const [driverExpenses, setDriverExpenses] = useState(0);

  const [totalDriverIncome, setTotalDriverIncome] = useState(0);
  const [totalDriverExpense, setTotalDriverExpense] = useState(0);
  const [netDriverTotal, setNetDriverTotal] = useState(0);

  const [selectedDriver, setSelectedDriver] = useState("");

  //   Income and Expense

  const [total, setTotal] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const [salary, setSalary] = useState(0);
  //   rendering
  const [isEditing, setIsEditing] = useState(false);
  const [editPaymentId, setEditPaymentId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showSalary, setShowSalary] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
    fetchVehicles();
    fetchSalaries();
    fetchDrivers();

    // fetchIncomes();
    // fetchExpenses();
    fetchPayments();
  }, [payments]);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get(DRIVER_API_URL);
      setDrivers(response.data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  const fetchSalaries = async () => {
    try {
      const response = await axios.get(SALARY_API_URL);
      setSalaries(response.data);
    } catch (error) {
      console.error("Error fetching salaries:", error);
    }
  };

  const fetchVehicles = async () => {
    try {
      const response = await axios.get(VEHICLE_API_URL);
      setVehicles(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(CUSTOMERS_API_URL);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get(PAYMENTS_API_URL);
      setPayments(response.data);

      // Filtering the income and Expenses
      const filteredIncomes = payments.filter(
        (payment) => payment.type === "Income"
      );
      const filteredExpenses = payments.filter(
        (payment) => payment.type === "Expense"
      );

      setIncomes(filteredIncomes);
      setExpenses(filteredExpenses);

      const totalIncome = filteredIncomes.reduce(
        (acc, income) => acc + parseFloat(income.paymentAmount),
        0
      );
      const totalExpense = filteredExpenses.reduce(
        (acc, expense) => acc + parseFloat(expense.paymentAmount),
        0
      );

      const netTotal = totalIncome - totalExpense;

      setTotalIncome(totalIncome);
      setTotalExpense(totalExpense);
      setNetTotal(netTotal);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      try {
        await axios.put(`${PAYMENTS_API_URL}/${editPaymentId}`, paymentDetails);
        setIsEditing(false);
        setEditPaymentId(null);
      } catch (error) {
        console.error("Error updating payment:", error);
      }
    } else {
      try {
        await axios.post(PAYMENTS_API_URL, {
          ...paymentDetails,
          id: Date.now().toString(),
          paymentAmount: parseFloat(paymentDetails.paymentAmount),
        });
      } catch (error) {
        console.error("Error adding payment:", error);
      }
    }

    fetchPayments();
    clearForm();
  };

  const handleDeletePayment = async (id) => {
    try {
      await axios.delete(`${PAYMENTS_API_URL}/${id}`);
      fetchPayments();
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  const handleEditPayment = (payment) => {
    setShowForm(!showForm);
    setIsEditing(true);
    setEditPaymentId(payment.id);
    setIncomeDetails(payment);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setpaymentDetails({
      id: "",
      depositerID: "",
      category: "", // customer, driver|vehicle,salary
      type: "", // expense, income
      period: "",
      paymentDate: "",
      description: "",
      paymentAmount: "",
    });
    setShowForm(false);
  };

  //   Calculation functions

  const fetchPaymentsByDriverId = (id) => {
    try {
      const filteredIncomes1 = payments.filter(
        (payment) => payment.type === "Income" && payment.depositerID === id
      );
      const filteredExpenses1 = payments.filter(
        (payment) => payment.type === "Expense" && payment.depositerID === id
      );
      setDriverIncomes(filteredIncomes1);
      setDriverExpenses(filteredExpenses1);

      const totalDriverIncome = filteredIncomes1.reduce(
        (acc, income) => acc + parseFloat(income.paymentAmount),
        0
      );
      const totalDriverExpense = filteredExpenses1.reduce(
        (acc, expense) => acc + parseFloat(expense.paymentAmount),
        0
      );

      const netDriverTotal = totalDriverIncome - totalDriverExpense;
      const salary = netDriverTotal * 0.2;

      setTotalDriverIncome(totalDriverIncome);
      setTotalDriverExpense(totalDriverExpense);
      setNetDriverTotal(netDriverTotal);
      setSalary(salary);
      // find selected driver
      const selectedDriver = drivers.find((driver) => driver.id === id);
      setSelectedDriver(selectedDriver);
    } catch (error) {
      console.error("Error processing Driver payments:", error);
    }
  };

  const handleDriverChange = (e) => {
    setDriverId(e.target.value);
  };

  const handleFetchSummary = () => {
    if (driverId) {
      fetchPaymentsByDriverId(driverId);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Income and Expense Tracker</h1>
        <div className="btn-container">
          {/* <select
          name="customerId"
          id="customerId-select"
          value={paymentDetails.depositerID}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.fullName}
            </option>
          ))}
        </select> */}

          <button className="btn" onClick={() => navigate("/dashboard")}>
            back
          </button>
          <button className="btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close" : "Add Payment"}
          </button>
        </div>

        {showForm && (
          <div className="input-section">
            {/* Category */}
            <label htmlFor="category-select">Category:</label>
            <select
              id="category-select"
              name="category"
              value={paymentDetails.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Customer">Customer</option>
              <option value="Driver">Driver</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Salary">Salary</option>
              {/* <option value="Other">Other</option> */}
            </select>

            <label htmlFor="depositerId-select">Depositor:</label>
            <select
              id="depositerId-select"
              name="depositerID"
              value={paymentDetails.depositerID}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Depositor
              </option>
              {paymentDetails.category === "Customer" &&
                customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.fullName}
                  </option>
                ))}
              {paymentDetails.category === "Driver" &&
                drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.fullName}
                  </option>
                ))}
              {paymentDetails.category === "Vehicle" &&
                vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.vehicleName}
                  </option>
                ))}
              {paymentDetails.category === "Salary" &&
                salaries.map((salary) => (
                  <option key={salary.id} value={salary.id}>
                    {salary.name}
                  </option>
                ))}
            </select>

            <label htmlFor="amount-input">Amount:</label>
            <input
              type="number"
              id="amount-input"
              name="paymentAmount"
              value={paymentDetails.paymentAmount}
              onChange={handleChange}
            />

            <label htmlFor="type-select">Type:</label>
            <select
              id="type-select"
              name="type"
              value={paymentDetails.type}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>

            <label htmlFor="type-select">Period:</label>
            <select
              id="type-select"
              name="period"
              value={paymentDetails.period}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Period
              </option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Once-Off">Once-Off</option>
            </select>

            <label htmlFor="date-input">Payment Date:</label>
            <input
              type="date"
              id="date-input"
              name="paymentDate"
              value={paymentDetails.paymentDate}
              onChange={handleChange}
            />

            <label htmlFor="description-input">Description:</label>
            <input
              type="text"
              id="description-input"
              name="description"
              value={paymentDetails.description}
              onChange={handleChange}
            />
            <button id="add-btn" className="btn" onClick={handleSubmit}>
              {isEditing ? "Update Payment" : "Add Payment"}
            </button>
          </div>
        )}

        {payments.length > 0 ? (
          <div className="incomes-list">
            <h2>Income List</h2>
            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Depositer ID</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Period</th>
                  <th>Payment Date</th>
                  <th>Payment Amount</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody id="income-table-body">
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.depositerID}</td>
                    <td>{payment.type}</td>
                    <td>{payment.category}</td>
                    <td>{payment.period}</td>
                    <td>{payment.paymentDate}</td>
                    <td>{payment.paymentAmount}</td>
                    <td>{payment.description}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => handleEditPayment(payment)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => handleDeletePayment(payment.id)}
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
        ) : (
          <p>No payments. Add a new payments.</p>
        )}

        {/*  Show Summary button */}
        <button className="btn" onClick={() => setShowSummary(!showSummary)}>
          {showSummary ? "Close Summary" : "Show Summary"}
        </button>
        {/* Income and Expense filtering */}
        {showSummary && (
          <div>
            <h1>Income and Expense Summary</h1>
            <p>Total Income: R{totalIncome.toFixed(2)}</p>
            <p>Total Expense: R{totalExpense.toFixed(2)}</p>
            <p>Net Total: R{netTotal.toFixed(2)}</p>

            <h3>Incomes</h3>
            <table>
              <thead>
                <tr>
                  <th>Depositor ID</th>
                  <th>Category</th>
                  <th>Period</th>
                  <th>Payment Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((income) => (
                  <tr key={income.id}>
                    <td>{income.depositerID}</td>
                    <td>{income.category}</td>
                    <td>{income.period}</td>
                    <td>{income.paymentDate}</td>
                    <td>{income.description}</td>
                    <td>R{income.paymentAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>Expenses</h3>
            <table>
              <thead>
                <tr>
                  <th>Depositor ID</th>
                  <th>Category</th>
                  <th>Period</th>
                  <th>Payment Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.depositerID}</td>
                    <td>{expense.category}</td>
                    <td>{expense.period}</td>
                    <td>{expense.paymentDate}</td>
                    <td>{expense.description}</td>
                    <td>R{expense.paymentAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/*  Show Summary button */}
        <button className="btn" onClick={() => setShowSalary(!showSalary)}>
          {showSalary ? "Close Salary" : "Show Salary"}
        </button>
        <br />
        <br />

        {/* Driver Summary */}
        {showSalary && (
          <div>
            <h1>Driver Summary</h1>
            <label htmlFor="driverId-select">Driver:</label>
            <select
              id="driverId-select"
              value={driverId}
              onChange={handleDriverChange}
            >
              <option value="" disabled>
                Select Driver
              </option>
              {drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.fullName}
                </option>
              ))}
            </select>
            <button className="btn" onClick={handleFetchSummary}>
              Fetch Summary
            </button>

            {selectedDriver ? (
              <>
                <h2>
                  {/* Summary for Driver: {driverId} - {selectedDriver.fullName} */}
                  Summary for Driver: {selectedDriver.fullName}
                </h2>
                <p>Total Income: R{totalDriverIncome.toFixed(2)}</p>
                <p>Total Expense: R{totalDriverExpense.toFixed(2)}</p>
                <p>Net Total: R{netDriverTotal.toFixed(2)}</p>
                <p>Salary (20%): R{salary.toFixed(2)}</p>

                <h3>Incomes</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Depositor ID</th>
                      <th>Period</th>
                      <th>Payment Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverIncomes.map((income) => (
                      <tr key={income.id}>
                        <td>{income.depositerID}</td>
                        <td>{income.period}</td>
                        <td>{income.paymentDate}</td>
                        <td>{income.description}</td>
                        <td>R{income.paymentAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h3>Expenses</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Depositor ID</th>
                      <th>Period</th>
                      <th>Payment Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverExpenses.map((expense) => (
                      <tr key={expense.id}>
                        <td>{expense.depositerID}</td>
                        <td>{expense.period}</td>
                        <td>{expense.paymentDate}</td>
                        <td>{expense.description}</td>
                        <td>R{expense.paymentAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <p>Select a driver to calculate salary</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default PaymentForm;
