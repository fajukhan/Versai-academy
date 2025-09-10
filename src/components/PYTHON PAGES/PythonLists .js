import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonLists = () => {
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
