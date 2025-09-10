import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonMatch = () => {
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
              <h1>Python Match</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonifelse">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonwhileloops">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>match</code> statement was introduced in Python 3.10.  
                It works like a <b>switch-case</b> statement in other languages and is used for pattern matching.
              </p>

              {/* Example 1: Basic match-case */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Basic match-case</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`day = 3

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case _:
        print("Invalid day")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Wednesday`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Multiple cases in one pattern */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Multiple cases in one pattern</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 2

match x:
    case 1 | 2 | 3:
        print("x is 1, 2, or 3")
    case 4:
        print("x is 4")
    case _:
        print("x is something else")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`x is 1, 2, or 3`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Wildcard (_) as default */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using _ as default</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`command = "exit"

match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case _:
        print("Unknown command")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Unknown command`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Matching with conditions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Matching with conditions (case with if)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`number = 15

match number:
    case n if n < 10:
        print("Small number")
    case n if n < 20:
        print("Medium number")
    case _:
        print("Large number")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Medium number`}</pre>
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
                    <li>The <code>match</code> statement was added in Python 3.10.</li>
                    <li>It is similar to switch-case in other languages.</li>
                    <li><code>case</code> blocks define patterns to match against the value.</li>
                    <li><code>_</code> is used as a default case (matches anything).</li>
                    <li>You can use <code>if</code> conditions with <code>case</code> for advanced pattern matching.</li>
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

export default PythonMatch;
