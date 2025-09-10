import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlCount = () => {
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
              <h1>SQL COUNT() Function</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlminmax">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlsum">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <code>COUNT()</code> function returns the number of rows that
                match a specific condition. It is often used to find the total
                number of records in a table.
              </p>

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
                      <tr><td>1</td><td>John</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Sarah</td><td>IT</td><td>5000</td></tr>
                      <tr><td>3</td><td>Mike</td><td>Finance</td><td>4500</td></tr>
                      <tr><td>4</td><td>Emma</td><td>IT</td><td>6000</td></tr>
                      <tr><td>5</td><td>David</td><td>HR</td><td>NULL</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Employees</b> table stores employee details including
                    department and salary. Notice that David has a <b>NULL</b> salary.
                  </p>
                </div>
              </div>

              {/* Example 1: COUNT(*) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: COUNT(*)</div>
                <div className="card-body">
                  <p>Count all rows in the Employees table:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT COUNT(*) AS TotalEmployees
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> 5 (all rows counted, including NULL values)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: COUNT(column) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: COUNT(Salary)</div>
                <div className="card-body">
                  <p>Count all employees with a defined salary:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT COUNT(Salary) AS EmployeesWithSalary
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> 4 (David’s NULL salary is ignored)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: COUNT(DISTINCT) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: COUNT(DISTINCT Department)</div>
                <div className="card-body">
                  <p>Count the number of different departments:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT COUNT(DISTINCT Department) AS UniqueDepartments
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> 3 (HR, IT, Finance)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: COUNT with WHERE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: COUNT with WHERE</div>
                <div className="card-body">
                  <p>Count how many employees work in the IT department:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT COUNT(*) AS IT_Employees
FROM Employees
WHERE Department = 'IT';`}
                  </pre>
                  <p><b>Result:</b> 2 (Sarah and Emma)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>COUNT(*)</code> → Counts all rows (including NULLs)</li>
                    <li><code>COUNT(column)</code> → Counts non-NULL values in a column</li>
                    <li><code>COUNT(DISTINCT column)</code> → Counts unique values</li>
                    <li>Can be combined with <code>WHERE</code> to filter results</li>
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

export default SqlCount;
