import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlHosting = () => {
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
