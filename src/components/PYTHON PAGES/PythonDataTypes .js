import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonDataTypes = () => {
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
              <h1>Python Data Types</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonvariables">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonnumbers">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In Python, data types represent the type of value a variable can hold.  
                Python has built-in data types such as numbers, strings, lists, tuples, sets, and dictionaries.
              </p>

              {/* Example 1: Numbers */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Numbers</div>
                <div className="card-body">
                  <p>Python supports integers, floats, and complex numbers.</p>
                  <pre className="bg-light p-3 rounded">
{`x = 10       # integer
y = 3.14     # float
z = 2 + 5j   # complex

print(type(x))
print(type(y))
print(type(z))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`<class 'int'>
<class 'float'>
<class 'complex'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Strings */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Strings</div>
                <div className="card-body">
                  <p>Strings are used to store text values.</p>
                  <pre className="bg-light p-3 rounded">
{`text = "Hello, World!"
print(text)
print(type(text))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Hello, World!
<class 'str'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Lists */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Lists</div>
                <div className="card-body">
                  <p>Lists are ordered, mutable collections.</p>
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
print(fruits)
print(type(fruits))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`['apple', 'banana', 'cherry']
<class 'list'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Tuples */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Tuples</div>
                <div className="card-body">
                  <p>Tuples are ordered, immutable collections.</p>
                  <pre className="bg-light p-3 rounded">
{`colors = ("red", "green", "blue")
print(colors)
print(type(colors))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`('red', 'green', 'blue')
<class 'tuple'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Sets */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Sets</div>
                <div className="card-body">
                  <p>Sets are unordered collections of unique elements.</p>
                  <pre className="bg-light p-3 rounded">
{`unique_numbers = {1, 2, 3, 2}
print(unique_numbers)
print(type(unique_numbers))`}
                  </pre>
                  <p><b>Output:</b> (duplicates are removed)</p>
                  <pre className="bg-light p-3 rounded">
{`{1, 2, 3}
<class 'set'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Dictionaries */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Dictionaries</div>
                <div className="card-body">
                  <p>Dictionaries store key-value pairs.</p>
                  <pre className="bg-light p-3 rounded">
{`person = {"name": "Alice", "age": 25}
print(person)
print(type(person))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`{'name': 'Alice', 'age': 25}
<class 'dict'>`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 7: Boolean & None */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 7: Boolean & None</div>
                <div className="card-body">
                  <p>Boolean values represent <code>True</code> or <code>False</code>. <code>None</code> represents no value.</p>
                  <pre className="bg-light p-3 rounded">
{`is_active = True
nothing = None

print(type(is_active))
print(type(nothing))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`<class 'bool'>
<class 'NoneType'>`}
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
                    <li>Numbers: <code>int</code>, <code>float</code>, <code>complex</code></li>
                    <li>Text: <code>str</code></li>
                    <li>Sequence: <code>list</code>, <code>tuple</code></li>
                    <li>Set types: <code>set</code></li>
                    <li>Mapping: <code>dict</code></li>
                    <li>Boolean: <code>True</code> / <code>False</code></li>
                    <li>Special: <code>NoneType</code></li>
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

export default PythonDataTypes;
