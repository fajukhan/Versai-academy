import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlInsertIntoSelect = () => {
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
              <h1>SQL INSERT INTO SELECT Statement</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlselectintro">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlcase">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <code>INSERT INTO SELECT</code> statement is used to copy data 
                from one table and insert it into another existing table.  
                Unlike <code>SELECT INTO</code>, it does not create a new table, 
                but inserts rows into an already existing table.
              </p>


              {/* Source Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Employees Table (Source)</div>
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
                      <tr><td>1</td><td>Alice</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Bob</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>Charlie</td><td>Finance</td><td>5000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Target Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">EmployeesBackup Table (Target - Initially Empty)</div>
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
                      <tr><td colSpan="4" className="text-center">No rows yet</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> The target table must already exist before using <code>INSERT INTO SELECT</code>.</p>
                </div>
              </div>

              {/* Example 1: Insert All Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Insert All Rows</div>
                <div className="card-body">
                  <p>Insert all rows from <b>Employees</b> into <b>EmployeesBackup</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO EmployeesBackup (EmpID, Name, Department, Salary)
SELECT EmpID, Name, Department, Salary
FROM Employees;`}
                  </pre>
                  <p><b>Result: EmployeesBackup Table after insertion</b></p>
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
                      <tr><td>1</td><td>Alice</td><td>HR</td><td>4000</td></tr>
                      <tr><td>2</td><td>Bob</td><td>IT</td><td>6000</td></tr>
                      <tr><td>3</td><td>Charlie</td><td>Finance</td><td>5000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Insert with Condition */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Insert Rows with Condition</div>
                <div className="card-body">
                  <p>Insert only employees with <b>Salary greater than 5000</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO EmployeesBackup (EmpID, Name, Department, Salary)
SELECT EmpID, Name, Department, Salary
FROM Employees
WHERE Salary > 5000;`}
                  </pre>
                  <p><b>Result: EmployeesBackup Table</b></p>
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
                      <tr><td>2</td><td>Bob</td><td>IT</td><td>6000</td></tr>
                      <tr><td>4</td><td>Diana</td><td>IT</td><td>7000</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Insert Specific Columns */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Insert Specific Columns</div>
                <div className="card-body">
                  <p>Insert only employee <b>Names</b> and <b>Departments</b> into a backup table:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO EmployeeDeptBackup (Name, Department)
SELECT Name, Department
FROM Employees;`}
                  </pre>
                  <p><b>Result: EmployeeDeptBackup Table</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Alice</td><td>HR</td></tr>
                      <tr><td>Bob</td><td>IT</td></tr>
                      <tr><td>Charlie</td><td>Finance</td></tr>
                      <tr><td>Diana</td><td>IT</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Explanation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Explanation</div>
                <div className="card-body">
                  <ul>
                    <li><code>INSERT INTO SELECT</code> copies data from one table into another existing table.</li>
                    <li>The target table must exist before using this statement.</li>
                    <li>You can insert <b>all rows</b> or filter rows using <code>WHERE</code>.</li>
                    <li>You can insert <b>specific columns</b> by mentioning them explicitly.</li>
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

export default SqlInsertIntoSelect;
