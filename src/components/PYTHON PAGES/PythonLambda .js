import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonLambda = () => {
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
              <h1>Python Lambda</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonfunctions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonarray">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead">
                A lambda function is a small anonymous function in Python. It can take any number of arguments, but can only have one expression.
              </p>

              {/* Example 1: Simple lambda function */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Simple Lambda Function</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = lambda a: a + 10
print(x(5))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">15</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Lambda with multiple arguments */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Lambda with Multiple Arguments</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = lambda a, b: a * b
print(x(5, 6))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">30</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Lambda with multiple arguments (3 values) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Lambda with Three Arguments</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = lambda a, b, c: a + b + c
print(x(5, 6, 2))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">13</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Lambda inside another function */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Lambda Inside Another Function</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def myfunc(n):
    return lambda a: a * n

doubler = myfunc(2)
print(doubler(11))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">22</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Lambda with map() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Lambda with map()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">[1, 4, 9, 16, 25]</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Lambda with filter() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Lambda with filter()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`numbers = [1, 2, 3, 4, 5, 6]
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">[2, 4, 6]</pre>
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
                    <li>A lambda is a small anonymous function defined with the <code>lambda</code> keyword.</li>
                    <li>It can take multiple arguments but only a single expression.</li>
                    <li>Often used with <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>.</li>
                    <li>Useful for quick, short-term operations.</li>
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

export default PythonLambda;
