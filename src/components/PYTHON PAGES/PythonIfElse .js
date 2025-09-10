import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonIfElse = () => {
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
              <h1>Python If...Else</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythondictionaries">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonmatch">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python supports conditional statements that help in decision making.  
                The most common ones are <code>if</code>, <code>elif</code>, and <code>else</code>.
              </p>

              {/* Example 1: Simple if */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Simple if Statement</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10
if x > 5:
    print("x is greater than 5")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">x is greater than 5</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: if...else */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: if...else</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">x is not greater than 5</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: if...elif...else */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: if...elif...else</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 7
if x > 10:
    print("x is greater than 10")
elif x == 7:
    print("x is equal to 7")
else:
    print("x is less than or equal to 10")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">x is equal to 7</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Short-hand if */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Short-hand if</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10
if x > 5: print("x is greater than 5")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">x is greater than 5</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Short-hand if...else (Ternary) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Short-hand if...else (Ternary Operator)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 5
print("Yes") if x > 3 else print("No")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Yes</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Nested if */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Nested if</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 15
if x > 10:
    print("x is greater than 10")
    if x > 20:
        print("x is also greater than 20")
    else:
        print("x is not greater than 20")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`x is greater than 10\nx is not greater than 20`}</pre>
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
                    <li>Use <code>if</code> to test a condition.</li>
                    <li>Use <code>elif</code> to test multiple conditions.</li>
                    <li>Use <code>else</code> to run code if no conditions are true.</li>
                    <li>Short-hand forms allow writing simple conditions in one line.</li>
                    <li>Nested <code>if</code> statements allow checking multiple levels of conditions.</li>
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

export default PythonIfElse;
