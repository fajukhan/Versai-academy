import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlUnion = () => {
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
              <h1>SQL UNION</h1>
          

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlselfjoin">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlunionall">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>
                  
                      <p className="lead py-5">
                The <b>UNION</b> operator is used to combine the result-set of two or more <b>SELECT</b> statements.  
                By default, <b>UNION</b> removes duplicate rows.  
              </p>
              <p>
                Each SELECT within the UNION must have the same number of columns, and the columns must have similar data types.
              </p>


              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Tables</div>
                <div className="card-body">
                  <h5>CustomersIndia Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Ravi</td></tr>
                      <tr><td>2</td><td>Anita</td></tr>
                      <tr><td>3</td><td>Vikram</td></tr>
                    </tbody>
                  </table>

                  <h5>CustomersUSA Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td></tr>
                      <tr><td>2</td><td>Michael</td></tr>
                      <tr><td>3</td><td>Vikram</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Notice that the customer <b>Vikram</b> exists in both tables (duplicate).
                  </p>
                </div>
              </div>

              {/* Example 1: UNION */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">UNION Example</div>
                <div className="card-body">
                  <p>Combine customers from India and USA (without duplicates):</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT CustomerName FROM CustomersIndia
UNION
SELECT CustomerName FROM CustomersUSA;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Ravi</td></tr>
                      <tr><td>Anita</td></tr>
                      <tr><td>Vikram</td></tr>
                      <tr><td>John</td></tr>
                      <tr><td>Michael</td></tr>
                    </tbody>
                  </table>
                  <p>Here <b>Vikram</b> appears only once because UNION removes duplicates.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: UNION ALL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">UNION ALL Example</div>
                <div className="card-body">
                  <p>Combine customers from both tables (with duplicates):</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT CustomerName FROM CustomersIndia
UNION ALL
SELECT CustomerName FROM CustomersUSA;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Ravi</td></tr>
                      <tr><td>Anita</td></tr>
                      <tr><td>Vikram</td></tr>
                      <tr><td>John</td></tr>
                      <tr><td>Michael</td></tr>
                      <tr><td>Vikram</td></tr>
                    </tbody>
                  </table>
                  <p>Here <b>Vikram</b> appears twice because UNION ALL does not remove duplicates.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Explanation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Explanation</div>
                <div className="card-body">
                  <ul>
                    <li><b>UNION</b> combines results of multiple SELECT queries and removes duplicates.</li>
                    <li><b>UNION ALL</b> keeps duplicates in the final result.</li>
                    <li>All SELECT queries must have the same number of columns and similar data types.</li>
                    <li>Common use-case: merging data from different tables or databases.</li>
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

export default SqlUnion;

