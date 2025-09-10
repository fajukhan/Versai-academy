import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlDates = () => {
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
              <h1>SQL DATES</h1>
          
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlautoincrement">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlviews">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                  <p className="lead py-5">
                Working with <b>dates</b> in SQL is very common for storing, filtering,
                and analyzing time-based data. SQL provides different functions 
                to handle dates depending on the database system.
              </p>

              <p>
                The standard SQL date format is: <code>'YYYY-MM-DD'</code>.  
                Some databases also allow date and time storage: <code>'YYYY-MM-DD HH:MI:SS'</code>.
              </p>


              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Orders</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>2023-01-15</td></tr>
                      <tr><td>2</td><td>Priya</td><td>2023-02-10</td></tr>
                      <tr><td>3</td><td>Amit</td><td>2023-03-05</td></tr>
                      <tr><td>4</td><td>Neha</td><td>2023-03-25</td></tr>
                      <tr><td>5</td><td>John</td><td>2023-04-12</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: Select records from a specific date */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Select Records From Specific Date</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Orders
WHERE OrderDate = '2023-03-05';`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>3</td><td>Amit</td><td>2023-03-05</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 2: BETWEEN Two Dates */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Select Records Between Two Dates</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Orders
WHERE OrderDate BETWEEN '2023-03-01' AND '2023-03-31';`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>3</td><td>Amit</td><td>2023-03-05</td></tr>
                      <tr><td>4</td><td>Neha</td><td>2023-03-25</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 3: Extract Year, Month, Day */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Extract Year, Month, Day</div>
                <div className="card-body">
                  <p>Different SQL databases have functions to extract parts of a date:</p>
                  <ul>
                    <li><b>MySQL:</b> YEAR(OrderDate), MONTH(OrderDate), DAY(OrderDate)</li>
                    <li><b>SQL Server:</b> YEAR(OrderDate), MONTH(OrderDate), DAY(OrderDate)</li>
                    <li><b>PostgreSQL:</b> EXTRACT(YEAR FROM OrderDate)</li>
                  </ul>
                  <pre className="bg-light p-3 rounded">
{`SELECT OrderID, CustomerName, YEAR(OrderDate) AS OrderYear
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderYear</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>2023</td></tr>
                      <tr><td>2</td><td>Priya</td><td>2023</td></tr>
                      <tr><td>3</td><td>Amit</td><td>2023</td></tr>
                      <tr><td>4</td><td>Neha</td><td>2023</td></tr>
                      <tr><td>5</td><td>John</td><td>2023</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 4: Get Current Date */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Get Current Date</div>
                <div className="card-body">
                  <ul>
                    <li><b>MySQL:</b> <code>SELECT CURDATE();</code></li>
                    <li><b>SQL Server:</b> <code>SELECT GETDATE();</code></li>
                    <li><b>PostgreSQL:</b> <code>SELECT CURRENT_DATE;</code></li>
                  </ul>
                  <p>This returns the system’s current date.</p>
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

export default SqlDates;
