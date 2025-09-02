import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlInnerJoin = () => {
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
              <h1>SQL INNER JOIN</h1>
          
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqljoins">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlleftjoin">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                  <p className="lead py-5">
                The <b>INNER JOIN</b> keyword selects records that have matching values in both tables.  
                It returns only the rows where there is at least one match in both tables.
              </p>


              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Tables</div>
                <div className="card-body">
                  <h5>Students Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>StudentName</th>
                        <th>Class</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Alex</td><td>10</td></tr>
                      <tr><td>2</td><td>Sophia</td><td>10</td></tr>
                      <tr><td>3</td><td>Daniel</td><td>9</td></tr>
                      <tr><td>4</td><td>Emma</td><td>11</td></tr>
                    </tbody>
                  </table>

                  <h5>Results Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ResultID</th>
                        <th>StudentID</th>
                        <th>Subject</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>101</td><td>1</td><td>Math</td><td>85</td></tr>
                      <tr><td>102</td><td>2</td><td>Math</td><td>90</td></tr>
                      <tr><td>103</td><td>1</td><td>Science</td><td>78</td></tr>
                      <tr><td>104</td><td>3</td><td>English</td><td>88</td></tr>
                      <tr><td>105</td><td>5</td><td>Math</td><td>92</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Notice: StudentID <b>5</b> exists in <b>Results</b> but not in <b>Students</b>.
                  </p>
                </div>
              </div>

              {/* Example 1: INNER JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">INNER JOIN Example</div>
                <div className="card-body">
                  <p>Get all students and their marks (only matching rows):</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Students.StudentName, Results.Subject, Results.Marks
FROM Students
INNER JOIN Results
ON Students.StudentID = Results.StudentID;`}
                  </pre>
                  <p><b>Result:</b> Only students that exist in both <b>Students</b> and <b>Results</b> are shown.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentName</th>
                        <th>Subject</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Alex</td><td>Math</td><td>85</td></tr>
                      <tr><td>Sophia</td><td>Math</td><td>90</td></tr>
                      <tr><td>Alex</td><td>Science</td><td>78</td></tr>
                      <tr><td>Daniel</td><td>English</td><td>88</td></tr>
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
                    <li><b>INNER JOIN</b> only returns rows where a match is found.</li>
                    <li>StudentID = 5 from <b>Results</b> table is not shown because it has no matching student in <b>Students</b>.</li>
                    <li>It’s the most commonly used join type in SQL.</li>
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

export default SqlInnerJoin;
