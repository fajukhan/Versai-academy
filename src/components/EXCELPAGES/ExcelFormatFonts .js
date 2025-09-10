import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatFonts = () => {
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

              <h1>Excel Format Fonts</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatcolors">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatborders">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Excel allows you to format fonts to change the appearance of your text, including font type, size, style, and color. Proper font formatting makes your spreadsheet more readable and professional.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Font Formatting Options
              </h3>
              <ul>
                <li><strong>Font Type:</strong> Change the text font (e.g., Arial, Calibri).</li>
                <li><strong>Font Size:</strong> Adjust the size of the text.</li>
                <li><strong>Font Style:</strong> Apply Bold, Italic, or Underline.</li>
                <li><strong>Font Color:</strong> Change the color of the text.</li>
                <li><strong>Effects:</strong> Apply strikethrough, subscript, or superscript.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Change Font Type and Size
              </h3>
              <p>Change the font type to Arial and size to 14.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Sales Report
- Select A1
- Change Font to Arial
- Change Font Size to 14
Result: Text appears in Arial, size 14`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Apply Font Style and Color
              </h3>
              <p>Make text bold, italic, and change font color to blue.</p>
              <pre className="bg-light p-3 rounded">
{`A2: Revenue
- Select A2
- Apply Bold and Italic
- Change Font Color to Blue
Result: Text in A2 is Bold, Italic, and Blue`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Font formatting improves readability and visual appeal.</li>
                <li>Consistent font choices make spreadsheets look professional.</li>
                <li>Use color and style sparingly to highlight important information.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatFonts;
