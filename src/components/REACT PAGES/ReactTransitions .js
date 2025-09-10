import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactTransitions = () => {
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
              <h1>React Transitions</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactrouter">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactforwardref">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React Transitions</b> are used to animate elements when they enter, update, or leave the DOM.  
                It provides smooth effects for better user experience. You can use <code>react-transition-group</code> or libraries like <code>Framer Motion</code>.
              </p>

              <h3>1. Install React Transition Group</h3>
              <pre className="bg-light p-3 rounded">npm install react-transition-group</pre>

              <h3>2. Fade In / Fade Out Example</h3>
              <pre className="bg-light p-3 rounded">{`import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Box</button>
      <CSSTransition
        in={show}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="box">Hello, I fade in and out!</div>
      </CSSTransition>
    </div>
  );
}

export default App;`}</pre>

              <button className="try-btn mt-3">Try it Yourself »</button>

              <h3>3. CSS for Transition</h3>
              <pre className="bg-light p-3 rounded">{`.fade-enter { opacity: 0; }
.fade-enter-active { opacity: 1; transition: opacity 300ms; }
.fade-exit { opacity: 1; }
.fade-exit-active { opacity: 0; transition: opacity 300ms; }
.box { width: 200px; height: 100px; background: lightblue; text-align: center; padding: 20px; margin-top: 20px; }`}</pre>

              <h3>4. Using Framer Motion</h3>
              <pre className="bg-light p-3 rounded">{`import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      Smooth Fade with Framer Motion
    </motion.div>
  );
}

export default App;`}</pre>

              <button className="try-btn mt-3">Try it Yourself »</button>

      
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReactTransitions;
