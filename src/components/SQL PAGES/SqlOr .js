import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlOr = () => {
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
              <h1>SQL OR Operator</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqland">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlnot">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <code>OR</code> operator is used in the <code>WHERE</code> clause 
                to filter records that satisfy <b>at least one condition</b>.
              </p>
              <p>
                If any of the conditions separated by <code>OR</code> is true, the row will be included in the result.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL OR Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;`}
                  </pre>
                  <p>
                    The query will return rows where <b>any one</b> of the conditions is true.
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
                  <p>This <b>Customers</b> table will be used for OR operator examples.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Find customers from India OR USA</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India' OR Country = 'USA';`}
                  </pre>
                  <p><b>Result:</b> Returns Rahul, Sophia, Amit, and Sara.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Find customers Age &lt; 25 OR Age &gt; 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Age < 25 OR Age > 30;`}
                  </pre>
                  <p><b>Result:</b> Returns Emma (22) and Amit (35).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Find customers from UK OR Age = 28</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'UK' OR Age = 28;`}
                  </pre>
                  <p><b>Result:</b> Returns Emma (UK, 22) and Ali (Pakistan, 28).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Find customers from Pakistan OR Age = 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'Pakistan' OR Age = 30;`}
                  </pre>
                  <p><b>Result:</b> Returns Ali (Pakistan, 28) and Sophia (USA, 30).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL OR Operator Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>OR</code> operator combines two or more conditions.</li>
                    <li>Only one condition needs to be <b>true</b> for a row to be returned.</li>
                    <li>Often used with <code>AND</code> for complex filtering.</li>
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

export default SqlOr;

