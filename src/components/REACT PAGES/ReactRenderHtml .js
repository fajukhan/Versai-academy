import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactRenderHtml = () => {
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
              <h1>React Render HTML</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactfirstapp">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactupgrade">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                React uses <b>JSX</b> (JavaScript XML) to render HTML.  
                JSX allows us to write HTML-like code inside JavaScript, which React converts into real DOM elements.
              </p>

              <h3>1. Rendering HTML in React</h3>
              <p>We can write HTML directly inside React components:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Render HTML</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is rendered using JSX.</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Expressions in JSX</h3>
              <p>You can embed JavaScript expressions inside curly braces <code>{`{ }`}</code>:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Expressions in JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const name = "React";
  const year = 2025;
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Current year is {year}.</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
{`Hello, React!
Current year is 2025`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Attributes in JSX</h3>
              <p>In JSX, use <code>className</code> instead of <code>class</code>, and <code>htmlFor</code> instead of <code>for</code>.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Attributes in JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  return (
    <div>
      <h1 className="title">Styled Heading</h1>
      <label htmlFor="inputBox">Enter Name:</label>
      <input id="inputBox" type="text" />
    </div>
  );
}

export default App;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Rendering Multiple Elements</h3>
              <p>You must wrap multiple elements inside one parent element (like <code>&lt;div&gt;</code> or <code>&lt;&gt;&lt;/&gt;</code> fragment).</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Elements</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  return (
    <>
      <h2>React Render Example</h2>
      <p>This is a paragraph.</p>
    </>
  );
}

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
                    <li>React renders HTML using <b>JSX</b>.</li>
                    <li>JSX allows embedding JavaScript expressions with <code>{`{ }`}</code>.</li>
                    <li>Use <code>className</code> instead of <code>class</code> and <code>htmlFor</code> instead of <code>for</code>.</li>
                    <li>All elements must be wrapped in a single parent element.</li>
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

export default ReactRenderHtml;
