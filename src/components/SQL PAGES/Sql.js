import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlTutorial = () => {
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
              <h1 id="intro">SQL Tutorial</h1>
           

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="/">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlintroduction">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                 <p className="lead py-5">
                SQL (Structured Query Language) is the standard language for
                storing, manipulating and retrieving data in databases.  
                With SQL you can <b>select, insert, update, delete</b> records and
                also create and manage database structures.
              </p>

              {/* Example Cards */}

              {/* Syntax */}
              <div className="card my-4 shadow-sm" id="syntax">
                <div className="card-header">SQL Syntax</div>
                <div className="card-body">
                  <p>Basic SQL syntax looks like this:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT column1, column2
FROM table_name
WHERE condition;`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* SELECT */}
              <div className="card my-4 shadow-sm" id="select">
                <div className="card-header">SQL SELECT</div>
                <div className="card-body">
                  <p>Used to select data from a database.</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers;`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* WHERE */}
              <div className="card my-4 shadow-sm" id="where">
                <div className="card-header">SQL WHERE</div>
                <div className="card-body">
                  <p>Filters records based on a condition.</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India';`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* AND OR NOT */}
              <div className="card my-4 shadow-sm" id="andor">
                <div className="card-header">SQL AND / OR / NOT</div>
                <div className="card-body">
                  <p>Used to combine multiple conditions.</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
WHERE Country = 'India' AND City = 'Delhi';`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* ORDER BY */}
              <div className="card my-4 shadow-sm" id="orderby">
                <div className="card-header">SQL ORDER BY</div>
                <div className="card-body">
                  <p>Sorts the result-set.</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers
ORDER BY CustomerName ASC;`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* INSERT */}
              <div className="card my-4 shadow-sm" id="insert">
                <div className="card-header">SQL INSERT INTO</div>
                <div className="card-body">
                  <p>Adds new records into a table.</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Customers (CustomerName, Country)
VALUES ('Rahul Kumar', 'India');`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* UPDATE */}
              <div className="card my-4 shadow-sm" id="update">
                <div className="card-header">SQL UPDATE</div>
                <div className="card-body">
                  <p>Modifies existing records.</p>
                  <pre className="bg-light p-3 rounded">
{`UPDATE Customers
SET ContactName = 'Amit'
WHERE CustomerID = 1;`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* DELETE */}
              <div className="card my-4 shadow-sm" id="delete">
                <div className="card-header">SQL DELETE</div>
                <div className="card-body">
                  <p>Deletes existing records from a table.</p>
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM Customers
WHERE CustomerName = 'Rahul Kumar';`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* JOINS */}
              <div className="card my-4 shadow-sm" id="joins">
                <div className="card-header">SQL Joins</div>
                <div className="card-body">
                  <p>Used to combine rows from two or more tables.</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* GROUP BY */}
              <div className="card my-4 shadow-sm" id="groupby">
                <div className="card-header">SQL GROUP BY</div>
                <div className="card-body">
                  <p>Groups rows that have the same values.</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* CREATE TABLE */}
              <div className="card my-4 shadow-sm" id="create">
                <div className="card-header">SQL CREATE TABLE</div>
                <div className="card-body">
                  <p>Creates a new table in the database.</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  ID int,
  Name varchar(255),
  Age int
);`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* PRIMARY KEY */}
              <div className="card my-4 shadow-sm" id="primarykey">
                <div className="card-header">SQL PRIMARY KEY</div>
                <div className="card-body">
                  <p>Uniquely identifies each record in a table.</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Students (
  ID int PRIMARY KEY,
  Name varchar(255)
);`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* FOREIGN KEY */}
              <div className="card my-4 shadow-sm" id="foreignkey">
                <div className="card-header">SQL FOREIGN KEY</div>
                <div className="card-body">
                  <p>Links two tables together.</p>
                  <pre className="bg-light p-3 rounded">
{`CREATE TABLE Orders (
  OrderID int PRIMARY KEY,
  StudentID int,
  FOREIGN KEY (StudentID) REFERENCES Students(ID)
);`}
                  </pre>
                  <button className="try-btn mt-3">Try it Yourself »</button>
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

export default SqlTutorial;
