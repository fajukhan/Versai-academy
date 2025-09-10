import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlSelectInto = () => {
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
              <h1>SQL SELECT INTO Statement</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlanyall">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlselectintroselect">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <code>SELECT INTO</code> statement copies data from one table 
                into a new table. It is often used to create a backup table 
                or to copy specific rows into a new table.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Employees Table</div>
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
                      <tr><td>1</td><td>Alice</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Bob</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>Charlie</td><td>Finance</td><td>5000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <p>This is our source table that contains employee details.</p>
                </div>
              </div>

              {/* Example 1: Copy All Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Copy All Data</div>
                <div className="card-body">
                  <p>Create a new table <b>EmployeesBackup</b> with all rows:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT *
INTO EmployeesBackup
FROM Employees;`}
                  </pre>
                  <p><b>Result: EmployeesBackup Table</b></p>
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
                      <tr><td>1</td><td>Alice</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Bob</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>Charlie</td><td>Finance</td><td>5000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Copy with Condition */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Copy Data with Condition</div>
                <div className="card-body">
                  <p>Create a new table <b>HighSalaryEmployees</b> where salary is greater than 5000:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT EmpID, Name, Salary
INTO HighSalaryEmployees
FROM Employees
WHERE Salary > 5000;`}
                  </pre>
                  <p><b>Result: HighSalaryEmployees Table</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>2</td><td>Bob</td><td>6000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Copy Specific Columns */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Copy Specific Columns</div>
                <div className="card-body">
                  <p>Create a new table <b>EmployeeDepartments</b> with only employee names and departments:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Department
INTO EmployeeDepartments
FROM Employees;`}
                  </pre>
                  <p><b>Result: EmployeeDepartments Table</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Alice</td><td>HR</td></tr>
                      <tr><td>Bob</td><td>IT</td></tr>
                      <tr><td>Charlie</td><td>Finance</td></tr>
                      <tr><td>Diana</td><td>IT</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Explanation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Explanation</div>
                <div className="card-body">
                  <ul>
                    <li><code>SELECT INTO</code> creates a new table from an existing one.</li>
                    <li>You can copy <b>all rows</b> or filter with <code>WHERE</code>.</li>
                    <li>You can copy <b>specific columns</b> instead of all columns.</li>
                    <li>The new table is created with the same column names and datatypes as the selected columns.</li>
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

export default SqlSelectInto;

