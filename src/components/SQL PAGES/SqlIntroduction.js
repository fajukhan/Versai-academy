import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlIntroduction = () => {
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
              <h1>Introduction to SQL</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sql">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlsyntax">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                SQL (Structured Query Language) is the standard programming
                language used to communicate with databases.  
                It allows you to <b>create, read, update, and delete</b> data in a
                database (often called CRUD operations).
              </p>

              {/* What is SQL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">What is SQL?</div>
                <div className="card-body">
                  <ul>
                    <li>SQL stands for <b>Structured Query Language</b>.</li>
                    <li>SQL lets you access and manipulate databases.</li>
                    <li>SQL is used in relational database systems like MySQL, SQL Server, PostgreSQL, and Oracle.</li>
                    <li>SQL follows international standard rules (ANSI/ISO).</li>
                  </ul>
                </div>
              </div>

              {/* Why SQL */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Why Learn SQL?</div>
                <div className="card-body">
                  <p>SQL is important because:</p>
                  <ul>
                    <li>It can handle large amounts of data easily.</li>
                    <li>It is used in almost every modern application (banking, e-commerce, social media, etc.).</li>
                    <li>It is easy to learn and powerful for data analysis.</li>
                    <li>SQL skills are highly in demand in jobs like Data Analyst, Backend Developer, Database Administrator.</li>
                  </ul>
                </div>
              </div>

              {/* Example 1: Select Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Select Data from a Table</div>
                <div className="card-body">
                  <p>Suppose we have a table named <b>Customers</b>:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Rahul</td><td>India</td></tr>
                      <tr><td>2</td><td>Sophia</td><td>USA</td></tr>
                      <tr><td>3</td><td>Ali</td><td>Pakistan</td></tr>
                    </tbody>
                  </table>
                  <p>SQL to fetch all data:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Customers;`}
                  </pre>
                  <p>Result:</p>
                  <ul>
                    <li>Rahul — India</li>
                    <li>Sophia — USA</li>
                    <li>Ali — Pakistan</li>
                  </ul>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Insert Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Insert New Data</div>
                <div className="card-body">
                  <p>Add a new customer:</p>
                  <pre className="bg-light p-3 rounded">
{`INSERT INTO Customers (Name, Country)
VALUES ('John', 'UK');`}
                  </pre>
                  <p>Now the table will have:</p>
                  <ul>
                    <li>Rahul — India</li>
                    <li>Sophia — USA</li>
                    <li>Ali — Pakistan</li>
                    <li>John — UK</li>
                  </ul>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Update Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Update Existing Data</div>
                <div className="card-body">
                  <p>Update Rahul's country to Canada:</p>
                  <pre className="bg-light p-3 rounded">
{`UPDATE Customers
SET Country = 'Canada'
WHERE Name = 'Rahul';`}
                  </pre>
                  <p>Updated data:</p>
                  <ul>
                    <li>Rahul — Canada</li>
                    <li>Sophia — USA</li>
                    <li>Ali — Pakistan</li>
                    <li>John — UK</li>
                  </ul>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: Delete Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Delete a Record</div>
                <div className="card-body">
                  <p>Remove John from the Customers table:</p>
                  <pre className="bg-light p-3 rounded">
{`DELETE FROM Customers
WHERE Name = 'John';`}
                  </pre>
                  <p>Now John will be deleted.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">SQL Summary</div>
                <div className="card-body">
                  <ul>
                    <li>SQL is used to communicate with databases.</li>
                    <li>It can <b>insert, update, delete, select</b> data.</li>
                    <li>SQL is easy to learn and widely used in the tech industry.</li>
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

export default SqlIntroduction;
