import React, { useState } from "react";

function NewStudents() {
  const [students, setStudents] = useState([
    { name: "John Doe", profile: <i className="fas fa-user"></i> },
    { name: "Jane Doe", profile: <i className="fas fa-user"></i> },
    { name: "Steve Doe", profile: <i className="fas fa-user"></i> },
    // Add more dummy data as needed
  ]);

  return (
    <div className="new-students">
      <div className="title">
        <h2>New Students</h2>
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
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.profile}</td>
              <td>{student.name}</td>
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

export default NewStudents;
