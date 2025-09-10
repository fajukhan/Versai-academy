import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlViews = () => {
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
              <h1>SQL VIEWS</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqldates">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlinjection">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                A <b>View</b> in SQL is a virtual table based on the result of a SQL statement.
                It contains rows and columns just like a real table, but it does not store the data itself.
              </p>

              <p>
                Views are used for simplifying complex queries, improving security, and presenting data 
                in a user-friendly way.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL VIEW Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- Create View
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

-- Update View
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;

-- Drop View
DROP VIEW view_name;`}
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
                        <th>Department</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>IT</td><td>50000</td></tr>
                      <tr><td>2</td><td>Priya</td><td>HR</td><td>45000</td></tr>
                      <tr><td>3</td><td>Amit</td><td>IT</td><td>60000</td></tr>
                      <tr><td>4</td><td>Neha</td><td>Finance</td><td>55000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: Create View */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create View</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE VIEW IT_Employees AS
SELECT Name, Salary
FROM Employees
WHERE Department = 'IT';`}
                  </pre>
                  <p><b>Result:</b> A view named <code>IT_Employees</code> will show only IT employees.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Rahul</td><td>50000</td></tr>
                      <tr><td>Amit</td><td>60000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 2: Select From View */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Select From View</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM IT_Employees;`}
                  </pre>
                  <p>This will return the IT employees only.</p>
                </div>
              </div>

              {/* Example 3: Update View */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Update View</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE OR REPLACE VIEW HighSalary AS
SELECT Name, Department, Salary
FROM Employees
WHERE Salary > 50000;`}
                  </pre>
                  <p><b>Result:</b> A view named <code>HighSalary</code> will show employees earning above 50,000.</p>
                </div>
              </div>

              {/* Example 4: Drop View */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Drop View</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP VIEW IT_Employees;`}
                  </pre>
                  <p>This command deletes the view <code>IT_Employees</code>.</p>
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

export default SqlViews;
