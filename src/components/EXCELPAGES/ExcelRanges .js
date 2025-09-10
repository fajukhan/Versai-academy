import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelRanges = () => {
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
              <h1>Excel Ranges</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelsyntax">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelfill">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Excel ranges are a group of cells that you can refer to in formulas, functions, and charts. Understanding how to use ranges is essential for performing calculations efficiently.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                What is a Range?
              </h3>
              <p>A range is a collection of two or more cells. For example:</p>
              <pre className="bg-light p-3 rounded">
{`A1:A10`}
              </pre>
              <p>This represents all cells from A1 to A10 in a column.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Range in Rows
              </h3>
              <p>You can also select cells in a row like this:</p>
              <pre className="bg-light p-3 rounded">
{`B2:E2`}
              </pre>
              <p>This selects cells B2, C2, D2, and E2.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Range in Multiple Rows and Columns
              </h3>
              <p>Selecting cells across multiple rows and columns:</p>
              <pre className="bg-light p-3 rounded">
{`A1:C3`}
              </pre>
              <p>This includes cells A1, A2, A3, B1, B2, B3, C1, C2, and C3.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Using Ranges in Formulas
              </h3>
              <p>Example using a range in the SUM function:</p>
              <pre className="bg-light p-3 rounded">
{`=SUM(A1:A5)`}
              </pre>
              <p>This adds up all values from cells A1 through A5.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Named Ranges
              </h3>
              <p>You can name a range for easier reference in formulas:</p>
              <pre className="bg-light p-3 rounded">
{`=SUM(SalesData)`}
              </pre>
              <p>Here, <code>SalesData</code> could refer to a specific range like <code>A1:A10</code>.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Ranges are a group of cells used in formulas and functions.</li>
                <li>You can select cells by rows, columns, or multiple areas.</li>
                <li>Named ranges make formulas easier to understand.</li>
                <li>Ranges are fundamental in Excel calculations.</li>
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

export default ExcelRanges;
