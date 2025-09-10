import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlLeftJoin = () => {
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
              <h1>SQL LEFT JOIN</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlinnerjoin">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlrightjoin">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <b>LEFT JOIN</b> keyword returns all records from the left table 
                (table1), and the matched records from the right table (table2). 
                If there is no match, the result is <code>NULL</code> from the right side.
              </p>

              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Tables</div>
                <div className="card-body">
                  <h5>Employees Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>DeptID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>101</td></tr>
                      <tr><td>2</td><td>Alice</td><td>102</td></tr>
                      <tr><td>3</td><td>Michael</td><td>103</td></tr>
                      <tr><td>4</td><td>Linda</td><td>NULL</td></tr>
                      <tr><td>5</td><td>David</td><td>104</td></tr>
                    </tbody>
                  </table>

                  <h5>Departments Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>DeptID</th>
                        <th>DeptName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>101</td><td>HR</td></tr>
                      <tr><td>102</td><td>IT</td></tr>
                      <tr><td>103</td><td>Finance</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Notice: Employee <b>Linda</b> has no department assigned, and 
                    Employee <b>David</b> has DeptID <b>104</b> which doesn’t exist in Departments.
                  </p>
                </div>
              </div>

              {/* Example 1: LEFT JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">LEFT JOIN Example</div>
                <div className="card-body">
                  <p>Get all employees and their department names:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Employees.EmpName, Departments.DeptName
FROM Employees
LEFT JOIN Departments
ON Employees.DeptID = Departments.DeptID;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpName</th>
                        <th>DeptName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>HR</td></tr>
                      <tr><td>Alice</td><td>IT</td></tr>
                      <tr><td>Michael</td><td>Finance</td></tr>
                      <tr><td>Linda</td><td>NULL</td></tr>
                      <tr><td>David</td><td>NULL</td></tr>
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
                    <li><b>LEFT JOIN</b> keeps all rows from the left table (Employees).</li>
                    <li>If no match is found in the right table (Departments), it returns <code>NULL</code>.</li>
                    <li>In the result, Linda and David appear but with <code>NULL</code> for DeptName.</li>
                    <li>This is useful when you want to keep all records from the main table.</li>
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

export default SqlLeftJoin;
