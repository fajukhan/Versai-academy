import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelIntroduction = () => {
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
              <h1>Excel Introduction</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excel">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelgetstarted">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Microsoft Excel is a spreadsheet program used for storing, organizing, and manipulating data.  
                It provides powerful tools to perform calculations, create charts, and analyze data in an efficient way.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Excel Interface
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Ribbon: Contains menus and tools.
2. Worksheet Area: Where you input data.
3. Formula Bar: Displays formulas and functions.
4. Status Bar: Shows information about the current worksheet.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Creating a Workbook
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Open Excel.
2. Click on 'New Workbook'.
3. Start entering data into cells.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Saving a Workbook
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Click on 'File'.
2. Select 'Save As'.
3. Choose a location and enter the file name.
4. Click 'Save'.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Key Features of Excel
              </h3>
              <ul>
                <li>Easy data entry and formatting.</li>
                <li>Advanced functions and formulas.</li>
                <li>Chart creation for data visualization.</li>
                <li>Data filtering and sorting tools.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Excel is widely used for data management and analysis.</li>
                <li>It offers tools to make calculations, create charts, and organize data effectively.</li>
                <li>Learning Excel helps improve productivity in both personal and professional tasks.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelIntroduction;
