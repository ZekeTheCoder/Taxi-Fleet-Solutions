// Modules
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Styles
import "./Components/styles/stylesheet.css";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route path="/salary" element={<SalaryForm />} />
        <Route path="/income" element={<IncomeForm />} />
        <Route path="/expense" element={<ExpenseForm />} />
        <Route path="/driver" element={<DriverForm />} />
        <Route path="/customer" element={<CustomerForm />} />
        <Route path="/vehicle" element={<VehicleForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
