import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactCssModules = () => {
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
              <h1>React CSS Modules</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactcssstyle">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactcssinjs">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>CSS Modules</b> in React allow you to write CSS in a way that is scoped to the component.  
                This prevents <b>class name conflicts</b> and makes your styles modular and reusable.
              </p>

              <h3>1. Creating a CSS Module</h3>
              <p>
                CSS module files are named with the extension <code>.module.css</code>.  
                Example: <code>App.module.css</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: CSS Module File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`/* App.module.css */
.title {
  color: blue;
  text-align: center;
  font-size: 22px;
}

.button {
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
}`}</pre>
                </div>
              </div>

              <h3>2. Importing and Using a CSS Module</h3>
              <p>
                Import the CSS module into your React component and use it with <code>className</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Using CSS Module</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello, styled with CSS Modules!</h1>
      <button className={styles.button}>Click Me</button>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A blue heading and a styled green button.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Multiple Classes</h3>
              <p>
                You can apply multiple classes from a CSS module using template literals or string concatenation.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Classes</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import styles from "./App.module.css";

function App() {
  return (
    <h1 className={\`\${styles.title} \${styles.highlight}\`}>
      Hello with multiple classes!
    </h1>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Heading styled with both <code>title</code> and <code>highlight</code> classes.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Scoped and Unique Class Names</h3>
              <p>
                CSS Modules automatically generate unique class names at build time,  
                preventing accidental conflicts between components.
              </p>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>CSS Modules are named with <code>.module.css</code> extension.</li>
                    <li>They provide <b>scoped styles</b> to avoid global conflicts.</li>
                    <li>Imported as objects, used with <code>className</code>.</li>
                    <li>Support multiple classes and dynamic styling.</li>
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

export default ReactCssModules;
