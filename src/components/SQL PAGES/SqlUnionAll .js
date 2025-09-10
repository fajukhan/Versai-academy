import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlUnionAll = () => {
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
              <h1>SQL UNION ALL</h1>
         
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlunion">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlgroupby">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                   <p className="lead py-5">
                The <b>UNION ALL</b> operator is used to combine the result-set of two or more <b>SELECT</b> statements.  
                Unlike <b>UNION</b>, it does <u>not</u> remove duplicates — it returns all rows.
              </p>
              <p>
                Each SELECT within the UNION ALL must have the same number of columns and similar data types.
              </p>


              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Tables</div>
                <div className="card-body">
                  <h5>Sales2023 Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>SaleID</th>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Laptop</td></tr>
                      <tr><td>2</td><td>Phone</td></tr>
                      <tr><td>3</td><td>Tablet</td></tr>
                    </tbody>
                  </table>

                  <h5>Sales2024 Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>SaleID</th>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Phone</td></tr>
                      <tr><td>2</td><td>Headphones</td></tr>
                      <tr><td>3</td><td>Laptop</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Notice that <b>Laptop</b> and <b>Phone</b> exist in both tables.
                  </p>
                </div>
              </div>

              {/* Example 1: UNION ALL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">UNION ALL Example</div>
                <div className="card-body">
                  <p>Combine sales data from 2023 and 2024 (keep duplicates):</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Product FROM Sales2023
UNION ALL
SELECT Product FROM Sales2024;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Laptop</td></tr>
                      <tr><td>Phone</td></tr>
                      <tr><td>Tablet</td></tr>
                      <tr><td>Phone</td></tr>
                      <tr><td>Headphones</td></tr>
                      <tr><td>Laptop</td></tr>
                    </tbody>
                  </table>
                  <p>Here <b>Laptop</b> and <b>Phone</b> appear twice because UNION ALL keeps duplicates.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: UNION vs UNION ALL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">UNION vs UNION ALL</div>
                <div className="card-body">
                  <p>
                    If we use <b>UNION</b> instead of UNION ALL, duplicates will be removed:
                  </p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Product FROM Sales2023
UNION
SELECT Product FROM Sales2024;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Laptop</td></tr>
                      <tr><td>Phone</td></tr>
                      <tr><td>Tablet</td></tr>
                      <tr><td>Headphones</td></tr>
                    </tbody>
                  </table>
                  <p>Here each product is listed only once.</p>
                </div>
              </div>

              {/* Explanation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Explanation</div>
                <div className="card-body">
                  <ul>
                    <li><b>UNION ALL</b> combines results of multiple SELECT queries and keeps duplicates.</li>
                    <li><b>UNION</b> removes duplicates from the result-set.</li>
                    <li>All SELECT statements must have the same number of columns with similar data types.</li>
                    <li>UNION ALL is faster than UNION because it doesn’t check for duplicates.</li>
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

export default SqlUnionAll;

