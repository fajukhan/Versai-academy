import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlIndex = () => {
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
              <h1>SQL INDEX</h1>
          

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqldefault">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlautoincrement">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                  <p className="lead py-5">
                An <b>INDEX</b> in SQL is used to speed up the retrieval of data 
                from a database table. Indexes are created on columns that are 
                frequently used in <code>WHERE</code> clauses, <code>JOIN</code> 
                conditions, or sorting operations.
              </p>
              <p>
                Without an index, SQL Server (or any DBMS) must scan the entire table 
                to find the matching rows. Indexes improve performance significantly.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL INDEX Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- Create Index
CREATE INDEX index_name
ON table_name (column_name);

-- Create Unique Index
CREATE UNIQUE INDEX index_name
ON table_name (column_name);

-- Drop Index
DROP INDEX index_name;`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Employees</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>IT</td><td>50000</td></tr>
                      <tr><td>2</td><td>Priya</td><td>HR</td><td>40000</td></tr>
                      <tr><td>3</td><td>Amit</td><td>Finance</td><td>60000</td></tr>
                      <tr><td>4</td><td>Neha</td><td>IT</td><td>55000</td></tr>
                      <tr><td>5</td><td>John</td><td>Marketing</td><td>45000</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> Suppose we often search employees by Department or Salary. Creating indexes on these columns improves query performance.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create Index on Department</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE INDEX idx_department
ON Employees (Department);`}
                  </pre>
                  <p>
                    This index improves search performance for queries filtering 
                    by <code>Department</code>.
                  </p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Create Unique Index</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE UNIQUE INDEX idx_empid
ON Employees (EmpID);`}
                  </pre>
                  <p>
                    Ensures that <code>EmpID</code> values remain unique in the table.
                  </p>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Composite Index</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE INDEX idx_name_dept
ON Employees (Name, Department);`}
                  </pre>
                  <p>
                    This index helps queries that search using both 
                    <code>Name</code> and <code>Department</code>.
                  </p>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Drop Index</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP INDEX idx_department;`}
                  </pre>
                  <p>
                    Removes the index <code>idx_department</code> from the 
                    <code>Employees</code> table.
                  </p>
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

export default SqlIndex;
