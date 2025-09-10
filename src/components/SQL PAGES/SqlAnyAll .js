import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlAnyAll = () => {
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
              <h1>SQL ANY & ALL</h1>
           
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlexists">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlselectintro">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                <b>ANY</b> returns TRUE if **any** of the subquery values meet the condition. <br/>
                <b>ALL</b> returns TRUE if **all** of the subquery values meet the condition.
              </p>


              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Products Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ProductID</th>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Pen</td><td>10</td></tr>
                      <tr><td>2</td><td>Notebook</td><td>50</td></tr>
                      <tr><td>3</td><td>Pencil</td><td>5</td></tr>
                      <tr><td>4</td><td>Bag</td><td>200</td></tr>
                    </tbody>
                  </table>
                  <p>This table contains products with their prices.</p>
                </div>
              </div>

              {/* Example 1: ANY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">ANY Example</div>
                <div className="card-body">
                  <p>Find products with price greater than **any** price in subquery:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Price
FROM Products
WHERE Price > ANY (
    SELECT Price
    FROM Products
    WHERE Price < 50
);`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Notebook</td><td>50</td></tr>
                      <tr><td>Bag</td><td>200</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: ALL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">ALL Example</div>
                <div className="card-body">
                  <p>Find products with price greater than **all** prices in subquery:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Price
FROM Products
WHERE Price > ALL (
    SELECT Price
    FROM Products
    WHERE Price < 50
);`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Bag</td><td>200</td></tr>
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
                    <li><b>ANY</b>: True if the condition matches **any** value in subquery.</li>
                    <li><b>ALL</b>: True if the condition matches **all** values in subquery.</li>
                    <li>Used to compare a value against a set of values returned by a subquery.</li>
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

export default SqlAnyAll;
