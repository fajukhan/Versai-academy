import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonTutorial = () => {
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
              <h1>Python Tutorial</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="/">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonintroduction">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python is a powerful, high-level programming language. It is widely used in web development, data science, machine learning, artificial intelligence, automation, and many more fields.
              </p>

              {/* Example 1 Hello World */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Print Hello World</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`print("Hello, World!")`}
                  </pre>
                  <p><b>Result:</b> Prints Hello, World! to the console.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2 Indentation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Indentation</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`if 5 > 2:
  print("Five is greater than two!")`}
                  </pre>
                  <p><b>Result:</b> Prints the message because indentation is required in Python.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3 Data Types */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Data Types</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 5       # int
y = 3.14    # float
name = "John"  # string
is_active = True  # boolean`}
                  </pre>
                  <p><b>Result:</b> Shows different built-in data types in Python.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4 If Else */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: If...Else</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`age = 18
if age >= 18:
  print("You are an adult")
else:
  print("You are a minor")`}
                  </pre>
                  <p><b>Result:</b> Prints "You are an adult" if age is greater than or equal to 18.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5 Loops */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: For Loop</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`for i in range(5):
  print(i)`}
                  </pre>
                  <p><b>Result:</b> Prints numbers from 0 to 4.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 6 Functions */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Functions</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`def greet(name):
  return "Hello, " + name

print(greet("Alice"))`}
                  </pre>
                  <p><b>Result:</b> Prints Hello, Alice.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 7 OOP */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 7: Classes and Objects</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 30)
print(p1.name)
print(p1.age)`}
                  </pre>
                  <p><b>Result:</b> Prints John and 30.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 8 File Handling */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 8: File Handling</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`f = open("test.txt", "w")
f.write("Hello File")
f.close()

f = open("test.txt", "r")
print(f.read())`}
                  </pre>
                  <p><b>Result:</b> Creates a file and writes "Hello File" into it.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 9 Exception Handling */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 9: Exception Handling</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`try:
  print(x)
except:
  print("An error occurred")`}
                  </pre>
                  <p><b>Result:</b> Catches an error if variable is undefined.</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Python Tutorial Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>print()</code> → Output function</li>
                    <li><code>if...else</code> → Conditional statements</li>
                    <li><code>for / while loops</code> → Iteration</li>
                    <li><code>functions</code> → Reusable code blocks</li>
                    <li><code>classes</code> → Object-oriented programming</li>
                    <li><code>files</code> → Read and write operations</li>
                    <li><code>try...except</code> → Exception handling</li>
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

export default PythonTutorial;
