import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";


const SqlIndex = () => {
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
              <h1>SQL INDEX</h1>
          

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqldefault">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlautoincrement">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                  <p className="lead py-5">
                An <b>INDEX</b> in SQL is used to speed up the retrieval of data 
                from a database table. Indexes are created on columns that are 
                frequently used in <code>WHERE</code> clauses, <code>JOIN</code> 
                conditions, or sorting operations.
              </p>
              <p>
                Without an index, SQL Server (or any DBMS) must scan the entire table 
                to find the matching rows. Indexes improve performance significantly.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL INDEX Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`-- Create Index
CREATE INDEX index_name
ON table_name (column_name);

-- Create Unique Index
CREATE UNIQUE INDEX index_name
ON table_name (column_name);

-- Drop Index
DROP INDEX index_name;`}
                  </pre>
                </div>
              </div>

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
                      <tr><td>1</td><td>Rahul</td><td>IT</td><td>50000</td></tr>
                      <tr><td>2</td><td>Priya</td><td>HR</td><td>40000</td></tr>
                      <tr><td>3</td><td>Amit</td><td>Finance</td><td>60000</td></tr>
                      <tr><td>4</td><td>Neha</td><td>IT</td><td>55000</td></tr>
                      <tr><td>5</td><td>John</td><td>Marketing</td><td>45000</td></tr>
                    </tbody>
                  </table>
                  <p><b>Note:</b> Suppose we often search employees by Department or Salary. Creating indexes on these columns improves query performance.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create Index on Department</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE INDEX idx_department
ON Employees (Department);`}
                  </pre>
                  <p>
                    This index improves search performance for queries filtering 
                    by <code>Department</code>.
                  </p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Create Unique Index</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE UNIQUE INDEX idx_empid
ON Employees (EmpID);`}
                  </pre>
                  <p>
                    Ensures that <code>EmpID</code> values remain unique in the table.
                  </p>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Composite Index</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE INDEX idx_name_dept
ON Employees (Name, Department);`}
                  </pre>
                  <p>
                    This index helps queries that search using both 
                    <code>Name</code> and <code>Department</code>.
                  </p>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Drop Index</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`DROP INDEX idx_department;`}
                  </pre>
                  <p>
                    Removes the index <code>idx_department</code> from the 
                    <code>Employees</code> table.
                  </p>
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

export default SqlIndex;
