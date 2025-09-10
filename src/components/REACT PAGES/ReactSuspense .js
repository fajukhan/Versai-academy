import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactSuspense = () => {
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
