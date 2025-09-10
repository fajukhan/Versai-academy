import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const Excel = () => {
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
              <h1>Excel Tutorial</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="/">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelintroduction">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Excel is a powerful spreadsheet application developed by Microsoft.  
                It allows you to organize, format, and calculate data with formulas using a system of rows and columns.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Entering Data
              </h3>
              <pre className="bg-light p-3 rounded">
{`Step 1: Open Excel and click on a cell (like A1).
Step 2: Type your data (e.g., "Sales").
Step 3: Press Enter to move to the next cell.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Simple Formula
              </h3>
              <pre className="bg-light p-3 rounded">
{`=SUM(A1:A5)`}
              </pre>
              <p>Use this formula to sum the values in cells A1 through A5.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Using Functions
              </h3>
              <pre className="bg-light p-3 rounded">
{`=AVERAGE(B1:B5)`}
              </pre>
              <p>This function calculates the average of the numbers in cells B1 through B5.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Creating a Chart
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Select the data you want to chart.
2. Go to the Insert tab.
3. Choose the chart type like Column, Pie, or Line.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Excel helps you organize and calculate data efficiently.</li>
                <li>Formulas like SUM and AVERAGE are essential for calculations.</li>
                <li>Charts visually represent your data.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Excel;
