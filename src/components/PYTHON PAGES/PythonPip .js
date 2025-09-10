import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonPip = () => {
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
