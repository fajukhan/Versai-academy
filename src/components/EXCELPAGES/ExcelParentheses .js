import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelParentheses = () => {
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

              <h1>Excel Parentheses</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelarithmeticoperators">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelfuctions">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Parentheses in Excel are used to control the order of calculations in formulas. Excel follows the standard mathematical order of operations (PEMDAS): Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Why Use Parentheses?
              </h3>
              <p>
                Parentheses allow you to prioritize certain calculations within a formula. Without them, Excel performs calculations based on the default order of operations.
              </p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Without Parentheses
              </h3>
              <p>Excel follows the default order of operations.</p>
              <pre className="bg-light p-3 rounded">
{`Formula: =5 + 2 * 3
Calculation: 2 * 3 = 6
Then: 5 + 6 = 11
Result: 11`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – With Parentheses
              </h3>
              <p>Parentheses change the order of calculation.</p>
              <pre className="bg-light p-3 rounded">
{`Formula: =(5 + 2) * 3
Calculation: 5 + 2 = 7
Then: 7 * 3 = 21
Result: 21`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use parentheses to control and clarify complex formulas.</li>
                <li>Excel automatically follows standard order of operations, so parentheses are important for overriding defaults.</li>
                <li>You can nest parentheses for multiple levels of calculations.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelParentheses;
