import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonDeleteFile = () => {
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
              <h1>Python Delete File</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonwritefile">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonnumpy">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python provides the <code>os</code> module to work with file and directory operations.  
                You can delete files using <code>os.remove()</code> and delete entire folders using <code>os.rmdir()</code>.  
                Always check if a file exists before trying to delete it to avoid errors.
              </p>

              {/* Example 1: Delete a file */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Delete a File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import os

# delete demo.txt file
os.remove("demo.txt")`}  
                  </pre>
                  <p><b>Result:</b> Removes <code>demo.txt</code> from your project folder.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Avoid error if file does not exist */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Check if File Exists Before Deleting</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import os

if os.path.exists("demo.txt"):
    os.remove("demo.txt")
    print("File deleted successfully")
else:
    print("The file does not exist")`}  
                  </pre>
                  <p><b>Result:</b> Prevents an error by checking file existence first.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Delete a folder */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Delete a Folder</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import os

# delete a folder named "myfolder"
os.rmdir("myfolder")`}  
                  </pre>
                  <p><b>Result:</b> Removes the folder <code>myfolder</code>, but only if it is empty.</p>
                  <p className="text-muted">Note: To delete non-empty folders, use the <code>shutil</code> module.</p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Delete non-empty folder */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Delete Non-Empty Folder</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import shutil

# delete folder and all its contents
shutil.rmtree("myfolder")`}  
                  </pre>
                  <p><b>Result:</b> Deletes the folder <code>myfolder</code> and all files inside it.</p>
                  <p className="text-danger"><b>Warning:</b> Be careful using <code>shutil.rmtree()</code>, as it permanently deletes everything inside the folder.</p>
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
                    <li>Use <code>os.remove()</code> to delete a file.</li>
                    <li>Use <code>os.path.exists()</code> to check before deleting.</li>
                    <li>Use <code>os.rmdir()</code> to delete an empty folder.</li>
                    <li>Use <code>shutil.rmtree()</code> to delete a folder and its contents.</li>
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

export default PythonDeleteFile;
