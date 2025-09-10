import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelSyntax = () => {
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
              <h1>Excel Syntax</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceloverview">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelranges">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Excel formulas and functions follow a specific syntax. Understanding this structure helps you use Excel effectively for calculations and data analysis.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Formula Syntax
              </h3>
              <p>All Excel formulas begin with the equals sign <code>=</code>.</p>
              <pre className="bg-light p-3 rounded">
{`=SUM(A1:A10)`}
              </pre>
              <p>This formula sums the values from cells A1 to A10.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Function Syntax
              </h3>
              <p>The structure of an Excel function is:</p>
              <pre className="bg-light p-3 rounded">
{`=FUNCTION_NAME(argument1, argument2, ...)`}
              </pre>
              <p>For example, the <code>AVERAGE</code> function calculates the average of values:</p>
              <pre className="bg-light p-3 rounded">
{`=AVERAGE(B1:B5)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Cell References
              </h3>
              <p>Cell references can be relative, absolute, or mixed:</p>
              <ul>
                <li><code>A1</code> – Relative reference</li>
                <li><code>$A$1</code> – Absolute reference</li>
                <li><code>A$1</code> or <code>$A1</code> – Mixed reference</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example – Using IF Function
              </h3>
              <pre className="bg-light p-3 rounded">
{`=IF(A1>100, "High", "Low")`}
              </pre>
              <p>This checks if the value in A1 is greater than 100 and returns “High” if true or “Low” if false.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Excel formulas start with <code>=</code>.</li>
                <li>Functions follow the structure of name and arguments.</li>
                <li>Cell references can be relative, absolute, or mixed.</li>
                <li>Logical functions like <code>IF</code> allow decision-making in formulas.</li>
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

export default ExcelSyntax;
