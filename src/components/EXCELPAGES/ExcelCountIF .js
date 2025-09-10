import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCountIF = () => {
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

              <h1>Excel COUNTIF Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcountblank">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcountifs">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The COUNTIF function in Excel counts the number of cells within a range that meet a single specified condition or criterion.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>COUNTIF(range, criteria)</code>
              </p>
              <ul>
                <li><code>range</code>: The range of cells to evaluate.</li>
                <li><code>criteria</code>: The condition to count cells, e.g., a number, expression, text, or function.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Cells Equal to a Value
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTIF(A2:A6, 10)

If A2:A6 = {10, 20, 10, 30, 10}
Result = 3 (counts cells equal to 10)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Cells Greater Than a Value
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTIF(A2:A6, ">15")

If A2:A6 = {10, 20, 10, 30, 10}
Result = 2 (counts 20 and 30)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>COUNTIF evaluates only one criterion.</li>
                <li>Use wildcards like * and ? for partial matches in text.</li>
                <li>For multiple conditions, use COUNTIFS.</li>
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

export default ExcelCountIF;
