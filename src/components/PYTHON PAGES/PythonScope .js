import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonScope = () => {
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
              <h1>Python Scope</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonpolymorphism">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonmodules">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A <b>scope</b> in Python defines the part of the code where a variable is accessible.  
                Python uses the <b>LEGB rule</b>: <code>Local</code>, <code>Enclosed</code>, <code>Global</code>, <code>Built-in</code>.
              </p>

              {/* Example 1: Global vs Local */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Global vs Local Variables</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10   # Global scope

def func():
    x = 5   # Local scope
    print("Inside function:", x)

func()
print("Outside function:", x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Inside function: 5\nOutside function: 10`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Enclosed (Nested Function Scope) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Enclosed Scope</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def outer():
    x = "outer variable"
    def inner():
        print("Accessing:", x)
    inner()

outer()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Accessing: outer variable`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: global Keyword */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using global Keyword</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10

def change_global():
    global x
    x = 20

change_global()
print("Global x:", x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Global x: 20`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: nonlocal Keyword */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Using nonlocal Keyword</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def outer():
    x = "outer"
    def inner():
        nonlocal x
        x = "changed"
    inner()
    print("Value of x:", x)

outer()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Value of x: changed`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Built-in Scope */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Built-in Scope</div>
                <div className="card-body">
                  <p>
                    Python provides built-in names like <code>print()</code>, <code>len()</code>, etc.  
                    These are always available unless you override them.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`print(len([1,2,3]))   # Built-in function`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`3`}</pre>
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
                    <li><b>Local:</b> Variables inside a function.</li>
                    <li><b>Enclosed:</b> Variables in outer enclosing functions.</li>
                    <li><b>Global:</b> Variables defined at the top-level of a script/module.</li>
                    <li><b>Built-in:</b> Names provided by Python itself.</li>
                    <li>Use <code>global</code> to modify global variables inside a function.</li>
                    <li>Use <code>nonlocal</code> to modify variables in the enclosing function.</li>
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

export default PythonScope;
