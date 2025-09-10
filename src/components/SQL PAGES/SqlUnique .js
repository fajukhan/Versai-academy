import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlUnique = () => {
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
              <h1>SQL UNIQUE Constraint</h1>
              
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlnotnull">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlprimarykey">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>
              <p className="lead py-5">
                The <b>UNIQUE constraint</b> ensures that all values in a column are <code>different</code>.  
                This means duplicate values are not allowed. Multiple columns can also be combined to form a UNIQUE constraint.
              </p>


              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL UNIQUE Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
  column1 datatype UNIQUE,
  column2 datatype,
  ...
);`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Demo Table: Employees</div>
                <div className="card-body">
                  <p>We have an <b>Employees</b> table where <code>Email</code> must be unique for every employee:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Amit</td><td>amit@example.com</td><td>HR</td></tr>
                      <tr><td>2</td><td>Neha</td><td>neha@example.com</td><td>IT</td></tr>
                      <tr><td>3</td><td>Raj</td><td>raj@example.com</td><td>Finance</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: UNIQUE on One Column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT,
  Name VARCHAR(50),
  Email VARCHAR(100) UNIQUE,
  Department VARCHAR(50)
);`}
                  </pre>
                  <p><b>Result:</b> Email column cannot contain duplicate values.</p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Inserting Duplicate Values</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Employees (EmpID, Name, Email, Department)
VALUES (1, 'Amit', 'amit@example.com', 'HR');   -- ✅ Works

INSERT INTO Employees (EmpID, Name, Email, Department)
VALUES (2, 'Neha', 'amit@example.com', 'IT');   -- ❌ Error (Email already exists)`}
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: UNIQUE on Multiple Columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT,
  Name VARCHAR(50),
  Department VARCHAR(50),
  CONSTRAINT unique_emp UNIQUE (Name, Department)
);`}
                  </pre>
                  <p><b>Result:</b> Name and Department combination must be unique.</p>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Add UNIQUE to Existing Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Employees
ADD CONSTRAINT unique_email UNIQUE (Email);`}
                  </pre>
                  <p><b>Result:</b> Adds a UNIQUE constraint on the Email column.</p>
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

export default SqlUnique;
