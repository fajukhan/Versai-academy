import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactHooks = () => {
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
              <h1>React Hooks</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactsass">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactusestate">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React Hooks</b> are functions that let you "hook into" React state and lifecycle features from function components. Hooks allow you to use state, context, and other React features without writing a class.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. useState Hook</h3>
              <p>The <code>useState</code> hook lets you add state to functional components.</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

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

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. useEffect Hook</h3>
              <p>The <code>useEffect</code> hook lets you perform side effects in functional components.</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2>Seconds: {seconds}</h2>;
}

export default Timer;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. useContext Hook</h3>
              <p>The <code>useContext</code> hook lets you access context values in functional components.</p>
              <pre className="bg-light p-3 rounded">
{`import React, { createContext, useContext } from 'react';

const MyContext = createContext();

function Display() {
  const value = useContext(MyContext);
  return <h2>{value}</h2>;
}

function App() {
  return (
    <MyContext.Provider value="Hello from Context">
      <Display />
    </MyContext.Provider>
  );
}

export default App;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>4. Custom Hooks</h3>
              <p>You can create custom hooks to reuse logic across components.</p>
              <pre className="bg-light p-3 rounded">
{`import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Hooks let you use state, context, and lifecycle features in function components.</li>
                    <li>Common hooks: <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, etc.</li>
                    <li>Custom hooks allow reusing logic across multiple components.</li>
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

export default ReactHooks;
