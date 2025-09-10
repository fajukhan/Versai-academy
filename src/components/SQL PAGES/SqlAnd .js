import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlAnd = () => {
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
              <h1>SQL AND Operator</h1>
              

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlorderby">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlor">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


              <p className="lead py-5">
                The <code>AND</code> operator is used in the <code>WHERE</code> clause 
                to filter records that satisfy <b>all given conditions</b>.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL AND Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;`}
                  </pre>
                  <p>
                    The query will return only those rows where <b>all conditions are true</b>.
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
                  <p>This <b>Customers</b> table will be used for AND operator examples.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Find customers from India AND Age &gt; 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India' AND Age > 30;`}
                  </pre>
                  <p><b>Result:</b> Returns only <i>Amit</i> (India, Age 35).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Find customers from USA AND Age &lt; 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'USA' AND Age < 30;`}
                  </pre>
                  <p><b>Result:</b> Returns <i>Sara</i> (USA, Age 27).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Find customers Age &gt; 25 AND Age &lt; 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Age > 25 AND Age < 30;`}
                  </pre>
                  <p><b>Result:</b> Returns <i>Ali</i> (28) and <i>Sara</i> (27).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Find customers from India AND Age &lt; 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India' AND Age < 30;`}
                  </pre>
                  <p><b>Result:</b> Returns <i>Rahul</i> (India, 25).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL AND Operator Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>AND</code> operator combines two or more conditions.</li>
                    <li>All conditions must be <b>true</b> for a row to be returned.</li>
                    <li>Useful for filtering with multiple rules.</li>
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

export default SqlAnd;
