import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlAliases = () => {
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
              <h1>SQL Aliases</h1>
              

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlbetween">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqljoins">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


              <p className="lead py-5">
                SQL <b>Aliases</b> are used to give a table or a column a temporary name.
                They make column names more readable and are often used when joining tables.
                <br />
                An alias only exists for the duration of the query.
              </p>

              <h4>Syntax for Column Alias:</h4>
              <pre className="bg-light p-3 rounded">
{`SELECT column_name AS alias_name
FROM table_name;`}
              </pre>

              <h4>Syntax for Table Alias:</h4>
              <pre className="bg-light p-3 rounded">
{`SELECT column_name(s)
FROM table_name AS alias_name;`}
              </pre>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Employees</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Department</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>Doe</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Jane</td><td>Smith</td><td>Finance</td><td>5000</td></tr>
                      <tr><td>3</td><td>Sam</td><td>Wilson</td><td>IT</td><td>6000</td></tr>
                      <tr><td>4</td><td>Lisa</td><td>Brown</td><td>Marketing</td><td>4500</td></tr>
                      <tr><td>5</td><td>Mark</td><td>Lee</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Employees</b> table contains employee information including department and salary.
                  </p>
                </div>
              </div>

              {/* Example 1: Column Alias */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Column Alias</div>
                <div className="card-body">
                  <p>Display FirstName and LastName with alias names:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT FirstName AS "First Name", LastName AS "Last Name"
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> Shows employee names with clearer column headers.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Table Alias */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Table Alias</div>
                <div className="card-body">
                  <p>Use alias <code>E</code> for Employees table:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT E.FirstName, E.Department
FROM Employees AS E;`}
                  </pre>
                  <p><b>Result:</b> Returns employee first names with their departments.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Multiple Aliases */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Multiple Aliases</div>
                <div className="card-body">
                  <p>Alias multiple columns for readability:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT FirstName AS Name, Salary AS Income
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> Displays employees with Name and Income instead of FirstName and Salary.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: Aliases in Expressions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Aliases in Expressions</div>
                <div className="card-body">
                  <p>Alias used with calculated columns:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT FirstName, Salary * 12 AS AnnualSalary
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> Displays employee annual salary using alias <code>AnnualSalary</code>.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Aliases give a temporary name to a column or table.</li>
                    <li>They improve readability of query results.</li>
                    <li>Useful for expressions and when joining tables.</li>
                    <li>Exist only for the duration of the query.</li>
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

export default SqlAliases;
