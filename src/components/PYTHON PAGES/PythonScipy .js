import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonScipy = () => {
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
