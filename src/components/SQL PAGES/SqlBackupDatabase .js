import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlBackupDatabase = () => {
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
              <h1>SQL BACKUP DATABASE</h1>
             

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqldropdatabase">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlcreatetable">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                The <b>BACKUP DATABASE</b> statement is used in SQL Server to create a full or partial backup of your database. 
                Backups are important to prevent data loss and to restore data when needed.
              </p>

              {/* Syntax */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Syntax</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`BACKUP DATABASE databasename
TO DISK = 'filepath';`}
                  </pre>
                  <p>
                    <b>Note:</b> This command is specific to <b>SQL Server</b>. 
                    Other RDBMS (MySQL, Oracle, PostgreSQL) use different backup methods.
                  </p>
                </div>
              </div>

              {/* Example 1: Full Backup */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Full Database Backup</div>
                <div className="card-body">
                  <p>Create a full backup of the database <b>CompanyDB</b> to a file:</p>
                  <pre className="bg-light p-3 rounded">
{`BACKUP DATABASE CompanyDB
TO DISK = 'C:\\backups\\CompanyDB.bak';`}
                  </pre>
                  <p><b>Result:</b> A full backup of <code>CompanyDB</code> will be saved to the specified file.</p>
                </div>
              </div>

              {/* Example Table (Before Backup) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table (Before Backup)</div>
                <div className="card-body">
                  <p>Suppose the <b>CompanyDB</b> database contains a table <b>Employees</b>:</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John Doe</td><td>HR</td><td>50000</td></tr>
                      <tr><td>2</td><td>Jane Smith</td><td>IT</td><td>60000</td></tr>
                      <tr><td>3</td><td>Mark Wilson</td><td>Finance</td><td>55000</td></tr>
                      <tr><td>4</td><td>Emily Davis</td><td>Marketing</td><td>45000</td></tr>
                    </tbody>
                  </table>
                  <p>When the backup command runs, this table’s data will also be included in the backup file.</p>
                </div>
              </div>

              {/* Example 2: Differential Backup */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Differential Backup</div>
                <div className="card-body">
                  <p>Create a differential backup of <b>CompanyDB</b>:</p>
                  <pre className="bg-light p-3 rounded">
{`BACKUP DATABASE CompanyDB
TO DISK = 'C:\\backups\\CompanyDB_diff.bak'
WITH DIFFERENTIAL;`}
                  </pre>
                  <p><b>Result:</b> Only the changes made since the last full backup will be saved.</p>
                </div>
              </div>

              {/* Example 3: Backup with Description */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Backup with Description</div>
                <div className="card-body">
                  <p>You can also add a description to your backup file:</p>
                  <pre className="bg-light p-3 rounded">
{`BACKUP DATABASE CompanyDB
TO DISK = 'C:\\backups\\CompanyDB_full.bak'
WITH DESCRIPTION = 'Full backup of CompanyDB on 2025-08-30';`}
                  </pre>
                  <p><b>Result:</b> Backup file will include a description for better identification.</p>
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

export default SqlBackupDatabase;
