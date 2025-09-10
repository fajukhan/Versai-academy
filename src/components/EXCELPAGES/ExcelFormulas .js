import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormulas = () => {
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

              <h1>Excel Formulas</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelundoredo">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelrelativereference">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Formulas in Excel allow you to perform calculations, manipulate data, and automate tasks. By using formulas, you can analyze information quickly and efficiently.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                What is a Formula?
              </h3>
              <p>A formula is an expression entered into a cell that performs calculations on the values in other cells.</p>
              <ul>
                <li>Formulas always start with an equals sign <strong>=</strong>.</li>
                <li>You can use arithmetic operations like +, -, *, /.</li>
                <li>Formulas can reference other cells, functions, or constants.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Simple Addition
              </h3>
              <p>Use a formula to add values from two cells.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 10
A2: 20
Formula in A3: =A1 + A2
Result in A3: 30`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Using Functions
              </h3>
              <p>Use built-in functions to perform calculations.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 10
A2: 20
A3: 30
Formula in A4: =SUM(A1:A3)
Result in A4: 60`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Using Cell References
              </h3>
              <p>Reference other cells to perform calculations dynamically.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 100
B1: 0.1
Formula in C1: =A1 * B1
Result in C1: 10`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Always start formulas with an equals sign <strong>=</strong>.</li>
                <li>Use parentheses <strong>()</strong> to control the order of operations.</li>
                <li>Functions like SUM, AVERAGE, etc., simplify calculations.</li>
                <li>Cell references allow formulas to update automatically when data changes.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormulas;
