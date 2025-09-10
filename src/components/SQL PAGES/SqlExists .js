import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlExists = () => {
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
              <h1>SQL EXISTS</h1>
       
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlhaving">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlanyall">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                     <p className="lead py-5">
                The <b>EXISTS</b> operator is used to check the existence of rows returned by a subquery.  
                It returns <b>TRUE</b> if the subquery returns one or more rows; otherwise, it returns <b>FALSE</b>.
              </p>


              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Customers Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td></tr>
                      <tr><td>2</td><td>Jane</td></tr>
                      <tr><td>3</td><td>Mike</td></tr>
                    </tbody>
                  </table>

                  <h5>Orders Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerID</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>1</td><td>100</td></tr>
                      <tr><td>2</td><td>2</td><td>150</td></tr>
                      <tr><td>3</td><td>1</td><td>200</td></tr>
                    </tbody>
                  </table>
                  <p>Here, John and Jane have orders, but Mike does not.</p>
                </div>
              </div>

              {/* Example 1: EXISTS */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">EXISTS Example</div>
                <div className="card-body">
                  <p>Find customers who have placed at least one order:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name
FROM Customers C
WHERE EXISTS (
    SELECT 1
    FROM Orders O
    WHERE O.CustomerID = C.CustomerID
);`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td></tr>
                      <tr><td>Jane</td></tr>
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
                    <li>The <b>EXISTS</b> clause checks if the subquery returns any rows.</li>
                    <li>Returns <b>TRUE</b> if rows exist, otherwise <b>FALSE</b>.</li>
                    <li>Useful for filtering rows based on related tables.</li>
                    <li>Subquery usually references the outer query (correlated subquery).</li>
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

export default SqlExists;
