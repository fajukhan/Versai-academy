import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelGetStarted = () => {
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
              <h1>Excel Get Started</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelintroduction">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceloverview">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                This guide will help you get started with Microsoft Excel. Follow these steps to create and manage your first workbook.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example 1: Opening Excel
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Click on the Excel icon from your Start Menu or desktop.
2. A blank workbook will open.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example 2: Entering Data
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Click on a cell where you want to enter data.
2. Type your text or number.
3. Press Enter to move to the next cell.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example 3: Formatting Cells
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Select the cells you want to format.
2. Go to the 'Home' tab.
3. Use options like bold, font size, and cell color.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example 4: Saving a Workbook
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Click 'File'.
2. Choose 'Save As'.
3. Enter a file name.
4. Click 'Save'.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Key Tips
              </h3>
              <ul>
                <li>Use Excel for calculations and data organization.</li>
                <li>Start by entering simple data into cells.</li>
                <li>Save your work frequently to prevent data loss.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Excel is easy to start using by entering data into cells.</li>
                <li>You can format data to make it clearer.</li>
                <li>Saving your file ensures your data is not lost.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelGetStarted;
