import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlStoredProcedure = () => {
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
              <h1>SQL Stored Procedure</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlnullfunctions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlcomments">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                A <b>Stored Procedure</b> is a prepared SQL code that you can save, so the code can be reused over and over again.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Stored Procedure Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE PROCEDURE procedure_name
AS
sql_statement
GO;`}
                  </pre>
                  <p><b>Execute Procedure:</b></p>
                  <pre className="bg-light p-3 rounded">
{`EXEC procedure_name;`}
                  </pre>
                </div>
              </div>

              {/* Employees Table */}
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
                      <tr><td>1</td><td>John</td><td>HR</td><td>5000</td></tr>
                      <tr><td>2</td><td>Sara</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>Mike</td><td>Finance</td><td>5500</td></tr>
                      <tr><td>4</td><td>Linda</td><td>IT</td><td>7000</td></tr>
                      <tr><td>5</td><td>Tom</td><td>HR</td><td>6500</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: Simple Procedure */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Simple Stored Procedure</div>
                <div className="card-body">
                  <p>
                    This procedure selects all records from the <code>Employees</code> table.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`CREATE PROCEDURE GetAllEmployees
AS
SELECT * FROM Employees;
GO;

-- Execute
EXEC GetAllEmployees;`}
                  </pre>
                  <p><b>Result:</b> All employees will be displayed.</p>
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
                      <tr><td>1</td><td>John</td><td>HR</td><td>5000</td></tr>
                      <tr><td>2</td><td>Sara</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>Mike</td><td>Finance</td><td>5500</td></tr>
                      <tr><td>4</td><td>Linda</td><td>IT</td><td>7000</td></tr>
                      <tr><td>5</td><td>Tom</td><td>HR</td><td>6500</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Procedure with Parameter */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Procedure with Parameter</div>
                <div className="card-body">
                  <p>
                    This procedure selects employees from a specific department.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`CREATE PROCEDURE GetEmployeesByDept
  @DeptName nvarchar(50)
AS
SELECT * FROM Employees WHERE Department = @DeptName;
GO;

-- Execute
EXEC GetEmployeesByDept @DeptName = 'IT';`}
                  </pre>
                  <p><b>Result:</b> Only employees from IT department will be displayed.</p>
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
                      <tr><td>2</td><td>Sara</td><td>IT</td><td>6000</td></tr>
                      <tr><td>4</td><td>Linda</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Procedure with Multiple Parameters */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Procedure with Multiple Parameters</div>
                <div className="card-body">
                  <p>
                    This procedure selects employees with salary greater than a given amount and from a specific department.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`CREATE PROCEDURE GetHighSalaryEmployees
  @DeptName nvarchar(50),
  @MinSalary int
AS
SELECT * FROM Employees 
WHERE Department = @DeptName AND Salary > @MinSalary;
GO;

-- Execute
EXEC GetHighSalaryEmployees @DeptName = 'HR', @MinSalary = 5500;`}
                  </pre>
                  <p><b>Result:</b> Only HR employees with salary greater than 5500 will be displayed.</p>
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
                      <tr><td>5</td><td>Tom</td><td>HR</td><td>6500</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
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

export default SqlStoredProcedure;
