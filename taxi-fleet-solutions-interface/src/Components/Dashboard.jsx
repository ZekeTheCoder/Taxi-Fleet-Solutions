import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Dashboards/Sidebar";
import Header from "./Dashboards/Header";
import Cards from "./Dashboards/Cards";
import RecentPayments from "./Dashboards/RecentPayments";
import NewCustomers from "./Dashboards/NewCustomers";
import "./Dashboards/styles/stylesheet.css";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="dashboard-container">
        <div className="dashboard-container-content">
          <Header />
          <div className="content">
            <Cards />
            <div className="content-2">
              <RecentPayments />
              <NewCustomers />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
