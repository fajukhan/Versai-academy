import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonComments = () => {
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
              <h1>Python Comments</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonsyntax">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonvariables">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Comments in Python are used to explain code, make it easier to understand, and are ignored during execution.  
                Python supports single-line and multi-line comments.
              </p>

              {/* Example 1: Single-line Comment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Single-line Comment</div>
                <div className="card-body">
                  <p>Use the <code>#</code> symbol to create a single-line comment.</p>
                  <pre className="bg-light p-3 rounded">
{`# This is a comment
print("Hello, World!")`}
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

              {/* Example 2: Inline Comment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Inline Comment</div>
                <div className="card-body">
                  <p>You can place a comment on the same line as code.</p>
                  <pre className="bg-light p-3 rounded">
{`x = 5  # This is an inline comment
print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">5</pre>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Multi-line Comment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Multi-line Comment</div>
                <div className="card-body">
                  <p>
                    Python does not have a special syntax for multi-line comments.  
                    A common practice is to use triple quotes (<code>"""</code> or <code>'''</code>) as a multi-line string that is not assigned to a variable.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`"""
This is a multi-line comment
spanning across multiple lines.
"""
print("Hello, World!")`}
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

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>#</code> for single-line comments.</li>
                    <li>Comments can be placed inline with code.</li>
                    <li>Triple quotes (<code>'''</code> or <code>"""</code>) are commonly used for multi-line comments.</li>
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

export default PythonComments;
