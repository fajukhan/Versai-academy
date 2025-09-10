import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonMath = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

               {/* Sidebar (Left - col-2) */}
              <SidebarPython />


            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Python Math</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythondates">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonjson">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python provides built-in mathematical functions and also has the <code>math</code> module that allows you to perform advanced mathematical operations like square root, trigonometry, logarithms, etc.
              </p>

              {/* Example 1: Built-in min, max, abs, pow */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Built-in Math Functions</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = min(5, 10, 25)
y = max(5, 10, 25)
z = abs(-7)
p = pow(2, 3)

print("Min:", x)
print("Max:", y)
print("Absolute:", z)
print("Power:", p)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Min: 5\nMax: 25\nAbsolute: 7\nPower: 8`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Import math module */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using math Module</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math

print(math.sqrt(16))
print(math.ceil(4.2))
print(math.floor(4.7))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`4.0\n5\n4`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Math constants */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Math Constants</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math

print("PI:", math.pi)
print("Euler's number:", math.e)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`PI: 3.141592653589793\nEuler's number: 2.718281828459045`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Trigonometric functions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Trigonometric Functions</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math

print(math.sin(math.radians(90)))
print(math.cos(math.radians(0)))
print(math.tan(math.radians(45)))`}
                  </pre>
                  <p><b>Output:</b> (approx)</p>
                  <pre className="bg-light p-3 rounded">{`1.0\n1.0\n0.9999999999999999`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Logarithms */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Logarithmic Functions</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math

print(math.log(10))        # Natural log
print(math.log10(1000))    # Base-10 log
print(math.log2(16))       # Base-2 log`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`2.302585092994046\n3.0\n4.0`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Factorial and GCD */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Factorial and GCD</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math

print(math.factorial(5))
print(math.gcd(12, 18))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`120\n6`}</pre>
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
                    <li>Python has built-in functions like <code>min()</code>, <code>max()</code>, <code>abs()</code>, and <code>pow()</code>.</li>
                    <li>The <code>math</code> module provides advanced operations like <code>sqrt()</code>, <code>ceil()</code>, <code>floor()</code>.</li>
                    <li>Constants like <code>pi</code> and <code>e</code> are available in the math module.</li>
                    <li>Supports trigonometric and logarithmic functions.</li>
                    <li>Utility functions: <code>factorial()</code>, <code>gcd()</code>, etc.</li>
                  </ul>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PythonMath;
