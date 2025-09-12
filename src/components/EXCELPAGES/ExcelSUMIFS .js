import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelSUMIFS = () => {
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

              <h1>Excel SUMIFS Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelsumif">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceltrim">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The SUMIFS function in Excel sums the values in a range that meet multiple criteria across different ranges.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)</code>
              </p>
              <ul>
                <li><strong>sum_range</strong>: The cells to sum.</li>
                <li><strong>criteria_range1</strong>: The first range to apply criteria to.</li>
                <li><strong>criteria1</strong>: The condition to apply to the first range.</li>
                <li>Additional criteria ranges and conditions are optional.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sum Sales by Region and Product
              </h3>
              <pre className="bg-light p-3 rounded">
{`=SUMIFS(C2:C10, B2:B10, "East", D2:D10, "Apples")

Where:
C2:C10 = Sales amounts
B2:B10 = Regions
D2:D10 = Product types

This sums sales in the "East" region for "Apples".`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sum Values Between Two Dates
              </h3>
              <pre className="bg-light p-3 rounded">
{`=SUMIFS(E2:E20, A2:A20, ">=01/01/2025", A2:A20, "<=12/31/2025")

Where:
E2:E20 = Amounts
A2:A20 = Dates

This sums all amounts within the year 2025.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>SUMIFS allows you to apply multiple conditions at once.</li>
                <li>Text criteria should be in quotes, e.g. "Apples".</li>
                <li>Use comparison operators like "", "=", etc. within quotes.</li>
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

export default ExcelSUMIFS;
