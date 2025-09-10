import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatPainter = () => {
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

              <h1>Excel Format Painter</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatting">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatcolors">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The Format Painter in Excel allows you to copy formatting from one cell or range of cells and apply it to another cell or range. It is a quick way to replicate formatting without manually adjusting font, color, borders, or alignment.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Use Format Painter
              </h3>
              <ul>
                <li>Select the cell with the formatting you want to copy.</li>
                <li>Click the <strong>Format Painter</strong> button on the Home tab.</li>
                <li>Select the cell or range where you want to apply the formatting.</li>
                <li>Excel will copy all formatting from the source to the target cells.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Copy Formatting
              </h3>
              <p>Copy font style, color, and cell background from one cell to another.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Sales Report (Bold, Font Size 14, Blue Background)
B1: January
- Use Format Painter on A1
- Apply to B1
Result: B1 now has Bold, Font Size 14, and Blue Background`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Double-click the Format Painter button to apply the formatting to multiple locations.</li>
                <li>Format Painter copies all formatting, including fonts, colors, borders, and alignment.</li>
                <li>It does not copy the actual data or formulas.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatPainter;
