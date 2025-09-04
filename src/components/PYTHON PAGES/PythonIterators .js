import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonIterators = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

               {/* Sidebar (Left - col-2) */}
            <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
              <h5 className="fw-bold">Python Tutorial</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="PythonTutorial">Python HOME</a>
                </li>
                <li>
                  <a href="pythonintroduction">Python Intro</a>
                </li>
                <li>
                  <a href="pythongettingstarted">Python Get Started</a>
                </li>
                <li>
                  <a href="pythonSyntax">Python Syntax</a>
                </li>
                <li>
                  <a href="pythoncomments">Python Comments</a>
                </li>
                <li>
                  <a href="pythonvariables">Python Variables</a>
                </li>
                <li>
                  <a href="pythondatatypes">Python Data Types</a>
                </li>
                <li>
                  <a href="pythonnumbers">Python Numbers</a>
                </li>
                <li>
                  <a href="pythoncasting">Python Casting</a>
                </li>
                <li>
                  <a href="pythonstrings">Python Strings</a>
                </li>
                <li>
                  <a href="pythonbooleans">Python Booleans</a>
                </li>
                <li>
                  <a href="pythonoperators">Python Operators</a>
                </li>
                <li>
                  <a href="pythonlist">Python Lists</a>
                </li>
                <li>
                  <a href="pythontuples">Python Tuples</a>
                </li>
                <li>
                  <a href="pythonsets">Python Sets</a>
                </li>
                <li>
                  <a href="pythondictionaries">Python Dictionaries</a>
                </li>
                <li>
                  <a href="pythonifelse">Python If...Else</a>
                </li>
                <li>
                  <a href="pythonmatch">Python Match</a>
                </li>
                <li>
                  <a href="pythonwhileloops">Python While Loops</a>
                </li>
                <li>
                  <a href="pythonforloops">Python For Loops</a>
                </li>
                <li>
                  <a href="pythonfunctions">Python Functions</a>
                </li>
                <li>
                  <a href="pythonlambda">Python Lambda</a>
                </li>
                <li>
                  <a href="pythonarray">Python Arrays</a>
                </li>
                <li>
                  <a href="pythonoop">Python OOP</a>
                </li>
                <li>
                  <a href="pythonclassesobjects">Python Classes/Objects</a>
                </li>
                <li>
                  <a href="pythoninheritance">Python Inheritance</a>
                </li>
                <li>
                  <a href="pythoniterators">Python Iterators</a>
                </li>
                <li>
                  <a href="pythonpolymorphism">Python Polymorphism</a>
                </li>
                <li>
                  <a href="pythonscope">Python Scope</a>
                </li>
                <li>
                  <a href="pythonmodules">Python Modules</a>
                </li>
                <li>
                  <a href="pythondates">Python Dates</a>
                </li>
                <li>
                  <a href="pythonmath">Python Math</a>
                </li>
                <li>
                  <a href="pythonjson">Python JSON</a>
                </li>
                <li>
                  <a href="pythonregex">Python RegEx</a>
                </li>
                <li>
                  <a href="pytonpip">Python PIP</a>
                </li>
                <li>
                  <a href="pythontryexcept">Python Try...Except</a>
                </li>
                <li>
                  <a href="pythonstringformatting">Python String Formatting</a>
                </li>
                <li>
                  <a href="pythonuserinput">Python User Input</a>
                </li>
                <li>
                  <a href="pythonvirtualenv">Python VirtualEnv</a>
                </li>
              </ul>

              <h5 className="fw-bold">File Handling</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="pythonfilehandling">Python File Handling</a>
                </li>
                <li>
                  <a href="pythonreadfile">Python Read Files</a>
                </li>
                <li>
                  <a href="pythonwritefile">Python Write/Create Files</a>
                </li>
                <li>
                  <a href="pythondeletefile">Python Delete Files</a>
                </li>
              </ul>

              <h5 className="fw-bold">Python Modules</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="pythonnumpy">NumPy Tutorial</a>
                </li>
                <li>
                  <a href="pythonpandas">Pandas Tutorial</a>
                </li>
                <li>
                  <a href="pythonscipy">SciPy Tutorial</a>
                </li>
                <li>
                  <a href="pythondjango">Django Tutorial</a>
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Python Iterators</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythoninheritance">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonpolymorphism">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                An <b>iterator</b> is an object that represents a stream of data. Iterators implement the iterator protocol:
                they have an <code>__iter__()</code> method that returns the iterator object itself and a <code>__next__()</code> method that returns the next value and raises <code>StopIteration</code> when no items remain.
                Collections like lists, tuples, dicts and sets are <b>iterables</b> (they can produce an iterator).
              </p>

              {/* Example 1: iter() and next() */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create iterator from list (iter() & next())</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`items = [10, 20, 30]
it = iter(items)

print(next(it))  # 10
print(next(it))  # 20
print(next(it))  # 30
# next(it) would now raise StopIteration`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`10\n20\n30`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: using iterator in for loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using iterator implicitly with for</div>
                <div className="card-body">
               <pre className="bg-light p-3 rounded">
{`items = [1, 2, 3]
for x in items:
    print(x)

# The for loop internally calls iter(items) and repeatedly calls next()`}
</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Custom iterator class */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Custom iterator (Fibonacci)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Fibonacci:
    def __init__(self, n):
        self.n = n      # how many numbers to generate
        self.i = 0
        self.a = 0
        self.b = 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.i >= self.n:
            raise StopIteration
        if self.i == 0:
            self.i += 1
            return self.a
        elif self.i == 1:
            self.i += 1
            return self.b
        else:
            self.a, self.b = self.b, self.a + self.b
            self.i += 1
            return self.b

fib = Fibonacci(5)
for num in fib:
    print(num)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`0\n1\n1\n2\n3`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: iter(callable, sentinel) */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Iterator from callable + sentinel</div>
                <div className="card-body">
                  <p>
                    Python's <code>iter(callable, sentinel)</code> creates an iterator that calls the callable repeatedly until the callable returns the sentinel value.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`# Example: read lines from a file-like object until sentinel (demo using input is not ideal here)
# Using a simple counter example:
def read_value():
    global _v
    _v -= 1
    return _v

_v = 3
for x in iter(read_value, 0):   # stop when read_value() returns 0
    print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`2\n1`}</pre>
                  <p className="text-muted">Note: in real code you can use <code>iter(file.readline, '')</code> to iterate lines until EOF.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: itertools utilities */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: itertools (count + islice)</div>
                <div className="card-body">
                  <p>Using the <code>itertools</code> module to produce iterators for common tasks.</p>
                  <pre className="bg-light p-3 rounded">
{`import itertools
# count() produces an infinite iterator; use islice to limit it
for x in itertools.islice(itertools.count(10, 10), 5):
    print(x)`} 
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`10\n20\n30\n40\n50`}</pre>
                  <p className="text-muted">(Remember to import <code>itertools</code> in your code environment.)</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Extra: iterator exhaustion note */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Iterator Exhaustion</div>
                <div className="card-body">
                  <p>
                    Once an iterator is exhausted (i.e., <code>StopIteration</code> raised), you cannot reuse it — calling <code>iter()</code> on the original iterable again will create a fresh iterator.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`lst = [1,2]
it = iter(lst)
print(next(it))  # 1
print(next(it))  # 2
# now exhausted; next(it) would raise StopIteration

# new iterator:
it2 = iter(lst)
print(next(it2))  # 1`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`1\n2\n1`}</pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>An <code>iterable</code> produces an <code>iterator</code> via <code>iter()</code>.</li>
                    <li>An <code>iterator</code> implements <code>__iter__()</code> and <code>__next__()</code>.</li>
                    <li>Use <code>next()</code> to get the next item; <code>StopIteration</code> signals the end.</li>
                    <li>For loops use the iterator protocol under the hood.</li>
                    <li>Create custom iterators by implementing <code>__iter__</code> and <code>__next__</code>.</li>
                    <li>Use <code>itertools</code> for advanced iterator building blocks.</li>
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

export default PythonIterators;
