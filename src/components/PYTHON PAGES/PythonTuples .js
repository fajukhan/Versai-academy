import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonTuples = () => {
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
              <h1>Python Tuples</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonlist">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonsets">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A tuple is a collection which is ordered and unchangeable.  
                Tuples are written with round brackets <code>()</code>.
              </p>

              {/* Example 1: Creating Tuples */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating a Tuple</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ("apple", "banana", "cherry")
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`('apple', 'banana', 'cherry')`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Accessing Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Accessing Tuple Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ("apple", "banana", "cherry")
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

              {/* Example 3: Tuple Length */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Length of a Tuple</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ("apple", "banana", "cherry")
print(len(fruits))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`3`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Check if Item Exists */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Checking if Item Exists</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ("apple", "banana", "cherry")
if "apple" in fruits:
    print("Yes, 'apple' is in the tuple!")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Yes, 'apple' is in the tuple!`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Update Tuple */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Updating a Tuple (Workaround)</div>
                <div className="card-body">
                  <p>Tuples are unchangeable, but you can convert it to a list, change it, and convert back.</p>
                  <pre className="bg-light p-3 rounded">
{`fruits = ("apple", "banana", "cherry")
temp = list(fruits)
temp[1] = "orange"
fruits = tuple(temp)
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`('apple', 'orange', 'cherry')`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Looping Through Tuple */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Looping Through a Tuple</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ("apple", "banana", "cherry")
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

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Tuples are ordered and unchangeable.</li>
                    <li>Tuples allow duplicate values.</li>
                    <li>Tuples are defined using <code>()</code>.</li>
                    <li>Convert tuples to lists to modify them.</li>
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

export default PythonTuples;
