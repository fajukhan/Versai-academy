import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUseRef = () => {
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
              <h1>React useRef</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactusecontext">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactusereducer">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>useRef</b> is a React Hook that allows you to persist values between renders. 
                It can be used to access DOM elements directly or to store mutable values without causing re-renders.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Creating a Reference</h3>
              <p>Create a reference using <code>useRef()</code>:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  return <input ref={inputRef} />;
}

export default MyComponent;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. Accessing DOM Elements</h3>
              <p>You can access DOM elements using the <code>ref</code> object:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus"/>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Storing Mutable Values</h3>
              <p>useRef can also store mutable values without causing re-renders:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useRef } from 'react';

function Timer() {
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    console.log("Count:", count.current);
  };

  return <button onClick={handleClick}>Increase Count</button>;
}

export default Timer;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>4. Advantages of useRef</h3>
              <ul>
                <li>Access DOM elements directly without re-rendering.</li>
                <li>Store mutable values across renders.</li>
                <li>Useful for timers, animations, and third-party libraries.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>useRef</code> creates a persistent reference for DOM elements or values.</li>
                    <li>It does not cause re-renders when its value changes.</li>
                    <li>Helps in managing focus, timers, and other mutable data.</li>
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

export default ReactUseRef;
