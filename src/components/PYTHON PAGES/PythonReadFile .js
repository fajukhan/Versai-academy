import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonReadFile = () => {
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
              <h1>Python Read File</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonfilehandling">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonwritefile">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python allows you to read the contents of a file using the <code>open()</code> function. 
                By default, files are opened in <b>read ("r")</b> mode.
              </p>

              {/* Example 1: Read whole file */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Read Entire File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "r")
print(f.read())
f.close()`}
                  </pre>
                  <p><b>Output:</b> Displays the full content of <code>demo.txt</code>.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Read first N characters */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Read First N Characters</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "r")
print(f.read(10))   # reads first 10 characters
f.close()`}
                  </pre>
                  <p><b>Output:</b> Prints first 10 characters of the file.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Read line by line */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Read Line by Line</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "r")
print(f.readline())   # first line
print(f.readline())   # second line
f.close()`}
                  </pre>
                  <p><b>Output:</b> Reads file line by line.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Loop through file lines */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Loop Through File Lines</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "r")
for line in f:
    print(line.strip())
f.close()`}
                  </pre>
                  <p><b>Output:</b> Prints each line in the file.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Using with statement */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Using <code>with</code> (Best Practice)</div>
                <div className="card-body">
                  <p>
                    The <code>with</code> statement automatically closes the file after use.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`with open("demo.txt", "r") as f:
    data = f.read()
    print(data)`}
                  </pre>
                  <p><b>Output:</b> Reads the entire file safely.</p>
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
                    <li>Use <code>read()</code> to read the whole file or a specific number of characters.</li>
                    <li>Use <code>readline()</code> to read one line at a time.</li>
                    <li>Use a <code>for</code> loop to iterate through all lines.</li>
                    <li>Always close the file using <code>close()</code> or <code>with</code>.</li>
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

export default PythonReadFile;
