import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Components/styles/stylesheet.css";
import Dashboard from "./Components/Dashboard";
import NotFound from "./Components/NotFound";
import Sidebar from "./Components/Sidebar";
import RegisterForm from "./Components/RegisterForm";
import CustomerForm from "./Components/CustomerForm";
import DriverForm from "./Components/DriverForm";
import VehicleForm from "./Components/VehicleForm";
import ExpenseForm from "./Components/ExpenseForm";
import IncomeForm from "./Components/IncomeForm";
import SalaryForm from "./Components/SalaryForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
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
