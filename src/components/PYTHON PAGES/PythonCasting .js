import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonCasting = () => {
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
              <h1>Python Casting</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonnumbers">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonoperators">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In Python, casting means converting one data type into another.  
                Python provides built-in functions like <code>int()</code>, <code>float()</code>, and <code>str()</code> to perform explicit type conversions.
              </p>

              {/* Example 1: int() Casting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: int() Casting</div>
                <div className="card-body">
                  <p>The <code>int()</code> function converts values into integers.</p>
                  <pre className="bg-light p-3 rounded">
{`x = int(1)      # from int
y = int(2.8)    # from float
z = int("3")    # from string

print(x)
print(y)
print(z)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`1
2
3`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: float() Casting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: float() Casting</div>
                <div className="card-body">
                  <p>The <code>float()</code> function converts values into floating point numbers.</p>
                  <pre className="bg-light p-3 rounded">
{`a = float(1)      # from int
b = float(2.8)    # from float
c = float("3")    # from string
d = float("4.2")  # from string with decimal

print(a)
print(b)
print(c)
print(d)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`1.0
2.8
3.0
4.2`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: str() Casting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: str() Casting</div>
                <div className="card-body">
                  <p>The <code>str()</code> function converts values into strings.</p>
                  <pre className="bg-light p-3 rounded">
{`p = str("s1")  # string
q = str(2)      # int to string
r = str(3.0)    # float to string

print(p)
print(q)
print(r)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`s1
2
3.0`}
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
                    <li><code>int()</code> → converts values to integer.</li>
                    <li><code>float()</code> → converts values to float.</li>
                    <li><code>str()</code> → converts values to string.</li>
                    <li>Casting is useful when working with mixed data types.</li>
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

export default PythonCasting;
