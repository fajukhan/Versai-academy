import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlFullJoin = () => {
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
              <h1>SQL FULL JOIN</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlrightjoin">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlselfjoin">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <b>FULL JOIN</b> (also called <b>FULL OUTER JOIN</b>) returns 
                all rows from both tables, with <code>NULL</code> in columns where 
                there is no match.
              </p>

              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Tables</div>
                <div className="card-body">
                  <h5>Customers Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td></tr>
                      <tr><td>2</td><td>Alice</td></tr>
                      <tr><td>3</td><td>David</td></tr>
                      <tr><td>4</td><td>Sara</td></tr>
                    </tbody>
                  </table>

                  <h5>Orders Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>101</td><td>2</td></tr>
                      <tr><td>102</td><td>3</td></tr>
                      <tr><td>103</td><td>5</td></tr>
                      <tr><td>104</td><td>6</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Here, Customers <b>John</b> and <b>Sara</b> have no orders.  
                    Orders <b>103</b> and <b>104</b> belong to non-existing customers.
                  </p>
                </div>
              </div>

              {/* Example 1: FULL JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">FULL JOIN Example</div>
                <div className="card-body">
                  <p>Get all customers and orders, including non-matching rows:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerName</th>
                        <th>OrderID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>NULL</td></tr>
                      <tr><td>Alice</td><td>101</td></tr>
                      <tr><td>David</td><td>102</td></tr>
                      <tr><td>Sara</td><td>NULL</td></tr>
                      <tr><td>NULL</td><td>103</td></tr>
                      <tr><td>NULL</td><td>104</td></tr>
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
                    <li><b>FULL JOIN</b> combines the result of both LEFT JOIN and RIGHT JOIN.</li>
                    <li>All rows from both tables are included in the result.</li>
                    <li>If no match exists, <code>NULL</code> is returned for the missing values.</li>
                    <li>Useful when you need a complete dataset from both tables.</li>
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

export default SqlFullJoin;
