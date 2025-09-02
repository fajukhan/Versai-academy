import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
const SqlWildcards = () => {
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
              <h1>SQL Wildcards</h1>
          

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqllike">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlinoperator">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                  <p className="lead py-5">
                Wildcards are used with the <code>LIKE</code> operator to search 
                for data that matches a specific pattern. They make it easier 
                to match flexible string conditions.
              </p>

              <h4>Wildcard Symbols in SQL:</h4>
              <ul>
                <li><code>%</code> → Represents zero, one, or multiple characters</li>
                <li><code>_</code> → Represents a single character</li>
                <li><code>[abc]</code> → Matches any single character inside the brackets</li>
                <li><code>[a-z]</code> → Matches any single character within the given range</li>
                <li><code>[^abc]</code> or <code>[!abc]</code> → Matches any character NOT in the set</li>
              </ul>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Products</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Category</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Apple Juice</td><td>Beverages</td><td>10</td></tr>
                      <tr><td>2</td><td>Banana Shake</td><td>Beverages</td><td>12</td></tr>
                      <tr><td>3</td><td>Choco Bar</td><td>Snacks</td><td>8</td></tr>
                      <tr><td>4</td><td>Avocado Salad</td><td>Salads</td><td>15</td></tr>
                      <tr><td>5</td><td>Blueberry Muffin</td><td>Bakery</td><td>7</td></tr>
                      <tr><td>6</td><td>Carrot Cake</td><td>Bakery</td><td>9</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Products</b> table stores product details including their name, category, and price.
                  </p>
                </div>
              </div>

              {/* Example 1: % Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Using % Wildcard</div>
                <div className="card-body">
                  <p>Find all products starting with 'A':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE 'A%';`}
                  </pre>
                  <p><b>Result:</b> Apple Juice, Avocado Salad</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: _ Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using _ Wildcard</div>
                <div className="card-body">
                  <p>Find all products where the second letter is 'a':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '_a%';`}
                  </pre>
                  <p><b>Result:</b> Banana Shake, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: [ ] Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using [ ] Wildcard</div>
                <div className="card-body">
                  <p>Find all products starting with A, B, or C:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '[ABC]%';`}
                  </pre>
                  <p><b>Result:</b> Apple Juice, Banana Shake, Choco Bar, Avocado Salad, Blueberry Muffin, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: [a-z] Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Using [a-z] Range</div>
                <div className="card-body">
                  <p>Find all products starting with a letter between A and C:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '[A-C]%';`}
                  </pre>
                  <p><b>Result:</b> Apple Juice, Banana Shake, Choco Bar, Avocado Salad, Blueberry Muffin, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5: [^ ] or [! ] Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Excluding Characters</div>
                <div className="card-body">
                  <p>Find all products NOT starting with A:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '[^A]%';`}
                  </pre>
                  <p><b>Result:</b> Banana Shake, Choco Bar, Blueberry Muffin, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>%</code> → Zero or more characters</li>
                    <li><code>_</code> → Exactly one character</li>
                    <li><code>[abc]</code> → Any one character from a set</li>
                    <li><code>[a-z]</code> → Any one character from a range</li>
                    <li><code>[^abc]</code> → Any character not in the set</li>
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

export default SqlWildcards;
