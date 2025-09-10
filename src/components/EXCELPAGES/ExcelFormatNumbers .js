import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatNumbers = () => {
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

              <h1>Excel Format Numbers</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatborders">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatgrids">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Excel provides various number formatting options to display numbers, dates, times, and text in ways that make data easier to understand and visually appealing.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Common Number Formats
              </h3>
              <ul>
                <li><strong>General:</strong> Default format for all cells.</li>
                <li><strong>Number:</strong> Displays numbers with decimal places.</li>
                <li><strong>Currency:</strong> Adds currency symbols like $, €, etc.</li>
                <li><strong>Date:</strong> Formats numbers as dates.</li>
                <li><strong>Time:</strong> Displays numbers as time values.</li>
                <li><strong>Percentage:</strong> Multiplies by 100 and adds % sign.</li>
                <li><strong>Fraction:</strong> Displays numbers as fractions.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Format as Currency
              </h3>
              <p>Format the number as currency with two decimal places.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 1500
- Select A1
- Click Format Cells
- Choose Currency
- Set Decimal Places to 2
Result: $1,500.00`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Format as Percentage
              </h3>
              <p>Convert the number into percentage format.</p>
              <pre className="bg-light p-3 rounded">
{`A2: 0.75
- Select A2
- Click Format Cells
- Choose Percentage
- Set Decimal Places to 1
Result: 75.0%`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use number formatting to present data clearly and professionally.</li>
                <li>Applying the correct format helps in accurate interpretation of data.</li>
                <li>Be mindful of decimal places, especially in financial calculations.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatNumbers;
