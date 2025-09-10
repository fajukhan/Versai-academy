import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonStrings = () => {
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
              <h1>Python Strings</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythoncasting">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonbooleans">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Strings in Python are surrounded by either single quotes (<code>'</code>) or double quotes (<code>"</code>).  
                You can create strings, manipulate them, and perform many operations.
              </p>

              {/* Example 1: Creating Strings */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating Strings</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# Single or double quotes
a = "Hello"
b = 'World'

print(a)
print(b)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Hello
World`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Multiline Strings */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Multiline Strings</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# Triple quotes for multiline
text = """This is a
multiline
string."""

print(text)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`This is a
multiline
string.`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Strings as Arrays */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Strings as Arrays</div>
                <div className="card-body">
                  <p>Strings behave like arrays, where each character has an index.</p>
                  <pre className="bg-light p-3 rounded">
{`word = "Python"
print(word[0])  # First character
print(word[2])  # Third character`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`P
t`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Looping through Strings */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Looping Through Strings</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`for x in "Python":
    print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`P
y
t
h
o
n`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: String Length */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: String Length</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`text = "Hello World"
print(len(text))`}
                  </pre>
                  <p><b>Output:</b> 11</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Checking Substrings */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Checking Substrings</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`txt = "Python is awesome"

print("Python" in txt)     # True
print("Java" not in txt)   # True`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`True
True`}
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
                    <li>Strings are created using single or double quotes.</li>
                    <li>Triple quotes are used for multiline strings.</li>
                    <li>Strings are arrays of characters with indexes.</li>
                    <li>You can loop through strings using <code>for</code> loops.</li>
                    <li><code>len()</code> gives the length of the string.</li>
                    <li>Use <code>in</code> and <code>not in</code> to check substrings.</li>
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

export default PythonStrings;
