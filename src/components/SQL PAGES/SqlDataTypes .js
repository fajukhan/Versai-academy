import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlDataTypes = () => {
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
              <h1>SQL Data Types</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlhosting">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="/sql-create-database">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                 <p className="lead py-5">
                <b>SQL Data Types</b> define the kind of values that can be stored in a column of a table. 
                Each column in a database table is required to have a name and a data type.
              </p>
              <p>
                Choosing the correct data type is very important because it affects the 
                storage, performance, and accuracy of the database.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Student Records</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>EnrollmentDate</th>
                        <th>GPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>20</td>
                        <td>2023-06-12</td>
                        <td>3.8</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>22</td>
                        <td>2022-09-01</td>
                        <td>3.5</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Michael Lee</td>
                        <td>19</td>
                        <td>2023-01-20</td>
                        <td>3.9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Categories of SQL Data Types */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Categories of SQL Data Types</div>
                <div className="card-body">
                  <ul>
                    <li><b>Numeric Data Types</b> – INT, BIGINT, DECIMAL, FLOAT</li>
                    <li><b>String Data Types</b> – CHAR, VARCHAR, TEXT</li>
                    <li><b>Date and Time Data Types</b> – DATE, TIME, DATETIME, TIMESTAMP</li>
                    <li><b>Binary Data Types</b> – BLOB, BINARY, VARBINARY</li>
                    <li><b>Boolean Data Types</b> – BIT, BOOLEAN</li>
                  </ul>
                </div>
              </div>

              {/* Syntax Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL Data Types Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  StudentID INT NOT NULL,
  Name VARCHAR(100),
  Age INT,
  EnrollmentDate DATE,
  GPA DECIMAL(3,2)
);`}
                  </pre>
                  <p>
                    In this example:  
                    <ul>
                      <li><b>StudentID</b> uses <code>INT</code> for numbers.</li>
                      <li><b>Name</b> uses <code>VARCHAR(100)</code> for text up to 100 characters.</li>
                      <li><b>Age</b> uses <code>INT</code>.</li>
                      <li><b>EnrollmentDate</b> uses <code>DATE</code>.</li>
                      <li><b>GPA</b> uses <code>DECIMAL(3,2)</code> for precise decimal values.</li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Comparison of Common SQL Data Types</div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Data Type</th>
                        <th>Description</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>INT</td>
                        <td>Whole numbers</td>
                        <td>25, 1000</td>
                      </tr>
                      <tr>
                        <td>VARCHAR(n)</td>
                        <td>Variable-length string up to n characters</td>
                        <td>'John Doe'</td>
                      </tr>
                      <tr>
                        <td>DATE</td>
                        <td>Stores date in YYYY-MM-DD format</td>
                        <td>2023-08-15</td>
                      </tr>
                      <tr>
                        <td>DECIMAL(p,s)</td>
                        <td>Exact numeric with precision and scale</td>
                        <td>3.75, 123.45</td>
                      </tr>
                      <tr>
                        <td>BOOLEAN</td>
                        <td>True/False values</td>
                        <td>TRUE, FALSE</td>
                      </tr>
                    </tbody>
                  </table>
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

export default SqlDataTypes;
