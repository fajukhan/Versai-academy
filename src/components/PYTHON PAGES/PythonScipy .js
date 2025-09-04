import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonScipy = () => {
  return (
    <>
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
                  <a href="pythonstrings">Python Strings</a>
                </li>
                <li>
                  <a href="pythonbooleans">Python Booleans</a>
                </li>
                <li>
                  <a href="pythonoperators">Python Operators</a>
                </li>
                <li>
                  <a href="pythonlist">Python Lists</a>
                </li>
                <li>
                  <a href="pythontuples">Python Tuples</a>
                </li>
                <li>
                  <a href="pythonsets">Python Sets</a>
                </li>
                <li>
                  <a href="pythondictionaries">Python Dictionaries</a>
                </li>
                <li>
                  <a href="pythonifelse">Python If...Else</a>
                </li>
                <li>
                  <a href="pythonmatch">Python Match</a>
                </li>
                <li>
                  <a href="pythonwhileloops">Python While Loops</a>
                </li>
                <li>
                  <a href="pythonforloops">Python For Loops</a>
                </li>
                <li>
                  <a href="pythonfunctions">Python Functions</a>
                </li>
                <li>
                  <a href="pythonlambda">Python Lambda</a>
                </li>
                <li>
                  <a href="pythonarray">Python Arrays</a>
                </li>
                <li>
                  <a href="pythonoop">Python OOP</a>
                </li>
                <li>
                  <a href="pythonclassesobjects">Python Classes/Objects</a>
                </li>
                <li>
                  <a href="pythoninheritance">Python Inheritance</a>
                </li>
                <li>
                  <a href="pythoniterators">Python Iterators</a>
                </li>
                <li>
                  <a href="pythonpolymorphism">Python Polymorphism</a>
                </li>
                <li>
                  <a href="pythonscope">Python Scope</a>
                </li>
                <li>
                  <a href="pythonmodules">Python Modules</a>
                </li>
                <li>
                  <a href="pythondates">Python Dates</a>
                </li>
                <li>
                  <a href="pythonmath">Python Math</a>
                </li>
                <li>
                  <a href="pythonjson">Python JSON</a>
                </li>
                <li>
                  <a href="pythonregex">Python RegEx</a>
                </li>
                <li>
                  <a href="pytonpip">Python PIP</a>
                </li>
                <li>
                  <a href="pythontryexcept">Python Try...Except</a>
                </li>
                <li>
                  <a href="pythonstringformatting">Python String Formatting</a>
                </li>
                <li>
                  <a href="pythonuserinput">Python User Input</a>
                </li>
                <li>
                  <a href="pythonvirtualenv">Python VirtualEnv</a>
                </li>
              </ul>

              <h5 className="fw-bold">File Handling</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="pythonfilehandling">Python File Handling</a>
                </li>
                <li>
                  <a href="pythonreadfile">Python Read Files</a>
                </li>
                <li>
                  <a href="pythonwritefile">Python Write/Create Files</a>
                </li>
                <li>
                  <a href="pythondeletefile">Python Delete Files</a>
                </li>
              </ul>

              <h5 className="fw-bold">Python Modules</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="pythonnumpy">NumPy Tutorial</a>
                </li>
                <li>
                  <a href="pythonpandas">Pandas Tutorial</a>
                </li>
                <li>
                  <a href="pythonscipy">SciPy Tutorial</a>
                </li>
                <li>
                  <a href="pythondjango">Django Tutorial</a>
                </li>
              </ul>
            </div>


            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Python SciPy Tutorial</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonpandas">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythondjango">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>SciPy</b> is a Python library built on top of NumPy.  
                It provides modules for mathematics, science, and engineering.  
                SciPy is widely used for linear algebra, optimization, integration, interpolation, statistics, signal processing, and more.
              </p>

              {/* Installation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Installing SciPy</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip install scipy</pre>
                  <p>Import it using <code>import scipy</code> or specific modules like <code>from scipy import linalg, optimize</code>.</p>
                </div>
              </div>

              {/* Example 1: Linear Algebra */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Solving Linear Algebra Equations</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import numpy as np
from scipy import linalg

# Solve 2x + y = 5 and x - y = 1
A = np.array([[2, 1], [1, -1]])
b = np.array([5, 1])

solution = linalg.solve(A, b)
print(solution)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`[2. 1.]  # x = 2, y = 1`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Integration */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Integration</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import numpy as np
from scipy import integrate

# Integrate f(x) = x^2 from 0 to 3
result, error = integrate.quad(lambda x: x**2, 0, 3)
print(result)`}
                  </pre>
                  <p><b>Output:</b> <code>9.0</code></p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Optimization */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Optimization</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`from scipy import optimize

# Minimize f(x) = x^2 + 2x + 1
func = lambda x: x**2 + 2*x + 1
result = optimize.minimize(func, x0=0)
print(result.x)`}
                  </pre>
                  <p><b>Output:</b> <code>[-1.]</code> (Minimum occurs at x = -1)</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Statistics */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Statistics</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`from scipy import stats

data = [2, 4, 4, 4, 5, 5, 7, 9]

mean = np.mean(data)
median = np.median(data)
mode = stats.mode(data)

print("Mean:", mean)
print("Median:", median)
print("Mode:", mode.mode[0])`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Mean: 5.0
Median: 4.5
Mode: 4`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Interpolation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Interpolation</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import numpy as np
from scipy import interpolate

x = np.linspace(0, 10, 10)
y = np.sin(x)

f = interpolate.interp1d(x, y, kind='cubic')
print(f(5))`}
                  </pre>
                  <p><b>Output:</b> Approximated value of <code>sin(5)</code></p>
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
                    <li>SciPy builds on NumPy for scientific computing.</li>
                    <li>Provides modules for linear algebra, integration, optimization, statistics, and more.</li>
                    <li>Widely used in engineering, machine learning, and data science.</li>
                    <li>Install with <code>pip install scipy</code>.</li>
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

export default PythonScipy;
