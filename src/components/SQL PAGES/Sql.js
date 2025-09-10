import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlTutorial = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
             {/* Sidebar (Left - col-2) */}
              <SidebarSql />

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
