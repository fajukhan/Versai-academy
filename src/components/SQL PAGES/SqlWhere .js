import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlWhere = () => {
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
              <h1>SQL WHERE Clause</h1>
          
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlselectdistinct">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlorderby">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                  <p className="lead py-5">
                The <code>WHERE</code> clause is used to filter records.  
                It extracts only those records that fulfill a specified condition.
              </p>


              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL WHERE Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}
                  </pre>
                  <p>
                    Conditions can use operators like <code>=</code>, <code>&gt;</code>, <code>&lt;</code>, 
                    <code>&gt;=</code>, <code>&lt;=</code>, <code>&lt;&gt;</code> (not equal), 
                    <code>AND</code>, <code>OR</code>, <code>NOT</code>.
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
                  <p>This is the <b>Customers</b> table used for the WHERE clause examples.</p>
                </div>
              </div>

              {/* Example 1: WHERE with Equal */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: WHERE Country = 'India'</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India';`}
                  </pre>
                  <p><b>Result:</b> Returns only customers from India (Rahul, Amit).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: WHERE with Greater Than */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: WHERE Age &gt; 25</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Age > 25;`}
                  </pre>
                  <p><b>Result:</b> Returns customers older than 25 (Sophia, Ali, Amit, Sara).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: WHERE with AND */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: WHERE Country = 'USA' AND Age &lt; 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'USA' AND Age < 30;`}
                  </pre>
                  <p><b>Result:</b> Returns Sara only (USA, Age 27).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: WHERE with OR */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: WHERE Country = 'India' OR Country = 'UK'</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India' OR Country = 'UK';`}
                  </pre>
                  <p><b>Result:</b> Returns Rahul, Amit (India) and Emma (UK).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5: WHERE with NOT */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: WHERE NOT Country = 'USA'</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE NOT Country = 'USA';`}
                  </pre>
                  <p><b>Result:</b> Returns Rahul (India), Ali (Pakistan), Emma (UK), Amit (India).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL WHERE Clause Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>WHERE</code> clause is used to filter records.</li>
                    <li>It works with operators like <code>=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>AND</code>, <code>OR</code>, and <code>NOT</code>.</li>
                    <li>It helps to retrieve specific data from a table.</li>
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

export default SqlWhere;

