import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatBorders = () => {
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

              <h1>Excel Format Borders</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatfonts">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatnumbers">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Excel borders allow you to add lines around cells or ranges to make your data more organized and readable. You can customize border style, color, and thickness.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply Borders
              </h3>
              <ul>
                <li>Select the cell or range you want to add borders to.</li>
                <li>Click the <strong>Borders</strong> button on the Home tab.</li>
                <li>Choose the border style (All Borders, Outside Borders, Thick Box, etc.).</li>
                <li>You can also select <strong>More Borders</strong> to customize line style and color.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Add All Borders
              </h3>
              <p>Add borders around each cell in a range.</p>
              <pre className="bg-light p-3 rounded">
{`Select range A1:C3
- Click Borders
- Choose All Borders
Result: Each cell in A1:C3 has a visible border`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Apply Thick Box Border
              </h3>
              <p>Add a thick border around a range.</p>
              <pre className="bg-light p-3 rounded">
{`Select range A1:C3
- Click Borders
- Choose Thick Box Border
Result: A thick border appears around the selected range`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use borders to separate data clearly and improve readability.</li>
                <li>Different border styles and colors can highlight specific areas of your spreadsheet.</li>
                <li>Excessive borders may make the spreadsheet look cluttered, so use them wisely.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatBorders;
