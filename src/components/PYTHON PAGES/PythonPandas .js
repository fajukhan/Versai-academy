import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonPandas = () => {
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
              <h1>Python Pandas Tutorial</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonnumpy">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonscipy">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Pandas</b> is a fast, powerful, and flexible open-source library for data manipulation and analysis.  
                It provides two main data structures: <code>Series</code> (1D) and <code>DataFrame</code> (2D table-like).
              </p>

              {/* Installation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Installing Pandas</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip install pandas</pre>
                  <p>After installing, import it using <code>import pandas as pd</code>.</p>
                </div>
              </div>

              {/* Example 1: Series */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating a Series</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import pandas as pd

data = [10, 20, 30]
series = pd.Series(data)

print(series)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`0    10
1    20
2    30
dtype: int64`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: DataFrame */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Creating a DataFrame</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35]
}

df = pd.DataFrame(data)
print(df)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`      Name  Age
0    Alice   25
1      Bob   30
2  Charlie   35`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Read CSV */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Reading a CSV File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())  # prints first 5 rows`}
                  </pre>
                  <p><b>Output:</b> Displays the first 5 rows of <code>data.csv</code>.</p>
                </div>
              </div>

              {/* Example 4: DataFrame Operations */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: DataFrame Operations</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35],
    "Salary": [50000, 60000, 70000]
}

df = pd.DataFrame(data)

print(df["Name"])          # Access a column
print(df.iloc[0])          # Access first row
print(df["Salary"].mean()) # Average salary`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`0      Alice
1        Bob
2    Charlie
Name: Name, dtype: object

Name      Alice
Age           25
Salary     50000
Name: 0, dtype: object

60000.0`}
                  </pre>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Filtering Data */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Filtering Data</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35]
}

df = pd.DataFrame(data)
filtered = df[df["Age"] > 28]

print(filtered)`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`      Name  Age
1      Bob   30
2  Charlie   35`}
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
                    <li>Pandas provides <b>Series</b> (1D) and <b>DataFrame</b> (2D).</li>
                    <li>Install with <code>pip install pandas</code>.</li>
                    <li>Data can be read from CSV, Excel, SQL, JSON, etc.</li>
                    <li>Supports indexing, filtering, and aggregation operations.</li>
                    <li>Powerful for data analysis and cleaning.</li>
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

export default PythonPandas;
