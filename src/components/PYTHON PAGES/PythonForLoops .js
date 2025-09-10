import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonForLoops = () => {
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
              <h1>Python For Loops</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonwhileloops">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonfunctions">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A <code>for</code> loop in Python is used to iterate over a sequence such as a list, tuple, dictionary, set, or string.
              </p>

              {/* Example 1: Loop through a list */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Loop through a list</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`apple\nbanana\ncherry`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Loop through a string */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Loop through a string</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`for x in "banana":
    print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`b\na\nn\na\nn\na`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Break in for loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using break</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
    if x == "banana":
        break`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`apple\nbanana`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Continue in for loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Using continue</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`apple\ncherry`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Using range() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Using range()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`for x in range(6):
    print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`0\n1\n2\n3\n4\n5`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Nested loops */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Nested loops</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x, y)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`red apple\nred banana\nred cherry\nbig apple\nbig banana\nbig cherry\ntasty apple\ntasty banana\ntasty cherry`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 7: Else in for loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 7: Else in for loop</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`for x in range(3):
    print(x)
else:
    print("Loop finished")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`0\n1\n2\nLoop finished`}</pre>
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
                    <li><code>for</code> loops are used to iterate over sequences (list, tuple, string, etc.).</li>
                    <li><code>break</code> stops the loop early.</li>
                    <li><code>continue</code> skips the current iteration.</li>
                    <li><code>range()</code> generates a sequence of numbers.</li>
                    <li>Nested loops allow iteration inside iteration.</li>
                    <li><code>else</code> runs after the loop finishes normally.</li>
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

export default PythonForLoops;
