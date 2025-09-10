import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelIF = () => {
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

              <h1>Excel IF Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcountifs">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelifs">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The IF function in Excel checks a condition and returns one value if the condition is TRUE, and another value if the condition is FALSE.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>IF(logical_test, value_if_true, value_if_false)</code>
              </p>
              <ul>
                <li><code>logical_test</code>: The condition you want to test.</li>
                <li><code>value_if_true</code>: Value to return if the condition is TRUE.</li>
                <li><code>value_if_false</code>: Value to return if the condition is FALSE.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Simple IF
              </h3>
              <pre className="bg-light p-3 rounded">
{`=IF(A2>50, "Pass", "Fail")

If A2 = 60 → Result: "Pass"
If A2 = 40 → Result: "Fail"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Nested IF
              </h3>
              <pre className="bg-light p-3 rounded">
{`=IF(A2>=90, "A", IF(A2>=75, "B", "C"))

If A2 = 95 → Result: "A"
If A2 = 80 → Result: "B"
If A2 = 60 → Result: "C"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>The IF function allows logical comparisons between values.</li>
                <li>Nested IFs can evaluate multiple conditions.</li>
                <li>Combine with other functions for complex calculations.</li>
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

export default ExcelIF;
