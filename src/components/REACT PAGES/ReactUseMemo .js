import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUseMemo = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
                             {/* Sidebar (Left - col-2) */}
                            <SidebarReact />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React useMemo</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactusecallback">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactcustomhooks">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>useMemo</b> is a React Hook that memoizes the result of a calculation.  
                It helps optimize performance by preventing expensive recalculations on every render when dependencies haven’t changed.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Basic useMemo Example</h3>
              <p>Memoize a value so that it is only recalculated when dependencies change:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const doubleCount = useMemo(() => {
    console.log('Calculating doubleCount...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Type something" />
    </div>
  );
}

export default App;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. useMemo with Expensive Calculation</h3>
              <p>Use useMemo to avoid recalculating expensive operations unnecessarily:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useMemo } from 'react';

function factorial(n) {
  console.log('Calculating factorial...');
  return n <= 0 ? 1 : n * factorial(n - 1);
}

function App() {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState('');

  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <p>Factorial of {number} is {fact}</p>
      <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type something" />
    </div>
  );
}

export default App;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Advantages of useMemo</h3>
              <ul>
                <li>Prevents unnecessary recalculations on every render.</li>
                <li>Optimizes performance for expensive calculations.</li>
                <li>Useful when passing computed values to child components.</li>
                <li>Works well with React.memo for rendering optimizations.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>useMemo</code> memoizes the result of a calculation.</li>
                    <li>Dependencies array controls when the memoized value is recalculated.</li>
                    <li>Helps improve performance for expensive calculations in React components.</li>
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

export default ReactUseMemo;
