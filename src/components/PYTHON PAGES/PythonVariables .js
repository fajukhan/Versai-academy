import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonVariables = () => {
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
              <h1>Python Variables</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythoncomments">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythondatatypes">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Variables in Python are containers for storing data values.  
                Unlike other programming languages, you don’t need to declare the type explicitly—Python assigns it automatically based on the value.
              </p>

              {/* Example 1: Creating Variables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating Variables</div>
                <div className="card-body">
                  <p>Assign a value to a variable using the <code>=</code> sign.</p>
                  <pre className="bg-light p-3 rounded">
{`x = 5
y = "Hello, Python!"
print(x)
print(y)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">5{"\n"}Hello, Python!</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Variable Types */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Variable Types</div>
                <div className="card-body">
                  <p>Python variables can store different types of values like integers, strings, and floats.</p>
                  <pre className="bg-light p-3 rounded">
{`a = 10          # integer
b = 3.14        # float
c = "Python"    # string

print(type(a))
print(type(b))
print(type(c))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`<class 'int'>
<class 'float'>
<class 'str'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Multiple Assignments */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Multiple Assignments</div>
                <div className="card-body">
                  <p>You can assign values to multiple variables in one line.</p>
                  <pre className="bg-light p-3 rounded">
{`x, y, z = 1, 2, 3
print(x, y, z)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">1 2 3</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Global and Local Variables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Global and Local Variables</div>
                <div className="card-body">
                  <p>Variables created inside a function are local, while those created outside are global.</p>
                  <pre className="bg-light p-3 rounded">
{`x = "global"

def myFunc():
    x = "local"
    print("Inside function:", x)

myFunc()
print("Outside function:", x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Inside function: local
Outside function: global`}
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
                    <li>Variables are used to store data values.</li>
                    <li>No need to declare type; Python infers it automatically.</li>
                    <li>You can assign multiple values in one line.</li>
                    <li>Local variables exist inside functions, global variables outside.</li>
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

export default PythonVariables;
