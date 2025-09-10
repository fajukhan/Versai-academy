import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";

const SqlOperators = () => {
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
              <h1>SQL Operators</h1>
             
              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqlcomments">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlcreatedatabase">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

               <p className="lead py-5">
                <b>SQL Operators</b> are used to perform operations on data in SQL queries.  
                They are mainly divided into <b>Arithmetic, Comparison, Logical,</b> and <b>Bitwise</b> operators.
              </p>


              {/* Operators List */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Types of SQL Operators</div>
                <div className="card-body">
                  <ul>
                    <li><b>Arithmetic Operators:</b> +, -, *, /, %</li>
                    <li><b>Comparison Operators:</b> =, &lt;&gt;, &gt;, &lt;, &gt;=, &lt;=</li>
                    <li><b>Logical Operators:</b> AND, OR, NOT</li>
                    <li><b>Bitwise Operators:</b> &, |, ^</li>
                  </ul>
                </div>
              </div>

              {/* Students Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Students Table</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>85</td><td>18</td></tr>
                      <tr><td>2</td><td>Emma</td><td>92</td><td>20</td></tr>
                      <tr><td>3</td><td>Liam</td><td>70</td><td>19</td></tr>
                      <tr><td>4</td><td>Olivia</td><td>60</td><td>22</td></tr>
                      <tr><td>5</td><td>Noah</td><td>45</td><td>21</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 1: Arithmetic Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Arithmetic Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT Name, Marks, Marks + 5 AS BonusMarks
FROM Students;`}
                  </pre>
                  <p><b>Result:</b> Adds 5 bonus marks to each student.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>BonusMarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>85</td><td>90</td></tr>
                      <tr><td>Emma</td><td>92</td><td>97</td></tr>
                      <tr><td>Liam</td><td>70</td><td>75</td></tr>
                      <tr><td>Olivia</td><td>60</td><td>65</td></tr>
                      <tr><td>Noah</td><td>45</td><td>50</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 2: Comparison Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Comparison Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Students
WHERE Marks > 70;`}
                  </pre>
                  <p><b>Result:</b> Students with Marks greater than 70 are shown.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>85</td><td>18</td></tr>
                      <tr><td>2</td><td>Emma</td><td>92</td><td>20</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 3: Logical Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Logical Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Students
WHERE Marks > 60 AND Age < 21;`}
                  </pre>
                  <p><b>Result:</b> Students who scored more than 60 and are younger than 21.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>85</td><td>18</td></tr>
                      <tr><td>2</td><td>Emma</td><td>92</td><td>20</td></tr>
                      <tr><td>3</td><td>Liam</td><td>70</td><td>19</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 4: NOT Operator */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: NOT Operator</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT * FROM Students
WHERE NOT Marks < 60;`}
                  </pre>
                  <p><b>Result:</b> Students with Marks greater or equal to 60.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>John</td><td>85</td><td>18</td></tr>
                      <tr><td>2</td><td>Emma</td><td>92</td><td>20</td></tr>
                      <tr><td>3</td><td>Liam</td><td>70</td><td>19</td></tr>
                      <tr><td>4</td><td>Olivia</td><td>60</td><td>22</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example 5: Bitwise Operator */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Bitwise AND (&)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`SELECT 5 & 3 AS BitwiseAndResult;`}
                  </pre>
                  <p><b>Result:</b> 5 in binary is <code>101</code>, 3 is <code>011</code>,  
                  AND operation gives <code>001</code> which is <b>1</b>.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>BitwiseAndResult</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td></tr>
                    </tbody>
                  </table>
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

export default SqlOperators;
