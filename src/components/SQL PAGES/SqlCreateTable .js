import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlCreateTable = () => {
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
              <h1>SQL CREATE TABLE</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlbackupdatabase">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqldroptable">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                <p className="lead py-5">
                The <b>CREATE TABLE</b> statement is used to create a new table in a database.  
                A table consists of rows and columns, where each column has a specific datatype.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ....
);`}
                  </pre>
                  <p>
                    Each column must have a name and a datatype (e.g., INT, VARCHAR, DATE).
                  </p>
                </div>
              </div>

              {/* Example 1: Simple Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create a Students Table</div>
                <div className="card-body">
                  <p>Create a table named <b>Students</b> with three columns:</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
    StudentID INT,
    StudentName VARCHAR(50),
    Age INT
);`}
                  </pre>
                  <p><b>Result:</b> A new table <code>Students</code> is created.</p>
                </div>
              </div>

              {/* Example Table (Unique for this page) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Data in Students Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>StudentName</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Ravi</td><td>15</td></tr>
                      <tr><td>2</td><td>Priya</td><td>16</td></tr>
                      <tr><td>3</td><td>Amit</td><td>14</td></tr>
                    </tbody>
                  </table>
                  <p>This table is stored inside the database you selected.</p>
                </div>
              </div>

              {/* Example 2: Table with Constraints */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: With Primary Key & NOT NULL</div>
                <div className="card-body">
                  <p>Here we create a <b>Employees</b> table with constraints:</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(100) NOT NULL,
    Salary DECIMAL(10,2)
);`}
                  </pre>
                  <p><b>Explanation:</b> 
                    <ul>
                      <li><code>EmpID</code> is the Primary Key.</li>
                      <li><code>EmpName</code> cannot be NULL.</li>
                      <li><code>Salary</code> allows decimal values.</li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* Example 3: Table with Date */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: With Date Column</div>
                <div className="card-body">
                  <p>Table <b>Orders</b> with a DATE column:</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    Amount DECIMAL(8,2)
);`}
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

export default SqlCreateTable;
