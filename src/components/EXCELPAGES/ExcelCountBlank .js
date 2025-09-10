import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCountBlank = () => {
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

              <h1>Excel COUNTBLANK Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcounta">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcountif">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The COUNTBLANK function in Excel counts the number of empty (blank) cells in a range. It is useful for finding missing data in a dataset.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>COUNTBLANK(range)</code>
              </p>
              <ul>
                <li><code>range</code>: The range of cells you want to count blanks in.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Blank Cells in a Range
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTBLANK(A2:A6)

If A2:A6 = {10, "", "Text", "", 30}
Result = 2 (two blank cells)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Blanks Across Multiple Ranges
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTBLANK(A2:A6) + COUNTBLANK(B2:B6)

Counts all blank cells across both ranges.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>COUNTBLANK counts only empty cells.</li>
                <li>Cells with formulas that return empty text ("") are counted as blank.</li>
                <li>Use COUNTBLANK to identify missing or incomplete data in your worksheets.</li>
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

export default ExcelCountBlank;
