import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonOperators = () => {
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
              <h1>Python Operators</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonbooleans">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonlist">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Operators are special symbols in Python that perform operations on values and variables.  
                Python divides the operators into several groups:
              </p>
              <ul>
                <li>Arithmetic Operators</li>
                <li>Assignment Operators</li>
                <li>Comparison Operators</li>
                <li>Logical Operators</li>
                <li>Identity Operators</li>
                <li>Membership Operators</li>
                <li>Bitwise Operators</li>
              </ul>

              {/* Arithmetic Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Arithmetic Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10
y = 3

print(x + y)   # Addition
print(x - y)   # Subtraction
print(x * y)   # Multiplication
print(x / y)   # Division
print(x % y)   # Modulus
print(x ** y)  # Exponentiation
print(x // y)  # Floor division`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`13
7
30
3.3333333333333335
1
1000
3`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Assignment Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Assignment Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 5
x += 3   # x = x + 3
print(x)

x -= 2   # x = x - 2
print(x)

x *= 4   # x = x * 4
print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`8
6
24`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Comparison Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Comparison Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 10
y = 20

print(x == y)  # Equal
print(x != y)  # Not equal
print(x > y)   # Greater than
print(x < y)   # Less than
print(x >= y)  # Greater or equal
print(x <= y)  # Less or equal`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`False
True
False
True
False
True`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Logical Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Logical Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 5

print(x > 3 and x < 10)  # True
print(x > 3 or x < 4)    # True
print(not(x > 3 and x < 10))  # False`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`True
True
False`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Identity Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Identity Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z)      # True (same object)
print(x is y)      # False (different objects)
print(x == y)      # True (same content)`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Membership Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Membership Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`fruits = ["apple", "banana"]

print("banana" in fruits)     # True
print("cherry" not in fruits) # True`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Bitwise Operators */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Bitwise Operators</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`x = 6   # 110 in binary
y = 3   # 011 in binary

print(x & y)  # AND → 2
print(x | y)  # OR → 7
print(x ^ y)  # XOR → 5
print(~x)     # NOT → -7
print(x << 2) # Left shift → 24
print(x >> 2) # Right shift → 1`}
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
                    <li>Python operators perform operations on variables and values.</li>
                    <li>They are divided into 7 categories: Arithmetic, Assignment, Comparison, Logical, Identity, Membership, Bitwise.</li>
                    <li>Operators are often used inside conditions and loops.</li>
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

export default PythonOperators;
