import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlNot = () => {
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
              <h1>SQL NOT Operator</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlor">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlinsert">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <code>NOT</code> operator is used in the <code>WHERE</code> clause 
                to reverse the result of a condition.  
                It returns only rows where the condition is <b>false</b>.
              </p>
              <p>
                In other words, <code>NOT</code> is used to exclude specific records from the result set.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL NOT Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;`}
                  </pre>
                  <p>
                    The query will return rows where the <b>condition is false</b>.
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
                  <p>This <b>Customers</b> table will be used for NOT operator examples.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Exclude customers from India</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE NOT Country = 'India';`}
                  </pre>
                  <p><b>Result:</b> Returns Sophia, Ali, Emma, and Sara.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Exclude customers younger than 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE NOT Age < 30;`}
                  </pre>
                  <p><b>Result:</b> Returns Sophia (30) and Amit (35).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Exclude customers from USA</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE NOT Country = 'USA';`}
                  </pre>
                  <p><b>Result:</b> Returns Rahul (India), Ali (Pakistan), Emma (UK), Amit (India).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Exclude Age = 28</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE NOT Age = 28;`}
                  </pre>
                  <p><b>Result:</b> Returns all customers except Ali (Age 28).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL NOT Operator Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>NOT</code> operator reverses a condition.</li>
                    <li>Used to exclude specific records from query results.</li>
                    <li>Often combined with <code>AND</code> or <code>OR</code> for advanced filtering.</li>
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

export default SqlNot;

