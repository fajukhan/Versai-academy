import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
const SqlAvg = () => {
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
              <h1>SQL AVG() Function</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlsum">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqllike">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <code>AVG()</code> function returns the average value of a numeric column. 
                It is commonly used to calculate averages such as average salary, marks, or prices.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Employees</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Sophia</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>David</td><td>Finance</td><td>5500</td></tr>
                      <tr><td>4</td><td>Emma</td><td>IT</td><td>7000</td></tr>
                      <tr><td>5</td><td>Liam</td><td>HR</td><td>4500</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Employees</b> table stores employee details including their salary and department.
                  </p>
                </div>
              </div>

              {/* Example 1: AVG() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: AVG()</div>
                <div className="card-body">
                  <p>Find the average salary of all employees:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT AVG(Salary) AS AverageSalary
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> 5400 ( (4000+6000+5500+7000+4500) ÷ 5 )</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: AVG() with WHERE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: AVG() with WHERE</div>
                <div className="card-body">
                  <p>Find the average salary of IT department employees:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT AVG(Salary) AS IT_AvgSalary
FROM Employees
WHERE Department = 'IT';`}
                  </pre>
                  <p><b>Result:</b> 6500 ( (6000+7000) ÷ 2 )</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: AVG(DISTINCT) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: AVG(DISTINCT)</div>
                <div className="card-body">
                  <p>Find the average of unique salary values:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT AVG(DISTINCT Salary) AS UniqueAvg
FROM Employees;`}
                  </pre>
                  <p><b>Result:</b> 5400 (since all salaries are unique here)</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: AVG() with GROUP BY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: AVG() with GROUP BY</div>
                <div className="card-body">
                  <p>Find the average salary for each department:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Department, AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Department</th>
                        <th>AvgSalary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>HR</td><td>4250</td></tr>
                      <tr><td>IT</td><td>6500</td></tr>
                      <tr><td>Finance</td><td>5500</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>AVG(column)</code> → Returns the average of numeric column values</li>
                    <li><code>AVG(DISTINCT column)</code> → Returns the average of unique values only</li>
                    <li>Can be filtered using <code>WHERE</code></li>
                    <li>Can be grouped using <code>GROUP BY</code> to calculate averages per group</li>
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

export default SqlAvg;
