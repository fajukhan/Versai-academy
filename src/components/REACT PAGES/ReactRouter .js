import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactRouter = () => {
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
              <h1>React Router</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactcssinjs">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reacttransitions">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React Router</b> is a standard library for routing in React applications.  
                It enables navigation between different components, allows you to build single-page applications,  
                and keeps the UI in sync with the URL.
              </p>

              <h3>1. Installation</h3>
              <p>To use React Router, install it via npm:</p>
              <pre className="bg-light p-3 rounded">npm install react-router-dom</pre>

              <h3>2. Basic Setup</h3>
              <p>Wrap your app with <code>BrowserRouter</code> and define routes using <code>Route</code> and <code>Routes</code>.</p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Basic Routing</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Navigation bar with links to Home, About, and Contact pages.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Using <code>useNavigate</code> Hook</h3>
              <p>Navigate programmatically with the <code>useNavigate</code> hook.</p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: useNavigate</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Clicking the button on Home navigates to About.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Nested Routes</h3>
              <p>You can define routes inside other routes.</p>
              <pre className="bg-light p-3 rounded">
{`<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>`}
              </pre>

              <h3>5. Advantages of React Router</h3>
              <ul>
                <li>Declarative routing system.</li>
                <li>Supports dynamic routing.</li>
                <li>Works with single-page applications.</li>
                <li>Programmatic navigation with hooks.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>React Router allows navigation between components without reloading the page.</li>
                    <li>It uses <code>BrowserRouter</code>, <code>Routes</code>, and <code>Route</code> components.</li>
                    <li>Supports nested routes and programmatic navigation.</li>
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

export default ReactRouter;
