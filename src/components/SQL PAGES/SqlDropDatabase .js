import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
const SqlDropDatabase = () => {
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
