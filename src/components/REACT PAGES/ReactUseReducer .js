import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUseReducer = () => {
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
              <h1>React useReducer</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactuseref">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactusecallback">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>useReducer</b> is a React Hook used for managing complex state logic in functional components.
                It is an alternative to <code>useState</code> when you have multiple state transitions or complicated state logic.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Basic useReducer Example</h3>
              <p>Define a reducer function and use it with <code>useReducer</code>:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  );
}

export default Counter;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. Using useReducer with Objects</h3>
              <p>Manage more complex state objects with useReducer:</p>
              <pre className="bg-light p-3 rounded">
{`import React, { useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Advantages of useReducer</h3>
              <ul>
                <li>Better state management for complex logic.</li>
                <li>Centralizes state updates in a single reducer function.</li>
                <li>Works well with dispatch actions.</li>
                <li>Can be combined with useContext for global state management.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>useReducer</code> is ideal for complex state updates.</li>
                    <li>Reduces the need for multiple useState calls.</li>
                    <li>Improves readability and maintainability of state logic.</li>
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

export default ReactUseReducer;
