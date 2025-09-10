import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";


const SqlDefault = () => {
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
              <h1>SQL DEFAULT Constraint</h1>
            
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlcheck">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlindex">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                <p className="lead py-5">
                The <b>DEFAULT constraint</b> is used to provide a default value 
                for a column. If no value is specified for the column while 
                inserting data, the default value will be inserted automatically.
              </p>


              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL DEFAULT Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
  column1 datatype DEFAULT default_value,
  column2 datatype,
  ...
);`}
                  </pre>
                  <p className="mt-2">or using <code>CONSTRAINT</code> keyword:</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  CONSTRAINT constraint_name DEFAULT default_value FOR column1
);`}
                  </pre>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Customers</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>Delhi</td><td>India</td></tr>
                      <tr><td>2</td><td>Priya</td><td>Mumbai</td><td>India</td></tr>
                      <tr><td>3</td><td>Amit</td><td>Kolkata</td><td>India</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> If country is not provided, <code>India</code> should be default.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: DEFAULT in Create Table</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY,
  Name VARCHAR(50),
  City VARCHAR(50),
  Country VARCHAR(50) DEFAULT 'India'
);`}
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Insert Without Country</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Customers (CustomerID, Name, City)
VALUES (4, 'Neha', 'Pune');  

-- ✅ Country will be inserted as 'India' automatically`}
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Insert With Country</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Customers (CustomerID, Name, City, Country)
VALUES (5, 'John', 'New York', 'USA');  

-- ✅ Country will be 'USA'`}
                  </pre>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Add DEFAULT Constraint Later</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Customers
ADD CONSTRAINT df_country DEFAULT 'India' FOR Country;`}
                  </pre>
                </div>
              </div>

              {/* Example 5 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Drop DEFAULT Constraint</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`ALTER TABLE Customers
ALTER COLUMN Country DROP DEFAULT;`}
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

export default SqlDefault;
