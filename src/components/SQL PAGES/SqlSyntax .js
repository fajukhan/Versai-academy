import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlSyntax = () => {
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
              <h1>SQL Syntax</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlintroduction">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlselect">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                SQL statements are used to communicate with databases.  
                Every SQL statement starts with a <b>keyword</b> such as{" "}
                <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, or{" "}
                <code>DELETE</code>.
              </p>

              {/* Basic Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Basic SQL Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}
                  </pre>
                  <p>
                    - <b>SQL keywords</b> like <code>SELECT</code>,{" "}
                    <code>FROM</code>, <code>WHERE</code> are <b>not case sensitive</b>.  
                    <br />- But by convention, we write them in uppercase for readability.
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
                    </tbody>
                  </table>
                  <p>This is the <b>Customers</b> table we will use for examples.</p>
                </div>
              </div>

              {/* SELECT Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: SELECT Statement</div>
                <div className="card-body">
                  <p>Get all customers:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers;`}
                  </pre>
                  <p><b>Result:</b> Returns all rows and columns.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* SELECT Specific Columns */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: SELECT Specific Columns</div>
                <div className="card-body">
                  <p>Get only names and countries:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Country
FROM Customers;`}
                  </pre>
                  <p><b>Result:</b> Only Name and Country columns are returned.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* WHERE Clause Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using WHERE Clause</div>
                <div className="card-body">
                  <p>Get customers from India:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India';`}
                  </pre>
                  <p><b>Result:</b> Only Rahul will be returned.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* INSERT Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: INSERT INTO</div>
                <div className="card-body">
                  <p>Add a new customer:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Customers (Name, Country, Age)
VALUES ('John', 'Canada', 27);`}
                  </pre>
                  <p><b>Result:</b> New row will be added in Customers table.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* UPDATE Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: UPDATE</div>
                <div className="card-body">
                  <p>Update Emma’s country to Australia:</p>
                  <pre className="bg-light p-3 rounded">
{`UPDATE Customers
SET Country = 'Australia'
WHERE Name = 'Emma';`}
                  </pre>
                  <p><b>Result:</b> Emma’s country will now be Australia.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* DELETE Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: DELETE</div>
                <div className="card-body">
                  <p>Delete Ali from the table:</p>
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM Customers
WHERE Name = 'Ali';`}
                  </pre>
                  <p><b>Result:</b> Ali will be removed from Customers table.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL Syntax Summary</div>
                <div className="card-body">
                  <ul>
                    <li>SQL statements are used to manage data in databases.</li>
                    <li>Common statements: <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.</li>
                    <li>SQL keywords are case-insensitive (but written in uppercase by convention).</li>
                    <li>Always end SQL statements with a semicolon (<code>;</code>).</li>
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

export default SqlSyntax;
