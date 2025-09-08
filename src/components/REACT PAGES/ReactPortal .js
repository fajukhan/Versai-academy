import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactPortal = () => {
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
              <h1>React Portals</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactradio">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactsuspense">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Portals</b> provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.  
                They are useful for UI elements like modals, tooltips, or dialogs that should not be constrained by parent styles.
              </p>

              <h3>1. Creating a Portal</h3>
              <p>
                Portals are created using <code>ReactDOM.createPortal(child, container)</code>.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Basic Portal</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("modal-root") // separate DOM node
  );
}

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Modal>
        <h2>This is inside a Portal</h2>
      </Modal>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Note:</b> Ensure you have a <code>&lt;div id="modal-root"&gt;&lt;/div&gt;</code> in your <code>public/index.html</code>.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Modal with State Control</h3>
              <p>
                A common use case is to open and close a modal using a portal.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Modal with Open/Close</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal" style={{ background: "#000000aa", padding: "20px" }}>
      <h2>This is a modal!</h2>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Portal Example</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Clicking "Open Modal" renders modal outside the parent div.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Why Use Portals?</h3>
              <ul>
                <li>Modals, dialogs, tooltips that should escape parent styles (like overflow:hidden).</li>
                <li>Rendering content at different levels of the DOM without breaking component structure.</li>
                <li>Improved accessibility and UI layering.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>ReactDOM.createPortal</code> to render content outside parent hierarchy.</li>
                    <li>Commonly used for modals, dialogs, and tooltips.</li>
                    <li>Requires a target DOM node (like <code>div#modal-root</code>).</li>
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

export default ReactPortal;
