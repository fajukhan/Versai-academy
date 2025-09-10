import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonFunctions = () => {
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
              <h1>Python Functions</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonforloops">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonlambda">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A function in Python is a block of code that only runs when it is called. Functions help in code reusability and make programs modular.
              </p>

              {/* Example 1: Creating and calling a function */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating and Calling a Function</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def my_function():
    print("Hello from a function")

my_function()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Hello from a function</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Function with arguments */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Function with Arguments</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def greet(name):
    print("Hello, " + name)

greet("Alice")
greet("Bob")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, Alice\nHello, Bob`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Function with return value */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Function with Return Value</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def add(a, b):
    return a + b

result = add(5, 3)
print(result)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">8</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Default parameter value */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Default Parameter Value</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def greet(name="Guest"):
    print("Hello, " + name)

greet("Alice")
greet()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, Alice\nHello, Guest`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Keyword arguments */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Keyword Arguments</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def person(name, age):
    print(name + " is " + str(age) + " years old.")

person(age=25, name="John")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">John is 25 years old.</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Arbitrary Arguments (*args) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Arbitrary Arguments (*args)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def fruits(*names):
    print("The first fruit is " + names[0])

fruits("Apple", "Banana", "Cherry")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">The first fruit is Apple</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 7: Arbitrary Keyword Arguments (**kwargs) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 7: Arbitrary Keyword Arguments (**kwargs)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def person(**data):
    print("His last name is " + data["lname"])

person(fname="John", lname="Doe")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">His last name is Doe</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 8: Passing a list */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 8: Passing a List as Argument</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def my_function(food):
    for x in food:
        print(x)

fruits = ["apple", "banana", "cherry"]
my_function(fruits)`}
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
                    <li>Functions are created using the <code>def</code> keyword.</li>
                    <li>They can take arguments and return values.</li>
                    <li>Default parameters can be used when no argument is passed.</li>
                    <li><code>*args</code> and <code>**kwargs</code> allow multiple arguments.</li>
                    <li>Functions improve reusability and modularity of code.</li>
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

export default PythonFunctions;
