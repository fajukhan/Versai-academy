import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlDates = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

                                 {/* Sidebar (Left - col-2) */}
<div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
  <h5 className="fw-bold">SQL Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="sql">SQL HOME</a></li>
    <li><a href="sqlintroduction">SQL Intro</a></li>
    <li><a href="sqlsyntax">SQL Syntax</a></li>
    <li><a href="sqlselect">SQL Select</a></li>
    <li><a href="sqlselectdistinct">SQL Select Distinct</a></li>
    <li><a href="sqlwhere">SQL Where</a></li>
    <li><a href="sqlorderby">SQL Order By</a></li>
    <li><a href="sqland">SQL And</a></li>
    <li><a href="sqlor">SQL Or</a></li>
    <li><a href="sqlnot">SQL Not</a></li>
     <li><a href="sqlinsert">SQL Insert Into</a></li>
 <li><a href="sqlnullvalues">SQL Null Values</a></li>
     <li><a href="sqlupdate">SQL Update</a></li>
       <li><a href="sqldelete">SQL Delete</a></li>
   <li><a href="sqltop">SQL Select Top</a></li>
       <li><a href="sqlaggregatefunction">SQL Aggregate Functions</a></li>
    <li><a href="sqlminmax">SQL Min and Max</a></li>
   <li><a href="sqlcount">SQL Count</a></li>
    <li><a href="sqlsum">SQL Sum</a></li>
     <li><a href="sqlavg">SQL Avg</a></li>
 <li><a href="sqllike">SQL Like</a></li>
     <li><a href="sqlwildcard">SQL Wildcards</a></li>
     <li><a href="sqlinoperator">SQL In</a></li>
     <li><a href="sqlbetween">SQL Between</a></li>
       <li><a href="sqlaliases">SQL Aliases</a></li>
  <li><a href="sqljoins">SQL Joins</a></li>
    <li><a href="sqlinnerjoin">SQL Inner Join</a></li>
    <li><a href="sqlleftjoin">SQL Left Join</a></li>
    <li><a href="sqlrightjoin">SQL Right Join</a></li>
<li><a href="sqlfulljoin">SQL Full Join</a></li>
    <li><a href="sqlselfjoin">SQL Self Join</a></li>
      <li><a href="sqlunion">SQL Union</a></li>

  <li><a href="SqlUnionAll">SQL Union All</a></li>
      <li><a href="sqlgroupby">SQL Group By</a></li>

    <li><a href="sqlhaving">SQL Having</a></li>
    <li><a href="sqlexists">SQL Exists</a></li>
    <li><a href="sqlanyall">SQL Any, All</a></li>
    <li><a href="sqlselectintro">SQL Select Into</a></li>
    <li><a href="sqlselectintroselect">SQL Insert Into Select</a></li>
    <li><a href="sqlcase">SQL Case</a></li>
    <li><a href="sqlnullfunctions">SQL Null Functions</a></li>
    <li><a href="sqlstoredprocedure">SQL Stored Procedures</a></li>
    <li><a href="sqlcomments">SQL Comments</a></li>
    <li><a href="sqloperators">SQL Operators</a></li>
  </ul>

  <h5 className="fw-bold">SQL Database</h5>
  <ul className="list-unstyled">
    <li><a href="sqlcreatedatabase">SQL Create DB</a></li>
    <li><a href="sqldropdatabase">SQL Drop DB</a></li>
    <li><a href="sqlbackupdatabase">SQL Backup DB</a></li>
    <li><a href="sqlcreatetable">SQL Create Table</a></li>
    <li><a href="sqldroptable">SQL Drop Table</a></li>
    <li><a href="sqlaltertable">SQL Alter Table</a></li>
    <li><a href="sqlconstraints">SQL Constraints</a></li>
    <li><a href="sqlnotnull">SQL Not Null</a></li>
    <li><a href="sqlunique">SQL Unique</a></li>
    <li><a href="sqlprimarykey">SQL Primary Key</a></li>
    <li><a href="sqlforeignkey">SQL Foreign Key</a></li>
    <li><a href="sqlcheck">SQL Check</a></li>
    <li><a href="sqldefault">SQL Default</a></li>
    <li><a href="sqlindex">SQL Index</a></li>
    <li><a href="sqlautoincrement">SQL Auto Increment</a></li>
    <li><a href="sqldates">SQL Dates</a></li>
    <li><a href="sqlviews">SQL Views</a></li>
    <li><a href="sqlinjection">SQL Injection</a></li>
    <li><a href="sqlhosting">SQL Hosting</a></li>
    <li><a href="sqldatatypes">SQL Data Types</a></li>
  </ul>
</div>
            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>SQL DATES</h1>
          
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlautoincrement">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlviews">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                  <p className="lead py-5">
                Working with <b>dates</b> in SQL is very common for storing, filtering,
                and analyzing time-based data. SQL provides different functions 
                to handle dates depending on the database system.
              </p>

              <p>
                The standard SQL date format is: <code>'YYYY-MM-DD'</code>.  
                Some databases also allow date and time storage: <code>'YYYY-MM-DD HH:MI:SS'</code>.
              </p>


              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Orders</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>2023-01-15</td></tr>
                      <tr><td>2</td><td>Priya</td><td>2023-02-10</td></tr>
                      <tr><td>3</td><td>Amit</td><td>2023-03-05</td></tr>
                      <tr><td>4</td><td>Neha</td><td>2023-03-25</td></tr>
                      <tr><td>5</td><td>John</td><td>2023-04-12</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: Select records from a specific date */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Select Records From Specific Date</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Orders
WHERE OrderDate = '2023-03-05';`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>3</td><td>Amit</td><td>2023-03-05</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 2: BETWEEN Two Dates */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Select Records Between Two Dates</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Orders
WHERE OrderDate BETWEEN '2023-03-01' AND '2023-03-31';`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderDate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>3</td><td>Amit</td><td>2023-03-05</td></tr>
                      <tr><td>4</td><td>Neha</td><td>2023-03-25</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 3: Extract Year, Month, Day */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Extract Year, Month, Day</div>
                <div className="card-body">
                  <p>Different SQL databases have functions to extract parts of a date:</p>
                  <ul>
                    <li><b>MySQL:</b> YEAR(OrderDate), MONTH(OrderDate), DAY(OrderDate)</li>
                    <li><b>SQL Server:</b> YEAR(OrderDate), MONTH(OrderDate), DAY(OrderDate)</li>
                    <li><b>PostgreSQL:</b> EXTRACT(YEAR FROM OrderDate)</li>
                  </ul>
                  <pre className="bg-light p-3 rounded">
{`SELECT OrderID, CustomerName, YEAR(OrderDate) AS OrderYear
FROM Orders;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerName</th>
                        <th>OrderYear</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>2023</td></tr>
                      <tr><td>2</td><td>Priya</td><td>2023</td></tr>
                      <tr><td>3</td><td>Amit</td><td>2023</td></tr>
                      <tr><td>4</td><td>Neha</td><td>2023</td></tr>
                      <tr><td>5</td><td>John</td><td>2023</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 4: Get Current Date */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Get Current Date</div>
                <div className="card-body">
                  <ul>
                    <li><b>MySQL:</b> <code>SELECT CURDATE();</code></li>
                    <li><b>SQL Server:</b> <code>SELECT GETDATE();</code></li>
                    <li><b>PostgreSQL:</b> <code>SELECT CURRENT_DATE;</code></li>
                  </ul>
                  <p>This returns the system’s current date.</p>
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

export default SqlDates;
