import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonRegex = () => {
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
              <h1>Python RegEx</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonjson">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pytonpip">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A <b>Regular Expression (RegEx)</b> is a sequence of characters that forms a search pattern.  
                In Python, the <code>re</code> module is used to work with regular expressions.
              </p>

              {/* Example 1: re.search */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Using re.search()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import re

txt = "The rain in Spain"
x = re.search("Spain", txt)

if x:
    print("Yes, 'Spain' is in the text!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Yes, 'Spain' is in the text!`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: re.findall */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using re.findall()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import re

txt = "The rain in Spain"
x = re.findall("ai", txt)

print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`['ai', 'ai']`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: re.split */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using re.split()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import re

txt = "The rain in Spain"
x = re.split("\\s", txt)

print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`['The', 'rain', 'in', 'Spain']`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: re.sub */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Using re.sub()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import re

txt = "The rain in Spain"
x = re.sub("Spain", "India", txt)

print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`The rain in India`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Match object */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Match object properties</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import re

txt = "The rain in Spain"
x = re.search("ai", txt)

print(x.start())   # 5
print(x.end())     # 7
print(x.span())    # (5, 7)
print(x.string)    # The rain in Spain`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`5\n7\n(5, 7)\nThe rain in Spain`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary of RegEx Functions</div>
                <div className="card-body">
                  <ul>
                    <li><code>re.findall()</code> → Returns a list of all matches.</li>
                    <li><code>re.search()</code> → Returns a Match object if a match is found.</li>
                    <li><code>re.split()</code> → Splits string by matches.</li>
                    <li><code>re.sub()</code> → Replaces matches with a string.</li>
                  </ul>
                  <p>Common patterns: <code>\d</code> (digits), <code>\w</code> (letters/digits/underscore), <code>\s</code> (whitespace), <code>^</code> (start), <code>$</code> (end).</p>
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

export default PythonRegex;
