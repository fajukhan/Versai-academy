import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonSyntax = () => {
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
