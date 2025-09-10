import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonJSON = () => {
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
              <h1>Python JSON</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonmath">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonregex">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data.  
                In Python, you can work with JSON using the built-in <code>json</code> module.
              </p>

              {/* Example 1: Convert from JSON to Python */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Convert JSON to Python (json.loads)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import json

# JSON string
x = '{"name":"John", "age":30, "city":"New York"}'

# parse JSON
y = json.loads(x)

print(y["age"])`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`30`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Convert Python to JSON */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Convert Python to JSON (json.dumps)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import json

# Python dictionary
person = {"name": "Alice", "age": 25, "city": "London"}

# convert into JSON
json_data = json.dumps(person)

print(json_data)`}
                  </pre>
                  <p><b>Output:</b> (string)</p>
                  <pre className="bg-light p-3 rounded">{`{"name": "Alice", "age": 25, "city": "London"}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Formatting JSON */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Format JSON with indentation</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import json

person = {"name": "Alice", "age": 25, "city": "London"}

# pretty print JSON
print(json.dumps(person, indent=4))`}
                  </pre>
                  <p><b>Output:</b> (formatted JSON)</p>
                  <pre className="bg-light p-3 rounded">{`{
    "name": "Alice",
    "age": 25,
    "city": "London"
}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Sorting keys */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Sort keys in JSON</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import json

person = {"name": "Alice", "age": 25, "city": "London"}

# sort keys
print(json.dumps(person, indent=4, sort_keys=True))`}
                  </pre>
                  <p><b>Output:</b> (keys sorted alphabetically)</p>
                  <pre className="bg-light p-3 rounded">{`{
    "age": 25,
    "city": "London",
    "name": "Alice"
}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Nested JSON */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Nested JSON</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import json

data = {
  "name": "Bob",
  "age": 28,
  "skills": ["Python", "Django", "Machine Learning"],
  "address": {"city": "Berlin", "zipcode": "10115"}
}

print(json.dumps(data, indent=4))`}
                  </pre>
                  <p><b>Output:</b> (nested JSON object)</p>
                  <pre className="bg-light p-3 rounded">{`{
    "name": "Bob",
    "age": 28,
    "skills": [
        "Python",
        "Django",
        "Machine Learning"
    ],
    "address": {
        "city": "Berlin",
        "zipcode": "10115"
    }
}`}</pre>
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
                    <li><code>json.loads()</code> → Parse JSON string into Python object.</li>
                    <li><code>json.dumps()</code> → Convert Python object into JSON string.</li>
                    <li>Options: <code>indent</code> for formatting, <code>sort_keys</code> for sorting.</li>
                    <li>Supports nested objects, arrays, and dictionaries.</li>
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

export default PythonJSON;
