import React, { useState } from "react";

function RecentPayments() {
  const [payments, setPayments] = useState([
    {
      name: "John Doe",
      Category: "Once-Off Trip",
      Type: "Customer",
      amount: "R120",
    },
    {
      name: "Jane Doe",
      Category: "Rank Income",
      Type: "Driver",
      amount: "R150",
    },
    // Add more dummy data as needed
  ]);

  return (
    <div className="recent-payments">
      <div className="title">
        <h2>Recent Payments</h2>
        <a href="#" className="btn">
          View All
        </a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.name}</td>
              <td>{payment.Category}</td>
              <td>{payment.Type}</td>
              <td>{payment.amount}</td>
              <td>
                <a href="#" className="btn">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentPayments;
