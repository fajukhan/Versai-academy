import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonClassesObjects = () => {
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
              <h1>Python Classes and Objects</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonoop">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythoninheritance">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python is an object-oriented language. Classes provide a way of bundling data and functionality together.
                Objects are instances of classes.
              </p>

              <h3>Creating a Class and Object</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Simple Class</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class MyClass:
    x = 5

obj = MyClass()
print(obj.x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">5</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>The __init__() Constructor</h3>
              <p>
                The <code>__init__()</code> function is a special method automatically called when a new object is created.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using __init__()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)
print(p1.name)
print(p1.age)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
John
36
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Object Methods</h3>
              <p>
                Objects can have methods, which are functions defined inside a class.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Object Method</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print("Hello, my name is " + self.name)

p1 = Person("Alice", 30)
p1.greet()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Hello, my name is Alice</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Modifying and Deleting Properties</h3>
              <p>You can modify or delete properties of an object after creation.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Modify and Delete Properties</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)
p1.age = 40
print(p1.age)

del p1.age
# print(p1.age)  # AttributeError`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">40</pre>
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
                    <li>A class is a blueprint for objects.</li>
                    <li>Objects are instances of classes.</li>
                    <li><code>__init__()</code> initializes object properties.</li>
                    <li>Methods define object behaviors.</li>
                    <li>Properties can be modified or deleted after creation.</li>
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

export default PythonClassesObjects;
