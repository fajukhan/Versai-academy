import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import Sidebar from "../Sidebar";
const SqlAlterTable = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

              
             {/* Sidebar (Left - col-2) */}
              <Sidebar />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>SQL ALTER TABLE</h1>
        

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqldroptable">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlconstraints">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                    <p className="lead py-5">
                The <b>ALTER TABLE</b> statement is used to <u>add, delete, or modify columns</u> 
                in an existing table. It can also be used to add and drop constraints.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- Add a new column
ALTER TABLE table_name
ADD column_name datatype;

-- Drop a column
ALTER TABLE table_name
DROP COLUMN column_name;

-- Modify a column
ALTER TABLE table_name
ALTER COLUMN column_name datatype;`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Demo Table: Employees</div>
                <div className="card-body">
                  <p>We have an <b>Employees</b> table:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Ravi</td><td>35000</td></tr>
                      <tr><td>2</td><td>Priya</td><td>42000</td></tr>
                      <tr><td>3</td><td>Amit</td><td>39000</td></tr>
                    </tbody>
                  </table>
                  <p>This table will be altered using <code>ALTER TABLE</code>.</p>
                </div>
              </div>

              {/* Example 1: Add Column */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Add a Column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Employees
ADD Department VARCHAR(50);`}
                  </pre>
                  <p><b>Result:</b> A new column <code>Department</code> will be added.</p>
                </div>
              </div>

              {/* Example 2: Drop Column */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Drop a Column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Employees
DROP COLUMN Salary;`}
                  </pre>
                  <p><b>Result:</b> The column <code>Salary</code> will be removed.</p>
                </div>
              </div>

              {/* Example 3: Modify Column */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Modify Column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Employees
ALTER COLUMN EmpName VARCHAR(100);`}
                  </pre>
                  <p><b>Result:</b> The <code>EmpName</code> column size changes from 50 to 100.</p>
                </div>
              </div>

              {/* Example 4: Rename Column */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Rename Column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- SQL Server / Oracle
EXEC sp_rename 'Employees.EmpName', 'FullName', 'COLUMN';

-- MySQL
ALTER TABLE Employees
CHANGE EmpName FullName VARCHAR(100);`}
                  </pre>
                  <p><b>Result:</b> The column <code>EmpName</code> is renamed to <code>FullName</code>.</p>
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

export default SqlAlterTable;
