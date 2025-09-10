import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUseState = () => {
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
              <h1>React useState</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reacthooks">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactuseeffect">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>useState</b> is a React Hook that lets you add state to functional components.
                You can declare a state variable and a function to update it.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Basic useState Example</h3>
              <p>Example of a simple counter using <code>useState</code>:</p>
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

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. Multiple State Variables</h3>
              <p>You can use multiple state variables in one component:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <p>Name: {name}, Age: {age}</p>
    </div>
  );
}

export default Form;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Updating State Based on Previous State</h3>
              <p>Always use the callback version of setState when the new state depends on the previous state:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

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

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>useState</code> adds state to functional components.</li>
                    <li>You can declare multiple state variables.</li>
                    <li>Use the previous state callback when updating based on current state.</li>
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

export default ReactUseState;
