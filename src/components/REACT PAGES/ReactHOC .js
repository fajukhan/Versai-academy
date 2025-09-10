import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactHOC = () => {
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
              <h1>React HOC (Higher-Order Component)</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactforwardref">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactsass">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Higher-Order Component (HOC)</b> is a function that takes a component and returns a new component.  
                HOCs are used for reusing component logic, such as authentication, theming, or data fetching.
              </p>

              <h3>1. Basic Example</h3>
              <pre className="bg-light p-3 rounded">{`import React from "react";

// HOC function
function withLogger(WrappedComponent) {
  return function(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

// Original Component
function Hello(props) {
  return <h2>Hello {props.name}</h2>;
}

// Wrapped Component
const HelloWithLogger = withLogger(Hello);

function App() {
  return <HelloWithLogger name="React" />;
}

export default App;`}</pre>

              <button className="try-btn my-5">Try it Yourself »</button>

              <h3>2. Using HOC for Conditional Rendering</h3>
              <pre className="bg-light p-3 rounded">{`import React from "react";

function withAuth(WrappedComponent) {
  return function(props) {
    const isLoggedIn = true;
    if (!isLoggedIn) return <h2>Access Denied</h2>;
    return <WrappedComponent {...props} />;
  };
}

function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return <ProtectedDashboard />;
}

export default App;`}</pre>

              <button className="try-btn my-5">Try it Yourself »</button>

              <h3>3. Advantages of HOC</h3>
              <ul>
                <li>Code reuse and logic abstraction.</li>
                <li>Enhance components without modifying them directly.</li>
                <li>Works well for cross-cutting concerns like logging, auth, or theming.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>HOC is a function that returns a new component.</li>
                    <li>It helps in reusing logic across multiple components.</li>
                    <li>Commonly used for logging, authentication, theming, and data fetching.</li>
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

export default ReactHOC;
