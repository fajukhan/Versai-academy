import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonPip = () => {
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
              <h1>Python PIP</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonregex">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythontryexcept">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>PIP</b> is a package manager for Python.  
                It allows you to install and manage additional libraries and dependencies that are not included in the standard Python library.
              </p>

              {/* Example 1: Check pip version */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Check PIP version</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip --version</pre>
                  <p><b>Output (example):</b></p>
                  <pre className="bg-light p-3 rounded">{`pip 23.1.2 from C:\\Python\\Lib\\site-packages\\pip (python 3.11)`}</pre>
                </div>
              </div>

              {/* Example 2: Install package */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Install a package</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip install requests</pre>
                  <p><b>Explanation:</b> Installs the <code>requests</code> library for making HTTP requests.</p>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Uninstall package */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Uninstall a package</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip uninstall requests</pre>
                  <p>This command removes the <code>requests</code> library from your environment.</p>
                </div>
              </div>

              {/* Example 4: List installed packages */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Show installed packages</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip list</pre>
                  <p>Shows all installed packages and their versions.</p>
                </div>
              </div>

              {/* Example 5: Upgrade a package */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Upgrade a package</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip install --upgrade requests</pre>
                  <p>Updates the <code>requests</code> package to the latest version.</p>
                </div>
              </div>

              {/* Example 6: Install from requirements.txt */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: Install from requirements.txt</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip install -r requirements.txt</pre>
                  <p>Installs all packages listed in <code>requirements.txt</code>.</p>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>pip --version</code> → Check pip version.</li>
                    <li><code>pip install package_name</code> → Install a package.</li>
                    <li><code>pip uninstall package_name</code> → Remove a package.</li>
                    <li><code>pip list</code> → Show installed packages.</li>
                    <li><code>pip install --upgrade package_name</code> → Update a package.</li>
                    <li><code>pip install -r requirements.txt</code> → Install multiple packages at once.</li>
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

export default PythonPip;
