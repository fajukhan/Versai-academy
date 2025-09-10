import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonPolymorphism = () => {
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
              <h1>Python Polymorphism</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythoniterators">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonscope">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Polymorphism</b> in Python means the same function or operator can have different meanings depending on the object that is being used. 
                It allows us to write flexible and reusable code.
              </p>

              {/* Example 1: Built-in Polymorphism */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Built-in Polymorphism</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`print(len("Hello"))   # Works on string
print(len([1, 2, 3]))  # Works on list
print(len({1: "a", 2: "b"}))  # Works on dictionary`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`5\n3\n2`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Polymorphism with Inheritance */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Polymorphism with Inheritance</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Animal:
    def sound(self):
        return "Some sound"

class Dog(Animal):
    def sound(self):
        return "Bark"

class Cat(Animal):
    def sound(self):
        return "Meow"

animals = [Dog(), Cat()]

for a in animals:
    print(a.sound())`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Bark\nMeow`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Polymorphism with Functions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Polymorphism with Functions</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def add(x, y, z=0):
    return x + y + z

print(add(2, 3))      # 2 arguments
print(add(2, 3, 4))   # 3 arguments`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`5\n9`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Operator Overloading */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Operator Overloading</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Book:
    def __init__(self, pages):
        self.pages = pages

    def __add__(self, other):
        return self.pages + other.pages

b1 = Book(100)
b2 = Book(200)

print(b1 + b2)  # Uses __add__ method`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`300`}</pre>
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
                    <li>Polymorphism allows the same method or operator to work in different ways depending on the object.</li>
                    <li>It can be seen in built-in functions like <code>len()</code>, operators, and class methods.</li>
                    <li>Inheritance and method overriding provide polymorphic behavior.</li>
                    <li>Operator overloading lets us define how operators work with user-defined objects.</li>
                  </ul>
                </div>
              </div>

              {/* Prev / Next Again */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="pythonoop">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonmodules">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PythonPolymorphism;
