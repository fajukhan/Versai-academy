import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonOOP = () => {
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
              <h1>Python Object-Oriented Programming (OOP)</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonarray">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonclassesobjects">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python is an object-oriented programming language.  
                Almost everything in Python is an object, with its properties and methods.
              </p>

              <h3>Creating a Class and Object</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create a Class and Object</div>
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

              <h3>The __init__() Function</h3>
              <p>The <code>__init__()</code> method is called automatically when an object is created.</p>
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
{`John
36`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>The self Parameter</h3>
              <p>The <code>self</code> parameter is a reference to the current instance of the class.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using self</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def myfunc(self):
        print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Hello my name is John</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Modifying and Deleting Properties</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Modify and Delete Object Properties</div>
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
# print(p1.age)  # will cause AttributeError`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">40</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Inheritance</h3>
              <p>Inheritance allows us to define a class that inherits all methods and properties from another class.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Inheritance</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

class Student(Person):
    def __init__(self, fname, lname, year):
        super().__init__(fname, lname)
        self.graduationyear = year

x = Student("Mike", "Olsen", 2019)
x.printname()
print(x.graduationyear)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Mike Olsen
2019`}
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
                    <li>OOP is based on classes and objects.</li>
                    <li><code>__init__()</code> initializes object properties.</li>
                    <li><code>self</code> represents the instance of the class.</li>
                    <li>Objects can have their properties modified or deleted.</li>
                    <li>Inheritance lets classes share functionality.</li>
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

export default PythonOOP;
