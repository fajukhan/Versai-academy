import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlSelectDistinct = () => {
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
              <h1>SQL SELECT DISTINCT Statement</h1>
              

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlselect">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlwhere">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>SELECT DISTINCT</code> statement is used to return only <b>unique (different)</b> values.  
                It removes duplicate values from the result set.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL SELECT DISTINCT Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT DISTINCT column1, column2, ...
FROM table_name;`}
                  </pre>
                  <p>
                    - Use <code>DISTINCT</code> when you want to avoid duplicate values in your query results.
                  </p>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Customers</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>India</td><td>25</td></tr>
                      <tr><td>2</td><td>Sophia</td><td>USA</td><td>30</td></tr>
                      <tr><td>3</td><td>Ali</td><td>Pakistan</td><td>28</td></tr>
                      <tr><td>4</td><td>Emma</td><td>UK</td><td>22</td></tr>
                      <tr><td>5</td><td>Amit</td><td>India</td><td>35</td></tr>
                      <tr><td>6</td><td>Sara</td><td>USA</td><td>27</td></tr>
                    </tbody>
                  </table>
                  <p>This is the <b>Customers</b> table used for the DISTINCT examples.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Select DISTINCT Country</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT DISTINCT Country
FROM Customers;`}
                  </pre>
                  <p><b>Result:</b> Only unique countries will be displayed:</p>
                  <ul>
                    <li>India</li>
                    <li>USA</li>
                    <li>Pakistan</li>
                    <li>UK</li>
                  </ul>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Select DISTINCT Age</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT DISTINCT Age
FROM Customers;`}
                  </pre>
                  <p><b>Result:</b> Returns all unique ages (22, 25, 27, 28, 30, 35).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: DISTINCT with Multiple Columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT DISTINCT Country, Age
FROM Customers;`}
                  </pre>
                  <p>
                    <b>Result:</b> Returns unique combinations of Country and Age.  
                    For example: (India, 25), (India, 35), (USA, 30), (USA, 27), etc.
                  </p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: DISTINCT with ORDER BY</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT DISTINCT Country
FROM Customers
ORDER BY Country ASC;`}
                  </pre>
                  <p><b>Result:</b> Returns unique countries in alphabetical order: India, Pakistan, UK, USA.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL SELECT DISTINCT Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>SELECT DISTINCT</code> statement is used to avoid duplicate values.</li>
                    <li>It can be applied to one or more columns.</li>
                    <li>It is commonly used with <code>ORDER BY</code> for sorted unique values.</li>
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

export default SqlSelectDistinct;

