import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonFileHandling = () => {
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
              <h1>Python File Handling</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonvirtualenv">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonreadfile">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python provides built-in functions for creating, reading, updating, and deleting files.
                File handling is an important part of any application where data persistence is required.
              </p>

              {/* Modes */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">File Modes</div>
                <div className="card-body">
                  <ul>
                    <li><code>"r"</code> – Read (default). Opens file for reading, error if file does not exist.</li>
                    <li><code>"a"</code> – Append. Opens file for appending, creates if not exists.</li>
                    <li><code>"w"</code> – Write. Opens file for writing, creates if not exists, overwrites existing file.</li>
                    <li><code>"x"</code> – Create. Creates new file, error if exists.</li>
                    <li><code>"t"</code> – Text mode (default).</li>
                    <li><code>"b"</code> – Binary mode (e.g. images).</li>
                  </ul>
                </div>
              </div>

              {/* Example 1: Read file */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Reading a File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "r")
print(f.read())
f.close()`}
                  </pre>
                  <p><b>Output:</b> (Contents of <code>demo.txt</code>)</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Read lines */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Reading Line by Line</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "r")
for line in f:
    print(line.strip())
f.close()`}
                  </pre>
                  <p><b>Output:</b> Prints each line of the file without extra spaces.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Write file */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Writing to a File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "w")
f.write("Hello, World!\\n")
f.write("Welcome to Python file handling.")
f.close()

# Open again to read content
f = open("demo.txt", "r")
print(f.read())
f.close()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, World!\nWelcome to Python file handling.`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Append */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Appending to a File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("demo.txt", "a")
f.write("\\nThis is appended text.")
f.close()

f = open("demo.txt", "r")
print(f.read())
f.close()`}
                  </pre>
                  <p><b>Output:</b> New text is added at the end of the file.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Delete File */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Delete a File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import os

if os.path.exists("demo.txt"):
    os.remove("demo.txt")
    print("File deleted.")
else:
    print("The file does not exist.")`}
                  </pre>
                  <p><b>Output:</b> Deletes <code>demo.txt</code> if it exists.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* With statement */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Using <code>with</code> Statement</div>
                <div className="card-body">
                  <p>
                    It is recommended to use the <code>with</code> statement for file handling as it automatically
                    closes the file after the block is executed.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`with open("demo.txt", "r") as f:
    data = f.read()
    print(data)`}
                  </pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Files can be opened using <code>open(filename, mode)</code>.</li>
                    <li>Common modes: <code>r</code>, <code>w</code>, <code>a</code>, <code>x</code>.</li>
                    <li>Always close files with <code>close()</code> or use <code>with</code>.</li>
                    <li>You can create, read, write, append, and delete files in Python.</li>
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

export default PythonFileHandling;
