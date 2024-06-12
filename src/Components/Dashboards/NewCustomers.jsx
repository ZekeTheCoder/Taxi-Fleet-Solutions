import React, { useState } from "react";

function NewCustomers() {
  const [customers, setCustomers] = useState([
    { name: "John Doe", profile: <i className="fas fa-user"></i> },
    { name: "Jane Doe", profile: <i className="fas fa-user"></i> },
    { name: "Steve Doe", profile: <i className="fas fa-user"></i> },
    // Add more dummy data as needed
  ]);

  return (
    <div className="new-students">
      <div className="title">
        <h2>New Customers</h2>
        <a href="#" className="btn">
          View All
        </a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.profile}</td>
              <td>{customer.name}</td>
              <td>
                <i className="fas fa-info-circle"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewCustomers;
