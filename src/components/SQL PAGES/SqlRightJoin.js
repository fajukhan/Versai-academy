import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SidebarSql from "../SidebarSql";

const SqlRightJoin = () => {
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
              <h1>SQL RIGHT JOIN</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlleftjoin">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlfulljoin">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                 <p className="lead py-5">
                The <b>RIGHT JOIN</b> keyword returns all records from the right table 
                (table2), and the matched records from the left table (table1). 
                If there is no match, the result is <code>NULL</code> from the left side.
              </p>

              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Tables</div>
                <div className="card-body">
                  <h5>Orders Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerID</th>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>201</td><td>Laptop</td></tr>
                      <tr><td>2</td><td>202</td><td>Mobile</td></tr>
                      <tr><td>3</td><td>205</td><td>Tablet</td></tr>
                      <tr><td>4</td><td>206</td><td>Keyboard</td></tr>
                    </tbody>
                  </table>

                  <h5>Customers Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>201</td><td>John</td></tr>
                      <tr><td>202</td><td>Alice</td></tr>
                      <tr><td>203</td><td>Robert</td></tr>
                      <tr><td>204</td><td>Emma</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Notice: Customers <b>Robert</b> and <b>Emma</b> have no orders.
                  </p>
                </div>
              </div>

              {/* Example 1: RIGHT JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">RIGHT JOIN Example</div>
                <div className="card-body">
                  <p>Get all customers and their orders:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customers.CustomerName, Orders.Product
FROM Orders
RIGHT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerName</th>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>Laptop</td></tr>
                      <tr><td>Alice</td><td>Mobile</td></tr>
                      <tr><td>Robert</td><td>NULL</td></tr>
                      <tr><td>Emma</td><td>NULL</td></tr>
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
                    <li><b>RIGHT JOIN</b> keeps all rows from the right table (Customers).</li>
                    <li>If no match is found in the left table (Orders), it returns <code>NULL</code>.</li>
                    <li>In the result, Robert and Emma appear but with <code>NULL</code> for Product.</li>
                    <li>This is useful when you want to ensure all right table records are included.</li>
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

export default SqlRightJoin;
