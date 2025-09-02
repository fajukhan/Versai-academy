import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlJoins = () => {
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
              <h1>SQL Joins</h1>
            

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlaliases">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlinnerjoin">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                <p className="lead py-5">
                SQL <b>JOIN</b> clauses are used to combine rows from two or more tables, based on a related column between them.
                Joins help retrieve meaningful data spread across multiple tables.
              </p>

              <h4>Types of SQL Joins:</h4>
              <ul>
                <li><b>INNER JOIN</b> → Returns records that have matching values in both tables.</li>
                <li><b>LEFT JOIN</b> → Returns all records from the left table, and matching records from the right table.</li>
                <li><b>RIGHT JOIN</b> → Returns all records from the right table, and matching records from the left table.</li>
                <li><b>FULL OUTER JOIN</b> → Returns all records when there is a match in either left or right table.</li>
              </ul>

              {/* Example Tables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Tables</div>
                <div className="card-body">
                  <h5>Customers Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John Doe</td><td>USA</td></tr>
                      <tr><td>2</td><td>Jane Smith</td><td>UK</td></tr>
                      <tr><td>3</td><td>Michael Brown</td><td>Canada</td></tr>
                      <tr><td>4</td><td>Emily Davis</td><td>USA</td></tr>
                    </tbody>
                  </table>

                  <h5>Orders Table</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>OrderID</th>
                        <th>CustomerID</th>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>101</td><td>1</td><td>Laptop</td></tr>
                      <tr><td>102</td><td>2</td><td>Phone</td></tr>
                      <tr><td>103</td><td>1</td><td>Tablet</td></tr>
                      <tr><td>104</td><td>3</td><td>Camera</td></tr>
                      <tr><td>105</td><td>5</td><td>Headphones</td></tr>
                    </tbody>
                  </table>
                  <p>
                    Here, <b>Customers</b> table contains customer info and <b>Orders</b> table contains their orders.
                  </p>
                </div>
              </div>

              {/* Example 1: INNER JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: INNER JOIN</div>
                <div className="card-body">
                  <p>Return customers with their orders:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customers.CustomerName, Orders.Product
FROM Customers
INNER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`}
                  </pre>
                  <p><b>Result:</b> Shows only customers who placed an order.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: LEFT JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: LEFT JOIN</div>
                <div className="card-body">
                  <p>Return all customers and their orders (if any):</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customers.CustomerName, Orders.Product
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`}
                  </pre>
                  <p><b>Result:</b> Shows all customers, including those with no orders.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: RIGHT JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: RIGHT JOIN</div>
                <div className="card-body">
                  <p>Return all orders and the corresponding customer (if any):</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customers.CustomerName, Orders.Product
FROM Customers
RIGHT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`}
                  </pre>
                  <p><b>Result:</b> Shows all orders, even if the customer is not in the Customers table (CustomerID=5).</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: FULL OUTER JOIN */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: FULL OUTER JOIN</div>
                <div className="card-body">
                  <p>Return all customers and all orders, matched where possible:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Customers.CustomerName, Orders.Product
FROM Customers
FULL OUTER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`}
                  </pre>
                  <p><b>Result:</b> Shows all customers and all orders, with NULL where no match exists.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><b>INNER JOIN</b>: Only matching rows.</li>
                    <li><b>LEFT JOIN</b>: All from left + matching from right.</li>
                    <li><b>RIGHT JOIN</b>: All from right + matching from left.</li>
                    <li><b>FULL OUTER JOIN</b>: All rows from both sides.</li>
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

export default SqlJoins;
