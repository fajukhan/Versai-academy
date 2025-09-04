import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonLists = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
            
                  {/* Sidebar (Left - col-2) */}
            <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
              <h5 className="fw-bold">Python Tutorial</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="PythonTutorial">Python HOME</a>
                </li>
                <li>
                  <a href="pythonintroduction">Python Intro</a>
                </li>
                <li>
                  <a href="pythongettingstarted">Python Get Started</a>
                </li>
                <li>
                  <a href="pythonSyntax">Python Syntax</a>
                </li>
                <li>
                  <a href="pythoncomments">Python Comments</a>
                </li>
                <li>
                  <a href="pythonvariables">Python Variables</a>
                </li>
                <li>
                  <a href="pythondatatypes">Python Data Types</a>
                </li>
                <li>
                  <a href="pythonnumbers">Python Numbers</a>
                </li>
                <li>
                  <a href="pythoncasting">Python Casting</a>
                </li>
                <li>
                  <a href="pythonstrings">Python Strings</a>
                </li>
                <li>
                  <a href="pythonbooleans">Python Booleans</a>
                </li>
                <li>
                  <a href="pythonoperators">Python Operators</a>
                </li>
                <li>
                  <a href="pythonlist">Python Lists</a>
                </li>
                <li>
                  <a href="pythontuples">Python Tuples</a>
                </li>
                <li>
                  <a href="pythonsets">Python Sets</a>
                </li>
                <li>
                  <a href="pythondictionaries">Python Dictionaries</a>
                </li>
                <li>
                  <a href="pythonifelse">Python If...Else</a>
                </li>
                <li>
                  <a href="pythonmatch">Python Match</a>
                </li>
                <li>
                  <a href="pythonwhileloops">Python While Loops</a>
                </li>
                <li>
                  <a href="pythonforloops">Python For Loops</a>
                </li>
                <li>
                  <a href="pythonfunctions">Python Functions</a>
                </li>
                <li>
                  <a href="pythonlambda">Python Lambda</a>
                </li>
                <li>
                  <a href="pythonarray">Python Arrays</a>
                </li>
                <li>
                  <a href="pythonoop">Python OOP</a>
                </li>
                <li>
                  <a href="pythonclassesobjects">Python Classes/Objects</a>
                </li>
                <li>
                  <a href="pythoninheritance">Python Inheritance</a>
                </li>
                <li>
                  <a href="pythoniterators">Python Iterators</a>
                </li>
                <li>
                  <a href="pythonpolymorphism">Python Polymorphism</a>
                </li>
                <li>
                  <a href="pythonscope">Python Scope</a>
                </li>
                <li>
                  <a href="pythonmodules">Python Modules</a>
                </li>
                <li>
                  <a href="pythondates">Python Dates</a>
                </li>
                <li>
                  <a href="pythonmath">Python Math</a>
                </li>
                <li>
                  <a href="pythonjson">Python JSON</a>
                </li>
                <li>
                  <a href="pythonregex">Python RegEx</a>
                </li>
                <li>
                  <a href="pytonpip">Python PIP</a>
                </li>
                <li>
                  <a href="pythontryexcept">Python Try...Except</a>
                </li>
                <li>
                  <a href="pythonstringformatting">Python String Formatting</a>
                </li>
                <li>
                  <a href="pythonuserinput">Python User Input</a>
                </li>
                <li>
                  <a href="pythonvirtualenv">Python VirtualEnv</a>
                </li>
              </ul>

              <h5 className="fw-bold">File Handling</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="pythonfilehandling">Python File Handling</a>
                </li>
                <li>
                  <a href="pythonreadfile">Python Read Files</a>
                </li>
                <li>
                  <a href="pythonwritefile">Python Write/Create Files</a>
                </li>
                <li>
                  <a href="pythondeletefile">Python Delete Files</a>
                </li>
              </ul>

              <h5 className="fw-bold">Python Modules</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="pythonnumpy">NumPy Tutorial</a>
                </li>
                <li>
                  <a href="pythonpandas">Pandas Tutorial</a>
                </li>
                <li>
                  <a href="pythonscipy">SciPy Tutorial</a>
                </li>
                <li>
                  <a href="pythondjango">Django Tutorial</a>
                </li>
              </ul>
            </div>
            
            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Python Lists</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonoperators">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythontuples">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Lists are used to store multiple items in a single variable.  
                Lists are one of Python’s most powerful and flexible data structures.
              </p>

              {/* Example 1: Creating Lists */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating a List</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`['apple', 'banana', 'cherry']`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Accessing Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Accessing List Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # First item
print(fruits[-1])  # Last item`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`apple\ncherry`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Changing Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Changing List Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
fruits[1] = "orange"
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`['apple', 'orange', 'cherry']`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Looping Through Lists */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Looping Through a List</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`apple\nbanana\ncherry`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Adding Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Adding Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)

fruits.insert(1, "kiwi")
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`['apple', 'banana', 'cherry', 'orange']\n['apple', 'kiwi', 'banana', 'cherry', 'orange']`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Removing Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Removing Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
print(fruits)

fruits.pop()
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`['apple', 'cherry']\n['apple']`}</pre>
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
                    <li>Lists are ordered, changeable, and allow duplicate values.</li>
                    <li>Use square brackets <code>[]</code> to create a list.</li>
                    <li>Lists support many useful methods like <code>append()</code>, <code>insert()</code>, <code>remove()</code>, <code>pop()</code>, <code>sort()</code>, and <code>reverse()</code>.</li>
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

export default PythonLists;
