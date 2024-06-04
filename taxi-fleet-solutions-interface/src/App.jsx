// Modules
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Styles
import "./Components/styles/stylesheet.css";
// Packages
import Dashboard from "./Components/Dashboard";
import NotFound from "./Components/NotFound";
import Sidebar from "./Components/Sidebar";
import CustomerForm from "./Components/CustomerForm";
import DriverForm from "./Components/DriverForm";
import VehicleForm from "./Components/VehicleForm";
import ExpenseForm from "./Components/ExpenseForm";
import IncomeForm from "./Components/IncomeForm";
import SalaryForm from "./Components/SalaryForm";
import Home from "./Components/Home";
import RegisterForm from "./Components/LoginRegisterForm/RegisterForm";
import LoginForm from "./Components/LoginRegisterForm/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
