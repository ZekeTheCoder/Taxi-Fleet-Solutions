// Modules
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Styles
// import "./Components/styles/stylesheet.css";
// Packages
import Homepage from "./Components/Homepage";
import Dashboard from "./Components/Dashboard";
import RegisterForm from "./Components/LoginRegisterForm/RegisterForm";
import LoginForm from "./Components/LoginRegisterForm/LoginForm";
import NotFound from "./Components/NotFound";

import CustomerForm from "./Components/Forms/CustomerForm";
import DriverForm from "./Components/Forms/DriverForm";
import VehicleForm from "./Components/Forms/VehicleForm";
import ExpenseForm from "./Components/Forms/ExpenseForm";
import IncomeForm from "./Components/Forms/IncomeForm";
import SalaryForm from "./Components/Forms/SalaryForm";
import Dashboard1 from "./Components/Dashboard1";
import IncomeForm2 from "./Components/Forms/IncomeForm2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Taxi-Fleet-Solutions/" element={<Homepage />} />
        <Route path="/Taxi-Fleet-Solutions/dashboard" element={<Dashboard />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />

        <Route path="/Taxi-Fleet-Solutions/login" element={<LoginForm />} />
        <Route
          path="/Taxi-Fleet-Solutions/register"
          element={<RegisterForm />}
        />

        <Route path="/Taxi-Fleet-Solutions/salary" element={<SalaryForm />} />
        <Route path="/Taxi-Fleet-Solutions/income" element={<IncomeForm />} />
        <Route path="/income2" element={<IncomeForm2 />} />
        <Route path="/Taxi-Fleet-Solutions/expense" element={<ExpenseForm />} />
        <Route path="/Taxi-Fleet-Solutions/driver" element={<DriverForm />} />
        <Route
          path="/Taxi-Fleet-Solutions/customer"
          element={<CustomerForm />}
        />
        <Route path="/Taxi-Fleet-Solutions/vehicle" element={<VehicleForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
