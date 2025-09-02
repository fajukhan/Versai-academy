import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonNumbers = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

               {/* Sidebar (Left - col-2) */}
            <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
              <h5 className="fw-bold">Python Tutorial</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="PythonTutorial">Python HOME</a>
                </li>
                <li>
                  <a href="pythonintroduction">Python Intro</a>
                </li>
                <li>
                  <a href="pythongettingstarted">Python Get Started</a>
                </li>
                <li>
                  <a href="pythonSyntax">Python Syntax</a>
                </li>
                <li>
                  <a href="pythoncomments">Python Comments</a>
                </li>
                <li>
                  <a href="pythonvariables">Python Variables</a>
                </li>
                <li>
                  <a href="pythondatatypes">Python Data Types</a>
                </li>
                <li>
                  <a href="pythonnumbers">Python Numbers</a>
                </li>
                <li>
                  <a href="pythoncasting">Python Casting</a>
                </li>
                <li>
                  <a href="/">Python Strings</a>
                </li>
                <li>
                  <a href="/">Python Booleans</a>
                </li>
                <li>
                  <a href="/">Python Operators</a>
                </li>
                <li>
                  <a href="/">Python Lists</a>
                </li>
                <li>
                  <a href="/">Python Tuples</a>
                </li>
                <li>
                  <a href="/">Python Sets</a>
                </li>
                <li>
                  <a href="/">Python Dictionaries</a>
                </li>
                <li>
                  <a href="/">Python If...Else</a>
                </li>
                <li>
                  <a href="/">Python Match</a>
                </li>
                <li>
                  <a href="/">Python While Loops</a>
                </li>
                <li>
                  <a href="/">Python For Loops</a>
                </li>
                <li>
                  <a href="/">Python Functions</a>
                </li>
                <li>
                  <a href="/">Python Lambda</a>
                </li>
                <li>
                  <a href="/">Python Arrays</a>
                </li>
                <li>
                  <a href="/">Python OOP</a>
                </li>
                <li>
                  <a href="/">Python Classes/Objects</a>
                </li>
                <li>
                  <a href="/">Python Inheritance</a>
                </li>
                <li>
                  <a href="/">Python Iterators</a>
                </li>
                <li>
                  <a href="/">Python Polymorphism</a>
                </li>
                <li>
                  <a href="/">Python Scope</a>
                </li>
                <li>
                  <a href="/">Python Modules</a>
                </li>
                <li>
                  <a href="/">Python Dates</a>
                </li>
                <li>
                  <a href="/">Python Math</a>
                </li>
                <li>
                  <a href="/">Python JSON</a>
                </li>
                <li>
                  <a href="/">Python RegEx</a>
                </li>
                <li>
                  <a href="/">Python PIP</a>
                </li>
                <li>
                  <a href="/">Python Try...Except</a>
                </li>
                <li>
                  <a href="/">Python String Formatting</a>
                </li>
                <li>
                  <a href="/">Python User Input</a>
                </li>
                <li>
                  <a href="/">Python VirtualEnv</a>
                </li>
              </ul>

              <h5 className="fw-bold">File Handling</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Python File Handling</a>
                </li>
                <li>
                  <a href="/">Python Read Files</a>
                </li>
                <li>
                  <a href="/">Python Write/Create Files</a>
                </li>
                <li>
                  <a href="/">Python Delete Files</a>
                </li>
              </ul>

              <h5 className="fw-bold">Python Modules</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">NumPy Tutorial</a>
                </li>
                <li>
                  <a href="/">Pandas Tutorial</a>
                </li>
                <li>
                  <a href="/">SciPy Tutorial</a>
                </li>
                <li>
                  <a href="/">Django Tutorial</a>
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Python Numbers</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythondatatypes">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythoncasting">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python has three numeric types: <b>int</b>, <b>float</b>, and <b>complex</b>.  
                Numbers are used to store numeric values and can be operated with mathematical operators.
              </p>

              {/* Example 1: Integer, Float, Complex */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Integer, Float, and Complex</div>
                <div className="card-body">
                  <p>Python automatically detects the type of number.</p>
                  <pre className="bg-light p-3 rounded">
{`x = 5        # int
y = 2.5      # float
z = 1 + 3j   # complex

print(type(x))
print(type(y))
print(type(z))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`<class 'int'>
<class 'float'>
<class 'complex'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Type Conversion */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Type Conversion</div>
                <div className="card-body">
                  <p>You can convert numbers from one type to another using <code>int()</code>, <code>float()</code>, and <code>complex()</code>.</p>
                  <pre className="bg-light p-3 rounded">
{`a = 10
b = float(a)   # int to float
c = int(3.99)  # float to int
d = complex(a) # int to complex

print(b)
print(c)
print(d)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`10.0
3
(10+0j)`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Random Numbers */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Random Numbers</div>
                <div className="card-body">
                  <p>Python does not have a built-in random function, but it has a <code>random</code> module.</p>
                  <pre className="bg-light p-3 rounded">
{`import random

print(random.randint(1, 10))  # random integer between 1 and 10
print(random.random())        # random float between 0 and 1`}
                  </pre>
                  <p><b>Output:</b> (values may differ)</p>
                  <pre className="bg-light p-3 rounded">
{`7
0.53211`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Mathematical Operations */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Mathematical Operations</div>
                <div className="card-body">
                  <p>You can perform arithmetic operations on numbers.</p>
                  <pre className="bg-light p-3 rounded">
{`x = 10
y = 3

print(x + y)   # addition
print(x - y)   # subtraction
print(x * y)   # multiplication
print(x / y)   # division
print(x % y)   # modulus
print(x ** y)  # power
print(x // y)  # floor division`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`13
7
30
3.3333333333333335
1
1000
3`}
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
                    <li>Python has three numeric types: <code>int</code>, <code>float</code>, <code>complex</code>.</li>
                    <li>Numbers can be converted using <code>int()</code>, <code>float()</code>, <code>complex()</code>.</li>
                    <li>Use the <code>random</code> module to generate random numbers.</li>
                    <li>Supports mathematical operators like <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>/</code>, <code>**</code>.</li>
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

export default PythonNumbers;
