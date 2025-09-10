import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCountIFS = () => {
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

              <h1>Excel COUNTIFS Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcountif">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelif">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The COUNTIFS function in Excel counts the number of cells across one or more ranges that meet multiple criteria. It is useful when you need to evaluate more than one condition at a time.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)</code>
              </p>
              <ul>
                <li><code>criteria_range1</code>: The first range to evaluate.</li>
                <li><code>criteria1</code>: The condition to apply to the first range.</li>
                <li><code>criteria_range2, criteria2</code>: (Optional) Additional ranges and conditions.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Cells Meeting Two Criteria
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTIFS(A2:A6, ">10", B2:B6, "Apple")

If A2:A6 = {12, 5, 18, 20, 8} and B2:B6 = {"Apple","Apple","Banana","Apple","Apple"}
Result = 2 (counts cells where A>10 AND B="Apple")`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Count Cells Meeting Multiple Text Criteria
              </h3>
              <pre className="bg-light p-3 rounded">
{`=COUNTIFS(B2:B6, "Apple", C2:C6, "Red")

Counts cells where B column = "Apple" AND C column = "Red".`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>COUNTIFS can handle multiple criteria ranges and conditions.</li>
                <li>All criteria must be met for a cell to be counted.</li>
                <li>Use wildcards like * and ? for partial text matching.</li>
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

export default ExcelCountIFS;
