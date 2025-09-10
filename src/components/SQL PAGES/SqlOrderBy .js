import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlOrderBy = () => {
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
              <h1>SQL ORDER BY Clause</h1>
           
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlwhere">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqland">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <code>ORDER BY</code> clause is used to sort the result set
                in ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.  
                By default, <code>ORDER BY</code> sorts the records in ascending order.
              </p>


              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL ORDER BY Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];`}
                  </pre>
                  <p>
                    Use <code>ASC</code> for ascending order and <code>DESC</code> for descending order.  
                    Multiple columns can also be used for sorting.
                  </p>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Customers</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>India</td><td>25</td></tr>
                      <tr><td>2</td><td>Sophia</td><td>USA</td><td>30</td></tr>
                      <tr><td>3</td><td>Ali</td><td>Pakistan</td><td>28</td></tr>
                      <tr><td>4</td><td>Emma</td><td>UK</td><td>22</td></tr>
                      <tr><td>5</td><td>Amit</td><td>India</td><td>35</td></tr>
                      <tr><td>6</td><td>Sara</td><td>USA</td><td>27</td></tr>
                    </tbody>
                  </table>
                  <p>This is the <b>Customers</b> table used for the ORDER BY examples.</p>
                </div>
              </div>

              {/* Example 1: ORDER BY ASC */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: ORDER BY Name (Ascending)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
ORDER BY Name ASC;`}
                  </pre>
                  <p><b>Result:</b> Records sorted alphabetically by Name (Amit, Ali, Emma, Rahul, Sara, Sophia).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: ORDER BY DESC */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: ORDER BY Age (Descending)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
ORDER BY Age DESC;`}
                  </pre>
                  <p><b>Result:</b> Records sorted by Age from highest to lowest (Amit - 35, Sophia - 30, Ali - 28, Sara - 27, Rahul - 25, Emma - 22).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: ORDER BY Multiple Columns */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: ORDER BY Country ASC, Age DESC</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
ORDER BY Country ASC, Age DESC;`}
                  </pre>
                  <p><b>Result:</b> Sorted first by Country (alphabetically), then by Age (highest to lowest) within each country.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: ORDER BY Default ASC */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: ORDER BY without ASC/DESC</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
ORDER BY Country;`}
                  </pre>
                  <p><b>Result:</b> By default, records are sorted in ascending order (India, Pakistan, UK, USA).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL ORDER BY Clause Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>ORDER BY</code> clause sorts the result set.</li>
                    <li><code>ASC</code> = ascending (default), <code>DESC</code> = descending.</li>
                    <li>Can sort by one or more columns.</li>
                    <li>Useful for displaying data in a logical order.</li>
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

export default SqlOrderBy;
