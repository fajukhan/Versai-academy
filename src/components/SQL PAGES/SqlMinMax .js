import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlMinMax = () => {
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
              <h1>SQL MIN() and MAX() Functions</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlaggregatefunction">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlcount">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <code>MIN()</code> function returns the smallest value in a column,  
                while the <code>MAX()</code> function returns the largest value.  
                These are often used on numeric, text, or date columns.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Products</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Laptop</td><td>800</td><td>20</td></tr>
                      <tr><td>2</td><td>Phone</td><td>500</td><td>50</td></tr>
                      <tr><td>3</td><td>Tablet</td><td>300</td><td>40</td></tr>
                      <tr><td>4</td><td>Monitor</td><td>150</td><td>25</td></tr>
                      <tr><td>5</td><td>Headphones</td><td>100</td><td>70</td></tr>
                    </tbody>
                  </table>
                  <p>The <b>Products</b> table contains product details with their price and stock quantity.</p>
                </div>
              </div>

              {/* Example 1: MIN() on Price */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Using MIN()</div>
                <div className="card-body">
                  <p>Find the cheapest product price:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT MIN(Price) AS LowestPrice
FROM Products;`}
                  </pre>
                  <p><b>Result:</b> 100 (Headphones)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: MAX() on Price */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using MAX()</div>
                <div className="card-body">
                  <p>Find the most expensive product price:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT MAX(Price) AS HighestPrice
FROM Products;`}
                  </pre>
                  <p><b>Result:</b> 800 (Laptop)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: MIN() on Stock */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: MIN() on Stock</div>
                <div className="card-body">
                  <p>Find the product with the lowest stock quantity:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT MIN(Stock) AS LowestStock
FROM Products;`}
                  </pre>
                  <p><b>Result:</b> 20 (Laptop)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: MAX() on Stock */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: MAX() on Stock</div>
                <div className="card-body">
                  <p>Find the product with the highest stock quantity:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT MAX(Stock) AS HighestStock
FROM Products;`}
                  </pre>
                  <p><b>Result:</b> 70 (Headphones)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>MIN()</code> → Returns the smallest value in a column</li>
                    <li><code>MAX()</code> → Returns the largest value in a column</li>
                    <li>Can be applied to numbers, dates, and text columns</li>
                    <li>Often used for finding ranges and limits in data</li>
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

export default SqlMinMax;
