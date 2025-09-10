import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatting = () => {
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

              <h1>Excel Formatting</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelfunctions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatpainter">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Excel formatting allows you to change the appearance of cells, including fonts, colors, borders, number formats, and more, to make your data more readable and visually appealing.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Formatting Options in Excel
              </h3>
              <ul>
                <li><strong>Font:</strong> Change font type, size, color, and style (bold, italic, underline).</li>
                <li><strong>Cell Color:</strong> Fill cells with background colors.</li>
                <li><strong>Borders:</strong> Add borders around cells or ranges.</li>
                <li><strong>Number Format:</strong> Format numbers as currency, percentage, date, or custom formats.</li>
                <li><strong>Alignment:</strong> Align text horizontally and vertically, wrap text, merge cells.</li>
                <li><strong>Conditional Formatting:</strong> Format cells dynamically based on their values.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Font and Color
              </h3>
              <p>Change the font and background color of a cell.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Sales
- Set font to Bold, size 14
- Set font color to White
- Set cell background to Blue`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Borders
              </h3>
              <p>Add borders to a range of cells.</p>
              <pre className="bg-light p-3 rounded">
{`Select range A1:C5
- Apply All Borders
- Result: Grid lines visible around each cell in the range`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Number Format
              </h3>
              <p>Format numbers as currency.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 1000
- Apply Currency format
- Result: $1,000.00`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Formatting does not change the underlying data.</li>
                <li>Use consistent formatting to make spreadsheets easy to read.</li>
                <li>Conditional formatting is useful for highlighting trends and exceptions automatically.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatting;
