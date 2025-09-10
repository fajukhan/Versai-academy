import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUseContext = () => {
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
              <h1>React useContext</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactuseeffect">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactuseref">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>useContext</b> is a React Hook that allows you to access the context value in functional components.
                It is used to avoid prop drilling and share state or functions globally across components.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Creating a Context</h3>
              <p>Create a context using <code>React.createContext()</code>:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { createContext } from 'react';

export const MyContext = createContext();`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. Providing Context Value</h3>
              <p>Wrap your component tree with <code>Context.Provider</code> to provide a value:</p>
              <pre className="bg-light p-3 rounded">
{`import React from 'react';
import { MyContext } from './MyContext';
import Child from './Child';

function App() {
  return (
    <MyContext.Provider value="Hello from Context">
      <Child />
    </MyContext.Provider>
  );
}

export default App;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Consuming Context in Child Component</h3>
              <p>Access context value using <code>useContext</code>:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function Child() {
  const value = useContext(MyContext);
  return <h2>{value}</h2>;
}

export default Child;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>4. Advantages of useContext</h3>
              <ul>
                <li>Avoids prop drilling and passing props manually.</li>
                <li>Provides global state management for small apps.</li>
                <li>Simple API using <code>createContext</code> and <code>useContext</code>.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>useContext</code> lets functional components access context values.</li>
                    <li>Works with <code>Context.Provider</code> to provide values.</li>
                    <li>Helps avoid prop drilling in component tree.</li>
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

export default ReactUseContext;
