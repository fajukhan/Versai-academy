import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactCustomHooks = () => {
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
              <h1>React Custom Hooks</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactusememo">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="/">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Custom Hooks</b> in React allow you to extract reusable logic from components into separate functions.  
                They follow the naming convention of starting with "use" and can call other hooks internally.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Creating a Custom Hook</h3>
              <p>Example: Creating a hook to manage form input state.</p>
              <pre className="bg-light p-3 rounded">
{`import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);
  return [value, handleChange];
}

export default useInput;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. Using a Custom Hook</h3>
              <p>Using the custom hook inside a component:</p>
              <pre className="bg-light p-3 rounded">
{`import React from 'react';
import useInput from './useInput';

function App() {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Name: \${name}, Email: \${email}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={handleNameChange} placeholder="Name" />
      <input value={email} onChange={handleEmailChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Advantages of Custom Hooks</h3>
              <ul>
                <li>Encapsulates reusable logic for multiple components.</li>
                <li>Improves code readability and maintainability.</li>
                <li>Can call other hooks inside them.</li>
                <li>Follows standard hook rules (useState, useEffect, etc.).</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Custom Hooks are functions that start with "use" and encapsulate reusable hook logic.</li>
                    <li>They help you avoid code duplication across components.</li>
                    <li>Use them just like built-in hooks inside functional components.</li>
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

export default ReactCustomHooks;
