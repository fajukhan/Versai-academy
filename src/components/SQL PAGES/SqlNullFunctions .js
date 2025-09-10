import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlNullFunctions = () => {
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
              <h1>SQL NULL Functions</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlcase">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlstoredprocedure">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>
               <p className="lead py-5">
                SQL provides special functions to handle <code>NULL</code> values.  
                The most commonly used are <code>ISNULL()</code>, <code>IFNULL()</code>, and <code>COALESCE()</code>.
              </p>

              {/* Employees Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Employees Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>5000</td><td>1000</td></tr>
                      <tr><td>2</td><td>Sara</td><td>6000</td><td>NULL</td></tr>
                      <tr><td>3</td><td>Mike</td><td>5500</td><td>500</td></tr>
                      <tr><td>4</td><td>Linda</td><td>7000</td><td>NULL</td></tr>
                      <tr><td>5</td><td>Tom</td><td>6500</td><td>800</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: ISNULL (SQL Server) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Using ISNULL() (SQL Server)</div>
                <div className="card-body">
                  <p>
                    The <code>ISNULL()</code> function replaces <code>NULL</code> with a specified replacement value.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, ISNULL(Bonus, 0) AS BonusAmount
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>BonusAmount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>1000</td></tr>
                      <tr><td>Sara</td><td>0</td></tr>
                      <tr><td>Mike</td><td>500</td></tr>
                      <tr><td>Linda</td><td>0</td></tr>
                      <tr><td>Tom</td><td>800</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: IFNULL (MySQL) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Using IFNULL() (MySQL)</div>
                <div className="card-body">
                  <p>
                    The <code>IFNULL()</code> function in MySQL works like <code>ISNULL()</code>.  
                    It replaces <code>NULL</code> with a given value.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, IFNULL(Bonus, 0) AS BonusAmount
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>BonusAmount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>1000</td></tr>
                      <tr><td>Sara</td><td>0</td></tr>
                      <tr><td>Mike</td><td>500</td></tr>
                      <tr><td>Linda</td><td>0</td></tr>
                      <tr><td>Tom</td><td>800</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: COALESCE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Using COALESCE()</div>
                <div className="card-body">
                  <p>
                    The <code>COALESCE()</code> function returns the first non-NULL value from a list.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, COALESCE(Bonus, 0) AS BonusAmount
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>BonusAmount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>1000</td></tr>
                      <tr><td>Sara</td><td>0</td></tr>
                      <tr><td>Mike</td><td>500</td></tr>
                      <tr><td>Linda</td><td>0</td></tr>
                      <tr><td>Tom</td><td>800</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Explanation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Explanation</div>
                <div className="card-body">
                  <ul>
                    <li><code>ISNULL(expr, value)</code> → SQL Server only</li>
                    <li><code>IFNULL(expr, value)</code> → MySQL only</li>
                    <li><code>COALESCE(expr1, expr2, ...)</code> → Works in most SQL databases</li>
                    <li>All of them help to replace <code>NULL</code> with a user-defined value.</li>
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

export default SqlNullFunctions;
