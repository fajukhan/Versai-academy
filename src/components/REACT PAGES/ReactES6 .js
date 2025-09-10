import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactES6 = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

                          {/* Sidebar (Left - col-2) */}
        <SidebarReact />


            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React ES6</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactupgrade">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactjsx">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                ES6 (ECMAScript 2015) introduced many new features to JavaScript which are commonly used in React applications.
                These features make code more concise, readable, and powerful.
              </p>

              {/* Example: let and const */}
              <h3>1. let and const</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Block-scoped variables</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`let name = "John";
const age = 25;

name = "David";   // allowed
// age = 30;      // Error: Assignment to constant variable

console.log(name, age);`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`David 25`}</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example: Arrow Functions */}
              <h3>2. Arrow Functions</h3>
              <p>Arrow functions provide a shorter syntax and automatically bind <code>this</code>.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Arrow function example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(5, 3));      // 8
console.log(addArrow(5, 3)); // 8`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example: Classes */}
              <h3>3. Classes</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Class and object</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, my name is " + this.name;
  }
}

const p1 = new Person("Alice", 22);
console.log(p1.greet());`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, my name is Alice`}</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example: Destructuring */}
              <h3>4. Destructuring</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Array & Object destructuring</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);  // red green

// Object destructuring
const user = { name: "Tom", age: 28 };
const { name, age } = user;
console.log(name, age);      // Tom 28`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example: Spread & Rest */}
              <h3>5. Spread and Rest Operators</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Spread & Rest usage</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);  // [1, 2, 3, 4]

// Rest
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));   // 6`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example: Modules */}
              <h3>6. Modules (import/export)</h3>
              <p>ES6 introduced modules to organize code better.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Module example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`// file: math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// file: app.js
import { add, multiply } from "./math.js";
console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>let</code> and <code>const</code> are block-scoped variables.</li>
                    <li>Arrow functions provide concise syntax and bind <code>this</code>.</li>
                    <li>Classes allow OOP-style programming in JavaScript.</li>
                    <li>Destructuring makes it easy to unpack arrays and objects.</li>
                    <li>Spread (<code>...</code>) copies elements, Rest (<code>...</code>) collects arguments.</li>
                    <li>Modules (<code>import/export</code>) help organize code.</li>
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

export default ReactES6;
