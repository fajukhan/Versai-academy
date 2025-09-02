import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlConstraints = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

                       
             {/* Sidebar (Left - col-2) */}
<div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
  <h5 className="fw-bold">SQL Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="sql">SQL HOME</a></li>
    <li><a href="sqlintroduction">SQL Intro</a></li>
    <li><a href="sqlsyntax">SQL Syntax</a></li>
    <li><a href="sqlselect">SQL Select</a></li>
    <li><a href="sqlselectdistinct">SQL Select Distinct</a></li>
    <li><a href="sqlwhere">SQL Where</a></li>
    <li><a href="sqlorderby">SQL Order By</a></li>
    <li><a href="sqland">SQL And</a></li>
    <li><a href="sqlor">SQL Or</a></li>
    <li><a href="sqlnot">SQL Not</a></li>
     <li><a href="sqlinsert">SQL Insert Into</a></li>
 <li><a href="sqlnullvalues">SQL Null Values</a></li>
     <li><a href="sqlupdate">SQL Update</a></li>
       <li><a href="sqldelete">SQL Delete</a></li>
   <li><a href="sqltop">SQL Select Top</a></li>
       <li><a href="sqlaggregatefunction">SQL Aggregate Functions</a></li>
    <li><a href="sqlminmax">SQL Min and Max</a></li>
   <li><a href="sqlcount">SQL Count</a></li>
    <li><a href="sqlsum">SQL Sum</a></li>
     <li><a href="sqlavg">SQL Avg</a></li>
 <li><a href="sqllike">SQL Like</a></li>
     <li><a href="sqlwildcard">SQL Wildcards</a></li>
     <li><a href="sqlinoperator">SQL In</a></li>
     <li><a href="sqlbetween">SQL Between</a></li>
       <li><a href="sqlaliases">SQL Aliases</a></li>
  <li><a href="sqljoins">SQL Joins</a></li>
    <li><a href="sqlinnerjoin">SQL Inner Join</a></li>
    <li><a href="sqlleftjoin">SQL Left Join</a></li>
    <li><a href="sqlrightjoin">SQL Right Join</a></li>
<li><a href="sqlfulljoin">SQL Full Join</a></li>
    <li><a href="sqlselfjoin">SQL Self Join</a></li>
      <li><a href="sqlunion">SQL Union</a></li>

  <li><a href="SqlUnionAll">SQL Union All</a></li>
      <li><a href="sqlgroupby">SQL Group By</a></li>

    <li><a href="sqlhaving">SQL Having</a></li>
    <li><a href="sqlexists">SQL Exists</a></li>
    <li><a href="sqlanyall">SQL Any, All</a></li>
    <li><a href="sqlselectintro">SQL Select Into</a></li>
    <li><a href="sqlselectintroselect">SQL Insert Into Select</a></li>
    <li><a href="sqlcase">SQL Case</a></li>
    <li><a href="sqlnullfunctions">SQL Null Functions</a></li>
    <li><a href="sqlstoredprocedure">SQL Stored Procedures</a></li>
    <li><a href="sqlcomments">SQL Comments</a></li>
    <li><a href="sqloperators">SQL Operators</a></li>
  </ul>

  <h5 className="fw-bold">SQL Database</h5>
  <ul className="list-unstyled">
    <li><a href="sqlcreatedatabase">SQL Create DB</a></li>
    <li><a href="sqldropdatabase">SQL Drop DB</a></li>
    <li><a href="sqlbackupdatabase">SQL Backup DB</a></li>
    <li><a href="sqlcreatetable">SQL Create Table</a></li>
    <li><a href="sqldroptable">SQL Drop Table</a></li>
    <li><a href="sqlaltertable">SQL Alter Table</a></li>
    <li><a href="sqlconstraints">SQL Constraints</a></li>
    <li><a href="sqlnotnull">SQL Not Null</a></li>
    <li><a href="sqlunique">SQL Unique</a></li>
    <li><a href="sqlprimarykey">SQL Primary Key</a></li>
    <li><a href="sqlforeignkey">SQL Foreign Key</a></li>
    <li><a href="sqlcheck">SQL Check</a></li>
    <li><a href="sqldefault">SQL Default</a></li>
    <li><a href="sqlindex">SQL Index</a></li>
    <li><a href="sqlautoincrement">SQL Auto Increment</a></li>
    <li><a href="sqldates">SQL Dates</a></li>
    <li><a href="sqlviews">SQL Views</a></li>
    <li><a href="sqlinjection">SQL Injection</a></li>
    <li><a href="sqlhosting">SQL Hosting</a></li>
    <li><a href="sqldatatypes">SQL Data Types</a></li>
  </ul>
</div>
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
