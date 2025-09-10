import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlInOperator = () => {
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
              <h1>SQL IN Operator</h1>
              

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlwildcard">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlbetween">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>IN</code> operator allows you to specify multiple values 
                in a <code>WHERE</code> clause. It is a shorthand for multiple 
                <code>OR</code> conditions.
              </p>

              <h4>Syntax:</h4>
              <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE column_name IN (value1, value2, ...);`}
              </pre>

              <p><b>Note:</b> You can also use <code>NOT IN</code> to exclude values.</p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Employees</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Alice</td><td>HR</td><td>45000</td></tr>
                      <tr><td>2</td><td>Bob</td><td>IT</td><td>60000</td></tr>
                      <tr><td>3</td><td>Charlie</td><td>Finance</td><td>55000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>65000</td></tr>
                      <tr><td>5</td><td>Eva</td><td>Marketing</td><td>48000</td></tr>
                      <tr><td>6</td><td>Frank</td><td>Finance</td><td>50000</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Employees</b> table stores employee details including their department and salary.
                  </p>
                </div>
              </div>

              {/* Example 1: IN with Text Values */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: IN with Text Values</div>
                <div className="card-body">
                  <p>Find employees from IT and Finance departments:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Employees
WHERE Department IN ('IT', 'Finance');`}
                  </pre>
                  <p><b>Result:</b> Bob (IT), Charlie (Finance), Diana (IT), Frank (Finance)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: IN with Numbers */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: IN with Numbers</div>
                <div className="card-body">
                  <p>Find employees with salaries 45000, 55000, or 65000:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Employees
WHERE Salary IN (45000, 55000, 65000);`}
                  </pre>
                  <p><b>Result:</b> Alice (45000), Charlie (55000), Diana (65000)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: NOT IN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using NOT IN</div>
                <div className="card-body">
                  <p>Find employees not in the IT department:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Employees
WHERE Department NOT IN ('IT');`}
                  </pre>
                  <p><b>Result:</b> Alice (HR), Charlie (Finance), Eva (Marketing), Frank (Finance)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>IN</code> is used to specify multiple possible values.</li>
                    <li>It reduces the need for multiple <code>OR</code> conditions.</li>
                    <li><code>NOT IN</code> excludes values from the results.</li>
                  </ul>
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

export default SqlInOperator;
