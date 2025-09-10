import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonGettingStarted = () => {
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
