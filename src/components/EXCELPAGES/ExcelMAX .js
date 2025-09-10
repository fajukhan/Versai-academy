import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelMAX = () => {
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

              <h1>Excel MAX Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excellower">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelmedian">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The MAX function in Excel returns the largest numeric value from a set of values or range of cells.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>MAX(number1, [number2], ...)</code>
              </p>
              <ul>
                <li><code>number1, number2, ...</code>: These are the numbers, cell references, or ranges from which you want to find the largest value.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Find the Largest Value
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MAX(10, 25, 5, 40)

Result: 40`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Find the Largest in a Range
              </h3>
              <pre className="bg-light p-3 rounded">
{`=MAX(A1:A5)

Where A1=12, A2=35, A3=20, A4=50, A5=15

Result: 50`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Non-numeric values in the range are ignored.</li>
                <li>If all values are non-numeric, MAX returns 0 or an error depending on the context.</li>
                <li>MAX is useful for finding the highest score, price, or value in data analysis.</li>
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

export default ExcelMAX;
