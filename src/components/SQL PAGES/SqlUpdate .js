import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlUpdate = () => {
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
              <h1>SQL UPDATE Statement</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlnullvalues">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqldelete">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <code>UPDATE</code> statement is used to modify existing records in a table.  
                You can update one column, multiple columns, or even all rows if a <code>WHERE</code> clause is not specified.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL UPDATE Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}
                  </pre>
                  <p><b>Important:</b> Always use the <code>WHERE</code> clause to avoid updating all rows in a table by mistake.</p>
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
                        <th>Price</th>
                        <th>Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Laptop</td><td>800</td><td>50</td></tr>
                      <tr><td>2</td><td>Mouse</td><td>20</td><td>200</td></tr>
                      <tr><td>3</td><td>Keyboard</td><td>30</td><td>150</td></tr>
                      <tr><td>4</td><td>Monitor</td><td>150</td><td>75</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Products</b> table contains product details including price and stock quantity.
                  </p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Update a single column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`UPDATE Products
SET Price = 850
WHERE ProductName = 'Laptop';`}
                  </pre>
                  <p><b>Result:</b> The price of the Laptop is updated from 800 to 850.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Update multiple columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`UPDATE Products
SET Price = 25, Stock = 180
WHERE ProductName = 'Mouse';`}
                  </pre>
                  <p><b>Result:</b> The price of Mouse is updated to 25 and stock to 180.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Update all rows</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`UPDATE Products
SET Price = Price * 1.10;`}
                  </pre>
                  <p><b>Result:</b> Increases the price of all products by 10%.</p>
                  <p className="text-danger"><b>Warning:</b> This updates all rows since no <code>WHERE</code> clause is specified!</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Conditional update with AND</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`UPDATE Products
SET Stock = 100
WHERE ProductName = 'Keyboard' AND Price < 40;`}
                  </pre>
                  <p><b>Result:</b> Updates the stock of Keyboard to 100 only if its price is less than 40.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL UPDATE Statement Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>UPDATE</code> statement modifies existing rows in a table.</li>
                    <li>Use <code>SET</code> to specify the new values.</li>
                    <li>Always use <code>WHERE</code> to avoid unwanted updates.</li>
                    <li>You can update one or multiple columns at once.</li>
                    <li>Without <code>WHERE</code>, all rows will be updated.</li>
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

export default SqlUpdate;
