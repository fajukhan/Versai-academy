import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelIFS = () => {
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

              <h1>Excel IFS Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelif">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelleft">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The IFS function in Excel evaluates multiple conditions and returns a value corresponding to the first TRUE condition. It is a cleaner alternative to nested IF statements.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], ...)</code>
              </p>
              <ul>
                <li><code>logical_test1</code>: The first condition to evaluate.</li>
                <li><code>value_if_true1</code>: Value returned if the first condition is TRUE.</li>
                <li><code>logical_test2, value_if_true2, ...</code>: Additional conditions and values.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Multiple Conditions
              </h3>
              <pre className="bg-light p-3 rounded">
{`=IFS(A2>=90, "A", A2>=75, "B", A2>=50, "C", A2<50, "Fail")

If A2 = 95 → Result: "A"
If A2 = 80 → Result: "B"
If A2 = 60 → Result: "C"
If A2 = 40 → Result: "Fail"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>IFS evaluates conditions in the order provided and returns the value for the first TRUE condition.</li>
                <li>It avoids complex nested IF statements and improves readability.</li>
                <li>If no condition is TRUE, the function will return a #N/A error unless a final TRUE condition is included as a catch-all.</li>
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

export default ExcelIFS;
