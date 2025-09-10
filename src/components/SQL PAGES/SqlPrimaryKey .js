import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlPrimaryKey = () => {
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
              <h1>SQL PRIMARY KEY Constraint</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlunique">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlforeignkey">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <b>PRIMARY KEY</b> constraint uniquely identifies each record in a table.  
                It must contain <b>unique values</b> and cannot contain <b>NULL</b>.  
                A table can have only <b>one PRIMARY KEY</b>, which can consist of a single column or multiple columns.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL PRIMARY KEY Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
  column1 datatype PRIMARY KEY,
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
                  <p>We have a <b>Students</b> table where <code>StudentID</code> is the PRIMARY KEY:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Course</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Ravi</td><td>Science</td></tr>
                      <tr><td>2</td><td>Pooja</td><td>Maths</td></tr>
                      <tr><td>3</td><td>Arjun</td><td>History</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: PRIMARY KEY on One Column</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  StudentID INT PRIMARY KEY,
  Name VARCHAR(50),
  Course VARCHAR(50)
);`}
                  </pre>
                  <p><b>Result:</b> StudentID is unique and cannot be NULL.</p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: PRIMARY KEY with Constraint Name</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  StudentID INT,
  Name VARCHAR(50),
  Course VARCHAR(50),
  CONSTRAINT pk_student PRIMARY KEY (StudentID)
);`}
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: PRIMARY KEY on Multiple Columns</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Enrollments (
  StudentID INT,
  CourseID INT,
  EnrollmentDate DATE,
  CONSTRAINT pk_enroll PRIMARY KEY (StudentID, CourseID)
);`}
                  </pre>
                  <p><b>Result:</b> Combination of StudentID and CourseID must be unique.</p>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Add PRIMARY KEY to Existing Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Students
ADD CONSTRAINT pk_student PRIMARY KEY (StudentID);`}
                  </pre>
                  <p><b>Result:</b> Adds a PRIMARY KEY on StudentID column.</p>
                </div>
              </div>

              {/* Example 5 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Attempt Duplicate Insert</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Students (StudentID, Name, Course)
VALUES (1, 'Ravi', 'Science');   -- ✅ Works

INSERT INTO Students (StudentID, Name, Course)
VALUES (1, 'Anjali', 'Maths');   -- ❌ Error (Duplicate StudentID)`}
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

export default SqlPrimaryKey;
