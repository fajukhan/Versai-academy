import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlInnerJoin = () => {
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
