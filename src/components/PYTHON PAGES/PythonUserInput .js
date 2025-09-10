import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonUserInput = () => {
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
              <h1>Python User Input</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonstringformatting">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonvirtualenv">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python allows users to provide input using the built-in{" "}
                <code>input()</code> function. The input is always returned as a{" "}
                <b>string</b>, so you may need to convert it into integers, floats, or other data types.
              </p>

              {/* Example 1: Basic Input */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Basic User Input</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`name = input("Enter your name: ")
print("Hello, " + name + "!")`}
                  </pre>
                  <p><b>Output (if user types <code>Alice</code>):</b></p>
                  <pre className="bg-light p-3 rounded">{`Enter your name: Alice
Hello, Alice!`}</pre>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Integer Input */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Converting Input to Integer</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`age = int(input("Enter your age: "))
print("You are", age, "years old.")`}
                  </pre>
                  <p><b>Output (if user types <code>25</code>):</b></p>
                  <pre className="bg-light p-3 rounded">{`Enter your age: 25
You are 25 years old.`}</pre>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Float Input */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Converting Input to Float</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`height = float(input("Enter your height in meters: "))
print("Your height is", height, "meters.")`}
                  </pre>
                  <p><b>Output (if user types <code>1.75</code>):</b></p>
                  <pre className="bg-light p-3 rounded">{`Enter your height in meters: 1.75
Your height is 1.75 meters.`}</pre>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Multiple Inputs */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Multiple Inputs</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"My name is {name} and I am {age} years old.")`}
                  </pre>
                  <p><b>Output (if user types <code>Bob</code> and <code>30</code>):</b></p>
                  <pre className="bg-light p-3 rounded">{`Enter your name: Bob
Enter your age: 30
My name is Bob and I am 30 years old.`}</pre>
                </div>
              </div>

              {/* Example 5: Simple Calculator */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Simple Calculator</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print("The sum is:", num1 + num2)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Enter first number: 5
Enter second number: 10
The sum is: 15`}</pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>input()</code> to get user input.</li>
                    <li>Input is always returned as a <b>string</b>.</li>
                    <li>Convert input using <code>int()</code>, <code>float()</code>, or other functions as needed.</li>
                    <li>Input can be used in calculations, conditions, and more.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PythonUserInput;
