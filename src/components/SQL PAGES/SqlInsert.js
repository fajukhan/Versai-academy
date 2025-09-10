import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlInsert = () => {
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
              <h1>SQL INSERT INTO Statement</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlnot">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlnullvalues">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <code>INSERT INTO</code> statement is used to add new records into a database table.
              </p>
              <p>
                You can insert values into all columns or only specific columns of a table.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL INSERT Syntax</div>
                <div className="card-body">
                  <p><b>Inserting into all columns:</b></p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO table_name
VALUES (value1, value2, value3, ...);`}
                  </pre>

                  <p><b>Inserting into specific columns:</b></p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);`}
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
                      <tr><td>1</td><td>Laptop</td><td>Electronics</td><td>600</td></tr>
                      <tr><td>2</td><td>Phone</td><td>Electronics</td><td>300</td></tr>
                      <tr><td>3</td><td>Chair</td><td>Furniture</td><td>120</td></tr>
                    </tbody>
                  </table>
                  <p>This <b>Products</b> table will be used for <code>INSERT INTO</code> examples.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Insert into all columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Products
VALUES (4, 'Table', 'Furniture', 150);`}
                  </pre>
                  <p><b>Result:</b> Adds a new product "Table" into the <b>Products</b> table.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Insert into specific columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Products (ProductID, ProductName, Category)
VALUES (5, 'Headphones', 'Electronics');`}
                  </pre>
                  <p><b>Result:</b> Adds "Headphones" with no price (NULL by default).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Insert multiple rows</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Products (ProductID, ProductName, Category, Price)
VALUES 
(6, 'Desk', 'Furniture', 200),
(7, 'Monitor', 'Electronics', 180);`}
                  </pre>
                  <p><b>Result:</b> Adds two new rows (Desk and Monitor) at once.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Insert text with quotes</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Products (ProductID, ProductName, Category, Price)
VALUES (8, 'Children''s Book', 'Books', 20);`}
                  </pre>
                  <p><b>Result:</b> Inserts a product name containing an apostrophe (Children's Book).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL INSERT INTO Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>INSERT INTO</code> is used to add new rows in a table.</li>
                    <li>You can insert into <b>all columns</b> or <b>specific columns</b>.</li>
                    <li>Multiple rows can be inserted in a single query.</li>
                    <li>String values must be written inside single quotes <code>('')</code>.</li>
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

export default SqlInsert;
