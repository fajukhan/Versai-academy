import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonDates = () => {
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
              <h1>Python Dates</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonmodules">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonmath">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Python has a built-in <code>datetime</code> module to work with dates and times.  
                You can get the current date and time, create custom dates, format them, and even perform date arithmetic.
              </p>

              {/* Example 1: Import datetime and get current date */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Current Date and Time</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import datetime

x = datetime.datetime.now()
print(x)`}
                  </pre>
                  <p><b>Output:</b> (will display current date & time)</p>
                  <pre className="bg-light p-3 rounded">{`2025-09-02 10:20:45.123456`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Create a specific date */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Creating a Date Object</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import datetime

x = datetime.datetime(2025, 1, 15)
print(x)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`2025-01-15 00:00:00`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Get year, month, day */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Accessing Date Parts</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import datetime

x = datetime.datetime.now()

print(x.year)
print(x.month)
print(x.day)`}
                  </pre>
                  <p><b>Output:</b> (depends on current date)</p>
                  <pre className="bg-light p-3 rounded">{`2025\n9\n2`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Formatting dates */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Formatting Dates with strftime()</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import datetime

x = datetime.datetime.now()

print(x.strftime("%A"))   # Weekday
print(x.strftime("%B"))   # Month name
print(x.strftime("%Y-%m-%d %H:%M:%S"))`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Tuesday\nSeptember\n2025-09-02 10:20:45`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Timedelta */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Date Arithmetic (timedelta)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import datetime

today = datetime.date.today()
tomorrow = today + datetime.timedelta(days=1)
yesterday = today - datetime.timedelta(days=1)

print("Today:", today)
print("Tomorrow:", tomorrow)
print("Yesterday:", yesterday)`}
                  </pre>
                  <p><b>Output:</b> (depends on current date)</p>
                  <pre className="bg-light p-3 rounded">{`Today: 2025-09-02\nTomorrow: 2025-09-03\nYesterday: 2025-09-01`}</pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6: ISO Format */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 6: ISO Format Dates</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import datetime

x = datetime.datetime.now()
print(x.isoformat())`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`2025-09-02T10:20:45.123456`}</pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>datetime</code> module to work with dates and times.</li>
                    <li><code>datetime.now()</code> gives the current date and time.</li>
                    <li>Create custom dates using <code>datetime(year, month, day)</code>.</li>
                    <li>Use <code>strftime()</code> for formatting dates.</li>
                    <li><code>timedelta</code> allows adding or subtracting dates.</li>
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

export default PythonDates;
