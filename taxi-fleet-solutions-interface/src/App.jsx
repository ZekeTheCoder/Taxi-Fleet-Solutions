import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Components/styles/stylesheet.css";
import TrackerForm from "./Components/TrackerForm";
import IncomeTracker from "./Components/IncomeTracker";
import Dashboard from "./Components/Dashboard";
import NotFound from "./Components/NotFound";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<TrackerForm />} />
        <Route path="/tracker" element={<IncomeTracker />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    //	<Router>
    //		<Switch>
    //			<Route path="/dashboard" element={<Dashboard />} />
    //		</Switch>
    //	</Router>
  );
}

export default App;
