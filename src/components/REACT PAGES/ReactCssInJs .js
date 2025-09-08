import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactCssInJs = () => {
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
              <h1>React CSS-in-JS</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactcssmodules">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactrouter">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>CSS-in-JS</b> is a styling technique where CSS is written directly inside JavaScript files.  
                It allows you to define styles as JavaScript objects and apply them directly to components.  
                Popular libraries like <b>styled-components</b> and <b>Emotion</b> use this concept.
              </p>

              <h3>1. Inline CSS-in-JS (Basic Example)</h3>
              <p>You can define styles as objects and apply them using the <code>style</code> attribute.</p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Inline CSS-in-JS</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const headingStyle = {
    color: "blue",
    textAlign: "center",
    fontSize: "24px"
  };

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    borderRadius: "5px"
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello CSS-in-JS!</h1>
      <button style={buttonStyle}>Click Me</button>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Blue heading and a styled green button.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Dynamic Styling with CSS-in-JS</h3>
              <p>Styles can change dynamically based on state or props.</p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Dynamic CSS-in-JS</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = {
    backgroundColor: isActive ? "red" : "blue",
    color: "white",
    padding: "12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px"
  };

  return (
    <div>
      <button 
        style={buttonStyle} 
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "Active" : "Inactive"}
      </button>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Button color changes from blue to red when clicked.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Advantages of CSS-in-JS</h3>
              <ul>
                <li>Scoped styles (no global conflicts).</li>
                <li>Dynamic styling based on props or state.</li>
                <li>Styles live close to components (better maintainability).</li>
                <li>No need for separate CSS files.</li>
              </ul>

              <h3>4. Popular CSS-in-JS Libraries</h3>
              <ul>
                <li><b>styled-components</b></li>
                <li><b>Emotion</b></li>
                <li><b>JSS</b></li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>CSS-in-JS allows styling within JavaScript files.</li>
                    <li>Supports <b>dynamic</b> styles using state/props.</li>
                    <li>Prevents global style conflicts.</li>
                    <li>Popular in modern React apps with libraries like styled-components.</li>
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

export default ReactCssInJs;
