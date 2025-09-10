import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUseEffect = () => {
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
              <h1>React useEffect</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactusestate">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactusecontext">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>useEffect</b> is a React Hook that lets you perform side effects in functional components. 
                Examples of side effects include data fetching, subscriptions, or manually changing the DOM.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Basic useEffect Example</h3>
              <p>Run a side effect after the component renders:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return <h2>Timer: {count} seconds</h2>;
}

export default Timer;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. useEffect with Dependencies</h3>
              <p>Run the effect only when a specific value changes:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // effect runs only when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Cleanup in useEffect</h3>
              <p>Clean up resources when a component unmounts or before effect runs again:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useEffect } from 'react';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <h2>Window Width: {width}px</h2>;
}

export default WindowWidth;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>useEffect</code> lets you perform side effects in functional components.</li>
                    <li>Effects can depend on specific values using dependency arrays.</li>
                    <li>Always clean up subscriptions or intervals to avoid memory leaks.</li>
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

export default ReactUseEffect;
