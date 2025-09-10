import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonDictionaries = () => {
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
              <h1>Python Dictionaries</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonsets">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonifelse">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A dictionary is a collection of key-value pairs.  
                Dictionaries are ordered (from Python 3.7+), changeable, and do not allow duplicate keys.
              </p>

              {/* Example 1: Creating a Dictionary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating a Dictionary</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`person = {
  "name": "John",
  "age": 30,
  "city": "New York"
}
print(person)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'name': 'John', 'age': 30, 'city': 'New York'}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Accessing Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Accessing Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`person = {"name": "John", "age": 30, "city": "New York"}
print(person["name"])
print(person.get("age"))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`John\n30`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Changing Values */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Changing Values</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`person = {"name": "John", "age": 30, "city": "New York"}
person["age"] = 40
print(person)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'name': 'John', 'age': 40, 'city': 'New York'}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Looping Through Dictionary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Looping Through Dictionary</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`person = {"name": "John", "age": 30, "city": "New York"}
for key, value in person.items():
    print(key, ":", value)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`name : John\nage : 30\ncity : New York`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Adding Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Adding Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`person = {"name": "John", "age": 30}
person["city"] = "New York"
print(person)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'name': 'John', 'age': 30, 'city': 'New York'}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: Removing Items */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Removing Items</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`person = {"name": "John", "age": 30, "city": "New York"}
person.pop("age")
print(person)

del person["city"]
print(person)

person.clear()
print(person)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'name': 'John', 'city': 'New York'}\n{'name': 'John'}\n{}`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 7: Nested Dictionaries */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 7: Nested Dictionaries</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`myfamily = {
  "child1": {"name": "Emil", "year": 2004},
  "child2": {"name": "Tobias", "year": 2007},
  "child3": {"name": "Linus", "year": 2011}
}
print(myfamily)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`{'child1': {'name': 'Emil', 'year': 2004}, 'child2': {'name': 'Tobias', 'year': 2007}, 'child3': {'name': 'Linus', 'year': 2011}}`}</pre>
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
                    <li>Dictionaries store data as key-value pairs.</li>
                    <li>They are ordered, changeable, and do not allow duplicate keys.</li>
                    <li>Methods like <code>get()</code>, <code>items()</code>, <code>pop()</code>, and <code>update()</code> are commonly used.</li>
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

export default PythonDictionaries;
