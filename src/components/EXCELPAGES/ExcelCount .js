import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCount = () => {
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

              <h1>Excel COUNT Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelconcat">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcounta">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The COUNT function in Excel counts the number of numeric values in a range of cells. It ignores empty cells and text values.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>COUNT(value1, [value2], ...)</code>
              </p>
              <ul>
                <li><code>value1</code>: The first cell or range to count.</li>
                <li><code>value2</code>: (Optional) Additional values or ranges.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Numeric Values in a Range
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNT(A2:A6)

If A2:A6 = {10, "Text", 20, "", 30}
Result = 3 (counts only numeric values: 10, 20, 30)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Multiple Ranges
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNT(A2:A6, B2:B6)

Counts all numeric values across both ranges.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>COUNT only counts numbers. To include text, use COUNTA.</li>
                <li>Empty cells, logical values, and errors are ignored.</li>
                <li>Use COUNT to quickly determine how many numeric entries are in a dataset.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelCount;
