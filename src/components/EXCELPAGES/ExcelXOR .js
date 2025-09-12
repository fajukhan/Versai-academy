import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelXOR = () => {
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

              <h1>Excel XOR Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelvlookup">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelconverttime">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The XOR function in Excel performs a logical exclusive OR operation. It returns TRUE if an odd number of the supplied conditions evaluate to TRUE, and FALSE otherwise.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>XOR(logical1, [logical2], ...)</code>
              </p>
              <ul>
                <li><strong>logical1, logical2, ...</strong>: Conditions or logical values to test.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Basic XOR
              </h3>
              <pre className="bg-light p-3 rounded">
{`=XOR(TRUE, FALSE)

Result:
TRUE`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – XOR with Multiple Conditions
              </h3>
              <pre className="bg-light p-3 rounded">
{`=XOR(TRUE, TRUE, FALSE)

Result:
FALSE`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>XOR is useful when you need to check whether an odd number of conditions are TRUE.</li>
                <li>If none or an even number of conditions are TRUE, it returns FALSE.</li>
                <li>It helps simplify complex logical formulas.</li>
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

export default ExcelXOR;
