import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlDropDatabase = () => {
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
              <h1>SQL DROP DATABASE</h1>
           
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlcreatedatabase">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlbackupdatabase">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <b>DROP DATABASE</b> statement is used to permanently delete an entire database along with all its tables, views, and stored procedures. 
                Once a database is deleted, it cannot be recovered.
              </p>


              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP DATABASE databasename;`}
                  </pre>
                  <p><b>Note:</b> Use this command carefully, because all data inside the database will be lost permanently.</p>
                </div>
              </div>

              {/* Example 1: Drop Database */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Drop a Database</div>
                <div className="card-body">
                  <p>Delete a database named <b>SchoolDB</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`DROP DATABASE SchoolDB;`}
                  </pre>
                  <p><b>Result:</b> The <code>SchoolDB</code> database will be permanently deleted.</p>
                </div>
              </div>

              {/* Example Table (Before Drop) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table (Before DROP)</div>
                <div className="card-body">
                  <p>Suppose <b>SchoolDB</b> contains a table <b>Teachers</b>:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>TeacherID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Experience (Years)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Mr. Smith</td><td>Math</td><td>10</td></tr>
                      <tr><td>2</td><td>Mrs. Johnson</td><td>Science</td><td>8</td></tr>
                      <tr><td>3</td><td>Mr. Brown</td><td>English</td><td>5</td></tr>
                      <tr><td>4</td><td>Ms. Taylor</td><td>History</td><td>12</td></tr>
                    </tbody>
                  </table>
                  <p>After executing <code>DROP DATABASE SchoolDB;</code>, this table and all its data will also be deleted.</p>
                </div>
              </div>

              {/* Example 2: Drop Only If Exists */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Drop Only If Database Exists</div>
                <div className="card-body">
                  <p>To avoid errors when the database doesn’t exist, use <b>IF EXISTS</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`DROP DATABASE IF EXISTS SchoolDB;`}
                  </pre>
                  <p><b>Result:</b> The database will be deleted only if it exists, otherwise no error will occur.</p>
                </div>
              </div>

              {/* Example 3: Drop Multiple Databases */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Drop Multiple Databases</div>
                <div className="card-body">
                  <p>You can also drop multiple databases in a single query:</p>
                  <pre className="bg-light p-3 rounded">
{`DROP DATABASE TestDB, SalesDB;`}
                  </pre>
                  <p><b>Result:</b> Both <code>TestDB</code> and <code>SalesDB</code> will be deleted.</p>
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

export default SqlDropDatabase;
