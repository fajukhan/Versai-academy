import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlCase = () => {
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
    <li><a href="/">SQL Drop Table</a></li>
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
              <h1>SQL CASE Statement</h1>


             
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlselectintroselect">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlnullfunctions">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>


                <p className="lead py-5">
                The <code>CASE</code> statement in SQL goes through conditions and returns a value when the first condition is met.  
                If no conditions are true, it returns the value in the <code>ELSE</code> clause.  
                If there is no <code>ELSE</code> part and no condition is true, it returns <b>NULL</b>.
              </p>
              

              {/* Students Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Students Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>85</td><td>Science</td></tr>
                      <tr><td>2</td><td>Sara</td><td>45</td><td>Arts</td></tr>
                      <tr><td>3</td><td>Mike</td><td>65</td><td>Commerce</td></tr>
                      <tr><td>4</td><td>Linda</td><td>30</td><td>Science</td></tr>
                      <tr><td>5</td><td>Tom</td><td>90</td><td>Arts</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: CASE in SELECT */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">CASE in SELECT</div>
                <div className="card-body">
                  <p>Use <code>CASE</code> to assign Grades based on Marks:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Marks,
CASE
  WHEN Marks >= 75 THEN 'A'
  WHEN Marks >= 50 THEN 'B'
  ELSE 'C'
END AS Grade
FROM Students;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>85</td><td>A</td></tr>
                      <tr><td>Sara</td><td>45</td><td>C</td></tr>
                      <tr><td>Mike</td><td>65</td><td>B</td></tr>
                      <tr><td>Linda</td><td>30</td><td>C</td></tr>
                      <tr><td>Tom</td><td>90</td><td>A</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: CASE in ORDER BY */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">CASE in ORDER BY</div>
                <div className="card-body">
                  <p>Sort students so that <b>Science</b> department comes first:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Department
FROM Students
ORDER BY
  CASE
    WHEN Department = 'Science' THEN 1
    WHEN Department = 'Commerce' THEN 2
    ELSE 3
  END;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>Science</td></tr>
                      <tr><td>Linda</td><td>Science</td></tr>
                      <tr><td>Mike</td><td>Commerce</td></tr>
                      <tr><td>Sara</td><td>Arts</td></tr>
                      <tr><td>Tom</td><td>Arts</td></tr>
                    </tbody>
                  </table>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Nested CASE */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Nested CASE Example</div>
                <div className="card-body">
                  <p>Use nested <code>CASE</code> to give remarks based on Grades:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Marks,
CASE
  WHEN Marks >= 75 THEN 
    CASE WHEN Marks >= 90 THEN 'Excellent' ELSE 'Very Good' END
  WHEN Marks >= 50 THEN 'Good'
  ELSE 'Needs Improvement'
END AS Remarks
FROM Students;`}
                  </pre>
                  <p><b>Result:</b></p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>85</td><td>Very Good</td></tr>
                      <tr><td>Sara</td><td>45</td><td>Needs Improvement</td></tr>
                      <tr><td>Mike</td><td>65</td><td>Good</td></tr>
                      <tr><td>Linda</td><td>30</td><td>Needs Improvement</td></tr>
                      <tr><td>Tom</td><td>90</td><td>Excellent</td></tr>
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
                    <li><code>CASE</code> is SQL's way of implementing conditional logic.</li>
                    <li>It can be used inside <code>SELECT</code>, <code>ORDER BY</code>, <code>GROUP BY</code>, etc.</li>
                    <li><b>Nested CASE</b> allows more complex decision making.</li>
                    <li>If no <code>ELSE</code> is provided and no condition is true, <code>NULL</code> is returned.</li>
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

export default SqlCase;
