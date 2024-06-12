import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./dashboard.css"; // Add your custom styles here

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="header">
            <div className="nav">
              <div className="search">
                <input type="text" placeholder="Search.." />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="user">
                <a href="#" className="btn">
                  Add New
                </a>
                <i className="fas fa-bell"></i>
                <div className="img-case">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="cards">
              <div className="card">
                <div className="box">
                  <h1>2194</h1>
                  <h3>Students</h3>
                </div>
                <div className="icon-case">
                  <i className="fas fa-user-graduate"></i>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <h1>53</h1>
                  <h3>Teachers</h3>
                </div>
                <div className="icon-case">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <h1>5</h1>
                  <h3>Schools</h3>
                </div>
                <div className="icon-case">
                  <i className="fas fa-school"></i>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <h1>350000</h1>
                  <h3>Income</h3>
                </div>
                <div className="icon-case">
                  <i className="fas fa-dollar-sign"></i>
                </div>
              </div>
            </div>

            <div className="content-2">
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
                      <th>School</th>
                      <th>Amount</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>St. James College</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>St. James College</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>St. James College</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>St. James College</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>St. James College</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>St. James College</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

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
                    <tr>
                      <td>
                        <i className="fas fa-user"></i>
                      </td>
                      <td>John Steve Doe</td>
                      <td>
                        <i className="fas fa-info-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-user"></i>
                      </td>
                      <td>John Steve Doe</td>
                      <td>
                        <i className="fas fa-info-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-user"></i>
                      </td>
                      <td>John Steve Doe</td>
                      <td>
                        <i className="fas fa-info-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-user"></i>
                      </td>
                      <td>John Steve Doe</td>
                      <td>
                        <i className="fas fa-info-circle"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
