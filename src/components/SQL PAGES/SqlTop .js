import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlTop = () => {
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
              <h1>SQL TOP Clause</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqldelete">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlaggregatefunction">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <code>TOP</code> clause is used to specify the number of records to return.  
                It is useful when working with large tables and you only want to see a limited number of rows.
              </p>
              <p><b>Note:</b> The <code>TOP</code> keyword works in SQL Server.  
              In MySQL, you use <code>LIMIT</code>, and in Oracle, you use <code>ROWNUM</code>.</p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL TOP Syntax (SQL Server)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;`}
                  </pre>
                </div>
              </div>

              <div className="card my-4 shadow-sm">
                <div className="card-header">MySQL Syntax (LIMIT)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;`}
                  </pre>
                </div>
              </div>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Oracle Syntax (ROWNUM)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column_name(s)
FROM table_name
WHERE ROWNUM <= number;`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Products</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Category</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Laptop</td><td>Electronics</td><td>800</td></tr>
                      <tr><td>2</td><td>Smartphone</td><td>Electronics</td><td>600</td></tr>
                      <tr><td>3</td><td>Tablet</td><td>Electronics</td><td>400</td></tr>
                      <tr><td>4</td><td>Headphones</td><td>Accessories</td><td>100</td></tr>
                      <tr><td>5</td><td>Keyboard</td><td>Accessories</td><td>50</td></tr>
                      <tr><td>6</td><td>Monitor</td><td>Electronics</td><td>200</td></tr>
                      <tr><td>7</td><td>Mouse</td><td>Accessories</td><td>30</td></tr>
                    </tbody>
                  </table>
                  <p>The <b>Products</b> table stores product details with category and price.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: TOP 3 Products (SQL Server)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT TOP 3 ProductName, Price
FROM Products;`}
                  </pre>
                  <p><b>Result:</b> Returns the first 3 products from the Products table.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using LIMIT (MySQL)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT ProductName, Price
FROM Products
LIMIT 3;`}
                  </pre>
                  <p><b>Result:</b> Returns the first 3 products in MySQL.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using ROWNUM (Oracle)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT ProductName, Price
FROM Products
WHERE ROWNUM <= 3;`}
                  </pre>
                  <p><b>Result:</b> Returns the first 3 products in Oracle.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: TOP with ORDER BY</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT TOP 2 ProductName, Price
FROM Products
ORDER BY Price DESC;`}
                  </pre>
                  <p><b>Result:</b> Returns the 2 most expensive products.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: TOP with PERCENT (SQL Server)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT TOP 50 PERCENT ProductName, Price
FROM Products;`}
                  </pre>
                  <p><b>Result:</b> Returns 50% of the rows from the Products table.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL TOP Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>TOP</code> → SQL Server</li>
                    <li><code>LIMIT</code> → MySQL</li>
                    <li><code>ROWNUM</code> → Oracle</li>
                    <li>Used to limit the number of returned rows.</li>
                    <li>Often used with <code>ORDER BY</code> to control results.</li>
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

export default SqlTop;
