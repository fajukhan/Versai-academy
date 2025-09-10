import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelOverview = () => {
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
              <h1>Excel Overview</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelgetstarted">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelsyntax">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Excel is a powerful spreadsheet application that allows you to organize, format, and calculate data with formulas. In this overview, we will cover its key features and uses.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Key Features of Excel
              </h3>
              <ul>
                <li>Grid of cells for data entry.</li>
                <li>Support for formulas and functions.</li>
                <li>Charting tools to visualize data.</li>
                <li>Data sorting and filtering options.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example 1: Entering Data
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Select a cell (like A1).
2. Type a value or text.
3. Press Enter to move to the next cell.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example 2: Using Formulas
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Select a cell.
2. Type =SUM(A1:A3) to sum the values from A1 to A3.
3. Press Enter to see the result.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example 3: Creating Charts
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Select your data range.
2. Go to the 'Insert' tab.
3. Choose a chart type like Column, Line, or Pie.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Excel helps in managing and analyzing data effectively.</li>
                <li>Formulas make calculations automatic.</li>
                <li>Charts help visualize the information clearly.</li>
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

export default ExcelOverview;
