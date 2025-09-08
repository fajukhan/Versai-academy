import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactCssStyle = () => {
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
              <h1>React CSS Styling</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactsuspense">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactcssmodules">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, you can style components in multiple ways:  
                using <b>inline CSS</b>, <b>CSS stylesheets</b>, <b>CSS Modules</b>, or even <b>styled-components</b>.  
                Let’s explore each with examples.
              </p>

              <h3>1. Inline Styling</h3>
              <p>
                In React, inline styles are written as a JavaScript object.  
                The property names use <b>camelCase</b> instead of kebab-case.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Inline CSS</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const headingStyle = {
    color: "blue",
    textAlign: "center",
    fontSize: "24px"
  };

  return <h1 style={headingStyle}>Hello, styled with inline CSS!</h1>;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A blue, centered heading with custom font size.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. External CSS Stylesheet</h3>
              <p>
                You can create a separate <code>.css</code> file and import it into your component.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: External CSS File</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`// App.css
h1 {
  color: green;
  text-align: center;
}

// App.js
import "./App.css";

function App() {
  return <h1>Hello, styled with external CSS!</h1>;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A green, centered heading styled from <code>App.css</code>.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. CSS Modules</h3>
              <p>
                CSS Modules provide <b>scoped styling</b>, meaning styles are applied only to the component where they are imported.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: CSS Modules</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`// App.module.css
.title {
  color: red;
  font-weight: bold;
}

// App.js
import styles from "./App.module.css";

function App() {
  return <h1 className={styles.title}>Hello, styled with CSS Modules!</h1>;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A bold red heading styled only inside this component.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Styled-Components (Optional)</h3>
              <p>
                Styled-components allow you to write CSS inside your JavaScript using a library.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Styled Components</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import styled from "styled-components";

const Title = styled.h1\`
  color: purple;
  text-align: center;
\`;

function App() {
  return <Title>Hello, styled with styled-components!</Title>;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A purple centered heading styled using <code>styled-components</code>.</p>
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
                    <li><b>Inline CSS:</b> Quick styles with camelCase object notation.</li>
                    <li><b>External CSS:</b> Traditional CSS file for global styles.</li>
                    <li><b>CSS Modules:</b> Scoped styling for specific components.</li>
                    <li><b>Styled-components:</b> CSS-in-JS library for dynamic styling.</li>
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

export default ReactCssStyle;
