import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlInsertIntoSelect = () => {
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
              <h1>SQL INSERT INTO SELECT Statement</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlselectintro">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlcase">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <code>INSERT INTO SELECT</code> statement is used to copy data 
                from one table and insert it into another existing table.  
                Unlike <code>SELECT INTO</code>, it does not create a new table, 
                but inserts rows into an already existing table.
              </p>


              {/* Source Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Employees Table (Source)</div>
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
                </div>
              </div>

              {/* Target Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">EmployeesBackup Table (Target - Initially Empty)</div>
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
                      <tr><td colSpan="4" className="text-center">No rows yet</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> The target table must already exist before using <code>INSERT INTO SELECT</code>.</p>
                </div>
              </div>

              {/* Example 1: Insert All Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Insert All Rows</div>
                <div className="card-body">
                  <p>Insert all rows from <b>Employees</b> into <b>EmployeesBackup</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO EmployeesBackup (EmpID, Name, Department, Salary)
SELECT EmpID, Name, Department, Salary
FROM Employees;`}
                  </pre>
                  <p><b>Result: EmployeesBackup Table after insertion</b></p>
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

              {/* Example 2: Insert with Condition */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Insert Rows with Condition</div>
                <div className="card-body">
                  <p>Insert only employees with <b>Salary greater than 5000</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO EmployeesBackup (EmpID, Name, Department, Salary)
SELECT EmpID, Name, Department, Salary
FROM Employees
WHERE Salary > 5000;`}
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
                      <tr><td>2</td><td>Bob</td><td>IT</td><td>6000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Insert Specific Columns */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Insert Specific Columns</div>
                <div className="card-body">
                  <p>Insert only employee <b>Names</b> and <b>Departments</b> into a backup table:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO EmployeeDeptBackup (Name, Department)
SELECT Name, Department
FROM Employees;`}
                  </pre>
                  <p><b>Result: EmployeeDeptBackup Table</b></p>
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
                    <li><code>INSERT INTO SELECT</code> copies data from one table into another existing table.</li>
                    <li>The target table must exist before using this statement.</li>
                    <li>You can insert <b>all rows</b> or filter rows using <code>WHERE</code>.</li>
                    <li>You can insert <b>specific columns</b> by mentioning them explicitly.</li>
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

export default SqlInsertIntoSelect;
