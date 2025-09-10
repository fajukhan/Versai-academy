import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelMODE = () => {
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

              <h1>Excel MODE Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelmin">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelnpv">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The MODE function in Excel returns the most frequently occurring number in a set of data. It helps you identify trends or common values.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>MODE(number1, [number2], ...)</code>
              </p>
              <ul>
                <li><code>number1, number2, ...</code>: These are the numbers, cell references, or ranges from which you want to find the mode.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Find the Mode
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MODE(1, 2, 2, 3, 4)

Result: 2`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Mode from a Range
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MODE(A1:A6)

Where A1=10, A2=20, A3=10, A4=30, A5=10, A6=40

Result: 10`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>If there are multiple modes, Excel’s MODE function returns the first one it finds.</li>
                <li>Non-numeric values are ignored.</li>
                <li>If no mode is found, Excel will return an error.</li>
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

export default ExcelMODE;
