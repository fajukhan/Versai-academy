import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactComponents = () => {
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
              <h1>React Components</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactjsxifstatment">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactclass">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Components are the building blocks of React applications.  
                They allow you to split the UI into independent, reusable pieces, and work like JavaScript functions.  
                A React component must return some JSX (UI).
              </p>

              <h3>Types of Components:</h3>
              <ul>
                <li><b>Functional Components</b> – simple functions that return JSX.</li>
                <li><b>Class Components</b> – ES6 classes that extend <code>React.Component</code>.</li>
              </ul>

              {/* Example 1: Functional Component */}
              <h3>1. Functional Component</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Functional Component Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Welcome() {
  return <h2>Hello, I am a Functional Component!</h2>;
}

export default Welcome;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello, I am a Functional Component!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Class Component */}
              <h3>2. Class Component</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Class Component Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

class Welcome extends React.Component {
  render() {
    return <h2>Hello, I am a Class Component!</h2>;
  }
}

export default Welcome;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello, I am a Class Component!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Using Components */}
              <h3>3. Using Components</h3>
              <p>
                You can use components inside other components, just like HTML elements.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Using Component Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Header() {
  return <h1>Welcome to My Website</h1>;
}

function Footer() {
  return <p>© 2025 MyWebsite</p>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is the main content.</p>
      <Footer />
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Welcome to My Website  
This is the main content.  
© 2025 MyWebsite
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
                    <li>Components are reusable UI pieces in React.</li>
                    <li>They can be <b>functional</b> or <b>class-based</b>.</li>
                    <li>Each component must return JSX.</li>
                    <li>Components can be nested inside other components.</li>
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

export default ReactComponents;
