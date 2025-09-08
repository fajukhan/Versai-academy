import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactTransitions = () => {
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
