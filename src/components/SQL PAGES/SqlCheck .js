import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlCheck = () => {
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
              <h1>SQL CHECK Constraint</h1>
          

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlforeignkey">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqldefault">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>
                  <p className="lead py-5">
                The <b>CHECK constraint</b> is used to limit the values that can be 
                placed in a column.  
                If you define a CHECK constraint on a column, it allows only 
                those values that satisfy the condition.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL CHECK Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
  column1 datatype CHECK (condition),
  column2 datatype,
  ...
);`}
                  </pre>
                  <p className="mt-2">or using <code>CONSTRAINT</code> keyword:</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  CONSTRAINT constraint_name CHECK (condition)
);`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Employees</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>25</td><td>30000</td></tr>
                      <tr><td>2</td><td>Priya</td><td>30</td><td>40000</td></tr>
                      <tr><td>3</td><td>Amit</td><td>22</td><td>25000</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> Here we want <code>Age &gt;= 18</code> and <code>Salary &gt;= 20000</code>.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: CHECK in Create Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT CHECK (Age >= 18),
  Salary DECIMAL(10,2) CHECK (Salary >= 20000)
);`}
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Named CHECK Constraint</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT,
  Salary DECIMAL(10,2),
  CONSTRAINT chk_age CHECK (Age >= 18),
  CONSTRAINT chk_salary CHECK (Salary >= 20000)
);`}
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Add CHECK to Existing Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Employees
ADD CONSTRAINT chk_salary CHECK (Salary >= 20000);`}
                  </pre>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Insert Valid Data</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Employees (EmpID, Name, Age, Salary)
VALUES (4, 'Anjali', 28, 35000);   -- ✅ Works (Age >= 18, Salary >= 20000)`}  
                  </pre>
                </div>
              </div>

              {/* Example 5 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Insert Invalid Data</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Employees (EmpID, Name, Age, Salary)
VALUES (5, 'Karan', 16, 15000);   -- ❌ Error (violates CHECK constraints)`}  
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

export default SqlCheck;
