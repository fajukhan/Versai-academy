import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlConstraints = () => {
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
              <h1>SQL CONSTRAINTS</h1>
           
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="/sqlaltertable">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlnotnull">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                <b>SQL Constraints</b> are rules applied to the data in tables. 
                They ensure accuracy, integrity, and reliability of the data stored in the database. 
                Constraints are applied when creating or altering tables.
              </p>


              {/* Types */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Types of SQL Constraints</div>
                <div className="card-body">
                  <ul>
                    <li><b>NOT NULL</b> – Ensures a column cannot have NULL value.</li>
                    <li><b>UNIQUE</b> – Ensures all values in a column are unique.</li>
                    <li><b>PRIMARY KEY</b> – Combination of NOT NULL and UNIQUE. Each row is identified uniquely.</li>
                    <li><b>FOREIGN KEY</b> – Links data between two tables.</li>
                    <li><b>CHECK</b> – Ensures the values meet a specific condition.</li>
                    <li><b>DEFAULT</b> – Assigns a default value to a column if no value is provided.</li>
                  </ul>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Demo Table: Employees</div>
                <div className="card-body">
                  <p>We have an <b>Employees</b> table where we will apply constraints:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>DepartmentID</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Amit</td><td>30</td><td>amit@example.com</td><td>101</td><td>45000</td></tr>
                      <tr><td>2</td><td>Sara</td><td>28</td><td>sara@example.com</td><td>102</td><td>50000</td></tr>
                      <tr><td>3</td><td>John</td><td>25</td><td>john@example.com</td><td>103</td><td>40000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: NOT NULL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: NOT NULL</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT NOT NULL,
  Name VARCHAR(50) NOT NULL,
  Age INT,
  Email VARCHAR(100)
);`}
                  </pre>
                  <p><b>Result:</b> EmpID and Name cannot have NULL values.</p>
                </div>
              </div>

              {/* Example 2: UNIQUE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: UNIQUE</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT NOT NULL UNIQUE,
  Email VARCHAR(100) UNIQUE
);`}
                  </pre>
                  <p><b>Result:</b> EmpID and Email must be unique for each record.</p>
                </div>
              </div>

              {/* Example 3: PRIMARY KEY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: PRIMARY KEY</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL
);`}
                  </pre>
                  <p><b>Result:</b> EmpID uniquely identifies each record in the Employees table.</p>
                </div>
              </div>

              {/* Example 4: FOREIGN KEY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: FOREIGN KEY</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Departments (
  DeptID INT PRIMARY KEY,
  DeptName VARCHAR(50)
);

CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50),
  DeptID INT,
  FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);`}
                  </pre>
                  <p><b>Result:</b> DeptID in Employees must exist in Departments table.</p>
                </div>
              </div>

              {/* Example 5: CHECK */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: CHECK</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  Age INT CHECK (Age >= 18)
);`}
                  </pre>
                  <p><b>Result:</b> Age must be 18 or above.</p>
                </div>
              </div>

              {/* Example 6: DEFAULT */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: DEFAULT</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  Salary DECIMAL(10,2) DEFAULT 30000
);`}
                  </pre>
                  <p><b>Result:</b> If no salary is provided, default value will be 30000.</p>
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

export default SqlConstraints;
