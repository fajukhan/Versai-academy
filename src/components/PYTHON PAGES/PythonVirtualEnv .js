import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PythonVirtualEnv = () => {
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
              <h1>Python Virtual Environment (venv)</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonuserinput">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonfilehandling">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A <b>Virtual Environment</b> in Python is an isolated environment that allows you to manage
                dependencies for different projects separately. This helps avoid conflicts between packages
                and keeps your global Python installation clean.
              </p>

              {/* Example 1: Create Virtual Environment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Create a Virtual Environment</div>
                <div className="card-body">
                  <p>To create a virtual environment, use the built-in <code>venv</code> module:</p>
                  <pre className="bg-light p-3 rounded">
{`# Create virtual environment named 'env'
python -m venv env`}
                  </pre>
                  <p>This creates a folder named <code>env</code> that contains a standalone Python installation and packages directory.</p>
                  <a href="https://replit.com/~" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Activate Virtual Environment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Activating Virtual Environment</div>
                <div className="card-body">
                  <p>Activate the virtual environment depending on your operating system:</p>
            
                  <p>Once activated, you will see the virtual environment name (e.g., <code>(env)</code>) before your command prompt.</p>
                </div>
              </div>

              {/* Example 3: Installing Packages Inside VirtualEnv */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Install Packages Inside Virtual Environment</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# Install requests package
pip install requests

# List installed packages
pip list`}
                  </pre>
                  <p>Packages installed here will only be available inside the virtual environment.</p>
                </div>
              </div>

              {/* Example 4: Deactivate Virtual Environment */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Deactivate Virtual Environment</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# To exit the virtual environment
deactivate`}
                  </pre>
                  <p>This restores your system Python environment.</p>
                </div>
              </div>

              {/* Example 5: Requirements File */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Using requirements.txt</div>
                <div className="card-body">
                  <p>You can export and install project dependencies using <code>requirements.txt</code>:</p>
                  <pre className="bg-light p-3 rounded">
{`# Save installed packages
pip freeze > requirements.txt

# Install from requirements.txt
pip install -r requirements.txt`}
                  </pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>python -m venv env</code> to create a virtual environment.</li>
                    <li>Activate it using <code>source env/bin/activate</code> (Linux/macOS) or <code>.\env\Scripts\Activate</code> (Windows).</li>
                    <li>Install packages using <code>pip</code> inside the environment.</li>
                    <li>Deactivate with <code>deactivate</code>.</li>
                    <li>Use <code>requirements.txt</code> to share dependencies.</li>
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

export default PythonVirtualEnv;
