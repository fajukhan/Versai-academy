import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlCreateDatabase = () => {
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
              <h1>SQL CREATE DATABASE</h1>
             
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqloperators">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqldropdatabase">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <b>CREATE DATABASE</b> statement is used to create a new database in SQL.  
                Each database can hold multiple tables, views, stored procedures, etc.
              </p>


              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE DATABASE databasename;`}
                  </pre>
                  <p><b>Note:</b> Always make sure you have the right privilege before creating a new database.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create a Database</div>
                <div className="card-body">
                  <p>Create a new database called <b>SchoolDB</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE DATABASE SchoolDB;`}
                  </pre>
                  <p><b>Result:</b> A new database <code>SchoolDB</code> will be created.</p>
                </div>
              </div>

              {/* Example 2: Create Table in Database */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Create a Table inside Database</div>
                <div className="card-body">
                  <p>After creating the database, you can switch to it and create a table:</p>
                  <pre className="bg-light p-3 rounded">
{`USE SchoolDB;

CREATE TABLE Students (
  StudentID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT,
  Marks INT
);`}
                  </pre>
                  <p><b>Result:</b> A new table <code>Students</code> will be created inside <code>SchoolDB</code>.</p>
                </div>
              </div>

              {/* Students Table Preview */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Students Table Example</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>18</td><td>85</td></tr>
                      <tr><td>2</td><td>Emma</td><td>20</td><td>92</td></tr>
                      <tr><td>3</td><td>Liam</td><td>19</td><td>70</td></tr>
                      <tr><td>4</td><td>Olivia</td><td>22</td><td>60</td></tr>
                    </tbody>
                  </table>
                  <p>This table is an example inside the newly created database.</p>
                </div>
              </div>

              {/* Example 3: Drop Database */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Drop a Database</div>
                <div className="card-body">
                  <p>If you want to delete the database completely:</p>
                  <pre className="bg-light p-3 rounded">
{`DROP DATABASE SchoolDB;`}
                  </pre>
                  <p><b>Result:</b> The <code>SchoolDB</code> database will be deleted permanently.</p>
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

export default SqlCreateDatabase;
