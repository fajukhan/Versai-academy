import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelMEDIAN = () => {
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

              <h1>Excel MEDIAN Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelmax">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelmin">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The MEDIAN function in Excel returns the median (middle) value from a set of numbers. If there is an even number of values, it calculates the average of the two middle numbers.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>MEDIAN(number1, [number2], ...)</code>
              </p>
              <ul>
                <li><code>number1, number2, ...</code>: These are the numbers, cell references, or ranges from which you want to calculate the median.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Find the Median of a Set of Numbers
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MEDIAN(10, 20, 30, 40, 50)

Result: 30`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Median of Even Numbers
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MEDIAN(10, 20, 30, 40)

Result: 25`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Median from a Range
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MEDIAN(A1:A5)

Where A1=15, A2=25, A3=35, A4=45, A5=55

Result: 35`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>MEDIAN ignores empty cells, text, and logical values in the calculation.</li>
                <li>If the range has an even count of numbers, it returns the average of the two middle values.</li>
                <li>This function is useful when analyzing data distribution or determining the central value.</li>
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

export default ExcelMEDIAN;
