import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactUpgrade = () => {
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
              <h1>React Upgrade</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactes6">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactes6">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                React is actively developed, and new versions are released frequently with bug fixes, performance improvements, and new features.  
                Keeping your React project updated ensures better security, stability, and compatibility with modern tools.
              </p>

              <h3>1. Check Current React Version</h3>
              <p>You can check which version of React you are using by running:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">{`npm list react`}</pre>
                  <p>or inside your project’s <code>package.json</code> file.</p>
                </div>
              </div>

              <h3>2. Upgrade React to Latest Version</h3>
              <p>Run the following commands to upgrade both <b>react</b> and <b>react-dom</b>:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npm install react@latest react-dom@latest`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Upgrade React Scripts (for CRA apps)</h3>
              <p>If you are using <b>Create React App</b>, also update <code>react-scripts</code>:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npm install react-scripts@latest`}
                  </pre>
                </div>
              </div>

              <h3>4. Using npx to Create a Fresh App</h3>
              <p>
                Sometimes the easiest way to upgrade is to create a new app with the latest React version and move your code into it:
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npx create-react-app my-new-app`}
                  </pre>
                  <p>Then copy your <code>src</code> files into the new project.</p>
                </div>
              </div>

              <h3>5. Checking Out Release Notes</h3>
              <p>
                Before upgrading, always check React’s official <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">Release Notes</a> to know about breaking changes and migration steps.
              </p>

              <h3>6. Example: Updating Dependencies</h3>
              <p>Below is how a <code>package.json</code> looks after upgrading React:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "5.0.1"
}`}
                  </pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Check current React version with <code>npm list react</code>.</li>
                    <li>Upgrade using <code>npm install react@latest react-dom@latest</code>.</li>
                    <li>Update <code>react-scripts</code> if using CRA.</li>
                    <li>Sometimes creating a new app with <code>npx create-react-app</code> is easier.</li>
                    <li>Always read official React release notes before upgrading.</li>
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

export default ReactUpgrade;
