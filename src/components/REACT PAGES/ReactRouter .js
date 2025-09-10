import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactRouter = () => {
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
