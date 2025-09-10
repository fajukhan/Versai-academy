import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelOR = () => {
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

              <h1>Excel OR Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelnpv">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelrand">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The OR function in Excel returns TRUE if any of the provided logical conditions are TRUE. If all are FALSE, it returns FALSE.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>OR(logical1, [logical2], ...)</code>
              </p>
              <ul>
                <li><code>logical1, logical2, ...</code>: Conditions you want to test that can be TRUE or FALSE.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – OR Function
              </h3>
              <pre className="bg-light p-3 rounded">
{`=OR(A1>10, B1<5)

If A1 = 15 and B1 = 3, the result is TRUE because both conditions are TRUE.

If A1 = 8 and B1 = 3, the result is TRUE because one condition is TRUE.

If A1 = 8 and B1 = 6, the result is FALSE because both conditions are FALSE.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>The OR function is helpful in decision-making processes in formulas.</li>
                <li>You can combine OR with IF to create more advanced logical tests.</li>
                <li>It can test multiple conditions simultaneously.</li>
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

export default ExcelOR;
