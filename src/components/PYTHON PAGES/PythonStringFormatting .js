import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonStringFormatting = () => {
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
              <h1>Python String Formatting</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythontryexcept">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonuserinput">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python provides several ways to format strings.  
                The most common methods are <b>f-strings</b>, <b>str.format()</b>, and <b>percent formatting</b>.  
                String formatting allows you to embed variables and expressions inside strings for cleaner output.
              </p>

              {/* Example 1: f-strings */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Using f-strings (Python 3.6+)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`My name is Alice and I am 25 years old.`}</pre>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: str.format() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using str.format()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`txt = "My name is {} and I am {} years old."
print(txt.format("Bob", 30))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`My name is Bob and I am 30 years old.`}</pre>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Index numbers in format */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using index numbers</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`txt = "The {0} is more expensive than the {1}."
print(txt.format("car", "bike"))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`The car is more expensive than the bike.`}</pre>
                </div>
              </div>

              {/* Example 4: Named placeholders */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Named placeholders</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`txt = "Hello, my name is {fname} {lname}."
print(txt.format(fname="John", lname="Doe"))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, my name is John Doe.`}</pre>
                </div>
              </div>

              {/* Example 5: Formatting numbers */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Format numbers</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`price = 49
txt = "The price is {:.2f} dollars"
print(txt.format(price))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`The price is 49.00 dollars`}</pre>
                </div>
              </div>

              {/* Example 6: Percentage formatting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Percent formatting</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`name = "Eve"
age = 22
print("My name is %s and I am %d years old." % (name, age))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`My name is Eve and I am 22 years old.`}</pre>
                </div>
              </div>

              {/* Example 7: Aligning text */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 7: Align text with format()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`print("{:<10} | {:^10} | {:>10}".format("left", "center", "right"))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`left       |   center   |      right`}</pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <b>f-strings</b> for modern, readable formatting.</li>
                    <li><code>str.format()</code> allows positional, keyword, and formatting options.</li>
                    <li>Percent formatting (<code>%</code>) is older but still works.</li>
                    <li>Use <code>:.2f</code> for floating-point precision formatting.</li>
                    <li>Alignment options: <code>{`:<`}</code> left, <code>{`:^`}</code> center, <code>{`:>`}</code> right.</li>
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

export default PythonStringFormatting;
