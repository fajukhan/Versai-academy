import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlBetween = () => {
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
              <h1>SQL BETWEEN Operator</h1>
              

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlinoperator">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlaliases">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>BETWEEN</code> operator selects values within a given range. 
                The values can be numbers, text, or dates. 
                <br />
                The <code>BETWEEN</code> operator is inclusive, meaning the boundary values are included in the result.
              </p>

              <h4>Syntax:</h4>
              <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE column_name BETWEEN value1 AND value2;`}
              </pre>

              <p><b>Note:</b> Use <code>NOT BETWEEN</code> to exclude a range.</p>

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
                        <th>LaunchDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Laptop</td><td>Electronics</td><td>800</td><td>2022-03-15</td></tr>
                      <tr><td>2</td><td>Mobile</td><td>Electronics</td><td>600</td><td>2023-01-10</td></tr>
                      <tr><td>3</td><td>Chair</td><td>Furniture</td><td>120</td><td>2021-08-05</td></tr>
                      <tr><td>4</td><td>Table</td><td>Furniture</td><td>300</td><td>2022-09-20</td></tr>
                      <tr><td>5</td><td>Headphones</td><td>Electronics</td><td>150</td><td>2023-04-01</td></tr>
                      <tr><td>6</td><td>Bookshelf</td><td>Furniture</td><td>200</td><td>2021-11-11</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Products</b> table stores product information including category, price, and launch date.
                  </p>
                </div>
              </div>

              {/* Example 1: BETWEEN with Numbers */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: BETWEEN with Numbers</div>
                <div className="card-body">
                  <p>Find products with a price between 100 and 500:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE Price BETWEEN 100 AND 500;`}
                  </pre>
                  <p><b>Result:</b> Chair (120), Table (300), Headphones (150), Bookshelf (200)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: BETWEEN with Text */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: BETWEEN with Text</div>
                <div className="card-body">
                  <p>Find products with names between 'C' and 'M' alphabetically:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName BETWEEN 'C' AND 'M';`}
                  </pre>
                  <p><b>Result:</b> Chair, Headphones, Laptop, Mobile, Table</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: BETWEEN with Dates */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: BETWEEN with Dates</div>
                <div className="card-body">
                  <p>Find products launched between 2022-01-01 and 2023-01-01:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE LaunchDate BETWEEN '2022-01-01' AND '2023-01-01';`}
                  </pre>
                  <p><b>Result:</b> Laptop (2022-03-15), Table (2022-09-20)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: NOT BETWEEN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: NOT BETWEEN</div>
                <div className="card-body">
                  <p>Find products with price NOT between 200 and 700:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE Price NOT BETWEEN 200 AND 700;`}
                  </pre>
                  <p><b>Result:</b> Chair (120), Laptop (800), Headphones (150)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>BETWEEN</code> selects values within a given range.</li>
                    <li>It works with numbers, text, and dates.</li>
                    <li><code>NOT BETWEEN</code> excludes a given range.</li>
                    <li>The <code>BETWEEN</code> operator is inclusive of boundary values.</li>
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

export default SqlBetween;
