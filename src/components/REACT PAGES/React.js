
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const React = () => {


 
  return (
    <>
     <Navbar />
    {/* Section-1 */}
<section  className="p-0">
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


      {/* Main Content (Middle - col-10) */}
      {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React Home</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactintro">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactintroduction">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React</b> is a JavaScript library developed by Facebook for building fast, 
                interactive, and reusable user interfaces, especially single-page applications (SPAs).
              </p>

              <p>
                It uses a <b>component-based architecture</b>, where the UI is divided into small, reusable pieces 
                called <b>components</b>. React also uses a <b>virtual DOM</b> to efficiently update and render changes.
              </p>

              {/* Example 1: Basic React Component */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Basic React Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

function Welcome() {
  return <h2>Hello, React!</h2>;
}

export default Welcome;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: JSX */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: JSX in React</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

const App = () => {
  const name = "Afraj";
  return <h2>Hello {name}, welcome to React!</h2>;
};

export default App;`}
                  </pre>
                  <p>
                    JSX allows writing HTML-like syntax directly inside JavaScript. 
                    It makes the UI code more readable and expressive.
                  </p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Rendering a Component */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Rendering a Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";

ReactDOM.render(<Welcome />, document.getElementById("root"));`}
                  </pre>
                  <p>
                    Here, the <b>Welcome</b> component is rendered inside the <code>div</code> 
                    with id <code>root</code> in <b>index.html</b>.
                  </p>
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
                    <li>Uses components to create reusable UI pieces.</li>
                    <li>JSX allows HTML-like syntax inside JavaScript.</li>
                    <li>ReactDOM is used to render components in the DOM.</li>
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

export default React;
