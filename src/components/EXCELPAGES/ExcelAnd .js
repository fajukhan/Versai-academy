import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelAnd = () => {
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

              <h1>Excel AND Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelfunctions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelaverage">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The AND function in Excel is a logical function used to test multiple conditions at the same time. It returns TRUE if all conditions are TRUE, and FALSE if any of the conditions are FALSE.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>AND(logical1, [logical2], ...)</code>
              </p>
              <ul>
                <li><code>logical1</code>: The first condition to test.</li>
                <li><code>logical2</code>: (Optional) Additional conditions to test.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Check if Both Conditions are True
              </h3>
              <pre className="bg-light p-3 rounded">
{`=AND(A2>10, B2<20)

If A2 is 15 and B2 is 15, the result will be TRUE.
If A2 is 5 and B2 is 15, the result will be FALSE.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Combine with IF Function
              </h3>
              <pre className="bg-light p-3 rounded">
{`=IF(AND(A2>=50, B2="Completed"), "Pass", "Fail")

This formula returns "Pass" only if A2 is greater than or equal to 50 AND B2 is "Completed". Otherwise, it returns "Fail".`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>The AND function is useful when you need to apply multiple criteria in calculations.</li>
                <li>It is often combined with the IF function to perform more complex logical tests.</li>
                <li>If no logical tests are provided, AND will return TRUE by default.</li>
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

export default ExcelAnd;
