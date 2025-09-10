import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelAverageIf = () => {
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

              <h1>Excel AVERAGEIF Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelaverage">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelaverageifs">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The AVERAGEIF function in Excel calculates the average of all cells that meet a specified condition. It is used when you want to compute the average based on a single criterion.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>AVERAGEIF(range, criteria, [average_range])</code>
              </p>
              <ul>
                <li><code>range</code>: The range of cells to evaluate with the condition.</li>
                <li><code>criteria</code>: The condition to apply (e.g., "50").</li>
                <li><code>average_range</code>: (Optional) The actual cells to average. If omitted, the <code>range</code> is used.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Average Numbers Greater than 50
              </h3>
              <pre className="bg-light p-3 rounded">
{`=AVERAGEIF(A2:A6, ">50")

If A2=30, A3=60, A4=80, A5=40, A6=90
The result will be (60+80+90)/3 = 76.67`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Average with Specific Text
              </h3>
              <pre className="bg-light p-3 rounded">
{`=AVERAGEIF(B2:B6, "Completed", C2:C6)

This formula averages the values in C2:C6 only if the corresponding cells in B2:B6 contain "Completed".`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>AVERAGEIF works with a single condition; for multiple conditions, use AVERAGEIFS.</li>
                <li>Criteria can be numbers, expressions, text, or even cell references.</li>
                <li>Empty cells are ignored in the calculation.</li>
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

export default ExcelAverageIf;
