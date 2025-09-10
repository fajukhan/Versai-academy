import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelSTDEVP = () => {
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

              <h1>Excel STDEV.P Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelstdevs">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelstdevs">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The STDEV.P function in Excel calculates the standard deviation based on the entire population of numbers provided as arguments.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>STDEV.P(number1, [number2], ...)</code>
              </p>
              <ul>
                <li><strong>number1, number2, ...</strong>: These are the numbers or ranges representing the entire population for which you want to calculate the standard deviation.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Standard Deviation of Population
              </h3>
              <pre className="bg-light p-3 rounded">
{`=STDEV.P(10, 12, 23, 23, 16, 23, 21, 16)
Result: 5.237`

}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>The STDEV.P function is used when you have data representing the entire population, not just a sample.</li>
                <li>It is different from <code>STDEV.S</code>, which is used for sample data.</li>
                <li>Helps in statistical analysis to understand data variability within the population.</li>
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

export default ExcelSTDEVP;
