import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonArray = () => {
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
              <h1>Python Arrays</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonlambda">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonoop">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python does not have built-in support for arrays like some other languages.  
                However, lists are often used as arrays.  
                Additionally, Python has a built-in <code>array</code> module for handling arrays of specific data types.
              </p>

              {/* Example 1: Creating arrays (lists) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating an Array (List)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`cars = ["Ford", "Volvo", "BMW"]
print(cars)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">['Ford', 'Volvo', 'BMW']</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Accessing array elements */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Accessing Array Elements</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`cars = ["Ford", "Volvo", "BMW"]
print(cars[0])
print(cars[2])`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Ford
BMW`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Changing array elements */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Changing Array Elements</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`cars = ["Ford", "Volvo", "BMW"]
cars[0] = "Toyota"
print(cars)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">['Toyota', 'Volvo', 'BMW']</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Looping through array */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Looping Through an Array</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`cars = ["Ford", "Volvo", "BMW"]
for car in cars:
    print(car)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Ford
Volvo
BMW`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Adding and removing elements */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Adding and Removing Elements</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`cars = ["Ford", "Volvo", "BMW"]

cars.append("Honda")
print(cars)

cars.remove("Volvo")
print(cars)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`['Ford', 'Volvo', 'BMW', 'Honda']
['Ford', 'BMW', 'Honda']`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Using array module */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Using Python array Module</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import array as arr

numbers = arr.array('i', [1, 2, 3, 4, 5])
print(numbers)`}
                  </pre>
                  <p><b>Output:</b> (representation may vary)</p>
                  <pre className="bg-light p-3 rounded">array('i', [1, 2, 3, 4, 5])</pre>
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
                    <li>Python uses <b>lists</b> to work as arrays.</li>
                    <li>You can access, modify, loop, and manipulate list elements easily.</li>
                    <li>Use <code>append()</code> to add and <code>remove()</code> to delete items.</li>
                    <li>The <code>array</code> module provides arrays for specific data types.</li>
                  </ul>
                </div>
              </div>

              {/* Prev / Next Again */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="pythonlambda">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonoop">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
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

export default PythonArray;
