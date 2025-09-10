import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCountA = () => {
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

              <h1>Excel COUNTA Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcount">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcountblank">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The COUNTA function in Excel counts all non-empty cells in a range, including numbers, text, logical values, and errors.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>COUNTA(value1, [value2], ...)</code>
              </p>
              <ul>
                <li><code>value1</code>: The first cell or range to count.</li>
                <li><code>value2</code>: (Optional) Additional values or ranges.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count All Non-Empty Cells
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTA(A2:A6)

If A2:A6 = {10, "Text", "", TRUE, 30}
Result = 4 (counts 10, "Text", TRUE, 30)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Multiple Ranges
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTA(A2:A6, B2:B6)

Counts all non-empty cells across both ranges.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>COUNTA counts numbers, text, logical values (TRUE/FALSE), and errors.</li>
                <li>Empty cells are ignored.</li>
                <li>Use COUNTA when you want to count all cells that contain any data.</li>
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

export default ExcelCountA;
