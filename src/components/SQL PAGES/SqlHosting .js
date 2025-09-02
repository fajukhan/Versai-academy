import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SqlHosting = () => {
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
              <h1>SQL Hosting</h1>
             
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlinjection">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqldatatypes">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                <b>SQL Hosting</b> refers to the process of hosting a SQL database (like MySQL, SQL Server, PostgreSQL) 
                on a remote server so that applications and websites can access it online.
              </p>
              <p>
                When you build a website or an application that needs to store user data, you need a 
                hosting service that provides a reliable SQL database.
              </p>


              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Hosting Plans</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Plan</th>
                        <th>Storage</th>
                        <th>Databases</th>
                        <th>Price/Month</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Basic</td><td>5 GB</td><td>1</td><td>$3</td></tr>
                      <tr><td>Standard</td><td>20 GB</td><td>5</td><td>$7</td></tr>
                      <tr><td>Premium</td><td>100 GB</td><td>Unlimited</td><td>$15</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of SQL Hosting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Types of SQL Hosting</div>
                <div className="card-body">
                  <ul>
                    <li><b>Shared Hosting</b> – Multiple websites share the same server and databases.</li>
                    <li><b>VPS Hosting</b> – Virtual Private Server with dedicated resources for SQL databases.</li>
                    <li><b>Dedicated Hosting</b> – Full server dedicated for your website and SQL database.</li>
                    <li><b>Cloud Hosting</b> – Scalable cloud infrastructure for SQL (e.g., AWS RDS, Azure SQL).</li>
                  </ul>
                </div>
              </div>

              {/* SQL Hosting Providers */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Popular SQL Hosting Providers</div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Provider</th>
                        <th>SQL Support</th>
                        <th>Special Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HostGator</td>
                        <td>MySQL</td>
                        <td>Affordable shared hosting with PHPMyAdmin</td>
                      </tr>
                      <tr>
                        <td>Bluehost</td>
                        <td>MySQL</td>
                        <td>Free SSL, Easy WordPress Integration</td>
                      </tr>
                      <tr>
                        <td>AWS RDS</td>
                        <td>MySQL, PostgreSQL, SQL Server</td>
                        <td>Scalable Cloud Databases</td>
                      </tr>
                      <tr>
                        <td>Azure SQL Database</td>
                        <td>SQL Server</td>
                        <td>Fully managed cloud SQL database</td>
                      </tr>
                      <tr>
                        <td>Google Cloud SQL</td>
                        <td>MySQL, PostgreSQL</td>
                        <td>High availability cloud hosting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Advantages & Disadvantages */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Advantages & Disadvantages</div>
                <div className="card-body">
                  <h5>✅ Advantages</h5>
                  <ul>
                    <li>Accessible from anywhere via the internet</li>
                    <li>Backups and security provided by host</li>
                    <li>Scalability – add more storage/CPU as needed</li>
                  </ul>

                  <h5>❌ Disadvantages</h5>
                  <ul>
                    <li>Shared hosting may cause slower performance</li>
                    <li>Costs increase with higher storage and bandwidth</li>
                    <li>Requires good internet connection for access</li>
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

export default SqlHosting;
