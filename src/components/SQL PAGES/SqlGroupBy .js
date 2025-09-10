import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SidebarSql from "../SidebarSql";

const SqlGroupBy = () => {
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
              <h1>SQL GROUP BY</h1>
              

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlunionall">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlhaving">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <b>GROUP BY</b> statement groups rows that have the same values in specified columns into summary rows.  
                It is often used with aggregate functions like <b>COUNT(), SUM(), AVG()</b> etc.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Orders Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>100</td></tr>
                      <tr><td>2</td><td>Jane</td><td>150</td></tr>
                      <tr><td>3</td><td>John</td><td>200</td></tr>
                      <tr><td>4</td><td>Mike</td><td>50</td></tr>
                      <tr><td>5</td><td>Jane</td><td>100</td></tr>
                    </tbody>
                  </table>
                  <p>
                    This table contains orders placed by different customers with order amounts.
                  </p>
                </div>
              </div>

              {/* Example 1: GROUP BY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">GROUP BY Example</div>
                <div className="card-body">
                  <p>Calculate total amount per customer:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customer, SUM(Amount) AS TotalAmount
FROM Orders
GROUP BY Customer;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>TotalAmount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>300</td></tr>
                      <tr><td>Jane</td><td>250</td></tr>
                      <tr><td>Mike</td><td>50</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: COUNT with GROUP BY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">COUNT() with GROUP BY</div>
                <div className="card-body">
                  <p>Count orders per customer:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customer, COUNT(OrderID) AS NumberOfOrders
FROM Orders
GROUP BY Customer;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>NumberOfOrders</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>2</td></tr>
                      <tr><td>Jane</td><td>2</td></tr>
                      <tr><td>Mike</td><td>1</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Explanation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Explanation</div>
                <div className="card-body">
                  <ul>
                    <li><b>GROUP BY</b> groups rows sharing the same value in specified columns.</li>
                    <li>Aggregate functions like SUM(), COUNT(), AVG() are used to perform calculations on each group.</li>
                    <li>It is commonly used for reports, summaries, and statistics.</li>
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

export default SqlGroupBy;
