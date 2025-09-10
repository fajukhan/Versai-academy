import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonWriteFile = () => {
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
              <h1>Python Write/Create File</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonreadfile">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythondeletefile">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python can create and write to files using the <code>open()</code> function with different modes:
              </p>
              <ul>
                <li><code>"w"</code> - Write mode (creates a new file or overwrites existing content).</li>
                <li><code>"a"</code> - Append mode (adds new content to the end of the file).</li>
                <li><code>"x"</code> - Create mode (creates a new file, returns an error if the file already exists).</li>
              </ul>

              {/* Example 1: Write mode */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Writing to a File ("w")</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "w")
f.write("Hello, this is a new file!\\n")
f.write("Python file handling is easy.")
f.close()`}  
                  </pre>
                  <p><b>Result:</b> Creates <code>demo.txt</code> (or overwrites it) with the above text.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Append mode */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Appending to a File ("a")</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "a")
f.write("\\nThis line was appended!")
f.close()`}  
                  </pre>
                  <p><b>Result:</b> Adds a new line at the end of <code>demo.txt</code> without removing previous content.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Create mode */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Creating a New File ("x")</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("newfile.txt", "x")
f.write("This file was created using 'x' mode.")
f.close()`}  
                  </pre>
                  <p><b>Result:</b> Creates a new file <code>newfile.txt</code>. If it already exists, Python will throw an error.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Using with statement */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Writing Using <code>with</code> Statement</div>
                <div className="card-body">
                  <p>
                    It is recommended to use <code>with</code> when working with files, because it automatically closes the file.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`with open("demo.txt", "w") as f:
    f.write("This file is written using 'with' statement.")`}  
                  </pre>
                  <p><b>Result:</b> Creates or overwrites <code>demo.txt</code> with the given text.</p>
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
                    <li>Use <code>"w"</code> to write (creates/overwrites).</li>
                    <li>Use <code>"a"</code> to append (adds content at the end).</li>
                    <li>Use <code>"x"</code> to create (fails if file exists).</li>
                    <li>Always close files, or use <code>with</code> to handle automatically.</li>
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

export default PythonWriteFile;
