import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactSuspense = () => {
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
              <h1>React Suspense</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactportal">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactcssstyle">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React Suspense</b> allows you to wait ("suspend") rendering of a component until some condition is met, usually for <b>lazy loading</b> or <b>data fetching</b>.  
                It lets you show a fallback (like a loading spinner) while waiting.
              </p>

              <h3>1. Basic Suspense Example</h3>
              <p>
                Use <code>React.Suspense</code> with a <code>fallback</code> to wrap components that might take time to load.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Suspense with Lazy Loading</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;

// LazyComponent.js
export default function LazyComponent() {
  return <h2>I was loaded lazily!</h2>;
}`}
                  </pre>
                  <p><b>Output:</b> "Loading..." will show until <code>LazyComponent</code> is loaded.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Multiple Lazy Components</h3>
              <p>
                You can wrap multiple components inside one <code>Suspense</code>.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Lazy Components</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React, { Suspense, lazy } from "react";

const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading parts of the app...</p>}>
        <Header />
        <h1>Main App Content</h1>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> "Loading parts of the app..." shows until both components are ready.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Suspense with Data Fetching (Experimental)</h3>
              <p>
                In React 18+, Suspense can be used for <b>data fetching</b> with libraries like Relay or React Query.  
                This feature is still evolving, but the concept is to "suspend" rendering until the data is ready.
              </p>

              <h3>Key Points</h3>
              <ul>
                <li>Suspense works with <b>lazy-loaded components</b>.</li>
                <li>Use <code>fallback</code> prop to show a loading UI.</li>
                <li>Helps improve user experience during loading states.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><b>Suspense</b> lets you wait for components to load.</li>
                    <li>Commonly used with <code>React.lazy()</code>.</li>
                    <li>Shows fallback UI while waiting.</li>
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

export default ReactSuspense;
