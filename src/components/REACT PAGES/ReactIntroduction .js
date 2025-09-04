import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactIntroduction = () => {
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
    <li><a href="/">React Forms Submit</a></li>
    <li><a href="/">React Textarea</a></li>
    <li><a href="/">React Select</a></li>
    <li><a href="/">React Multiple Inputs</a></li>
    <li><a href="/">React Checkbox</a></li>
    <li><a href="/">React Radio</a></li>
    <li><a href="/">React Portals</a></li>
    <li><a href="/">React Suspense</a></li>
    <li><a href="/">React CSS Styling</a></li>
    <li><a href="/">React CSS Modules</a></li>
    <li><a href="/">React CSS-in-JS</a></li>
    <li><a href="/">React Router</a></li>
    <li><a href="/">React Transitions</a></li>
    <li><a href="/">React Forward Ref</a></li>
    <li><a href="/">React HOC</a></li>
    <li><a href="/">React Sass</a></li>
  </ul>

  <h5 className="fw-bold">React Hooks</h5>
  <ul className="list-unstyled">
    <li><a href="/">What is Hooks?</a></li>
    <li><a href="/">React useState</a></li>
    <li><a href="/">React useEffect</a></li>
    <li><a href="/">React useContext</a></li>
    <li><a href="/">React useRef</a></li>
    <li><a href="/">React useReducer</a></li>
    <li><a href="/">React useCallback</a></li>
    <li><a href="/">React useMemo</a></li>
    <li><a href="/">React Custom Hooks</a></li>
  </ul>
</div>

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React Introduction</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="react">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactgetstarted">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React</b> is one of the most popular JavaScript libraries for building modern user interfaces.  
                It was created by <b>Facebook</b> in 2013 and is now maintained by Meta and a large developer community.
              </p>

              <h3>Why React?</h3>
              <ul>
                <li>Component-based: Build reusable UI pieces.</li>
                <li>Fast rendering with Virtual DOM.</li>
                <li>JSX syntax makes UI code more intuitive.</li>
                <li>Large ecosystem and community support.</li>
              </ul>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: React Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

function Greeting() {
  return <h2>Hello from React!</h2>;
}

export default Greeting;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Features of React</h3>
              <ul>
                <li>Declarative: Describe what you want, React takes care of updates.</li>
                <li>Unidirectional data flow: Data flows one way, making apps predictable.</li>
                <li>Cross-platform: React Native allows building mobile apps.</li>
              </ul>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

const App = () => {
  const user = "Afraj";
  return <h2>Welcome, {user}!</h2>;
};

export default App;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>React is a JavaScript library for building UIs.</li>
                    <li>Created by Facebook (Meta).</li>
                    <li>Uses components, JSX, and virtual DOM for efficiency.</li>
                    <li>Great for building single-page applications (SPAs).</li>
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

export default ReactIntroduction;
