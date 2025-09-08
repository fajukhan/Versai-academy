import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactJSXExpressions = () => {
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
    <li><a href="/">React Props Children</a></li>
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
    <li><a href="/">React Transitions</a></li>
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
              <h1>React JSX Expressions</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactjsx">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactjsxattributes">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, you can use <b>JavaScript expressions</b> inside JSX by wrapping them in curly braces <code>{`{ }`}</code>.  
                This allows dynamic content such as variables, function calls, calculations, and conditional expressions to be embedded directly into the UI.
              </p>

              {/* Example 1: Variable in JSX */}
              <h3>1. Embedding Variables</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">JSX Variable Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const name = "Alice";
const element = <h2>Hello, {name}!</h2>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Hello, Alice!</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Function Call in JSX */}
              <h3>2. Using Functions in JSX</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Function inside JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function greet(user) {
  return user ? "Hello, " + user : "Hello, Guest";
}
const element = <h2>{greet("Bob")}</h2>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Hello, Bob</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Arithmetic in JSX */}
              <h3>3. Performing Calculations</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Math in JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const a = 5;
const b = 10;
const element = <p>Sum: {a + b}</p>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Sum: 15</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Conditional Expressions */}
              <h3>4. Conditional Expressions</h3>
              <p>You can use the ternary operator <code>condition ? true : false</code> inside JSX.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Conditional JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const isLoggedIn = true;
const element = <h2>{isLoggedIn ? "Welcome back!" : "Please log in."}</h2>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output (if isLoggedIn is true):</b></p>
                  <pre className="bg-light p-3 rounded">Welcome back!</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: JSX with Arrays */}
              <h3>5. Rendering Arrays</h3>
              <p>You can embed arrays of elements inside JSX.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Array Mapping in JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const items = ["Apple", "Banana", "Cherry"];
const element = (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Apple{"\n"}Banana{"\n"}Cherry
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
                    <li>JSX expressions are wrapped in <code>{`{ }`}</code>.</li>
                    <li>You can embed variables, function calls, and calculations.</li>
                    <li>Conditional rendering can be done with the ternary operator.</li>
                    <li>Arrays can be mapped directly into JSX for rendering lists.</li>
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

export default ReactJSXExpressions;
