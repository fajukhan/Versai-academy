import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactHOC = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
                                                                   {/* Sidebar (Left - col-2) */}
 <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
  <h5 className="fw-bold mt-4">React Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="react">React Home</a></li>
    <li><a href="reactintroduction">React Intro</a></li>
    <li><a href="reactgetstarted">React Get Started</a></li>
    <li><a href="reactfirstapp">React First App</a></li>
    <li><a href="reactrenderhtml">React Render HTML</a></li>
    <li><a href="reactupgrade">React Upgrade</a></li>
    <li><a href="reactes6">React ES6</a></li>
    <li><a href="reactjsx">React JSX Intro</a></li>
    <li><a href="reactjsxexpressions">React JSX Expressions</a></li>
    <li><a href="reactjsxattributes">React JSX Attributes</a></li>
    <li><a href="reactjsxifstatment">React JSX If Statements</a></li>
    <li><a href="reactcomponents">React Components</a></li>
    <li><a href="reactclass">React Class</a></li>
    <li><a href="reactprops">React Props</a></li>
    <li><a href="reactpropsdestructuring">React Props Destructuring</a></li>
    <li><a href="reactpropschildren">React Props Children</a></li>
    <li><a href="reactevents">React Events</a></li>
    <li><a href="reactconditional">React Conditionals</a></li>
    <li><a href="reactlist">React Lists</a></li>
    <li><a href="reactforms">React Forms</a></li>
    <li><a href="reactformsubmit">React Forms Submit</a></li>
    <li><a href="reacttextarea">React Textarea</a></li>
    <li><a href="reactselect">React Select</a></li>
    <li><a href="reactmultipleinput">React Multiple Inputs</a></li>
    <li><a href="reactcheckbox">React Checkbox</a></li>
    <li><a href="reactradio">React Radio</a></li>
    <li><a href="reactportal">React Portals</a></li>
    <li><a href="reactsuspense">React Suspense</a></li>
    <li><a href="reactcssstyle">React CSS Styling</a></li>
    <li><a href="reactcssmodules">React CSS Modules</a></li>
    <li><a href="reactcssinjs">React CSS-in-JS</a></li>
    <li><a href="reactrouter">React Router</a></li>
    <li><a href="reacttransitions">React Transitions</a></li>
    <li><a href="reactforwardref">React Forward Ref</a></li>
    <li><a href="reacthoc">React HOC</a></li>
    <li><a href="reactsass">React Sass</a></li>
  </ul>

  <h5 className="fw-bold">React Hooks</h5>
  <ul className="list-unstyled">
    <li><a href="reacthooks">What is Hooks?</a></li>
    <li><a href="reactusestate">React useState</a></li>
    <li><a href="reactuseeffect">React useEffect</a></li>
    <li><a href="reactusecontext">React useContext</a></li>
    <li><a href="reactuseref">React useRef</a></li>
    <li><a href="reactusereducer">React useReducer</a></li>
    <li><a href="reactusecallback">React useCallback</a></li>
    <li><a href="reactusememo">React useMemo</a></li>
    <li><a href="reactcustomhooks">React Custom Hooks</a></li>
  </ul>
</div>

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
