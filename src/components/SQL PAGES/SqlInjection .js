import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlInjection = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

                                    {/* Sidebar (Left - col-2) */}
                    <SidebarSql />
         

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>SQL Injection</h1>
      

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlviews">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlhosting">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                      <p className="lead py-5">
                <b>SQL Injection</b> is a code injection technique where attackers insert malicious SQL 
                statements into input fields, to gain unauthorized access to a database.
              </p>

              <p>
                If user inputs are not validated or sanitized, hackers can manipulate queries and retrieve, modify, 
                or delete data from the database. This is one of the most common web security vulnerabilities.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Users</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>UserID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>admin</td><td>admin123</td></tr>
                      <tr><td>2</td><td>rahul</td><td>rahul@123</td></tr>
                      <tr><td>3</td><td>neha</td><td>neha@456</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Unsafe Query Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Vulnerable SQL Query</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- User input is directly added into SQL
txtUserId = "105 OR 1=1"

sql = "SELECT * FROM Users WHERE UserId = " + txtUserId;`}
                  </pre>
                  <p><b>Result:</b> This query will return <u>all users</u> because <code>1=1</code> is always true.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr><th>UserID</th><th>Username</th><th>Password</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>admin</td><td>admin123</td></tr>
                      <tr><td>2</td><td>rahul</td><td>rahul@123</td></tr>
                      <tr><td>3</td><td>neha</td><td>neha@456</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 2: SQL Injection in Login */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Login Form Vulnerability</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- Hacker enters:
Username: admin
Password: ' OR '1'='1

-- Query becomes:
SELECT * FROM Users WHERE Username = 'admin' AND Password = '' OR '1'='1';`}
                  </pre>
                  <p><b>Result:</b> Hacker bypasses login without knowing the real password!</p>
                </div>
              </div>

              {/* Prevention Techniques */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">How to Prevent SQL Injection</div>
                <div className="card-body">
                  <ul>
                    <li>✅ Use <b>Prepared Statements</b> (Parameterized Queries)</li>
                    <li>✅ Always <b>Validate & Sanitize</b> user inputs</li>
                    <li>✅ Use ORM frameworks (like Hibernate, Sequelize, etc.)</li>
                    <li>✅ Restrict database permissions</li>
                    <li>✅ Use Web Application Firewalls (WAF)</li>
                  </ul>
                  <pre className="bg-light p-3 rounded">
{`-- Example using Prepared Statement (Safe)
sql = "SELECT * FROM Users WHERE UserId = ?";
command.Parameters.AddWithValue("@UserId", txtUserId);`}
                  </pre>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SqlInjection;
