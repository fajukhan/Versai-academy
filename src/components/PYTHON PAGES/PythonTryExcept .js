import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonTryExcept = () => {
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
              <h1>Python Try…Except (Error Handling)</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pytonpip">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonstringformatting">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Errors in Python can stop the execution of your program.  
                To handle these errors gracefully, Python provides the <b>try…except</b> block.  
                This allows you to catch and respond to exceptions instead of crashing your program.
              </p>

              {/* Example 1: Basic try-except */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Basic try…except</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`try:
    x = 10 / 0
except:
    print("An error occurred!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`An error occurred!`}</pre>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Specific exception */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Catch specific exception</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`try:
    num = int("hello")
except ValueError:
    print("Invalid conversion to integer!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Invalid conversion to integer!`}</pre>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Multiple excepts */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Multiple except blocks</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`try:
    value = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid value!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Cannot divide by zero!`}</pre>
                </div>
              </div>

              {/* Example 4: Else block */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: try…except with else</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`try:
    num = int("100")
except ValueError:
    print("Invalid input!")
else:
    print("Conversion successful:", num)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Conversion successful: 100`}</pre>
                </div>
              </div>

              {/* Example 5: Finally block */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: try…finally</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`try:
    f = open("file.txt")
    # do something with the file
except FileNotFoundError:
    print("File not found!")
finally:
    print("Execution finished!")`}
                  </pre>
                  <p><b>Output (if file.txt does not exist):</b></p>
                  <pre className="bg-light p-3 rounded">{`File not found!\nExecution finished!`}</pre>
                </div>
              </div>

              {/* Example 6: Raise exceptions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Raise an exception</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = -5
if x < 0:
    raise Exception("Number must be positive!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Exception: Number must be positive!`}</pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>try…except</code> is used to handle exceptions.</li>
                    <li>You can catch specific exceptions like <code>ValueError</code>, <code>ZeroDivisionError</code>, etc.</li>
                    <li><code>else</code> runs if no exception occurs.</li>
                    <li><code>finally</code> always runs (cleanup code).</li>
                    <li>You can raise exceptions using <code>raise</code>.</li>
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

export default PythonTryExcept;
