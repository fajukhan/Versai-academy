import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelMIN = () => {
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

              <h1>Excel MIN Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelmedian">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelmode">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The MIN function in Excel returns the smallest numeric value from a set of numbers or range of cells.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>MIN(number1, [number2], ...)</code>
              </p>
              <ul>
                <li><code>number1, number2, ...</code>: These are the numbers, cell references, or ranges from which you want to find the smallest value.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Find the Smallest Value
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MIN(10, 25, 5, 40)

Result: 5`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Find the Smallest in a Range
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MIN(A1:A5)

Where A1=12, A2=35, A3=20, A4=50, A5=15

Result: 12`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Non-numeric values in the range are ignored.</li>
                <li>If all values are non-numeric, MIN returns 0 or an error depending on the context.</li>
                <li>MIN is useful for finding the smallest number in data analysis or calculations.</li>
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

export default ExcelMIN;
