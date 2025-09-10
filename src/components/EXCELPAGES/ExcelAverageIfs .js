import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelAverageIfs = () => {
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

              <h1>Excel AVERAGEIFS Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelaverageif">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelconcat">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The AVERAGEIFS function in Excel calculates the average of all cells that meet multiple criteria. It is useful when you want to apply more than one condition at the same time.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)</code>
              </p>
              <ul>
                <li><code>average_range</code>: The cells to average.</li>
                <li><code>criteria_range1</code>: The first range to evaluate.</li>
                <li><code>criteria1</code>: The condition for the first range.</li>
                <li><code>criteria_range2, criteria2</code>: (Optional) Additional ranges and conditions.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Average with Multiple Conditions
              </h3>
              <pre className="bg-light p-3 rounded">
{`=AVERAGEIFS(C2:C6, A2:A6, ">=50", B2:B6, "Completed")

If A2:A6 = {40, 60, 70, 55, 80} 
and B2:B6 = {"Completed", "Completed", "Pending", "Completed", "Completed"}
and C2:C6 = {10, 20, 30, 40, 50}

The formula averages C2:C6 only where A>=50 AND B="Completed"
Result = (20 + 40 + 50)/3 = 36.67`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>AVERAGEIFS allows multiple criteria, unlike AVERAGEIF which only allows one.</li>
                <li>Each criteria range must be the same size as the average range.</li>
                <li>Empty cells are ignored in the calculation.</li>
                <li>Use AVERAGEIFS for complex conditional averaging tasks.</li>
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

export default ExcelAverageIfs;
