import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlDropTable = () => {
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
              <h1>SQL DROP TABLE</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlcreatetable">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlaltertable">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <b>DROP TABLE</b> statement is used to <u>delete a table completely</u> 
                from the database. All the data inside the table will also be removed. 
                Once a table is dropped, it cannot be recovered unless you recreate it.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP TABLE table_name;

-- Safer option
DROP TABLE IF EXISTS table_name;`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Demo Table: Students</div>
                <div className="card-body">
                  <p>We have a <b>Students</b> table:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rohan</td><td>20</td><td>Delhi</td></tr>
                      <tr><td>2</td><td>Anita</td><td>22</td><td>Mumbai</td></tr>
                      <tr><td>3</td><td>Karan</td><td>19</td><td>Pune</td></tr>
                    </tbody>
                  </table>
                  <p>This table will be dropped using <code>DROP TABLE</code>.</p>
                </div>
              </div>

              {/* Example 1: Drop Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Drop Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP TABLE Students;`}
                  </pre>
                  <p><b>Result:</b> The <code>Students</code> table will be deleted completely.</p>
                </div>
              </div>

              {/* Example 2: Drop If Exists */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Drop Only If Exists</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP TABLE IF EXISTS Students;`}
                  </pre>
                  <p><b>Result:</b> SQL will drop the table only if it exists, 
                    otherwise no error will occur.</p>
                </div>
              </div>

              {/* Example 3: Drop Multiple Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Drop Multiple Tables</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP TABLE Students, Teachers;`}
                  </pre>
                  <p><b>Result:</b> Both <code>Students</code> and <code>Teachers</code> tables will be deleted.</p>
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

export default SqlDropTable;
