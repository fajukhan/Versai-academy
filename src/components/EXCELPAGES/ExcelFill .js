import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFill = () => {
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
              <h1>Excel Fill</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelranges">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcell">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The Fill feature in Excel helps you quickly copy data, continue sequences, and apply formulas across multiple cells without having to enter them manually.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Using Fill Handle
              </h3>
              <p>You can drag the small square at the corner of a selected cell to copy data or fill a series:</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Select the cell with data.
Step 2: Drag the fill handle across the adjacent cells.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Fill Series
              </h3>
              <p>Excel can automatically fill a series such as numbers, dates, or months:</p>
              <pre className="bg-light p-3 rounded">
{`Example:
A1 -> 1
A2 -> 2
A3 -> 3
...`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Fill with Formulas
              </h3>
              <p>You can fill a formula across rows or columns:</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Enter a formula in a cell.
Step 2: Drag the fill handle to adjacent cells to apply the formula.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Fill Without Formatting
              </h3>
              <p>You can choose to fill values without copying formatting by using the fill options after dragging:</p>
              <pre className="bg-light p-3 rounded">
{`Right-click drag -> Fill without formatting`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>The Fill feature helps copy data or continue sequences quickly.</li>
                <li>You can use Fill Handle to drag and fill adjacent cells.</li>
                <li>Formulas can be applied across multiple cells using fill.</li>
                <li>Excel provides options to fill without formatting.</li>
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

export default ExcelFill;
