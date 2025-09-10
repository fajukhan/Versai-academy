import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlSum = () => {
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
              <h1>SQL SUM() Function</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlcount">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlavg">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <code>SUM()</code> function is used to calculate the total sum of a numeric column. 
                It is often used to calculate totals like sales, salaries, or order amounts.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Orders</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>101</td><td>Alice</td><td>Laptop</td><td>800</td></tr>
                      <tr><td>102</td><td>Bob</td><td>Phone</td><td>500</td></tr>
                      <tr><td>103</td><td>Alice</td><td>Tablet</td><td>300</td></tr>
                      <tr><td>104</td><td>David</td><td>Laptop</td><td>800</td></tr>
                      <tr><td>105</td><td>Emma</td><td>Phone</td><td>500</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Orders</b> table stores purchase details of customers, including the product and order amount.
                  </p>
                </div>
              </div>

              {/* Example 1: SUM() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: SUM()</div>
                <div className="card-body">
                  <p>Calculate the total amount of all orders:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT SUM(Amount) AS TotalSales
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b> 2900 (800 + 500 + 300 + 800 + 500)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: SUM() with WHERE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: SUM() with WHERE</div>
                <div className="card-body">
                  <p>Calculate the total sales for customer <b>Alice</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT SUM(Amount) AS AliceTotal
FROM Orders
WHERE Customer = 'Alice';`}
                  </pre>
                  <p><b>Result:</b> 1100 (800 + 300)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: SUM(DISTINCT) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: SUM(DISTINCT)</div>
                <div className="card-body">
                  <p>Calculate the sum of unique order amounts:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT SUM(DISTINCT Amount) AS UniqueSum
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b> 1600 (800 + 500 + 300)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: SUM() with GROUP BY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: SUM() with GROUP BY</div>
                <div className="card-body">
                  <p>Calculate total sales per customer:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customer, SUM(Amount) AS TotalSpent
FROM Orders
GROUP BY Customer;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>TotalSpent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Alice</td><td>1100</td></tr>
                      <tr><td>Bob</td><td>500</td></tr>
                      <tr><td>David</td><td>800</td></tr>
                      <tr><td>Emma</td><td>500</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>SUM(column)</code> → Adds up the values in a numeric column</li>
                    <li><code>SUM(DISTINCT column)</code> → Adds only unique values</li>
                    <li>Can be used with <code>WHERE</code> to filter totals</li>
                    <li>Often used with <code>GROUP BY</code> to calculate totals per group</li>
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

export default SqlSum;
