import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonSyntax = () => {
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
              <h1>Python Syntax</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythongettingstarted">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythoncomments">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python syntax refers to the set of rules that define how a Python program is written and interpreted. 
                Python is designed to be easy to read and simple to write.
              </p>

              {/* Example 1: Indentation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Indentation in Python</div>
                <div className="card-body">
                  <p>
                    Unlike many other programming languages, Python uses <b>indentation</b> (whitespace at the beginning of a line) to define code blocks.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`if 5 > 2:
    print("Five is greater than two!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Five is greater than two!</pre>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Case-Sensitivity */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Case-Sensitivity</div>
                <div className="card-body">
                  <p>
                    Python is case-sensitive. This means <code>print</code> and <code>Print</code> are different.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`print("Hello World")   # correct
Print("Hello World")   # error`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Hello World
NameError: name 'Print' is not defined`}
                  </pre>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Comments */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Comments in Python</div>
                <div className="card-body">
                  <p>
                    Comments are used to explain the code and are ignored by Python. They start with the <code>#</code> symbol.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`# This is a comment
print("Hello, World!")  # This is an inline comment`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Hello, World!</pre>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Multiple Statements on One Line */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Multiple Statements on One Line</div>
                <div className="card-body">
                  <p>
                    You can write multiple statements on one line using a semicolon <code>;</code>.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`x = 5; y = 10; print(x + y)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">15</pre>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Python uses <b>indentation</b> to define code blocks.</li>
                    <li>Python is <b>case-sensitive</b>.</li>
                    <li>Use <code>#</code> for single-line comments.</li>
                    <li>Multiple statements can be placed on a single line using <code>;</code>.</li>
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

export default PythonSyntax;
