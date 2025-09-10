import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelAbsoluteReference = () => {
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

              <h1>Excel Absolute Reference</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelrelativereference">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelarithmeticoperators">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Absolute references in Excel allow you to fix a cell reference in a formula, so that it does not change when copied or filled to other cells.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                What is an Absolute Reference?
              </h3>
              <p>
                An absolute reference uses the dollar sign <strong>$</strong> before the column letter and/or row number. This tells Excel to keep the reference fixed when copying the formula.
              </p>
              <ul>
                <li>Example: <strong>$A$1</strong> fixes both column A and row 1.</li>
                <li><strong>A$1</strong> fixes the row but allows the column to change.</li>
                <li><strong>$A1</strong> fixes the column but allows the row to change.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Fixed Cell in Formula
              </h3>
              <p>Using an absolute reference to multiply values by a fixed number.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 10
B1: 2
Formula in C1: =A1*$B$1
Result in C1: 20

Copy formula to C2 (A2=15):
Formula becomes: =A2*$B$1
Result in C2: 30`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Mixed Absolute Reference
              </h3>
              <p>Fix only row or column as needed:</p>
              <pre className="bg-light p-3 rounded">
{`Formula: =$A1*B$2

- Column A is fixed, row can change
- Row 2 is fixed, column can change when copying`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use absolute references when you need a fixed value in a formula.</li>
                <li>Useful for constants, tax rates, or lookup tables.</li>
                <li>Combine absolute and relative references to create flexible formulas.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelAbsoluteReference;
