import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlSelfJoin = () => {
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
              <h1>SQL SELF JOIN</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlfulljoin">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlunion">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                A <b>SELF JOIN</b> is a regular join, but the table is joined with itself.  
                It is useful for finding relationships within the same table, such as 
                employees and their managers.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Employees Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmployeeID</th>
                        <th>EmployeeName</th>
                        <th>ManagerID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>3</td></tr>
                      <tr><td>2</td><td>Alice</td><td>3</td></tr>
                      <tr><td>3</td><td>David</td><td>NULL</td></tr>
                      <tr><td>4</td><td>Sara</td><td>2</td></tr>
                      <tr><td>5</td><td>Mike</td><td>1</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Here, each employee has a <b>ManagerID</b> that references another employee in the same table.
                  </p>
                </div>
              </div>

              {/* Example 1: SELF JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SELF JOIN Example</div>
                <div className="card-body">
                  <p>List employees with their managers:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT E.EmployeeName AS Employee, M.EmployeeName AS Manager
FROM Employees E
LEFT JOIN Employees M
ON E.ManagerID = M.EmployeeID;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Employee</th>
                        <th>Manager</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>David</td></tr>
                      <tr><td>Alice</td><td>David</td></tr>
                      <tr><td>David</td><td>NULL</td></tr>
                      <tr><td>Sara</td><td>Alice</td></tr>
                      <tr><td>Mike</td><td>John</td></tr>
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
                    <li>A <b>SELF JOIN</b> joins a table with itself.</li>
                    <li>You must use table aliases (like <code>E</code> and <code>M</code>) to differentiate between the two instances.</li>
                    <li>Here, we joined employees with their managers from the same table.</li>
                    <li>It is useful for hierarchical data like organizational structures.</li>
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

export default SqlSelfJoin;
