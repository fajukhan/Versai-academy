import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlNullValues = () => {
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
              <h1>SQL NULL Values</h1>
        

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlinsert">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlupdate">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                    <p className="lead py-5">
                In SQL, a <code>NULL</code> value represents a missing or unknown value. 
                It is different from an empty string or zero value.
              </p>
              <p>
                To test for <code>NULL</code> values, you must use the 
                <code> IS NULL</code> or <code>IS NOT NULL</code> operators.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL NULL Syntax</div>
                <div className="card-body">
                  <p><b>Check for NULL:</b></p>
                  <pre className="bg-light p-3 rounded">
{`SELECT column_names
FROM table_name
WHERE column_name IS NULL;`}
                  </pre>

                  <p><b>Check for NOT NULL:</b></p>
                  <pre className="bg-light p-3 rounded">
{`SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;`}
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
                        <th>EmployeeID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Alice</td><td>alice@example.com</td><td>HR</td></tr>
                      <tr><td>2</td><td>Bob</td><td>NULL</td><td>Finance</td></tr>
                      <tr><td>3</td><td>Charlie</td><td>charlie@example.com</td><td>NULL</td></tr>
                      <tr><td>4</td><td>David</td><td>NULL</td><td>IT</td></tr>
                    </tbody>
                  </table>
                  <p>
                    In this <b>Employees</b> table, some rows have <code>NULL</code> values 
                    in the <b>Email</b> or <b>Department</b> columns.
                  </p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Find employees with no email</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Department
FROM Employees
WHERE Email IS NULL;`}
                  </pre>
                  <p><b>Result:</b> Returns employees who do not have an email address.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Find employees with email</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Email
FROM Employees
WHERE Email IS NOT NULL;`}
                  </pre>
                  <p><b>Result:</b> Returns employees who have an email address.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Find employees with no department</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Email
FROM Employees
WHERE Department IS NULL;`}
                  </pre>
                  <p><b>Result:</b> Returns employees who do not belong to any department.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL NULL Values Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>NULL</code> means missing or unknown value.</li>
                    <li>Use <code>IS NULL</code> to test for <code>NULL</code>.</li>
                    <li>Use <code>IS NOT NULL</code> to test for values that are not null.</li>
                    <li><code>NULL</code> is different from <code>0</code> or an empty string <code>('')</code>.</li>
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

export default SqlNullValues;
