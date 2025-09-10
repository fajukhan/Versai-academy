import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonInheritance = () => {
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
              <h1>Python Inheritance</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonclassesobjects">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythoniterators">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Inheritance allows us to define a class that inherits all the methods and properties from another class.
                <br /> 
                - Parent class (base class) is the class being inherited from.  
                - Child class (derived class) is the class that inherits from the parent.
              </p>

              <h3>Creating a Parent Class</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Parent Class</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(self.name, self.age)

p1 = Person("John", 36)
p1.display()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">John 36</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Creating a Child Class</h3>
              <p>
                A child class can inherit the methods and properties of its parent.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Child Class</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Student(Person):
    pass

s1 = Student("Alice", 20)
s1.display()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Alice 20</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Adding __init__() in Child Class</h3>
              <p>
                If you add an <code>__init__()</code> method in the child class, it overrides the parent’s <code>__init__()</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Override __init__()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

s1 = Student("Alice", 20, "S123")
print(s1.name, s1.age, s1.student_id)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Alice 20 S123</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Overriding Methods</h3>
              <p>
                Child classes can override methods defined in the parent class.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Method Override</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def speak(self):
        print("I am a person")

class Student(Person):
    def speak(self):
        print("I am a student")

p = Person()
s = Student()

p.speak()
s.speak()`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
I am a person
I am a student
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Using super()</h3>
              <p>
                The <code>super()</code> function allows the child class to call methods from the parent class.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: super() Function</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello, my name is " + self.name)

class Student(Person):
    def __init__(self, name, student_id):
        super().__init__(name)
        self.student_id = student_id

s1 = Student("Alice", "S123")
s1.greet()
print(s1.student_id)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello, my name is Alice
S123
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
                    <li>Inheritance allows classes to reuse code from other classes.</li>
                    <li><b>Parent class</b> = base class, <b>Child class</b> = derived class.</li>
                    <li><code>__init__()</code> in child overrides parent’s constructor.</li>
                    <li>Methods can be overridden in child classes.</li>
                    <li><code>super()</code> is used to access parent class methods and properties.</li>
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

export default PythonInheritance;
