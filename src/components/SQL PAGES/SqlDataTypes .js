import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlDataTypes = () => {
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
              <h1>SQL Data Types</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlhosting">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="/sql-create-database">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                 <p className="lead py-5">
                <b>SQL Data Types</b> define the kind of values that can be stored in a column of a table. 
                Each column in a database table is required to have a name and a data type.
              </p>
              <p>
                Choosing the correct data type is very important because it affects the 
                storage, performance, and accuracy of the database.
              </p>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Student Records</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>EnrollmentDate</th>
                        <th>GPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>20</td>
                        <td>2023-06-12</td>
                        <td>3.8</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>22</td>
                        <td>2022-09-01</td>
                        <td>3.5</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Michael Lee</td>
                        <td>19</td>
                        <td>2023-01-20</td>
                        <td>3.9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Categories of SQL Data Types */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Categories of SQL Data Types</div>
                <div className="card-body">
                  <ul>
                    <li><b>Numeric Data Types</b> – INT, BIGINT, DECIMAL, FLOAT</li>
                    <li><b>String Data Types</b> – CHAR, VARCHAR, TEXT</li>
                    <li><b>Date and Time Data Types</b> – DATE, TIME, DATETIME, TIMESTAMP</li>
                    <li><b>Binary Data Types</b> – BLOB, BINARY, VARBINARY</li>
                    <li><b>Boolean Data Types</b> – BIT, BOOLEAN</li>
                  </ul>
                </div>
              </div>

              {/* Syntax Example */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL Data Types Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  StudentID INT NOT NULL,
  Name VARCHAR(100),
  Age INT,
  EnrollmentDate DATE,
  GPA DECIMAL(3,2)
);`}
                  </pre>
                  <p>
                    In this example:  
                    <ul>
                      <li><b>StudentID</b> uses <code>INT</code> for numbers.</li>
                      <li><b>Name</b> uses <code>VARCHAR(100)</code> for text up to 100 characters.</li>
                      <li><b>Age</b> uses <code>INT</code>.</li>
                      <li><b>EnrollmentDate</b> uses <code>DATE</code>.</li>
                      <li><b>GPA</b> uses <code>DECIMAL(3,2)</code> for precise decimal values.</li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Comparison of Common SQL Data Types</div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Data Type</th>
                        <th>Description</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>INT</td>
                        <td>Whole numbers</td>
                        <td>25, 1000</td>
                      </tr>
                      <tr>
                        <td>VARCHAR(n)</td>
                        <td>Variable-length string up to n characters</td>
                        <td>'John Doe'</td>
                      </tr>
                      <tr>
                        <td>DATE</td>
                        <td>Stores date in YYYY-MM-DD format</td>
                        <td>2023-08-15</td>
                      </tr>
                      <tr>
                        <td>DECIMAL(p,s)</td>
                        <td>Exact numeric with precision and scale</td>
                        <td>3.75, 123.45</td>
                      </tr>
                      <tr>
                        <td>BOOLEAN</td>
                        <td>True/False values</td>
                        <td>TRUE, FALSE</td>
                      </tr>
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

export default SqlDataTypes;
