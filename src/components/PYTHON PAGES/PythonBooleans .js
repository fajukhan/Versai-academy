import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonBooleans = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

             {/* Sidebar (Left - col-2) */}
           <SidebarPython />
            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Python Booleans</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonstrings">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonoperators">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Booleans represent one of two values: <code>True</code> or <code>False</code>.  
                They are often used in conditional statements and logical operations.
              </p>

              {/* Example 1: Boolean Values */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Boolean Values</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`print(True)
print(False)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`True
False`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Conditions with Booleans */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Conditions with Booleans</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10
y = 5

print(x > y)   # True
print(x == y)  # False
print(x < y)   # False`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`True
False
False`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: bool() Function */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: The bool() Function</div>
                <div className="card-body">
                  <p>The <code>bool()</code> function evaluates any value and returns <code>True</code> or <code>False</code>.</p>
                  <pre className="bg-light p-3 rounded">
{`print(bool("Hello"))   # True
print(bool(15))         # True
print(bool(""))         # False
print(bool(0))          # False
print(bool([]))         # False`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`True
True
False
False
False`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Booleans have only two values: <code>True</code> and <code>False</code>.</li>
                    <li>They are the result of comparisons and logical operations.</li>
                    <li>The <code>bool()</code> function converts values into booleans.</li>
                    <li>Empty sequences, <code>0</code>, and <code>None</code> evaluate to <code>False</code>.</li>
                  </ul>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PythonBooleans;
