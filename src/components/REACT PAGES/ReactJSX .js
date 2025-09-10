import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactJSXIntro = () => {
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
              <h1>React JSX Introduction</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactes6">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactjsxexpressions">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                JSX stands for <b>JavaScript XML</b>.  
                It allows us to write HTML directly within JavaScript.  
                JSX makes code easier to write and understand in React applications.
              </p>

              {/* Example 1: Basic JSX */}
              <h3>1. Basic JSX Example</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">JSX Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const element = <h1>Hello, JSX!</h1>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, JSX!`}</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Embedding Expressions */}
              <h3>2. Embedding Expressions in JSX</h3>
              <p>You can embed any JavaScript expression inside JSX using curly braces <code>{`{ }`}</code>.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Embedding expressions</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const user = "Alice";
const element = <h2>Hello, {user}!</h2>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello, Alice!`}</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: JSX with Attributes */}
              <h3>3. JSX with Attributes</h3>
              <p>Attributes in JSX are written using <code>camelCase</code> notation instead of lowercase.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">JSX Attributes</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const element = <img src="logo.png" alt="Logo" className="logo" />;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b> An image with class <code>logo</code>.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: JSX with Children */}
              <h3>4. JSX with Children</h3>
              <p>JSX tags can contain children elements.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Nested JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const element = (
  <div>
    <h1>Hello World</h1>
    <p>Welcome to JSX</p>
  </div>
);
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">{`Hello World
Welcome to JSX`}</pre>
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
                    <li>JSX allows us to write HTML inside JavaScript.</li>
                    <li>JavaScript expressions can be embedded with <code>{`{ }`}</code>.</li>
                    <li>Attributes use <code>camelCase</code> naming.</li>
                    <li>JSX elements can contain children elements.</li>
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

export default ReactJSXIntro;
