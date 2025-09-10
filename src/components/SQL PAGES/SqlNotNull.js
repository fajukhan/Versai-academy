import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlNotNull = () => {
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
              <h1>SQL NOT NULL Constraint</h1>
          
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlconstraints">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlunique">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                  <p className="lead py-5">
                The <b>NOT NULL constraint</b> ensures that a column cannot have a <code>NULL</code> value. 
                It means you must always insert a value into that column.
              </p>


              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL NOT NULL Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
  column1 datatype NOT NULL,
  column2 datatype,
  ...
);`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Demo Table: Students</div>
                <div className="card-body">
                  <p>We have a <b>Students</b> table where <code>StudentID</code> and <code>Name</code> must not be NULL:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>20</td><td>rahul@example.com</td></tr>
                      <tr><td>2</td><td>Priya</td><td>22</td><td>priya@example.com</td></tr>
                      <tr><td>3</td><td>Aman</td><td>21</td><td>aman@example.com</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: NOT NULL on One Column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  StudentID INT NOT NULL,
  Name VARCHAR(50) NOT NULL,
  Age INT,
  Email VARCHAR(100)
);`}
                  </pre>
                  <p><b>Result:</b> StudentID and Name cannot have NULL values.</p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Inserting Data with NOT NULL</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Students (StudentID, Name, Age, Email)
VALUES (1, 'Rahul', 20, 'rahul@example.com');   -- ✅ Works

INSERT INTO Students (StudentID, Age, Email)
VALUES (2, 22, 'priya@example.com');           -- ❌ Error (Name cannot be NULL)`}
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Adding NOT NULL Constraint to Existing Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Students
MODIFY Name VARCHAR(50) NOT NULL;`}
                  </pre>
                  <p><b>Result:</b> Now the Name column must always have a value.</p>
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

export default SqlNotNull;
