import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlLike = () => {
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
              <h1>SQL LIKE Operator</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlavg">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlwildcard">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <code>LIKE</code> operator is used in a <code>WHERE</code> clause 
                to search for a specified pattern in a column.
              </p>
              <ul>
                <li><code>%</code> → Represents zero, one, or multiple characters</li>
                <li><code>_</code> → Represents a single character</li>
              </ul>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Customers</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                        <th>City</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Alfreds Futterkiste</td><td>Berlin</td><td>Germany</td></tr>
                      <tr><td>2</td><td>Ana Trujillo</td><td>Mexico City</td><td>Mexico</td></tr>
                      <tr><td>3</td><td>Antonio Moreno</td><td>Madrid</td><td>Spain</td></tr>
                      <tr><td>4</td><td>Christina Berglund</td><td>Lulea</td><td>Sweden</td></tr>
                      <tr><td>5</td><td>Hanna Moos</td><td>Mannheim</td><td>Germany</td></tr>
                      <tr><td>6</td><td>Giovanni Rovelli</td><td>Rome</td><td>Italy</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Customers</b> table stores customer details including their name, city, and country.
                  </p>
                </div>
              </div>

              {/* Example 1: LIKE with % */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: LIKE with %</div>
                <div className="card-body">
                  <p>Find all customers whose name starts with 'A':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE 'A%';`}
                  </pre>
                  <p><b>Result:</b> Alfreds Futterkiste, Ana Trujillo, Antonio Moreno</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: LIKE with % at both sides */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: LIKE with % on both sides</div>
                <div className="card-body">
                  <p>Find all customers whose name contains 'nn':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE '%nn%';`}
                  </pre>
                  <p><b>Result:</b> Hanna Moos, Giovanni Rovelli</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: LIKE with _ */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: LIKE with _</div>
                <div className="card-body">
                  <p>Find all customers whose name has 'An_' at the beginning:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE 'An_';`}
                  </pre>
                  <p><b>Result:</b> Ana Trujillo</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: NOT LIKE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: NOT LIKE</div>
                <div className="card-body">
                  <p>Find all customers whose names do NOT start with 'A':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName NOT LIKE 'A%';`}
                  </pre>
                  <p><b>Result:</b> Christina Berglund, Hanna Moos, Giovanni Rovelli</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5: LIKE with multiple conditions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: LIKE with Multiple Conditions</div>
                <div className="card-body">
                  <p>Find customers whose name starts with 'A' OR ends with 'i':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Customers
WHERE CustomerName LIKE 'A%' 
   OR CustomerName LIKE '%i';`}
                  </pre>
                  <p><b>Result:</b> Alfreds Futterkiste, Ana Trujillo, Antonio Moreno, Giovanni Rovelli</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>LIKE 'A%'</code> → Finds values that start with A</li>
                    <li><code>LIKE '%A'</code> → Finds values that end with A</li>
                    <li><code>LIKE '%or%'</code> → Finds values that contain "or"</li>
                    <li><code>LIKE '_r%'</code> → Finds values with "r" as the second character</li>
                    <li><code>NOT LIKE</code> → Excludes a pattern</li>
                  </ul>
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

export default SqlLike;

