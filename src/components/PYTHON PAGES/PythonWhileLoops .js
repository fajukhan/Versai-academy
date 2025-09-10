import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonWhileLoops = () => {
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
              <h1>Python While Loops</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonmatch">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonforloops">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A <code>while</code> loop in Python is used to repeatedly execute a block of code as long as a condition is true.
              </p>

              {/* Example 1: Basic while loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Basic while loop</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`i = 1
while i <= 5:
    print(i)
    i += 1`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`1\n2\n3\n4\n5`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Break in while loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using break in while loop</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`i = 1
while i < 10:
    print(i)
    if i == 5:
        break
    i += 1`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`1\n2\n3\n4\n5`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Continue in while loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using continue in while loop</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`1\n2\n4\n5`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: else with while loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Using else with while loop</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`i = 1
while i <= 3:
    print(i)
    i += 1
else:
    print("Loop ended!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`1\n2\n3\nLoop ended!`}</pre>
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
                    <li>A <code>while</code> loop executes as long as the condition is true.</li>
                    <li><code>break</code> is used to exit the loop early.</li>
                    <li><code>continue</code> is used to skip an iteration.</li>
                    <li><code>else</code> executes after the loop ends normally (without break).</li>
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

export default PythonWhileLoops;
