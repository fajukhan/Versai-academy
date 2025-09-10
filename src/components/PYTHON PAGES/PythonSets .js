import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonSets = () => {
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
              <h1>Python Sets</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythontuples">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythondictionaries">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A set is a collection which is unordered, unindexed, and does not allow duplicate values.  
                Sets are written with curly brackets <code>{`{}`}</code>.
              </p>

              {/* Example 1: Creating Sets */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating a Set</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = {"apple", "banana", "cherry"}
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'apple', 'banana', 'cherry'}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: No Duplicates */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: No Duplicate Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = {"apple", "banana", "cherry", "apple"}
print(fruits)`}
                  </pre>
                  <p><b>Output:</b> Duplicate "apple" is ignored.</p>
                  <pre className="bg-light p-3 rounded">{`{'apple', 'banana', 'cherry'}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Check if Item Exists */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Checking if Item Exists</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = {"apple", "banana", "cherry"}
print("banana" in fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`True`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Adding Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Adding Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = {"apple", "banana"}
fruits.add("cherry")
print(fruits)

fruits.update(["orange", "mango"])
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'apple', 'banana', 'cherry'}\n{'apple', 'banana', 'cherry', 'orange', 'mango'}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Removing Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Removing Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = {"apple", "banana", "cherry"}
fruits.remove("banana")
print(fruits)

fruits.discard("apple")
print(fruits)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'apple', 'cherry'}\n{'cherry'}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Looping Through a Set */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Looping Through a Set</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = {"apple", "banana", "cherry"}
for fruit in fruits:
    print(fruit)`}
                  </pre>
                  <p><b>Output:</b> (order may vary)</p>
                  <pre className="bg-light p-3 rounded">{`apple\nbanana\ncherry`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 7: Set Operations */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 7: Set Operations</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

print(set1.union(set2))
print(set1.intersection(set2))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`{'apple', 'banana', 'cherry', 'google', 'microsoft'}\n{'apple'}`}
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
                    <li>Sets are unordered, unindexed, and do not allow duplicates.</li>
                    <li>Items cannot be changed, but you can add or remove items.</li>
                    <li>Set operations include <code>union()</code>, <code>intersection()</code>, and <code>difference()</code>.</li>
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

export default PythonSets;
