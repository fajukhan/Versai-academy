import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonModules = () => {
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
              <h1>Python Modules</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonscope">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythondates">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A <b>module</b> in Python is simply a file containing Python code (functions, classes, variables).  
                Modules help you organize code into reusable parts.  
                You can <b>import</b> modules to use code written in other files or built-in libraries.
              </p>

              {/* Example 1: Using a built-in module */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Importing a Built-in Module</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math

print(math.sqrt(16))
print(math.pi)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`4.0\n3.141592653589793`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Import with alias */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Import with Alias</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math as m

print(m.sqrt(25))
print(m.factorial(5))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`5.0\n120`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Import specific names */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Import Specific Functions</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`from math import sqrt, pi

print(sqrt(9))
print(pi)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`3.0\n3.141592653589793`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Creating your own module */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Creating Your Own Module</div>
                <div className="card-body">
                  <p>Suppose we create a file <code>mymodule.py</code>:</p>
                  <pre className="bg-light p-3 rounded">
{`def greet(name):
    return f"Hello, {name}!"`}
                  </pre>
                  <p>Now import and use it in another file:</p>
                  <pre className="bg-light p-3 rounded">
{`import mymodule

print(mymodule.greet("John"))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, John!`}</pre>
                </div>
              </div>

              {/* Example 5: The dir() function */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Using dir() to List Module Attributes</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import math
print(dir(math))`}
                  </pre>
                  <p><b>Output:</b> (truncated)</p>
                  <pre className="bg-light p-3 rounded">{`['acos', 'asin', 'atan', 'ceil', 'cos', 'degrees', ...]`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Packages */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Python Packages</div>
                <div className="card-body">
                  <p>
                    A <b>package</b> is a collection of modules in a directory with an <code>__init__.py</code> file.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`# folder structure:
# mypackage/
#     __init__.py
#     module1.py
#     module2.py

import mypackage.module1
import mypackage.module2`}
                  </pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>A module is a Python file containing code (functions, classes, variables).</li>
                    <li>Use <code>import</code> to include modules.</li>
                    <li>Use <code>as</code> to give an alias.</li>
                    <li>Use <code>from ... import ...</code> to import specific names.</li>
                    <li>Create custom modules by writing functions in a separate file.</li>
                    <li>Packages organize modules into directories.</li>
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

export default PythonModules;
