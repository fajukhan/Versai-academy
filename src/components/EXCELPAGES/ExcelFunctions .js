import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFunctions = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

                                                        {/* Sidebar (Left - col-2) */}
                    <SidebarExcel />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">

              <h1>Excel Functions</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelparentheses">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatting">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Functions in Excel are predefined formulas that simplify calculations, data analysis, and manipulation. They help you perform complex calculations easily.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Commonly Used Excel Functions
              </h3>
              <ul>
                <li><strong>SUM(range)</strong> – Adds up all the numbers in the range.</li>
                <li><strong>AVERAGE(range)</strong> – Calculates the average of numbers in the range.</li>
                <li><strong>MAX(range)</strong> – Returns the maximum value in the range.</li>
                <li><strong>MIN(range)</strong> – Returns the minimum value in the range.</li>
                <li><strong>IF(condition, value_if_true, value_if_false)</strong> – Performs a conditional test.</li>
                <li><strong>VLOOKUP(lookup_value, table_array, col_index, range_lookup)</strong> – Searches for a value in a table.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – SUM Function
              </h3>
              <p>Add values in a column using SUM function.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 10
A2: 20
A3: 30
Formula in A4: =SUM(A1:A3)
Result in A4: 60`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – IF Function
              </h3>
              <p>Perform a conditional test using IF function.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 75
Formula in B1: =IF(A1>=50, "Pass", "Fail")
Result in B1: "Pass"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – VLOOKUP Function
              </h3>
              <p>Lookup a value in a table using VLOOKUP.</p>
              <pre className="bg-light p-3 rounded">
{`Table:
A1: ID   B1: Name
A2: 101  B2: John
A3: 102  B3: Alice

Formula: =VLOOKUP(102, A2:B3, 2, FALSE)
Result: "Alice"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Functions simplify calculations and reduce errors.</li>
                <li>Always check the syntax and arguments of each function.</li>
                <li>Combine functions with operators for advanced formulas.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFunctions;
