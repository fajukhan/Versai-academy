import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactPortal = () => {
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
