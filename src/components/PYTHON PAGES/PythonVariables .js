import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonVariables = () => {
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
