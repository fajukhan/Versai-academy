import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonCasting = () => {
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
              <h1>Python Casting</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonnumbers">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonstrings">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In Python, casting means converting one data type into another.  
                Python provides built-in functions like <code>int()</code>, <code>float()</code>, and <code>str()</code> to perform explicit type conversions.
              </p>

              {/* Example 1: int() Casting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: int() Casting</div>
                <div className="card-body">
                  <p>The <code>int()</code> function converts values into integers.</p>
                  <pre className="bg-light p-3 rounded">
{`x = int(1)      # from int
y = int(2.8)    # from float
z = int("3")    # from string

print(x)
print(y)
print(z)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`1
2
3`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: float() Casting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: float() Casting</div>
                <div className="card-body">
                  <p>The <code>float()</code> function converts values into floating point numbers.</p>
                  <pre className="bg-light p-3 rounded">
{`a = float(1)      # from int
b = float(2.8)    # from float
c = float("3")    # from string
d = float("4.2")  # from string with decimal

print(a)
print(b)
print(c)
print(d)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`1.0
2.8
3.0
4.2`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: str() Casting */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: str() Casting</div>
                <div className="card-body">
                  <p>The <code>str()</code> function converts values into strings.</p>
                  <pre className="bg-light p-3 rounded">
{`p = str("s1")  # string
q = str(2)      # int to string
r = str(3.0)    # float to string

print(p)
print(q)
print(r)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`s1
2
3.0`}
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
                    <li><code>int()</code> → converts values to integer.</li>
                    <li><code>float()</code> → converts values to float.</li>
                    <li><code>str()</code> → converts values to string.</li>
                    <li>Casting is useful when working with mixed data types.</li>
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

export default PythonCasting;
