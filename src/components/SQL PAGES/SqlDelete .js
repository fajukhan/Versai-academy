import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlDelete = () => {
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
              <h1>SQL DELETE Statement</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlupdate">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqltop">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <code>DELETE</code> statement is used to remove one or more rows from a table.  
                Always use a <code>WHERE</code> clause to delete specific records; otherwise, all rows will be removed.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL DELETE Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM table_name
WHERE condition;`}
                  </pre>
                  <p><b>Important:</b> If you omit the <code>WHERE</code> clause, all rows will be deleted!</p>
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
                      <tr><td>1</td><td>John Doe</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Jane Smith</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>Mark Lee</td><td>Finance</td><td>5000</td></tr>
                      <tr><td>4</td><td>Alice Brown</td><td>IT</td><td>7000</td></tr>
                      <tr><td>5</td><td>Bob White</td><td>HR</td><td>3500</td></tr>
                    </tbody>
                  </table>
                  <p>The <b>Employees</b> table stores employee details such as department and salary.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Delete a single row</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM Employees
WHERE EmpID = 5;`}
                  </pre>
                  <p><b>Result:</b> Deletes the employee with ID = 5 (Bob White).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Delete multiple rows</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM Employees
WHERE Department = 'HR';`}
                  </pre>
                  <p><b>Result:</b> Deletes all employees working in the HR department.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Delete based on condition</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM Employees
WHERE Salary < 5000;`}
                  </pre>
                  <p><b>Result:</b> Deletes all employees whose salary is less than 5000.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Delete all rows (use with caution)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> Removes all records from the Employees table, but the table structure remains intact.</p>
                  <p className="text-danger"><b>Warning:</b> Use this only when you really want to empty the table.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL DELETE Statement Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>DELETE</code> statement removes rows from a table.</li>
                    <li>Use <code>WHERE</code> to delete specific rows.</li>
                    <li>Omitting <code>WHERE</code> will delete all rows.</li>
                    <li>Table structure remains, but data is removed.</li>
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

export default SqlDelete;

