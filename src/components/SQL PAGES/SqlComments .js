import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlComments = () => {
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
              <h1>SQL Comments</h1>
              

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlstoredprocedure">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqloperators">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>
              <p className="lead py-5">
                <b>Comments</b> in SQL are used to explain the code, make it easier to understand, 
                and prevent parts of SQL statements from being executed.
              </p>

              {/* Types of Comments */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Types of SQL Comments</div>
                <div className="card-body">
                  <ul>
                    <li><b>Single-line Comment:</b> Uses <code>--</code> to comment one line.</li>
                    <li><b>Multi-line Comment:</b> Uses <code></code> for multiple lines.</li>
                  </ul>
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
                      <tr><td>1</td><td>Alex</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Brian</td><td>IT</td><td>5000</td></tr>
                      <tr><td>3</td><td>Clara</td><td>Finance</td><td>6000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                      <tr><td>5</td><td>Eva</td><td>HR</td><td>4500</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: Single-line Comment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Single-line Comment</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- Select all employees
SELECT * FROM Employees;`}
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
                      <tr><td>1</td><td>Alex</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Brian</td><td>IT</td><td>5000</td></tr>
                      <tr><td>3</td><td>Clara</td><td>Finance</td><td>6000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                      <tr><td>5</td><td>Eva</td><td>HR</td><td>4500</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Inline Comment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Inline Comment</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Employees -- This selects all employees`}
                  </pre>
                  <p><b>Result:</b> Same output as Example 1.</p>
                </div>
              </div>

              {/* Example 3: Multi-line Comment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Multi-line Comment</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`/* Select only IT employees */
SELECT * FROM Employees
WHERE Department = 'IT';`}
                  </pre>
                  <p><b>Result:</b> Only IT employees are displayed.</p>
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
                      <tr><td>2</td><td>Brian</td><td>IT</td><td>5000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: Ignoring a Line */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Ignoring a Line</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`/* SELECT * FROM Employees; */
SELECT Name, Salary FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> Only Name and Salary columns are displayed.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Alex</td><td>4000</td></tr>
                      <tr><td>Brian</td><td>5000</td></tr>
                      <tr><td>Clara</td><td>6000</td></tr>
                      <tr><td>Diana</td><td>7000</td></tr>
                      <tr><td>Eva</td><td>4500</td></tr>
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

export default SqlComments;
