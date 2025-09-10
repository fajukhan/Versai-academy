import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUseCallback = () => {
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
              <h1>React useCallback</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactusereducer">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactusememo">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>useCallback</b> is a React Hook that returns a memoized version of a callback function.  
                It helps prevent unnecessary re-creations of functions, which can improve performance in certain situations, especially when passing callbacks to child components.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Basic useCallback Example</h3>
              <p>Memoize a function to prevent it from being recreated on every render:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. useCallback with Dependencies</h3>
              <p>Provide dependencies to control when the callback is recreated:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  return (
    <div>
      <p>Count: {count}</p>
      <input type="number" value={step} onChange={e => setStep(Number(e.target.value))} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Advantages of useCallback</h3>
              <ul>
                <li>Prevents unnecessary function re-creations.</li>
                <li>Helps improve performance in child components receiving callbacks.</li>
                <li>Works well with React.memo for optimized rendering.</li>
                <li>Useful in large-scale applications with complex state updates.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>useCallback</code> memoizes functions to prevent unnecessary re-creations.</li>
                    <li>Dependencies array controls when the callback should be updated.</li>
                    <li>Improves performance when passing callbacks to child components.</li>
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

export default ReactUseCallback;
