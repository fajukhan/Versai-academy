import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlOr = () => {
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
              <h1>SQL OR Operator</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqland">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlnot">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                The <code>OR</code> operator is used in the <code>WHERE</code> clause 
                to filter records that satisfy <b>at least one condition</b>.
              </p>
              <p>
                If any of the conditions separated by <code>OR</code> is true, the row will be included in the result.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL OR Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;`}
                  </pre>
                  <p>
                    The query will return rows where <b>any one</b> of the conditions is true.
                  </p>
                </div>
              </div>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Customers</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>India</td><td>25</td></tr>
                      <tr><td>2</td><td>Sophia</td><td>USA</td><td>30</td></tr>
                      <tr><td>3</td><td>Ali</td><td>Pakistan</td><td>28</td></tr>
                      <tr><td>4</td><td>Emma</td><td>UK</td><td>22</td></tr>
                      <tr><td>5</td><td>Amit</td><td>India</td><td>35</td></tr>
                      <tr><td>6</td><td>Sara</td><td>USA</td><td>27</td></tr>
                    </tbody>
                  </table>
                  <p>This <b>Customers</b> table will be used for OR operator examples.</p>
                </div>
              </div>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Find customers from India OR USA</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India' OR Country = 'USA';`}
                  </pre>
                  <p><b>Result:</b> Returns Rahul, Sophia, Amit, and Sara.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Find customers Age &lt; 25 OR Age &gt; 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Age < 25 OR Age > 30;`}
                  </pre>
                  <p><b>Result:</b> Returns Emma (22) and Amit (35).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Find customers from UK OR Age = 28</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'UK' OR Age = 28;`}
                  </pre>
                  <p><b>Result:</b> Returns Emma (UK, 22) and Ali (Pakistan, 28).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Find customers from Pakistan OR Age = 30</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'Pakistan' OR Age = 30;`}
                  </pre>
                  <p><b>Result:</b> Returns Ali (Pakistan, 28) and Sophia (USA, 30).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL OR Operator Summary</div>
                <div className="card-body">
                  <ul>
                    <li>The <code>OR</code> operator combines two or more conditions.</li>
                    <li>Only one condition needs to be <b>true</b> for a row to be returned.</li>
                    <li>Often used with <code>AND</code> for complex filtering.</li>
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

export default SqlOr;

