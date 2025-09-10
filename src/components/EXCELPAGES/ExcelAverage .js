import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelAverage = () => {
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

              <h1>Excel AVERAGE Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelfunctions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelaverageif">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The AVERAGE function in Excel is used to calculate the arithmetic mean of a group of numbers. It adds all the numbers in a range and divides by the count of numbers.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>AVERAGE(number1, [number2], ...)</code>
              </p>
              <ul>
                <li><code>number1</code>: The first number or range to include in the average.</li>
                <li><code>number2</code>: (Optional) Additional numbers or ranges.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Calculate Average of Numbers
              </h3>
              <pre className="bg-light p-3 rounded">
{`=AVERAGE(A2:A5)

If A2=10, A3=20, A4=30, A5=40, the result will be 25.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Average with Conditions
              </h3>
              <pre className="bg-light p-3 rounded">
{`=AVERAGE(B2, B3, 100)

If B2=50 and B3=70, the result will be 73.33.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Empty cells are ignored when calculating the average.</li>
                <li>Cells with text or logical values are ignored unless explicitly included.</li>
                <li>Use AVERAGE for simple averaging tasks, or AVERAGEIF/AVERAGEIFS for conditional averaging.</li>
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

export default ExcelAverage;
