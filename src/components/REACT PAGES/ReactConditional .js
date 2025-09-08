import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactConditional = () => {
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
              <h1>React Conditional Rendering</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactevents">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactlist">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, conditional rendering works the same way as conditions in JavaScript.  
                You can use <b>if statements</b>, <b>ternary operators</b>, or <b>logical &&</b> to render content based on conditions.
              </p>

              <h3>1. Using if Statement</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Using if statement</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  } else {
    return <h2>Please log in.</h2>;
  }
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Shows "Welcome back!" because <code>isLoggedIn</code> is true.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Using Ternary Operator</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Ternary Operator</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Shows "Please log in." because <code>isLoggedIn</code> is false.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Using Logical && Operator</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Logical AND (&&)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const messages = ["New Notification", "Friend Request"];

  return (
    <div>
      <h2>Dashboard</h2>
      {messages.length > 0 && <p>You have {messages.length} new messages.</p>}
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Shows "You have 2 new messages." only if there are messages.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Conditional Rendering with Variables</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Storing JSX in a variable</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const isLoggedIn = true;
  let message;

  if (isLoggedIn) {
    message = <h2>Welcome back!</h2>;
  } else {
    message = <h2>Please log in.</h2>;
  }

  return <div>{message}</div>;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Shows "Welcome back!" because <code>isLoggedIn</code> is true.</p>
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
                    <li>Conditional rendering lets you control what UI to show.</li>
                    <li>You can use <code>if/else</code>, <code>ternary operator</code>, or <code>logical &&</code>.</li>
                    <li>JSX can be stored in variables and rendered dynamically.</li>
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

export default ReactConditional;
