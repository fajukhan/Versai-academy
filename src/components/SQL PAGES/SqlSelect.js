import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlSelect = () => {
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
              <h1>SQL SELECT Statement</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlsyntax">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlselectdistinct">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


               <p className="lead py-5">
                The <code>SELECT</code> statement is used to retrieve data from a database.  
                The result is stored in a result table, also called the <b>result-set</b>.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL SELECT Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name;`}
                  </pre>
                  <p>
                    - To select <b>all columns</b> from a table, use <code>*</code>.  
                  </p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM table_name;`}
                  </pre>
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
                    </tbody>
                  </table>
                  <p>This is the <b>Customers</b> table used for examples.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Select All Columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers;`}
                  </pre>
                  <p><b>Result:</b> All rows and columns from the Customers table are returned.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Select Specific Columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Country
FROM Customers;`}
                  </pre>
                  <p><b>Result:</b> Only the Name and Country columns will be displayed.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Select With WHERE</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India';`}
                  </pre>
                  <p><b>Result:</b> Only customers from India will be shown (Rahul).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: SELECT DISTINCT</div>
                <div className="card-body">
                  <p>The <code>DISTINCT</code> keyword removes duplicate values.</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT DISTINCT Country
FROM Customers;`}
                  </pre>
                  <p><b>Result:</b> List of unique countries only (India, USA, Pakistan, UK).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: SELECT with ORDER BY</div>
                <div className="card-body">
                  <p>Sorting results in ascending order by Age:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
ORDER BY Age ASC;`}
                  </pre>
                  <p><b>Result:</b> Data is sorted by Age (Emma → Rahul → Ali → Sophia).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL SELECT Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>SELECT</code> statement retrieves data from a database.</li>
                    <li>Use <code>*</code> to select all columns.</li>
                    <li>Use <code>DISTINCT</code> to remove duplicate values.</li>
                    <li>Use <code>ORDER BY</code> to sort the results.</li>
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

export default SqlSelect;
