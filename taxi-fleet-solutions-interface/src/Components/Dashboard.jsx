import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Cards from "./Cards";
import RecentPayments from "./RecentPayments";
import NewCustomers from "./NewCustomers";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="container-content">
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
