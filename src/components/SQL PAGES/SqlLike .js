import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlLike = () => {
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
              <h1>SQL LIKE Operator</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlavg">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlwildcard">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <code>LIKE</code> operator is used in a <code>WHERE</code> clause 
                to search for a specified pattern in a column.
              </p>
              <ul>
                <li><code>%</code> → Represents zero, one, or multiple characters</li>
                <li><code>_</code> → Represents a single character</li>
              </ul>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Customers</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                        <th>City</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Alfreds Futterkiste</td><td>Berlin</td><td>Germany</td></tr>
                      <tr><td>2</td><td>Ana Trujillo</td><td>Mexico City</td><td>Mexico</td></tr>
                      <tr><td>3</td><td>Antonio Moreno</td><td>Madrid</td><td>Spain</td></tr>
                      <tr><td>4</td><td>Christina Berglund</td><td>Lulea</td><td>Sweden</td></tr>
                      <tr><td>5</td><td>Hanna Moos</td><td>Mannheim</td><td>Germany</td></tr>
                      <tr><td>6</td><td>Giovanni Rovelli</td><td>Rome</td><td>Italy</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Customers</b> table stores customer details including their name, city, and country.
                  </p>
                </div>
              </div>

              {/* Example 1: LIKE with % */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: LIKE with %</div>
                <div className="card-body">
                  <p>Find all customers whose name starts with 'A':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE 'A%';`}
                  </pre>
                  <p><b>Result:</b> Alfreds Futterkiste, Ana Trujillo, Antonio Moreno</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: LIKE with % at both sides */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: LIKE with % on both sides</div>
                <div className="card-body">
                  <p>Find all customers whose name contains 'nn':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE '%nn%';`}
                  </pre>
                  <p><b>Result:</b> Hanna Moos, Giovanni Rovelli</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: LIKE with _ */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: LIKE with _</div>
                <div className="card-body">
                  <p>Find all customers whose name has 'An_' at the beginning:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE 'An_';`}
                  </pre>
                  <p><b>Result:</b> Ana Trujillo</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: NOT LIKE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: NOT LIKE</div>
                <div className="card-body">
                  <p>Find all customers whose names do NOT start with 'A':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName NOT LIKE 'A%';`}
                  </pre>
                  <p><b>Result:</b> Christina Berglund, Hanna Moos, Giovanni Rovelli</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5: LIKE with multiple conditions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: LIKE with Multiple Conditions</div>
                <div className="card-body">
                  <p>Find customers whose name starts with 'A' OR ends with 'i':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE 'A%' 
   OR CustomerName LIKE '%i';`}
                  </pre>
                  <p><b>Result:</b> Alfreds Futterkiste, Ana Trujillo, Antonio Moreno, Giovanni Rovelli</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>LIKE 'A%'</code> → Finds values that start with A</li>
                    <li><code>LIKE '%A'</code> → Finds values that end with A</li>
                    <li><code>LIKE '%or%'</code> → Finds values that contain "or"</li>
                    <li><code>LIKE '_r%'</code> → Finds values with "r" as the second character</li>
                    <li><code>NOT LIKE</code> → Excludes a pattern</li>
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

export default SqlLike;

