import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlAutoIncrement = () => {
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
              <h1>SQL AUTO INCREMENT</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlindex">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqldates">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                The <b>AUTO INCREMENT</b> feature allows a unique number to be 
                automatically generated whenever a new record is inserted into a table.  
                It is commonly used for the primary key column.
              </p>

              <p>
                Auto-increment ensures each row has a unique identifier without 
                manually specifying values.
              </p>

              {/* Syntax MySQL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">MySQL Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Users (
    UserID INT AUTO_INCREMENT,
    Name VARCHAR(50),
    PRIMARY KEY(UserID)
);`}
                  </pre>
                </div>
              </div>

              {/* Syntax SQL Server */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL Server Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Users (
    UserID INT IDENTITY(1,1),
    Name VARCHAR(50),
    PRIMARY KEY(UserID)
);`}
                  </pre>
                  <p><b>IDENTITY(1,1)</b> → starts from 1 and increments by 1.</p>
                </div>
              </div>

              {/* Syntax PostgreSQL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">PostgreSQL Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Users (
    UserID SERIAL,
    Name VARCHAR(50),
    PRIMARY KEY(UserID)
);`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Users</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>UserID</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td></tr>
                      <tr><td>2</td><td>Priya</td></tr>
                      <tr><td>3</td><td>Amit</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Here <code>UserID</code> is automatically generated whenever a 
                    new user is added.
                  </p>
                </div>
              </div>

              {/* Example Insert */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Insert Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Users (Name) VALUES ('Neha');
INSERT INTO Users (Name) VALUES ('John');`}
                  </pre>
                  <p>
                    After inserting, <code>UserID</code> will automatically 
                    increment to the next number.
                  </p>
                </div>
              </div>

              {/* Example Result */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Resulting Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>UserID</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td></tr>
                      <tr><td>2</td><td>Priya</td></tr>
                      <tr><td>3</td><td>Amit</td></tr>
                      <tr><td>4</td><td>Neha</td></tr>
                      <tr><td>5</td><td>John</td></tr>
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

export default SqlAutoIncrement;
