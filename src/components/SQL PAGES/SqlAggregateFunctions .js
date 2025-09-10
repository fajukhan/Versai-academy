import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlAggregateFunctions = () => {
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
              <h1>SQL Aggregate Functions</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqltop">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlminmax">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                SQL aggregate functions perform a calculation on a set of values and return a single value.  
                They are often used with the <code>GROUP BY</code> clause to group rows.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL Aggregate Functions</div>
                <div className="card-body">
                  <ul>
                    <li><b>COUNT()</b> – Returns the number of rows</li>
                    <li><b>SUM()</b> – Returns the total sum</li>
                    <li><b>AVG()</b> – Returns the average value</li>
                    <li><b>MIN()</b> – Returns the smallest value</li>
                    <li><b>MAX()</b> – Returns the largest value</li>
                  </ul>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Orders</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>OrderDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>250</td><td>2024-01-15</td></tr>
                      <tr><td>2</td><td>Emma</td><td>450</td><td>2024-02-10</td></tr>
                      <tr><td>3</td><td>Michael</td><td>300</td><td>2024-02-12</td></tr>
                      <tr><td>4</td><td>Sophia</td><td>700</td><td>2024-03-05</td></tr>
                      <tr><td>5</td><td>Daniel</td><td>150</td><td>2024-03-15</td></tr>
                    </tbody>
                  </table>
                  <p>The <b>Orders</b> table stores order details including amount and date.</p>
                </div>
              </div>

              {/* Example 1 COUNT() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: COUNT()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT COUNT(OrderID) AS TotalOrders
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b> Returns the total number of orders (5).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 SUM() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: SUM()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT SUM(Amount) AS TotalSales
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b> Returns the total sales amount (1850).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 AVG() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: AVG()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT AVG(Amount) AS AverageOrder
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b> Returns the average order value (370).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 MIN() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: MIN()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT MIN(Amount) AS SmallestOrder
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b> Returns the smallest order value (150).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5 MAX() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: MAX()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT MAX(Amount) AS LargestOrder
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b> Returns the largest order value (700).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Aggregate Functions Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>COUNT()</code> → Number of rows</li>
                    <li><code>SUM()</code> → Total sum</li>
                    <li><code>AVG()</code> → Average value</li>
                    <li><code>MIN()</code> → Smallest value</li>
                    <li><code>MAX()</code> → Largest value</li>
                    <li>Often used with <code>GROUP BY</code></li>
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

export default SqlAggregateFunctions;

