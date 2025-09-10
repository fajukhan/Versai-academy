import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonIntroduction = () => {
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
              <h1>Python Introduction</h1>

                  {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="PythonTutorial">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythongettingstarted">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python is a popular, high-level, interpreted programming language.
                It is widely used in web development, data science, artificial intelligence, 
                machine learning, automation, and much more. Python is known for its 
                simple syntax, readability, and large community support.
              </p>

              {/* Features */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Key Features of Python</div>
                <div className="card-body">
                  <ul>
                    <li>Simple and easy to learn</li>
                    <li>Open-source and free</li>
                    <li>Cross-platform support</li>
                    <li>Large standard library</li>
                    <li>Object-Oriented and Functional</li>
                    <li>Used in AI, ML, Web, and Data Science</li>
                  </ul>
                </div>
              </div>

              {/* Example 1: Hello World */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Hello World</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`print("Hello, World!")`}
                  </pre>
                  <p><b>Output:</b> Hello, World!</p>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Indentation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Indentation</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`if 5 > 2:
    print("Five is greater than two!")`}
                  </pre>
                  <p><b>Output:</b> Five is greater than two!</p>
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
                <div className="card-header">Example 3: Comments</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# This is a comment
print("Python is fun!")`}
                  </pre>
                  <p><b>Output:</b> Python is fun!</p>
                  <a 
                    href="https://www.programiz.com/python-programming/online-compiler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Variables */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Variables</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10
y = "Python"
print(x)
print(y)`}
                  </pre>
                  <p><b>Output:</b> 10 <br/> Python</p>
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
                    <li>Python is simple and beginner-friendly.</li>
                    <li>It uses indentation instead of braces.</li>
                    <li>Comments start with <code>#</code>.</li>
                    <li>Variables are created when you assign a value.</li>
                  </ul>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="python">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonsyntax">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
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

export default PythonIntroduction;
