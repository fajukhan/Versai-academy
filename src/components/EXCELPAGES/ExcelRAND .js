import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelRAND = () => {
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

              <h1>Excel RAND Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelor">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelright">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The RAND function in Excel generates a random decimal number between 0 and 1. It recalculates each time the worksheet changes or is opened.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>RAND()</code>
              </p>
              <ul>
                <li>The RAND function does not require any arguments.</li>
                <li>It generates a new random number whenever the worksheet recalculates.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Generate Random Numbers
              </h3>
              <pre className="bg-light p-3 rounded">
{`=RAND()
Result: 0.548732 (random number between 0 and 1)

Use:
To generate random numbers for simulations, games, or statistical analysis.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Generate Random Number Between a Range
              </h3>
              <pre className="bg-light p-3 rounded">
{`=RAND()*(100-1)+1
This generates a random number between 1 and 100.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>The RAND function is volatile, meaning it recalculates on any worksheet change.</li>
                <li>It’s useful for generating random data, but may not be suitable for critical calculations requiring true randomness.</li>
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

export default ExcelRAND;
