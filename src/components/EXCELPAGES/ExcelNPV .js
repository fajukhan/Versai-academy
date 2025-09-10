import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelNPV = () => {
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

              <h1>Excel NPV Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelmode">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelor">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The NPV (Net Present Value) function in Excel calculates the present value of an investment based on a series of future cash flows and a discount rate.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>NPV(rate, value1, [value2], ...)</code>
              </p>
              <ul>
                <li><code>rate</code>: The discount rate for one period.</li>
                <li><code>value1, value2, ...</code>: These are the cash flows occurring at regular intervals, starting from the first period.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Calculate NPV
              </h3>
              <pre className="bg-light p-3 rounded">
{`=NPV(0.10, -5000, 1500, 2000, 2500, 3000)

Explanation:
Rate = 10% (0.10)
Initial Investment = -5000 (negative because it's an outflow)
Cash Flows = 1500, 2000, 2500, 3000`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>The initial investment is usually entered as a negative value because it’s a cash outflow.</li>
                <li>The function assumes that cash flows occur at the end of each period.</li>
                <li>NPV is commonly used in financial analysis to determine the profitability of a project.</li>
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

export default ExcelNPV;
