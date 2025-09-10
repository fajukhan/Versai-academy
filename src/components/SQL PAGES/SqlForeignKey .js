import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlForeignKey = () => {
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
              <h1>SQL FOREIGN KEY Constraint</h1>
         

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlprimarykey">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlcheck">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                   <p className="lead py-5">
                A <b>FOREIGN KEY</b> is a field (or collection of fields) in one table 
                that refers to the <b>PRIMARY KEY</b> in another table.  
                The FOREIGN KEY constraint is used to <b>prevent invalid data</b> from being inserted, 
                because it ensures that the value must already exist in the referenced table.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL FOREIGN KEY Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE child_table (
  column1 datatype,
  column2 datatype,
  ...
  CONSTRAINT fk_name FOREIGN KEY (column_name)
  REFERENCES parent_table (primary_key_column)
);`}
                  </pre>
                </div>
              </div>

              {/* Example Parent Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Parent Table: Departments</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>DeptID</th>
                        <th>DeptName</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Science</td></tr>
                      <tr><td>2</td><td>Mathematics</td></tr>
                      <tr><td>3</td><td>History</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> DeptID is the PRIMARY KEY in Departments table.</p>
                </div>
              </div>

              {/* Example Child Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Child Table: Students</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>DeptID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>101</td><td>Ravi</td><td>1</td></tr>
                      <tr><td>102</td><td>Pooja</td><td>2</td></tr>
                      <tr><td>103</td><td>Arjun</td><td>3</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> DeptID here is a FOREIGN KEY that references DeptID in Departments.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: FOREIGN KEY in Create Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  StudentID INT PRIMARY KEY,
  Name VARCHAR(50),
  DeptID INT,
  CONSTRAINT fk_dept FOREIGN KEY (DeptID)
  REFERENCES Departments(DeptID)
);`}
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Add FOREIGN KEY to Existing Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Students
ADD CONSTRAINT fk_dept FOREIGN KEY (DeptID)
REFERENCES Departments(DeptID);`}
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Insert with Valid Data</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Students (StudentID, Name, DeptID)
VALUES (104, 'Anjali', 2);   -- ✅ Works (DeptID=2 exists)`}  
                  </pre>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Insert with Invalid Data</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Students (StudentID, Name, DeptID)
VALUES (105, 'Karan', 5);   -- ❌ Error (DeptID=5 does not exist)`}  
                  </pre>
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

export default SqlForeignKey;
