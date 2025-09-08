import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactFirstApp = () => {
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
              <h1>React First App</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactgetstarted">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactrenderhtml">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Let’s build our very first React application!  
                We will start by creating a new project, running it, and writing a simple component.
              </p>

              <h3>1. Create a New React Project</h3>
              <p>We’ll use <b>Create React App</b> to generate a new project:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Command</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npx create-react-app my-first-app
cd my-first-app
npm start`}
                  </pre>
                  <p><b>Output:</b> A new React project is created and runs at <code>http://localhost:3000</code>.</p>
                </div>
              </div>

              <h3>2. Project Structure</h3>
              <p>After creating the app, you’ll see the following important files:</p>
              <ul>
                <li><code>src/index.js</code> → Entry point of the app</li>
                <li><code>src/App.js</code> → Main component</li>
                <li><code>public/index.html</code> → HTML template</li>
              </ul>

              <h3>3. First Edit in App.js</h3>
              <p>Let’s open <code>src/App.js</code> and change the code:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: App.js</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>My first React app is running!</p>
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

              <h3>4. index.js File</h3>
              <p><code>index.js</code> renders the <code>App</code> component inside <code>root</code> element:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: index.js</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);`}
                  </pre>
                </div>
              </div>

              <h3>5. Run the Application</h3>
              <p>
                Save your changes and the app will reload automatically in your browser.  
                You should now see:  
                <code>Hello, World! My first React app is running!</code>
              </p>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>create-react-app</code> to create a new project.</li>
                    <li>React apps have an entry file (<code>index.js</code>) and components (like <code>App.js</code>).</li>
                    <li>Components return JSX which looks like HTML.</li>
                    <li>Running <code>npm start</code> launches the dev server.</li>
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

export default ReactFirstApp;
