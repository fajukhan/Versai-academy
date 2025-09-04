import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonGettingStarted = () => {
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
              <h1>Python Getting Started</h1>
                {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="pythonintroduction">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonsyntax">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>
              <p className="lead py-5">
                In this section, you will learn how to set up Python on your computer and write your first program.
              </p>

              {/* Install Python */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Install Python</div>
                <div className="card-body">
                  <p>
                    Python can be downloaded from the official website: 
                    <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer"> python.org </a>.
                  </p>
                  <p>
                    During installation, make sure you check the option <b>"Add Python to PATH"</b>.
                  </p>
                </div>
              </div>

              {/* Verify Installation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Verify Installation</div>
                <div className="card-body">
                  <p>After installation, open your terminal or command prompt and type:</p>
                  <pre className="bg-light p-3 rounded">
{`python --version`}
                  </pre>
                  <p><b>Output Example:</b> Python 3.12.0</p>
                </div>
              </div>

              {/* Example 1: Hello World */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Your First Python Program</div>
                <div className="card-body">
                  <p>Create a new file named <code>hello.py</code> and add the following code:</p>
                  <pre className="bg-light p-3 rounded">
{`print("Hello, Python!")`}
                  </pre>
                  <p><b>Run the program:</b> in terminal, type:</p>
                  <pre className="bg-light p-3 rounded">
{`python hello.py`}
                  </pre>
                  <p><b>Output:</b> Hello, Python!</p>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Python Interactive Shell */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Python Interactive Shell</div>
                <div className="card-body">
                  <p>
                    You can also run Python directly in the interactive shell. Open terminal and type:
                  </p>
                  <pre className="bg-light p-3 rounded">
{`python`}
                  </pre>
                  <p>Then type:</p>
                  <pre className="bg-light p-3 rounded">
{`>>> print("Welcome to Python!")`}
                  </pre>
                  <p><b>Output:</b> Welcome to Python!</p>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Simple Math */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Python as a Calculator</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`print(5 + 3)
print(10 * 2)
print(20 - 5)
print(15 / 3)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`8
20
15
5.0`}
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

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Download Python from <a href="https://python.org">python.org</a></li>
                    <li>Verify installation with <code>python --version</code></li>
                    <li>Create a simple program using <code>print()</code></li>
                    <li>Use Python interactive shell for quick testing</li>
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

export default PythonGettingStarted;
