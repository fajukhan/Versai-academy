import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlHaving = () => {
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
              <h1>SQL HAVING</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlgroupby">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="sqlexists">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>

              <p className="lead py-5">
                The <b>HAVING</b> clause is used to filter records after a{" "}
                <b>GROUP BY</b> operation. It is similar to WHERE, but WHERE
                cannot be used with aggregate functions.
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
                      <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>John</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Mike</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Jane</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Mike</td>
                        <td>75</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>This table contains orders with their amounts.</p>
                </div>
              </div>

              {/* Example 1: HAVING with SUM */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">HAVING Example</div>
                <div className="card-body">
                  <p>
                    Show customers whose total order amount is greater than 200:
                  </p>
                  <pre className="bg-light p-3 rounded">
                    {`SELECT Customer, SUM(Amount) AS TotalAmount
FROM Orders
GROUP BY Customer
HAVING SUM(Amount) > 200;`}
                  </pre>
                  <p>
                    <b>Result:</b>
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>TotalAmount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td>Jane</td>
                        <td>250</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: HAVING with COUNT */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">HAVING with COUNT()</div>
                <div className="card-body">
                  <p>Show customers with more than 1 order:</p>
                  <pre className="bg-light p-3 rounded">
                    {`SELECT Customer, COUNT(OrderID) AS NumberOfOrders
FROM Orders
GROUP BY Customer
HAVING COUNT(OrderID) > 1;`}
                  </pre>
                  <p>
                    <b>Result:</b>
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>NumberOfOrders</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Jane</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Mike</td>
                        <td>2</td>
                      </tr>
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
                    <li>
                      <b>HAVING</b> filters records after aggregation with GROUP
                      BY.
                    </li>
                    <li>
                      WHERE cannot be used with aggregate functions, but HAVING
                      can.
                    </li>
                    <li>
                      Common use-case: filtering groups with SUM, COUNT, AVG,
                      MIN, MAX etc.
                    </li>
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

export default SqlHaving;
